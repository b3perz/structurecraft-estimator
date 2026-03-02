// ============================================
// StructureCraft Estimator - Claude API Proxy
// Deploy to Cloudflare Workers
// ============================================
//
// Setup:
// 1. Create a Cloudflare Workers account at https://workers.cloudflare.com
// 2. Create a new Worker and paste this code
// 3. Add your ANTHROPIC_API_KEY as an environment secret:
//    wrangler secret put ANTHROPIC_API_KEY
// 4. Update CLAUDE_PROXY_URL in app.js with your worker URL
// 5. Update ALLOWED_ORIGINS below with your domain
//
// The API key is stored securely as a Cloudflare secret and never
// exposed to the client browser.

const ALLOWED_ORIGINS = [
  'https://b3perz.github.io',
  'http://localhost:8080',
  'http://localhost:3000',
  'http://127.0.0.1:8080',
];

const ALLOWED_MODELS = [
  'claude-opus-4-6',
  'claude-sonnet-4-6',
  'claude-haiku-4-5-20251001',
];

const MAX_TOKENS_LIMIT = 16000;
const THINKING_BUDGET_LIMIT = 10000;

export default {
  async fetch(request, env) {
    // CORS preflight
    if (request.method === 'OPTIONS') {
      return handleCORS(request);
    }

    if (request.method !== 'POST') {
      return new Response('Method not allowed', { status: 405 });
    }

    // Validate origin
    const origin = request.headers.get('Origin') || '';
    if (!ALLOWED_ORIGINS.some(o => origin.startsWith(o))) {
      return new Response('Forbidden', { status: 403 });
    }

    // Rate limiting (basic - use Cloudflare's built-in for production)
    const clientIP = request.headers.get('CF-Connecting-IP') || 'unknown';

    try {
      const body = await request.json();

      // Validate model
      if (!body.model || !ALLOWED_MODELS.includes(body.model)) {
        return jsonResponse({ error: 'Invalid model' }, 400, origin);
      }

      // Cap token limits
      if (body.max_tokens > MAX_TOKENS_LIMIT) {
        body.max_tokens = MAX_TOKENS_LIMIT;
      }
      if (body.thinking && body.thinking.budget_tokens > THINKING_BUDGET_LIMIT) {
        body.thinking.budget_tokens = THINKING_BUDGET_LIMIT;
      }

      // Forward to Anthropic
      const anthropicResponse = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': env.ANTHROPIC_API_KEY,
          'anthropic-version': '2023-06-01',
        },
        body: JSON.stringify(body),
      });

      const responseData = await anthropicResponse.text();

      return new Response(responseData, {
        status: anthropicResponse.status,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': origin,
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        },
      });
    } catch (err) {
      return jsonResponse({ error: 'Proxy error: ' + err.message }, 500, origin);
    }
  },
};

function handleCORS(request) {
  const origin = request.headers.get('Origin') || '';
  const allowed = ALLOWED_ORIGINS.some(o => origin.startsWith(o));

  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': allowed ? origin : '',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Max-Age': '86400',
    },
  });
}

function jsonResponse(data, status, origin) {
  return new Response(JSON.stringify(data), {
    status: status,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': origin || '',
    },
  });
}
