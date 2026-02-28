// ============================================
// STRUCTURECRAFT ESTIMATOR PRO v2.0
// Complete Mass Timber Estimating Platform
// ============================================

// ---- SECTION 1: ICONS ----
const ICONS = {
  input: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6"/><path d="M12 18v-6"/><path d="M9 15l3 3 3-3"/></svg>',
  output: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M10 9H8"/></svg>',
  past: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>',
  connector: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 7h3a5 5 0 015 5 5 5 0 01-5 5h-3m-6 0H6a5 5 0 01-5-5 5 5 0 015-5h3"/><path d="M8 12h8"/></svg>',
  pricing: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 1v22M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>',
  analytics: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 20V10M12 20V4M6 20v-6"/></svg>',
  qa: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>',
  settings: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>',
  file: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6"/></svg>',
  upload: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><path d="M17 8l-5-5-5 5"/><path d="M12 3v12"/></svg>',
  trash: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"/></svg>',
  plus: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14"/></svg>',
  check: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg>',
  chevDown: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>',
  grip: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="5" r="1"/><circle cx="9" cy="12" r="1"/><circle cx="9" cy="19" r="1"/><circle cx="15" cy="5" r="1"/><circle cx="15" cy="12" r="1"/><circle cx="15" cy="19" r="1"/></svg>',
  search: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>',
  building: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 21h18M9 8h1M9 12h1M9 16h1M14 8h1M14 12h1M14 16h1M5 21V5a2 2 0 012-2h10a2 2 0 012 2v16"/></svg>',
  download: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><path d="M7 10l5 5 5-5"/><path d="M12 15V3"/></svg>',
  copy: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>',
  link: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/></svg>',
  warning: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><path d="M12 9v4M12 17h.01"/></svg>',
  info: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>',
  edit: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>',
  arrowUp: '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 19V5M5 12l7-7 7 7"/></svg>',
  arrowDown: '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M19 12l-7 7-7-7"/></svg>',
  filter: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z"/></svg>',
  footbridge: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 18h20"/><path d="M4 18v-4"/><path d="M20 18v-4"/><path d="M4 14h16"/><path d="M4 14c0-4 4-8 8-8s8 4 8 8"/></svg>',
  calendar: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>',
  palette: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="13.5" cy="6.5" r="2"/><circle cx="17.5" cy="10.5" r="2"/><circle cx="8.5" cy="7.5" r="2"/><circle cx="6.5" cy="12" r="2"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.93 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.04-.24-.3-.39-.65-.39-1.04 0-.83.67-1.5 1.5-1.5H16c3.31 0 6-2.69 6-6 0-5.52-4.48-9.96-10-9.96z"/></svg>',
  eorBuild: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 21h18"/><path d="M5 21V7l7-4 7 4v14"/><path d="M9 21v-4h6v4"/><path d="M9 9h1M14 9h1M9 13h1M14 13h1"/></svg>',
  delegatedDesign: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M2 20h20"/><path d="M4 20V8l4-4h8l4 4v12"/><path d="M9 20v-6h6v6"/><path d="M2 8l10-6 10 6"/></svg>',
  dltSupply: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="6" width="20" height="4" rx="1"/><rect x="2" y="12" width="20" height="4" rx="1"/><rect x="2" y="18" width="20" height="4" rx="1"/><path d="M6 6V4M10 6V3M14 6V4M18 6V2"/></svg>',
  engineerSupervise: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6"/><path d="M8 13l2 2 4-4"/></svg>',
  generate: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>',
  xlsx: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6"/><path d="M8 13h2M14 13h2M8 17h2M14 17h2"/></svg>',
  location: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>',
};

// ---- SECTION 2: THEME DEFINITIONS ----
const THEMES = [
  { id: 'midnight', name: 'Midnight', preview: 'linear-gradient(135deg, #0a0e1a, #1a2035, #c8956c)' },
  { id: 'daylight', name: 'Daylight', preview: 'linear-gradient(135deg, #f5f2ed, #ffffff, #8b5e3c)' },
  { id: 'wabi-sabi', name: 'Wabi-Sabi', preview: 'linear-gradient(135deg, #1a1916, #2a2822, #8b7355)' },
  { id: 'blueprint', name: 'Blueprint', preview: 'linear-gradient(135deg, #0a1628, #142640, #4a9eff)' },
  { id: 'timber', name: 'Timber', preview: 'linear-gradient(135deg, #1a1210, #2a201a, #b87333)' },
  { id: 'arctic', name: 'Arctic', preview: 'linear-gradient(135deg, #0f1923, #1a2838, #5ba4cf)' },
  { id: 'slate', name: 'Slate', preview: 'linear-gradient(135deg, #18181b, #27272a, #a1a1aa)' },
  { id: 'forest', name: 'Forest', preview: 'linear-gradient(135deg, #0a1a0e, #162a1c, #4a8c5c)' },
  { id: 'copper', name: 'Copper', preview: 'linear-gradient(135deg, #1a1410, #2a221a, #cd7f32)' },
  { id: 'high-contrast', name: 'High Contrast', preview: 'linear-gradient(135deg, #000000, #141414, #ffcc00)' },
];

// ---- SECTION 3: STATE MANAGEMENT ----
const STATE = {
  currentPage: 'input',
  currentTheme: localStorage.getItem('sc-theme') || 'midnight',
  sidebarCollapsed: false,
  guideOpen: false,
  connectorOpen: false,
  connectedEstimateId: null,
  currentEstimate: createNewEstimate(),
  estimates: [],
  searchQuery: '',
  outputActiveTab: 'summary',
  footbridgeConfig: {
    bridgeType: 'parabolic-arch',
    spanLength: 30,
    clearWidth: 3.5,
    archRise: 0.25,
    numSpans: 1,
    projectName: '',
    client: '',
    location: '',
    loading: 'pedestrian',
    geoCondition: 'dense-soil',
    structuralMaterial: 'glulam-df',
    deckSystem: 'dlt',
    railingType: 'timber-cable',
    siteAccess: 'standard',
    coverage: 'open',
    scScope: 'prime-design-build',
  },
  footbridgeEstimate: null,
  footbridgeOutputTab: 'summary',
};

function createNewEstimate() {
  return {
    id: generateId(),
    name: '',
    client: '',
    location: '',
    projectType: 'commercial',
    deliveryModel: 'eor-build',
    scopeDescription: '',
    rfpNotes: '',
    rfiNotes: '',
    clientComms: '',
    contractorNotes: '',
    buildingArea: 0,
    numStories: 0,
    structuralSystem: 'post-beam',
    gridSpacing: '',
    floorToFloor: 12,
    timberSpecies: 'douglas-fir',
    files: { rfp: [], drawings: [], structural: [], narratives: [], other: [] },
    assumptions: getDefaultAssumptions(),
    phases: {},
    totalCost: 0,
    status: 'draft',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
}

function getDefaultAssumptions() {
  return {
    marginPercent: 15,
    contingencyPercent: 5,
    overheadPercent: 10,
    bondInsurancePercent: 2.5,
    glulamPriceBF: 4.25,
    cltPriceSF3: 26,
    cltPriceSF5: 34,
    cltPriceSF7: 44,
    dltPriceSF: 22,
    mppPriceSF: 28,
    nltPriceSF: 15,
    steelConnectionsTon: 4500,
    plywoodSF: 3.75,
    concreteToppingSF: 10,
    shippingPerBF: 0.55,
    shippingPerTruck: 4500,
    engHourlyRate: 195,
    draftHourlyRate: 115,
    shopHourlyRate: 82,
    siteCarpentrHourlyRate: 95,
    siteLaborHourlyRate: 65,
    siteSuperHourlyRate: 140,
    craneOperatorHourlyRate: 115,
    craneDailyRate: 5500,
    pmHourlyRate: 165,
    shopManHoursPerPiece: 2.5,
    escalationPercent: 3,
  };
}

function generateId() {
  return 'sc-' + Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
}

// ---- SECTION 4: DELIVERY MODELS ----
const DELIVERY_MODELS = {
  'eor-build': {
    name: 'EOR Build',
    icon: 'eorBuild',
    description: 'Engineer of Record + Full Build. StructureCraft is the EOR and handles everything: consulting, structural engineering (SD/DD/CD/CA), timber design, fabrication, shipping, and site installation.',
    phases: ['consulting', 'structural-engineering', 'timber-engineering', 'construction-engineering', 'fabrication', 'shipping', 'installation', 'general-conditions'],
  },
  'delegated-design-build': {
    name: 'Delegated Design Build',
    icon: 'delegatedDesign',
    description: 'StructureCraft handles all timber design, engineering, fabrication, shipping, and installation. Not the EOR — no consulting engineering phase.',
    phases: ['timber-engineering', 'construction-engineering', 'fabrication', 'shipping', 'installation', 'general-conditions'],
  },
  'dlt-supply-only': {
    name: 'DLT Supply Only',
    icon: 'dltSupply',
    description: 'Supply Dowel Laminated Timber from our shop only. Material supply, fabrication, and shipping. No design, engineering, or installation.',
    phases: ['dlt-material', 'fabrication', 'shipping'],
  },
  'engineer-supervise': {
    name: 'Engineer + Supervise',
    icon: 'engineerSupervise',
    description: 'Structural engineer for superstructure only. Site supervision provided, but no fabrication or installation. Coordinate with third-party fabricators and installers.',
    phases: ['structural-engineering', 'site-supervision', 'coordination'],
  },
};

// ---- SECTION 5: PHASE DEFINITIONS ----
const PHASE_DEFS = {
  'consulting': { name: 'Consulting Engineering', description: 'SD, DD, CD, and CA structural engineering services' },
  'structural-engineering': { name: 'Structural Engineering', description: 'Structural design, analysis, and documentation' },
  'timber-engineering': { name: 'Timber Engineering', description: 'Shop drawing engineering, erection engineering, connection design' },
  'construction-engineering': { name: 'Construction Engineering', description: 'Engineering and drafting for construction phase' },
  'fabrication': { name: 'Shop / Fabrication', description: 'CNC processing, assembly, QC, and shop management' },
  'shipping': { name: 'Shipping & Logistics', description: 'Transport, oversized loads, and logistics coordination' },
  'installation': { name: 'Site Installation', description: 'Erection crew, crane, site super, and general labor' },
  'general-conditions': { name: 'General Conditions', description: 'Project management, insurance, bonds, and contingency' },
  'dlt-material': { name: 'DLT Material', description: 'Dowel Laminated Timber material supply and grading' },
  'site-supervision': { name: 'Site Supervision', description: 'On-site supervision and coordination personnel' },
  'coordination': { name: 'Coordination', description: 'Coordinate with third-party fabricators and installers' },
};

// ---- SECTION 6: PRICING LIBRARY ----
const PRICING_LIBRARY = {
  'Mass Timber Materials': [
    { id: 'glulam-24f', name: 'Glulam 24F-V8 (Douglas Fir)', unit: 'BF', price: 4.25, range: [3.50, 5.00], supplier: 'Western Archrib', updated: '2025-11' },
    { id: 'glulam-spruce', name: 'Glulam (Spruce)', unit: 'BF', price: 3.80, range: [3.20, 4.50], supplier: 'Structurlam', updated: '2025-11' },
    { id: 'clt-3ply', name: 'CLT 3-Ply (105mm)', unit: 'SF', price: 26, range: [22, 30], supplier: 'Structurlam', updated: '2025-10' },
    { id: 'clt-5ply', name: 'CLT 5-Ply (175mm)', unit: 'SF', price: 34, range: [28, 40], supplier: 'Structurlam', updated: '2025-10' },
    { id: 'clt-7ply', name: 'CLT 7-Ply (245mm)', unit: 'SF', price: 44, range: [36, 52], supplier: 'Kalesnikoff', updated: '2025-09' },
    { id: 'dlt', name: 'DLT Standard (various)', unit: 'SF', price: 22, range: [18, 28], supplier: 'StructureCraft', updated: '2025-12' },
    { id: 'mpp', name: 'Mass Plywood Panel (MPP)', unit: 'SF', price: 28, range: [24, 34], supplier: 'Freres Lumber', updated: '2025-08' },
    { id: 'nlt', name: 'NLT (Nail Laminated Timber)', unit: 'SF', price: 15, range: [12, 20], supplier: 'Various', updated: '2025-07' },
  ],
  'Steel & Connections': [
    { id: 'steel-connections', name: 'Steel Connections (fabricated)', unit: 'ton', price: 4500, range: [3500, 6000], supplier: 'George Third & Son', updated: '2025-11' },
    { id: 'base-plates', name: 'Base Plates (standard)', unit: 'each', price: 350, range: [200, 600], supplier: 'George Third & Son', updated: '2025-11' },
    { id: 'beam-hangers', name: 'Concealed Beam Hangers', unit: 'each', price: 180, range: [120, 300], supplier: 'Simpson Strong-Tie', updated: '2025-10' },
    { id: 'hold-downs', name: 'Hold-Downs / Tie-Downs', unit: 'each', price: 85, range: [40, 150], supplier: 'Simpson Strong-Tie', updated: '2025-10' },
    { id: 'fasteners-screws', name: 'Structural Screws (SWG ASSY)', unit: 'each', price: 3.50, range: [1.50, 8.00], supplier: 'MTC Solutions', updated: '2025-09' },
    { id: 'lag-bolts', name: 'Lag Bolts (3/4" x 10")', unit: 'each', price: 6.50, range: [4.00, 10.00], supplier: 'Various', updated: '2025-09' },
  ],
  'Secondary Materials': [
    { id: 'plywood-sheathing', name: 'Plywood Sheathing (3/4")', unit: 'SF', price: 3.75, range: [3.00, 5.00], supplier: 'Various', updated: '2025-11' },
    { id: 'concrete-topping', name: 'Concrete Topping (2")', unit: 'SF', price: 10, range: [8, 14], supplier: 'Local Ready-Mix', updated: '2025-10' },
    { id: 'acoustic-mat', name: 'Acoustic Isolation Mat', unit: 'SF', price: 2.25, range: [1.50, 3.50], supplier: 'Various', updated: '2025-08' },
    { id: 'fire-caulking', name: 'Fire Caulking / Sealant', unit: 'LF', price: 4.50, range: [3.00, 7.00], supplier: 'Hilti', updated: '2025-09' },
    { id: 'moisture-barrier', name: 'Moisture Barrier Membrane', unit: 'SF', price: 1.80, range: [1.20, 2.50], supplier: 'Various', updated: '2025-07' },
  ],
  'Labor Rates': [
    { id: 'eng-structural', name: 'Structural Engineer', unit: 'hr', price: 195, range: [180, 250], supplier: 'Internal', updated: '2025-12' },
    { id: 'eng-timber', name: 'Timber Engineer', unit: 'hr', price: 180, range: [160, 220], supplier: 'Internal', updated: '2025-12' },
    { id: 'drafter', name: 'Drafter / Detailer', unit: 'hr', price: 115, range: [90, 140], supplier: 'Internal', updated: '2025-12' },
    { id: 'shop-fab', name: 'Shop Fabricator', unit: 'hr', price: 82, range: [65, 100], supplier: 'Internal', updated: '2025-12' },
    { id: 'site-carpenter', name: 'Site Carpenter', unit: 'hr', price: 95, range: [75, 115], supplier: 'Internal', updated: '2025-12' },
    { id: 'site-laborer', name: 'Site Laborer', unit: 'hr', price: 65, range: [55, 80], supplier: 'Internal', updated: '2025-12' },
    { id: 'site-super', name: 'Site Superintendent', unit: 'hr', price: 140, range: [120, 165], supplier: 'Internal', updated: '2025-12' },
    { id: 'crane-operator', name: 'Crane Operator', unit: 'hr', price: 115, range: [95, 135], supplier: 'Internal', updated: '2025-12' },
    { id: 'pm', name: 'Project Manager', unit: 'hr', price: 165, range: [140, 200], supplier: 'Internal', updated: '2025-12' },
  ],
  'Equipment & Shipping': [
    { id: 'crane-50t', name: 'Mobile Crane 50-ton', unit: 'day', price: 4200, range: [3500, 5500], supplier: 'Sterling Crane', updated: '2025-10' },
    { id: 'crane-100t', name: 'Mobile Crane 100-ton', unit: 'day', price: 7500, range: [6000, 9500], supplier: 'Sterling Crane', updated: '2025-10' },
    { id: 'tower-crane', name: 'Tower Crane (monthly)', unit: 'month', price: 32000, range: [25000, 42000], supplier: 'Pinnacle Cranes', updated: '2025-09' },
    { id: 'shipping-local', name: 'Shipping Local (<200km)', unit: 'BF', price: 0.35, range: [0.25, 0.45], supplier: 'Various', updated: '2025-11' },
    { id: 'shipping-regional', name: 'Shipping Regional (200-800km)', unit: 'BF', price: 0.60, range: [0.40, 0.80], supplier: 'Various', updated: '2025-11' },
    { id: 'shipping-long', name: 'Shipping Long Distance (800km+)', unit: 'BF', price: 1.10, range: [0.75, 1.50], supplier: 'Various', updated: '2025-11' },
    { id: 'flatbed-truck', name: 'Flatbed Truck (full load)', unit: 'truck', price: 4500, range: [3500, 6000], supplier: 'Various', updated: '2025-10' },
  ],
};

// ---- SECTION 7: SAMPLE PAST ESTIMATES ----
const SAMPLE_ESTIMATES = [
  {
    id: 'est-001',
    name: 'Pacific Heights Mixed-Use',
    client: 'Westbank Corp',
    location: 'Vancouver, BC',
    projectType: 'mixed-use',
    deliveryModel: 'eor-build',
    status: 'won',
    createdAt: '2025-08-15',
    updatedAt: '2025-09-22',
    scopeDescription: '6-storey mixed-use building with CLT floor plates, glulam post-and-beam frame, retail at grade. Approx 45,000 SF timber structure.',
    assumptions: getDefaultAssumptions(),
    phases: {
      'consulting': { items: [
        { name: 'SD Structural Engineering', qty: 120, unit: 'hr', rate: 195, total: 23400 },
        { name: 'DD Structural Engineering', qty: 200, unit: 'hr', rate: 195, total: 39000 },
        { name: 'CD Structural Engineering', qty: 280, unit: 'hr', rate: 195, total: 54600 },
        { name: 'CA Services', qty: 80, unit: 'hr', rate: 195, total: 15600 },
      ], subtotal: 132600 },
      'timber-engineering': { items: [
        { name: 'Shop Drawing Engineering', qty: 320, unit: 'hr', rate: 180, total: 57600 },
        { name: 'Erection Engineering', qty: 80, unit: 'hr', rate: 180, total: 14400 },
        { name: 'Connection Design', qty: 160, unit: 'hr', rate: 180, total: 28800 },
        { name: 'Drafting / Detailing', qty: 400, unit: 'hr', rate: 115, total: 46000 },
      ], subtotal: 146800 },
      'construction-engineering': { items: [
        { name: 'Construction Phase Engineering', qty: 120, unit: 'hr', rate: 180, total: 21600 },
        { name: 'Construction Drafting', qty: 80, unit: 'hr', rate: 115, total: 9200 },
      ], subtotal: 30800 },
      'fabrication': { items: [
        { name: 'Glulam Beams (24F-V8)', qty: 28500, unit: 'BF', rate: 4.25, total: 121125 },
        { name: 'Glulam Columns', qty: 8200, unit: 'BF', rate: 4.50, total: 36900 },
        { name: 'CLT Floor Panels (5-ply)', qty: 38000, unit: 'SF', rate: 34, total: 1292000 },
        { name: 'CLT Roof Panels (3-ply)', qty: 7500, unit: 'SF', rate: 26, total: 195000 },
        { name: 'Steel Connections', qty: 12, unit: 'ton', rate: 4500, total: 54000 },
        { name: 'Fasteners & Hardware', qty: 1, unit: 'LS', rate: 45000, total: 45000 },
        { name: 'Shop Fabrication Labor', qty: 1800, unit: 'hr', rate: 82, total: 147600 },
        { name: 'CNC Processing', qty: 1, unit: 'LS', rate: 35000, total: 35000 },
      ], subtotal: 1926625 },
      'shipping': { items: [
        { name: 'Flatbed Trucks (Local)', qty: 18, unit: 'truck', rate: 4500, total: 81000 },
        { name: 'Oversized Load Permits', qty: 4, unit: 'each', rate: 2500, total: 10000 },
        { name: 'Logistics Coordination', qty: 40, unit: 'hr', rate: 115, total: 4600 },
      ], subtotal: 95600 },
      'installation': { items: [
        { name: 'Site Carpenters', qty: 2400, unit: 'hr', rate: 95, total: 228000 },
        { name: 'Site Laborers', qty: 800, unit: 'hr', rate: 65, total: 52000 },
        { name: 'Site Superintendent', qty: 480, unit: 'hr', rate: 140, total: 67200 },
        { name: 'Mobile Crane 100-ton', qty: 35, unit: 'day', rate: 7500, total: 262500 },
        { name: 'Crane Operator', qty: 280, unit: 'hr', rate: 115, total: 32200 },
        { name: 'Rigging & Hardware', qty: 1, unit: 'LS', rate: 18000, total: 18000 },
      ], subtotal: 659900 },
      'general-conditions': { items: [
        { name: 'Project Management', qty: 320, unit: 'hr', rate: 165, total: 52800 },
        { name: 'Insurance & Bonds', qty: 1, unit: 'LS', rate: 75000, total: 75000 },
        { name: 'Contingency (5%)', qty: 1, unit: 'LS', rate: 149416, total: 149416 },
      ], subtotal: 277216 },
    },
    totalCost: 3269541,
  },
  {
    id: 'est-002',
    name: 'Whistler Resort Lodge',
    client: 'Mountain View Developments',
    location: 'Whistler, BC',
    projectType: 'hospitality',
    deliveryModel: 'delegated-design-build',
    status: 'won',
    createdAt: '2025-06-10',
    updatedAt: '2025-07-28',
    scopeDescription: '3-storey resort lodge with exposed DLT ceilings, glulam heavy timber frame, dramatic cantilevered entrance. Approx 22,000 SF.',
    assumptions: getDefaultAssumptions(),
    phases: {
      'timber-engineering': { items: [
        { name: 'Shop Drawing Engineering', qty: 180, unit: 'hr', rate: 180, total: 32400 },
        { name: 'Erection Engineering', qty: 60, unit: 'hr', rate: 180, total: 10800 },
        { name: 'Connection Design', qty: 100, unit: 'hr', rate: 180, total: 18000 },
        { name: 'Drafting / Detailing', qty: 240, unit: 'hr', rate: 115, total: 27600 },
      ], subtotal: 88800 },
      'construction-engineering': { items: [
        { name: 'Construction Phase Engineering', qty: 80, unit: 'hr', rate: 180, total: 14400 },
        { name: 'Construction Drafting', qty: 50, unit: 'hr', rate: 115, total: 5750 },
      ], subtotal: 20150 },
      'fabrication': { items: [
        { name: 'Glulam Beams (24F-V8)', qty: 18000, unit: 'BF', rate: 4.25, total: 76500 },
        { name: 'Glulam Columns (heavy)', qty: 6500, unit: 'BF', rate: 4.75, total: 30875 },
        { name: 'DLT Ceiling Panels', qty: 18500, unit: 'SF', rate: 22, total: 407000 },
        { name: 'Steel Connections', qty: 8, unit: 'ton', rate: 4500, total: 36000 },
        { name: 'Custom Steel Brackets', qty: 1, unit: 'LS', rate: 28000, total: 28000 },
        { name: 'Fasteners & Hardware', qty: 1, unit: 'LS', rate: 22000, total: 22000 },
        { name: 'Shop Fabrication Labor', qty: 1100, unit: 'hr', rate: 82, total: 90200 },
      ], subtotal: 690575 },
      'shipping': { items: [
        { name: 'Flatbed Trucks (Regional)', qty: 10, unit: 'truck', rate: 5200, total: 52000 },
        { name: 'Oversized Load Permits', qty: 2, unit: 'each', rate: 2500, total: 5000 },
      ], subtotal: 57000 },
      'installation': { items: [
        { name: 'Site Carpenters', qty: 1400, unit: 'hr', rate: 95, total: 133000 },
        { name: 'Site Laborers', qty: 500, unit: 'hr', rate: 65, total: 32500 },
        { name: 'Site Superintendent', qty: 300, unit: 'hr', rate: 140, total: 42000 },
        { name: 'Mobile Crane 100-ton', qty: 20, unit: 'day', rate: 7500, total: 150000 },
        { name: 'Crane Operator', qty: 160, unit: 'hr', rate: 115, total: 18400 },
      ], subtotal: 375900 },
      'general-conditions': { items: [
        { name: 'Project Management', qty: 200, unit: 'hr', rate: 165, total: 33000 },
        { name: 'Insurance & Bonds', qty: 1, unit: 'LS', rate: 35000, total: 35000 },
        { name: 'Contingency (5%)', qty: 1, unit: 'LS', rate: 65021, total: 65021 },
      ], subtotal: 133021 },
    },
    totalCost: 1365446,
  },
  {
    id: 'est-003',
    name: 'UBC Research Center',
    client: 'University of British Columbia',
    location: 'Vancouver, BC',
    projectType: 'institutional',
    deliveryModel: 'engineer-supervise',
    status: 'sent',
    createdAt: '2025-10-01',
    updatedAt: '2025-11-15',
    scopeDescription: '4-storey research building, CLT/glulam hybrid structure. StructureCraft as structural engineer for superstructure with site supervision. Approx 35,000 SF.',
    assumptions: getDefaultAssumptions(),
    phases: {
      'structural-engineering': { items: [
        { name: 'SD Structural Engineering', qty: 140, unit: 'hr', rate: 195, total: 27300 },
        { name: 'DD Structural Engineering', qty: 240, unit: 'hr', rate: 195, total: 46800 },
        { name: 'CD Structural Engineering', qty: 340, unit: 'hr', rate: 195, total: 66300 },
        { name: 'CA Services', qty: 100, unit: 'hr', rate: 195, total: 19500 },
        { name: 'Timber Connection Design', qty: 120, unit: 'hr', rate: 180, total: 21600 },
      ], subtotal: 181500 },
      'site-supervision': { items: [
        { name: 'Site Supervisor (full time)', qty: 600, unit: 'hr', rate: 140, total: 84000 },
        { name: 'Site Visits - Engineer', qty: 80, unit: 'hr', rate: 195, total: 15600 },
        { name: 'Travel & Expenses', qty: 1, unit: 'LS', rate: 8000, total: 8000 },
      ], subtotal: 107600 },
      'coordination': { items: [
        { name: 'Fabricator Coordination', qty: 120, unit: 'hr', rate: 165, total: 19800 },
        { name: 'Installer Coordination', qty: 100, unit: 'hr', rate: 165, total: 16500 },
        { name: 'Shop Drawing Review', qty: 80, unit: 'hr', rate: 180, total: 14400 },
      ], subtotal: 50700 },
    },
    totalCost: 339800,
  },
  {
    id: 'est-004',
    name: 'Kelowna Office Tower',
    client: 'Landmark Properties',
    location: 'Kelowna, BC',
    projectType: 'commercial',
    deliveryModel: 'eor-build',
    status: 'draft',
    createdAt: '2025-11-20',
    updatedAt: '2025-12-10',
    scopeDescription: '8-storey office building, CLT and MPP floors, glulam frame, concrete core. StructureCraft full EOR scope. Approx 68,000 SF timber structure.',
    assumptions: getDefaultAssumptions(),
    phases: {
      'consulting': { items: [
        { name: 'SD Structural Engineering', qty: 180, unit: 'hr', rate: 195, total: 35100 },
        { name: 'DD Structural Engineering', qty: 300, unit: 'hr', rate: 195, total: 58500 },
        { name: 'CD Structural Engineering', qty: 420, unit: 'hr', rate: 195, total: 81900 },
        { name: 'CA Services', qty: 120, unit: 'hr', rate: 195, total: 23400 },
      ], subtotal: 198900 },
      'timber-engineering': { items: [
        { name: 'Shop Drawing Engineering', qty: 480, unit: 'hr', rate: 180, total: 86400 },
        { name: 'Erection Engineering', qty: 120, unit: 'hr', rate: 180, total: 21600 },
        { name: 'Connection Design', qty: 220, unit: 'hr', rate: 180, total: 39600 },
        { name: 'Drafting / Detailing', qty: 600, unit: 'hr', rate: 115, total: 69000 },
      ], subtotal: 216600 },
      'construction-engineering': { items: [
        { name: 'Construction Phase Engineering', qty: 160, unit: 'hr', rate: 180, total: 28800 },
        { name: 'Construction Drafting', qty: 100, unit: 'hr', rate: 115, total: 11500 },
      ], subtotal: 40300 },
      'fabrication': { items: [
        { name: 'Glulam Beams (24F-V8)', qty: 42000, unit: 'BF', rate: 4.25, total: 178500 },
        { name: 'Glulam Columns', qty: 15000, unit: 'BF', rate: 4.50, total: 67500 },
        { name: 'CLT Floor Panels (5-ply)', qty: 52000, unit: 'SF', rate: 34, total: 1768000 },
        { name: 'MPP Panels', qty: 12000, unit: 'SF', rate: 28, total: 336000 },
        { name: 'CLT Roof (3-ply)', qty: 8500, unit: 'SF', rate: 26, total: 221000 },
        { name: 'Steel Connections', qty: 18, unit: 'ton', rate: 4500, total: 81000 },
        { name: 'Fasteners & Hardware', qty: 1, unit: 'LS', rate: 68000, total: 68000 },
        { name: 'Shop Fabrication Labor', qty: 2800, unit: 'hr', rate: 82, total: 229600 },
        { name: 'CNC Processing', qty: 1, unit: 'LS', rate: 52000, total: 52000 },
      ], subtotal: 3001600 },
      'shipping': { items: [
        { name: 'Flatbed Trucks (Regional)', qty: 28, unit: 'truck', rate: 5200, total: 145600 },
        { name: 'Oversized Load Permits', qty: 6, unit: 'each', rate: 2500, total: 15000 },
        { name: 'Logistics Coordination', qty: 60, unit: 'hr', rate: 115, total: 6900 },
      ], subtotal: 167500 },
      'installation': { items: [
        { name: 'Site Carpenters', qty: 3800, unit: 'hr', rate: 95, total: 361000 },
        { name: 'Site Laborers', qty: 1200, unit: 'hr', rate: 65, total: 78000 },
        { name: 'Site Superintendent', qty: 640, unit: 'hr', rate: 140, total: 89600 },
        { name: 'Tower Crane', qty: 4, unit: 'month', rate: 32000, total: 128000 },
        { name: 'Crane Operator', qty: 480, unit: 'hr', rate: 115, total: 55200 },
        { name: 'Rigging & Hardware', qty: 1, unit: 'LS', rate: 25000, total: 25000 },
      ], subtotal: 736800 },
      'general-conditions': { items: [
        { name: 'Project Management', qty: 480, unit: 'hr', rate: 165, total: 79200 },
        { name: 'Insurance & Bonds', qty: 1, unit: 'LS', rate: 110000, total: 110000 },
        { name: 'Contingency (5%)', qty: 1, unit: 'LS', rate: 218085, total: 218085 },
      ], subtotal: 407285 },
    },
    totalCost: 4768985,
  },
  {
    id: 'est-005',
    name: 'Victoria Public Library',
    client: 'City of Victoria',
    location: 'Victoria, BC',
    projectType: 'institutional',
    deliveryModel: 'dlt-supply-only',
    status: 'won',
    createdAt: '2025-04-05',
    updatedAt: '2025-05-20',
    scopeDescription: '2-storey public library with exposed DLT ceiling panels. Supply only scope - DLT material, fabrication, and delivery.',
    assumptions: getDefaultAssumptions(),
    phases: {
      'dlt-material': { items: [
        { name: 'DLT Panels - 5" thick', qty: 12000, unit: 'SF', rate: 22, total: 264000 },
        { name: 'DLT Panels - 3" thick', qty: 4500, unit: 'SF', rate: 18, total: 81000 },
        { name: 'Edge Banding & Finish', qty: 16500, unit: 'SF', rate: 2.50, total: 41250 },
        { name: 'Grading & QC', qty: 1, unit: 'LS', rate: 8500, total: 8500 },
      ], subtotal: 394750 },
      'fabrication': { items: [
        { name: 'DLT Fabrication Labor', qty: 650, unit: 'hr', rate: 82, total: 53300 },
        { name: 'CNC Processing', qty: 1, unit: 'LS', rate: 18000, total: 18000 },
        { name: 'Shop Consumables', qty: 1, unit: 'LS', rate: 6500, total: 6500 },
      ], subtotal: 77800 },
      'shipping': { items: [
        { name: 'Flatbed Trucks (ferry + local)', qty: 5, unit: 'truck', rate: 5800, total: 29000 },
        { name: 'Ferry Bookings', qty: 5, unit: 'each', rate: 850, total: 4250 },
      ], subtotal: 33250 },
    },
    totalCost: 505800,
  },
];

// ---- SECTION 8: UTILITY FUNCTIONS ----
function fmt(n) {
  if (n === undefined || n === null) return '$0';
  return '$' + Number(n).toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 });
}
function fmtDec(n, d=2) {
  if (n === undefined || n === null) return '$0.00';
  return '$' + Number(n).toLocaleString('en-US', { minimumFractionDigits: d, maximumFractionDigits: d });
}
function fmtPct(n) { return Number(n).toFixed(1) + '%'; }
function fmtNum(n) { return Number(n).toLocaleString('en-US'); }

function calcPhaseTotal(phase) {
  if (!phase || !phase.items) return 0;
  return phase.items.reduce((sum, item) => sum + (item.total || 0), 0);
}

function calcEstimateTotal(estimate) {
  let total = 0;
  if (estimate.phases) {
    Object.values(estimate.phases).forEach(phase => {
      total += calcPhaseTotal(phase);
    });
  }
  return total;
}

function getEstimatePhases(deliveryModel) {
  const model = DELIVERY_MODELS[deliveryModel];
  return model ? model.phases : [];
}

function saveState() {
  try {
    localStorage.setItem('sc-theme', STATE.currentTheme);
    localStorage.setItem('sc-current-estimate', JSON.stringify(STATE.currentEstimate));
    localStorage.setItem('sc-estimates', JSON.stringify(STATE.estimates));
  } catch(e) { console.warn('Save failed:', e); }
}

function loadState() {
  try {
    const saved = localStorage.getItem('sc-estimates');
    if (saved) {
      STATE.estimates = JSON.parse(saved);
    }
    if (STATE.estimates.length === 0) {
      STATE.estimates = [...SAMPLE_ESTIMATES];
    }
    const savedEst = localStorage.getItem('sc-current-estimate');
    if (savedEst) {
      STATE.currentEstimate = JSON.parse(savedEst);
    }
  } catch(e) {
    STATE.estimates = [...SAMPLE_ESTIMATES];
  }
}

function showToast(message, type='info') {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `<span>${ICONS[type] || ICONS.info}</span><span>${message}</span>`;
  container.appendChild(toast);
  setTimeout(() => { toast.classList.add('leaving'); setTimeout(() => toast.remove(), 300); }, 3000);
}


// ---- SECTION 9: PAGE RENDERERS ----

// --- INPUT PAGE ---
function renderInputPage() {
  const est = STATE.currentEstimate;
  return `
    <div class="fade-in">
      <div class="section-header">
        <div>
          <div class="section-title">${ICONS.input} New Estimate Workspace</div>
          <div class="section-desc">Define your project scope, upload documents, and select your delivery model</div>
        </div>
        <div class="section-actions">
          <button class="btn btn-sm" onclick="clearCurrentEstimate()">Clear All</button>
          <button class="btn btn-sm btn-accent" onclick="saveCurrentEstimate()">
            ${ICONS.check} Save Estimate
          </button>
        </div>
      </div>

      <!-- Project Info -->
      <div class="card mb-16">
        <div class="card-header">
          <div class="card-title">${ICONS.building} Project Information</div>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label class="form-label">Project Name</label>
            <input class="form-input" type="text" placeholder="e.g., Pacific Heights Mixed-Use" value="${est.name}" onchange="updateEstimate('name', this.value)">
          </div>
          <div class="form-group">
            <label class="form-label">Client</label>
            <input class="form-input" type="text" placeholder="e.g., Westbank Corp" value="${est.client}" onchange="updateEstimate('client', this.value)">
          </div>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label class="form-label">Location</label>
            <input class="form-input" type="text" placeholder="e.g., Vancouver, BC" value="${est.location}" onchange="updateEstimate('location', this.value)">
          </div>
          <div class="form-group">
            <label class="form-label">Project Type</label>
            <select class="form-select" onchange="updateEstimate('projectType', this.value)">
              <option value="commercial" ${est.projectType==='commercial'?'selected':''}>Commercial</option>
              <option value="residential" ${est.projectType==='residential'?'selected':''}>Residential</option>
              <option value="institutional" ${est.projectType==='institutional'?'selected':''}>Institutional</option>
              <option value="mixed-use" ${est.projectType==='mixed-use'?'selected':''}>Mixed-Use</option>
              <option value="hospitality" ${est.projectType==='hospitality'?'selected':''}>Hospitality</option>
              <option value="industrial" ${est.projectType==='industrial'?'selected':''}>Industrial</option>
            </select>
          </div>
        </div>
      </div>

      <!-- Building Parameters -->
      <div class="card mb-16">
        <div class="card-header">
          <div class="card-title">${ICONS.analytics} Building Parameters</div>
          <div class="card-subtitle">Define structural parameters to auto-populate quantities in your estimate</div>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label class="form-label">Gross Building Area (SF)</label>
            <input class="form-input" type="number" placeholder="e.g., 45000" value="${est.buildingArea || ''}" onchange="updateEstimate('buildingArea', parseFloat(this.value) || 0)">
          </div>
          <div class="form-group">
            <label class="form-label">Number of Stories</label>
            <input class="form-input" type="number" min="1" max="20" placeholder="e.g., 6" value="${est.numStories || ''}" onchange="updateEstimate('numStories', parseInt(this.value) || 0)">
          </div>
          <div class="form-group">
            <label class="form-label">Floor-to-Floor Height (ft)</label>
            <input class="form-input" type="number" step="0.5" placeholder="e.g., 12" value="${est.floorToFloor || ''}" onchange="updateEstimate('floorToFloor', parseFloat(this.value) || 0)">
          </div>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label class="form-label">Structural System</label>
            <select class="form-select" onchange="updateEstimate('structuralSystem', this.value)">
              <option value="post-beam" ${est.structuralSystem==='post-beam'?'selected':''}>Post-and-Beam (Glulam)</option>
              <option value="panel-system" ${est.structuralSystem==='panel-system'?'selected':''}>Panel System (CLT/DLT)</option>
              <option value="hybrid" ${est.structuralSystem==='hybrid'?'selected':''}>Hybrid (Glulam + CLT)</option>
              <option value="heavy-timber" ${est.structuralSystem==='heavy-timber'?'selected':''}>Heavy Timber Frame</option>
            </select>
          </div>
          <div class="form-group">
            <label class="form-label">Typical Grid Spacing</label>
            <input class="form-input" type="text" placeholder="e.g., 30' x 30'" value="${est.gridSpacing || ''}" onchange="updateEstimate('gridSpacing', this.value)">
          </div>
          <div class="form-group">
            <label class="form-label">Timber Species</label>
            <select class="form-select" onchange="updateEstimate('timberSpecies', this.value)">
              <option value="douglas-fir" ${est.timberSpecies==='douglas-fir'?'selected':''}>Douglas Fir</option>
              <option value="spruce" ${est.timberSpecies==='spruce'?'selected':''}>Spruce (SPF)</option>
              <option value="yellow-cedar" ${est.timberSpecies==='yellow-cedar'?'selected':''}>Yellow Cedar</option>
              <option value="western-red-cedar" ${est.timberSpecies==='western-red-cedar'?'selected':''}>Western Red Cedar</option>
            </select>
          </div>
        </div>
      </div>

      <!-- Delivery Model Selector -->
      <div class="card mb-16">
        <div class="card-header">
          <div>
            <div class="card-title">Delivery Model</div>
            <div class="card-subtitle">Select the scope of StructureCraft's involvement. This determines which cost phases are included.</div>
          </div>
        </div>
        <div class="delivery-model-grid">
          ${Object.entries(DELIVERY_MODELS).map(([key, model]) => `
            <div class="delivery-model-card ${est.deliveryModel === key ? 'active' : ''}" onclick="setDeliveryModel('${key}')">
              <div class="dm-icon-svg">${ICONS[model.icon] || ''}</div>
              <div class="dm-title">${model.name}</div>
              <div class="dm-desc">${model.description}</div>
              <div class="dm-phases">
                ${model.phases.map(p => `<span class="dm-phase-tag">${PHASE_DEFS[p]?.name || p}</span>`).join('')}
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Scope & Communications Sandbox -->
      <div class="section-divider">Project Scope & Communications</div>
      <div class="grid-2 mb-16">
        <div class="card">
          <div class="card-header">
            <div class="card-title">Project Scope & Description</div>
          </div>
          <div class="form-group">
            <textarea class="form-textarea" rows="5" placeholder="Describe the full project scope: building type, number of stories, approximate square footage, structural system, key features, special requirements..."
              onchange="updateEstimate('scopeDescription', this.value)">${est.scopeDescription}</textarea>
          </div>
        </div>
        <div class="card">
          <div class="card-header">
            <div class="card-title">RFP Notes & Requirements</div>
          </div>
          <div class="form-group">
            <textarea class="form-textarea" rows="5" placeholder="Key requirements from the RFP: deadlines, scope boundaries, deliverables, evaluation criteria, pricing format requirements..."
              onchange="updateEstimate('rfpNotes', this.value)">${est.rfpNotes}</textarea>
          </div>
        </div>
      </div>

      <div class="grid-2 mb-16">
        <div class="card">
          <div class="card-header">
            <div class="card-title">RFIs & Clarifications</div>
          </div>
          <div class="form-group">
            <textarea class="form-textarea" rows="4" placeholder="Outstanding RFIs, design clarifications, assumptions that need confirmation..."
              onchange="updateEstimate('rfiNotes', this.value)">${est.rfiNotes}</textarea>
          </div>
        </div>
        <div class="card">
          <div class="card-header">
            <div class="card-title">Client & Contractor Communications</div>
          </div>
          <div class="form-group">
            <textarea class="form-textarea" rows="4" placeholder="Important notes from the client, contractor, or architect. Key constraints, preferences, budget signals..."
              onchange="updateEstimate('clientComms', this.value)">${est.clientComms}</textarea>
          </div>
        </div>
      </div>

      <!-- Document Upload Zones -->
      <div class="section-divider">Document Uploads</div>
      <div class="upload-grid mb-16">
        <div class="card">
          <div class="upload-zone" id="upload-rfp" ondrop="handleDrop(event,'rfp')" ondragover="handleDragOver(event)" ondragleave="handleDragLeave(event)" onclick="triggerUpload('rfp')">
            <div class="upload-icon">${ICONS.upload}</div>
            <div class="upload-title">RFP / Bid Documents</div>
            <div class="upload-subtitle">Drop files here or click to browse</div>
            <div class="upload-limit">PDF, DOCX, XLSX • Max 40 MB each</div>
            <input type="file" id="file-input-rfp" style="display:none" multiple accept=".pdf,.docx,.xlsx,.xls,.doc" onchange="handleFileSelect(event,'rfp')">
          </div>
          ${renderFileList(est.files.rfp, 'rfp')}
        </div>
        <div class="card">
          <div class="upload-zone" id="upload-drawings" ondrop="handleDrop(event,'drawings')" ondragover="handleDragOver(event)" ondragleave="handleDragLeave(event)" onclick="triggerUpload('drawings')">
            <div class="upload-icon">${ICONS.upload}</div>
            <div class="upload-title">Architectural Drawings</div>
            <div class="upload-subtitle">SD or DD drawing sets</div>
            <div class="upload-limit">PDF • Max 40 MB each</div>
            <input type="file" id="file-input-drawings" style="display:none" multiple accept=".pdf,.dwg" onchange="handleFileSelect(event,'drawings')">
          </div>
          ${renderFileList(est.files.drawings, 'drawings')}
        </div>
        <div class="card">
          <div class="upload-zone" id="upload-structural" ondrop="handleDrop(event,'structural')" ondragover="handleDragOver(event)" ondragleave="handleDragLeave(event)" onclick="triggerUpload('structural')">
            <div class="upload-icon">${ICONS.upload}</div>
            <div class="upload-title">Structural Drawings</div>
            <div class="upload-subtitle">Structural engineering docs</div>
            <div class="upload-limit">PDF • Max 40 MB each</div>
            <input type="file" id="file-input-structural" style="display:none" multiple accept=".pdf,.dwg" onchange="handleFileSelect(event,'structural')">
          </div>
          ${renderFileList(est.files.structural, 'structural')}
        </div>
        <div class="card">
          <div class="upload-zone" id="upload-narratives" ondrop="handleDrop(event,'narratives')" ondragover="handleDragOver(event)" ondragleave="handleDragLeave(event)" onclick="triggerUpload('narratives')">
            <div class="upload-icon">${ICONS.upload}</div>
            <div class="upload-title">Narratives & Specs</div>
            <div class="upload-subtitle">Structural narratives, specs</div>
            <div class="upload-limit">PDF, DOCX • Max 40 MB each</div>
            <input type="file" id="file-input-narratives" style="display:none" multiple accept=".pdf,.docx,.doc" onchange="handleFileSelect(event,'narratives')">
          </div>
          ${renderFileList(est.files.narratives, 'narratives')}
        </div>
      </div>

      <!-- Generate Estimate Button -->
      <div class="card mb-16" style="text-align:center; padding: 30px;">
        <p style="color: var(--text-secondary); margin-bottom: 16px; font-size: 0.85rem;">
          Once you've filled in the project details and uploaded documents, generate your estimate.
          Results will appear in the <strong>Output</strong> tab.
        </p>
        <button class="btn btn-lg btn-accent" onclick="generateEstimate()" style="padding: 14px 40px; font-size: 1rem;">
          ${ICONS.generate} Generate Estimate
        </button>
      </div>
    </div>
  `;
}

function renderFileList(files, category) {
  if (!files || files.length === 0) return '';
  return `<div class="upload-file-list">
    ${files.map((f, i) => `
      <div class="upload-file-item">
        <span class="file-icon">${ICONS.file}</span>
        <span class="file-name">${f.name}</span>
        <span class="file-size">${formatFileSize(f.size)}</span>
        <span class="file-remove" onclick="removeFile('${category}', ${i})">${ICONS.trash}</span>
      </div>
    `).join('')}
  </div>`;
}

function formatFileSize(bytes) {
  if (bytes < 1024) return bytes + ' B';
  if (bytes < 1048576) return (bytes / 1024).toFixed(1) + ' KB';
  return (bytes / 1048576).toFixed(1) + ' MB';
}


// --- OUTPUT PAGE ---
function renderOutputPage() {
  const est = STATE.currentEstimate;
  const modelKey = est.deliveryModel || 'eor-build';
  const model = DELIVERY_MODELS[modelKey];
  const phaseKeys = model ? model.phases : [];
  const hasData = est.phases && Object.keys(est.phases).length > 0;
  const activeTab = STATE.outputActiveTab || 'summary';

  // Calculate totals
  let subtotal = 0;
  phaseKeys.forEach(pk => {
    if (est.phases && est.phases[pk]) {
      subtotal += calcPhaseTotal(est.phases[pk]);
    }
  });
  const margin = subtotal * (est.assumptions.marginPercent / 100);
  const overhead = subtotal * (est.assumptions.overheadPercent / 100);
  const contingency = subtotal * (est.assumptions.contingencyPercent / 100);
  const bondIns = subtotal * (est.assumptions.bondInsurancePercent / 100);
  const grandTotal = subtotal + margin + overhead + bondIns;

  return `
    <div class="fade-in">
      <div class="section-header">
        <div>
          <div class="section-title">${ICONS.output} Estimate Output</div>
          <div class="section-desc">${est.name || 'Untitled Project'} — ${model ? model.name : 'No model selected'}</div>
        </div>
        <div class="section-actions">
          <div class="export-btn-group">
            <button class="btn btn-sm" onclick="exportEstimateXLSX()">
              ${ICONS.xlsx} Export XLSX
            </button>
            <button class="btn btn-sm" onclick="exportEstimate()">
              ${ICONS.download} CSV
            </button>
          </div>
          <button class="btn btn-sm btn-accent" onclick="saveCurrentEstimate()">
            ${ICONS.check} Save
          </button>
        </div>
      </div>

      <!-- Assumptions Box -->
      <div class="assumptions-box mb-20">
        <div class="assumptions-header">
          ${ICONS.warning} Pricing Assumptions
          <span style="margin-left:auto; font-size:0.72rem; font-weight:400; color:var(--text-secondary);">Click any value to edit</span>
        </div>
        <div class="assumptions-grid">
          <div class="assumption-item">
            <div class="assumption-label">Margin</div>
            <div class="assumption-value editable" onclick="editAssumption('marginPercent', this)">${fmtPct(est.assumptions.marginPercent)}</div>
          </div>
          <div class="assumption-item">
            <div class="assumption-label">Overhead</div>
            <div class="assumption-value editable" onclick="editAssumption('overheadPercent', this)">${fmtPct(est.assumptions.overheadPercent)}</div>
          </div>
          <div class="assumption-item">
            <div class="assumption-label">Contingency</div>
            <div class="assumption-value editable" onclick="editAssumption('contingencyPercent', this)">${fmtPct(est.assumptions.contingencyPercent)}</div>
          </div>
          <div class="assumption-item">
            <div class="assumption-label">Bond & Insurance</div>
            <div class="assumption-value editable" onclick="editAssumption('bondInsurancePercent', this)">${fmtPct(est.assumptions.bondInsurancePercent)}</div>
          </div>
          <div class="assumption-item">
            <div class="assumption-label">Glulam (per BF)</div>
            <div class="assumption-value editable" onclick="editAssumption('glulamPriceBF', this)">${fmtDec(est.assumptions.glulamPriceBF)}</div>
          </div>
          <div class="assumption-item">
            <div class="assumption-label">CLT 5-ply (per SF)</div>
            <div class="assumption-value editable" onclick="editAssumption('cltPriceSF5', this)">${fmtDec(est.assumptions.cltPriceSF5)}</div>
          </div>
          <div class="assumption-item">
            <div class="assumption-label">DLT (per SF)</div>
            <div class="assumption-value editable" onclick="editAssumption('dltPriceSF', this)">${fmtDec(est.assumptions.dltPriceSF)}</div>
          </div>
          <div class="assumption-item">
            <div class="assumption-label">Shipping (per BF)</div>
            <div class="assumption-value editable" onclick="editAssumption('shippingPerBF', this)">${fmtDec(est.assumptions.shippingPerBF)}</div>
          </div>
          <div class="assumption-item">
            <div class="assumption-label">Engineering (per hr)</div>
            <div class="assumption-value editable" onclick="editAssumption('engHourlyRate', this)">${fmtDec(est.assumptions.engHourlyRate)}</div>
          </div>
          <div class="assumption-item">
            <div class="assumption-label">Shop Rate (per hr)</div>
            <div class="assumption-value editable" onclick="editAssumption('shopHourlyRate', this)">${fmtDec(est.assumptions.shopHourlyRate)}</div>
          </div>
          <div class="assumption-item">
            <div class="assumption-label">Site Carpenter (per hr)</div>
            <div class="assumption-value editable" onclick="editAssumption('siteCarpentrHourlyRate', this)">${fmtDec(est.assumptions.siteCarpentrHourlyRate)}</div>
          </div>
          <div class="assumption-item">
            <div class="assumption-label">Crane (per day)</div>
            <div class="assumption-value editable" onclick="editAssumption('craneDailyRate', this)">${fmt(est.assumptions.craneDailyRate)}</div>
          </div>
        </div>
      </div>

      <!-- Phase Tabs -->
      <div class="tabs">
        <div class="tab ${activeTab === 'summary' ? 'active' : ''}" onclick="switchOutputTab('summary')">Summary</div>
        ${phaseKeys.map(pk => `
          <div class="tab ${activeTab === pk ? 'active' : ''}" onclick="switchOutputTab('${pk}')">
            ${PHASE_DEFS[pk]?.name || pk}
          </div>
        `).join('')}
      </div>

      <!-- Tab Content -->
      ${activeTab === 'summary' ? renderOutputSummary(est, phaseKeys, subtotal, margin, overhead, contingency, bondIns, grandTotal) : ''}
      ${phaseKeys.map(pk => activeTab === pk ? renderPhaseTab(est, pk) : '').join('')}
    </div>
  `;
}

function renderOutputSummary(est, phaseKeys, subtotal, margin, overhead, contingency, bondIns, grandTotal) {
  return `
    <div class="slide-up">
      <div class="output-summary">
        <div>
          <div class="card">
            <div class="card-title mb-12">Cost Breakdown by Phase</div>
            <div class="mini-chart">
              ${phaseKeys.map(pk => {
                const phaseTotal = est.phases && est.phases[pk] ? calcPhaseTotal(est.phases[pk]) : 0;
                const pct = subtotal > 0 ? (phaseTotal / subtotal * 100) : 0;
                return `
                  <div class="bar-chart-row">
                    <div class="bar-chart-label">${PHASE_DEFS[pk]?.name || pk}</div>
                    <div class="bar-chart-track">
                      <div class="bar-chart-fill" style="width:${Math.max(pct, 2)}%">
                        ${pct > 15 ? `<span class="bar-chart-value">${fmtPct(pct)}</span>` : ''}
                      </div>
                    </div>
                    <div class="bar-chart-amount">${fmt(phaseTotal)}</div>
                  </div>
                `;
              }).join('')}
            </div>
          </div>
        </div>
        <div>
          <div class="card">
            <div class="card-title mb-12">Cost Summary</div>
            <div class="summary-row">
              <span class="summary-row-label">Direct Costs (Subtotal)</span>
              <span class="summary-row-value">${fmt(subtotal)}</span>
            </div>
            <div class="summary-divider"></div>
            <div class="summary-row">
              <span class="summary-row-label">Overhead (${fmtPct(est.assumptions.overheadPercent)})</span>
              <span class="summary-row-value">${fmt(overhead)}</span>
            </div>
            <div class="summary-row">
              <span class="summary-row-label">Margin (${fmtPct(est.assumptions.marginPercent)})</span>
              <span class="summary-row-value">${fmt(margin)}</span>
            </div>
            <div class="summary-row">
              <span class="summary-row-label">Contingency (${fmtPct(est.assumptions.contingencyPercent)})</span>
              <span class="summary-row-value">${fmt(contingency)}</span>
            </div>
            <div class="summary-row">
              <span class="summary-row-label">Bond & Insurance (${fmtPct(est.assumptions.bondInsurancePercent)})</span>
              <span class="summary-row-value">${fmt(bondIns)}</span>
            </div>
            <div class="summary-divider"></div>
            <div class="summary-total mt-8">
              <div class="summary-total-label">Grand Total</div>
              <div class="summary-total-value">${fmt(grandTotal)}</div>
            </div>
            <div class="mt-12">
              <div class="summary-row">
                <span class="summary-row-label">Effective Margin</span>
                <span class="summary-row-value text-accent">${subtotal > 0 ? fmtPct((grandTotal - subtotal) / grandTotal * 100) : '0.0%'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderPhaseTab(est, phaseKey) {
  const phase = est.phases && est.phases[phaseKey] ? est.phases[phaseKey] : { items: [] };
  const phaseDef = PHASE_DEFS[phaseKey] || { name: phaseKey, description: '' };
  const phaseSubtotal = calcPhaseTotal(phase);

  return `
    <div class="slide-up">
      <div class="card">
        <div class="card-header">
          <div>
            <div class="card-title">${phaseDef.name}</div>
            <div class="card-subtitle">${phaseDef.description}</div>
          </div>
          <button class="btn btn-sm btn-accent" onclick="addLineItem('${phaseKey}')">
            ${ICONS.plus} Add Line Item
          </button>
        </div>
        <div class="line-items-header">
          <div></div>
          <div>Description</div>
          <div class="cell-right">Qty</div>
          <div class="cell-center">Unit</div>
          <div class="cell-right">Rate</div>
          <div class="cell-right">Total</div>
          <div></div>
        </div>
        ${phase.items.map((item, idx) => `
          <div class="line-item-row" draggable="true">
            <div class="line-item-grip">${ICONS.grip}</div>
            <div>
              <input class="line-item-input" value="${item.name}" onchange="updateLineItem('${phaseKey}', ${idx}, 'name', this.value)">
            </div>
            <div>
              <input class="line-item-input numeric" type="number" value="${item.qty}" onchange="updateLineItem('${phaseKey}', ${idx}, 'qty', parseFloat(this.value))">
            </div>
            <div>
              <input class="line-item-input" value="${item.unit}" style="text-align:center" onchange="updateLineItem('${phaseKey}', ${idx}, 'unit', this.value)">
            </div>
            <div>
              <input class="line-item-input numeric" type="number" step="0.01" value="${item.rate}" onchange="updateLineItem('${phaseKey}', ${idx}, 'rate', parseFloat(this.value))">
            </div>
            <div class="cell-right cell-mono cell-bold" style="padding: 4px 6px;">${fmt(item.total)}</div>
            <div class="line-item-delete" onclick="removeLineItem('${phaseKey}', ${idx})">${ICONS.trash}</div>
          </div>
        `).join('')}
        ${phase.items.length === 0 ? `
          <div style="padding: 30px; text-align: center; color: var(--text-muted); font-size: 0.85rem;">
            No line items yet. Click "Add Line Item" to start building this phase.
          </div>
        ` : ''}
        ${phase.items.length > 0 ? `
          <div class="line-item-row subtotal-row">
            <div></div>
            <div style="font-weight:700; color:var(--text-primary);">Phase Subtotal</div>
            <div></div><div></div><div></div>
            <div class="cell-right cell-mono cell-accent" style="padding:4px 6px; font-size:0.92rem;">${fmt(phaseSubtotal)}</div>
            <div></div>
          </div>
        ` : ''}
      </div>
    </div>
  `;
}


// --- PAST ESTIMATES PAGE ---
function renderPastEstimatesPage() {
  const estimates = STATE.estimates;
  const filterModel = STATE.pastFilterModel || 'all';
  const filterStatus = STATE.pastFilterStatus || 'all';

  let filtered = estimates;
  if (filterModel !== 'all') filtered = filtered.filter(e => e.deliveryModel === filterModel);
  if (filterStatus !== 'all') filtered = filtered.filter(e => e.status === filterStatus);

  return `
    <div class="fade-in">
      <div class="section-header">
        <div>
          <div class="section-title">${ICONS.past} Past Estimates</div>
          <div class="section-desc">${estimates.length} estimates in library — compare, benchmark, and reuse historical data</div>
        </div>
        <div class="section-actions">
          <button class="btn btn-sm" onclick="toggleComparisonMode()">
            ${ICONS.analytics} ${STATE.comparisonMode ? 'Exit Comparison' : 'Compare Mode'}
          </button>
        </div>
      </div>

      <!-- Filters -->
      <div class="card mb-16" style="padding: 12px 16px;">
        <div class="flex items-center gap-12 flex-wrap">
          <span style="font-size: 0.75rem; font-weight: 600; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.06em;">${ICONS.filter} Filters</span>
          <select class="form-select" style="width: auto; min-width: 160px; padding: 5px 30px 5px 10px;" onchange="STATE.pastFilterModel=this.value; renderPage();">
            <option value="all">All Models</option>
            ${Object.entries(DELIVERY_MODELS).map(([k,v]) => `<option value="${k}" ${filterModel===k?'selected':''}>${v.name}</option>`).join('')}
          </select>
          <select class="form-select" style="width: auto; min-width: 120px; padding: 5px 30px 5px 10px;" onchange="STATE.pastFilterStatus=this.value; renderPage();">
            <option value="all">All Status</option>
            <option value="draft" ${filterStatus==='draft'?'selected':''}>Draft</option>
            <option value="sent" ${filterStatus==='sent'?'selected':''}>Sent</option>
            <option value="won" ${filterStatus==='won'?'selected':''}>Won</option>
            <option value="lost" ${filterStatus==='lost'?'selected':''}>Lost</option>
          </select>
          <span style="margin-left: auto; font-size: 0.78rem; color: var(--text-muted);">${filtered.length} results</span>
        </div>
      </div>

      <!-- KPI Summary -->
      <div class="kpi-grid mb-20">
        <div class="kpi-card">
          <div class="kpi-label">Total Estimates</div>
          <div class="kpi-value">${estimates.length}</div>
        </div>
        <div class="kpi-card">
          <div class="kpi-label">Pipeline Value</div>
          <div class="kpi-value">${fmt(estimates.reduce((s,e) => s + (e.totalCost || calcEstimateTotal(e)), 0))}</div>
        </div>
        <div class="kpi-card">
          <div class="kpi-label">Win Rate</div>
          <div class="kpi-value">${estimates.filter(e=>e.status==='won').length > 0 ? Math.round(estimates.filter(e=>e.status==='won').length / estimates.filter(e=>['won','lost'].includes(e.status)).length * 100) : 0}%</div>
          <div class="kpi-change up">${ICONS.arrowUp} ${estimates.filter(e=>e.status==='won').length} won</div>
        </div>
        <div class="kpi-card">
          <div class="kpi-label">Avg Estimate</div>
          <div class="kpi-value">${fmt(estimates.length > 0 ? estimates.reduce((s,e) => s + (e.totalCost || 0), 0) / estimates.length : 0)}</div>
        </div>
      </div>

      ${STATE.comparisonMode ? renderComparisonView(filtered) : ''}

      <!-- Estimate Cards -->
      ${filtered.map(est => renderEstimateCard(est)).join('')}

      ${filtered.length === 0 ? `
        <div class="empty-state">
          ${ICONS.past}
          <h3>No estimates found</h3>
          <p>Try adjusting your filters or create a new estimate.</p>
        </div>
      ` : ''}
    </div>
  `;
}

function renderEstimateCard(est) {
  const total = est.totalCost || calcEstimateTotal(est);
  const model = DELIVERY_MODELS[est.deliveryModel];
  const statusClass = est.status || 'draft';

  // Get phase costs for the mini breakdown
  const phaseCosts = {};
  if (est.phases) {
    Object.entries(est.phases).forEach(([key, phase]) => {
      phaseCosts[key] = calcPhaseTotal(phase);
    });
  }

  return `
    <div class="estimate-card" onclick="viewEstimateDetail('${est.id}')">
      <div class="estimate-card-header">
        <div>
          <div class="estimate-card-title">${est.name}</div>
          <div class="estimate-card-meta">
            <span>${ICONS.building} ${est.client}</span>
            <span>${ICONS.location} ${est.location}</span>
            <span>${ICONS.calendar} ${est.createdAt}</span>
            <span>${model ? ICONS[model.icon] + ' ' + model.name : ''}</span>
          </div>
        </div>
        <div style="text-align:right;">
          <div class="badge badge-${statusClass}">${statusClass}</div>
          <div class="text-mono" style="font-size:1.1rem; font-weight:700; margin-top:6px; color:var(--text-primary);">${fmt(total)}</div>
        </div>
      </div>
      <p style="font-size:0.78rem; color:var(--text-muted); margin-bottom:8px;">${est.scopeDescription ? est.scopeDescription.substring(0, 150) + '...' : 'No description'}</p>
      <div class="estimate-card-costs">
        ${Object.entries(phaseCosts).slice(0, 5).map(([key, cost]) => `
          <div class="estimate-cost-item">
            <div class="estimate-cost-label">${PHASE_DEFS[key]?.name || key}</div>
            <div class="estimate-cost-value">${fmt(cost)}</div>
          </div>
        `).join('')}
      </div>
      <div style="margin-top:10px; display:flex; gap:6px;">
        <button class="btn btn-sm btn-ghost" onclick="event.stopPropagation(); connectEstimate('${est.id}')">
          ${ICONS.link} Connect
        </button>
        <button class="btn btn-sm btn-ghost" onclick="event.stopPropagation(); duplicateEstimate('${est.id}')">
          ${ICONS.copy} Duplicate
        </button>
        <button class="btn btn-sm btn-ghost" onclick="event.stopPropagation(); loadEstimateToWorkspace('${est.id}')">
          ${ICONS.edit} Load to Workspace
        </button>
      </div>
    </div>
  `;
}

function renderComparisonView(estimates) {
  if (estimates.length < 2) return `
    <div class="card mb-16" style="padding:20px; text-align:center; color:var(--text-muted);">
      Need at least 2 estimates to compare. Adjust filters if needed.
    </div>`;

  // Find common phases across filtered estimates
  const allPhases = new Set();
  estimates.forEach(est => {
    if (est.phases) Object.keys(est.phases).forEach(pk => allPhases.add(pk));
  });

  const maxTotal = Math.max(...estimates.map(e => e.totalCost || calcEstimateTotal(e)));

  return `
    <div class="card mb-20">
      <div class="card-header">
        <div class="card-title">${ICONS.analytics} Benchmark Comparison</div>
      </div>
      <div style="margin-bottom: 20px;">
        <div class="bar-chart-row" style="font-weight:600; font-size:0.72rem; color:var(--text-muted); text-transform:uppercase; letter-spacing:0.06em;">
          <div class="bar-chart-label">Project</div>
          <div class="bar-chart-track" style="background:none; height:auto;">Total Cost</div>
          <div class="bar-chart-amount">Amount</div>
        </div>
        ${estimates.map(est => {
          const total = est.totalCost || calcEstimateTotal(est);
          const pct = maxTotal > 0 ? (total / maxTotal * 100) : 0;
          return `
            <div class="bar-chart-row">
              <div class="bar-chart-label" title="${est.name}">${est.name}</div>
              <div class="bar-chart-track">
                <div class="bar-chart-fill" style="width:${pct}%;">
                  ${pct > 20 ? `<span class="bar-chart-value">${fmtPct(pct)}</span>` : ''}
                </div>
              </div>
              <div class="bar-chart-amount">${fmt(total)}</div>
            </div>
          `;
        }).join('')}
      </div>

      <!-- Phase-by-phase comparison table -->
      <div class="table-container">
        <table>
          <thead>
            <tr>
              <th>Phase</th>
              ${estimates.map(e => `<th class="cell-right">${e.name.substring(0,20)}</th>`).join('')}
              <th class="cell-right">Average</th>
            </tr>
          </thead>
          <tbody>
            ${[...allPhases].map(pk => {
              const vals = estimates.map(e => e.phases && e.phases[pk] ? calcPhaseTotal(e.phases[pk]) : 0);
              const avg = vals.reduce((a,b) => a+b, 0) / vals.filter(v => v > 0).length || 0;
              return `
                <tr>
                  <td class="cell-bold">${PHASE_DEFS[pk]?.name || pk}</td>
                  ${vals.map(v => `<td class="cell-right cell-mono">${v > 0 ? fmt(v) : '—'}</td>`).join('')}
                  <td class="cell-right cell-mono cell-accent">${fmt(avg)}</td>
                </tr>
              `;
            }).join('')}
          </tbody>
          <tfoot class="table-footer">
            <tr>
              <td class="cell-bold">Total</td>
              ${estimates.map(e => `<td class="cell-right cell-mono">${fmt(e.totalCost || calcEstimateTotal(e))}</td>`).join('')}
              <td class="cell-right cell-mono cell-accent">${fmt(estimates.reduce((s,e) => s + (e.totalCost || calcEstimateTotal(e)), 0) / estimates.length)}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  `;
}


// --- CONNECTOR PAGE ---
function renderConnectorPage() {
  const connectedId = STATE.connectedEstimateId;
  const connected = connectedId ? STATE.estimates.find(e => e.id === connectedId) : null;
  const currentEst = STATE.currentEstimate;

  return `
    <div class="fade-in">
      <div class="section-header">
        <div>
          <div class="section-title">${ICONS.connector} Estimate Connector</div>
          <div class="section-desc">Link a past estimate to your current workspace. Drag costs from the connected estimate into your current project.</div>
        </div>
      </div>

      <div class="grid-2">
        <!-- Left: Select an estimate to connect -->
        <div>
          <div class="card mb-16">
            <div class="card-header">
              <div class="card-title">Select Past Estimate to Connect</div>
            </div>
            <div class="form-group">
              <select class="form-select" onchange="connectEstimate(this.value)">
                <option value="">— Choose an estimate —</option>
                ${STATE.estimates.map(est => `
                  <option value="${est.id}" ${connectedId === est.id ? 'selected' : ''}>${est.name} — ${fmt(est.totalCost || calcEstimateTotal(est))}</option>
                `).join('')}
              </select>
            </div>
          </div>

          ${connected ? `
            <div class="card mb-16">
              <div class="card-header">
                <div>
                  <div class="card-title">${connected.name}</div>
                  <div class="card-subtitle">${connected.client} • ${connected.location} • ${DELIVERY_MODELS[connected.deliveryModel]?.name || ''}</div>
                </div>
                <div class="badge badge-${connected.status}">${connected.status}</div>
              </div>
              <p style="font-size:0.78rem; color:var(--text-muted); margin-bottom:12px;">${connected.scopeDescription || ''}</p>
              <div class="section-divider">Drag Items Into Your Current Estimate</div>

              ${connected.phases ? Object.entries(connected.phases).map(([phaseKey, phase]) => `
                <div style="margin-bottom: 12px;">
                  <div style="font-size:0.75rem; font-weight:600; color:var(--accent); margin-bottom:6px; text-transform:uppercase; letter-spacing:0.06em;">
                    ${PHASE_DEFS[phaseKey]?.name || phaseKey}
                  </div>
                  ${phase.items ? phase.items.map((item, idx) => `
                    <div class="connector-item" draggable="true"
                         ondragstart="dragConnectorItem(event, '${phaseKey}', ${idx})"
                         ondblclick="quickAddFromConnector('${phaseKey}', ${idx})">
                      <div class="flex items-center gap-8" style="width:100%;">
                        <span class="drag-handle">${ICONS.grip}</span>
                        <div style="flex:1; min-width:0;">
                          <div class="connector-item-title">${item.name}</div>
                          <div class="connector-item-meta">${fmtNum(item.qty)} ${item.unit} × ${fmtDec(item.rate)}</div>
                        </div>
                        <div class="connector-item-cost">${fmt(item.total)}</div>
                      </div>
                    </div>
                  `).join('') : ''}
                </div>
              `).join('') : '<p style="color:var(--text-muted); font-size:0.82rem;">No phase data available.</p>'}
            </div>
          ` : `
            <div class="empty-state">
              ${ICONS.connector}
              <h3>No estimate connected</h3>
              <p>Select a past estimate above to browse and drag costs into your current workspace.</p>
            </div>
          `}
        </div>

        <!-- Right: Current estimate drop zone -->
        <div>
          <div class="card" style="min-height: 400px;"
               ondrop="dropConnectorItem(event)" ondragover="handleDragOver(event)" ondragleave="handleDragLeave(event)">
            <div class="card-header">
              <div class="card-title">Current Estimate: ${currentEst.name || 'Untitled'}</div>
              <div class="badge badge-draft">${currentEst.deliveryModel ? DELIVERY_MODELS[currentEst.deliveryModel]?.name : 'No model'}</div>
            </div>
            <p style="font-size: 0.78rem; color: var(--text-muted); margin-bottom: 16px;">
              Drag items from the connected estimate here, or double-click to quick-add.
              Items will be added to the matching phase in your current estimate.
            </p>
            ${currentEst.phases && Object.keys(currentEst.phases).length > 0 ?
              Object.entries(currentEst.phases).map(([phaseKey, phase]) => `
                <div style="margin-bottom:12px;">
                  <div style="font-size:0.72rem; font-weight:600; color:var(--text-muted); text-transform:uppercase; letter-spacing:0.06em; margin-bottom:4px;">
                    ${PHASE_DEFS[phaseKey]?.name || phaseKey} — ${fmt(calcPhaseTotal(phase))}
                  </div>
                  ${phase.items ? phase.items.map(item => `
                    <div style="padding:4px 8px; font-size:0.78rem; color:var(--text-secondary); display:flex; justify-content:space-between;">
                      <span>${item.name}</span>
                      <span class="text-mono">${fmt(item.total)}</span>
                    </div>
                  `).join('') : ''}
                </div>
              `).join('')
            : `
              <div class="empty-state" style="padding:40px 20px;">
                <p>Drop items here to build your estimate.<br>Go to Output tab to see the full breakdown.</p>
              </div>
            `}
          </div>
        </div>
      </div>
    </div>
  `;
}

// --- PRICING LIBRARY PAGE ---
function renderPricingLibraryPage() {
  return `
    <div class="fade-in">
      <div class="section-header">
        <div>
          <div class="section-title">${ICONS.pricing} Pricing Library</div>
          <div class="section-desc">Current material costs, labor rates, and equipment pricing. All prices reflect latest supplier quotes and internal standards.</div>
        </div>
        <div class="section-actions">
          <div class="search-box" style="min-width:220px;">
            ${ICONS.search}
            <input type="text" id="pricing-search" placeholder="Search pricing..." oninput="filterPricing(this.value)">
          </div>
        </div>
      </div>

      ${Object.entries(PRICING_LIBRARY).map(([category, items]) => `
        <div class="pricing-category mb-12" data-category="${category}">
          <div class="pricing-category-header" onclick="togglePricingCategory(this)">
            <div class="pricing-category-title">${category}</div>
            <div class="flex items-center gap-8">
              <span class="pricing-category-count">${items.length} items</span>
              ${ICONS.chevDown}
            </div>
          </div>
          <div class="pricing-category-body" style="display:block;">
            <div class="table-container" style="border:none; border-radius:0;">
              <table>
                <thead>
                  <tr>
                    <th>Item</th>
                    <th class="cell-center">Unit</th>
                    <th class="cell-right">Current Price</th>
                    <th class="cell-right">Low</th>
                    <th class="cell-right">High</th>
                    <th>Supplier</th>
                    <th class="cell-center">Updated</th>
                  </tr>
                </thead>
                <tbody>
                  ${items.map(item => `
                    <tr class="pricing-row" data-name="${item.name.toLowerCase()}">
                      <td class="cell-bold">${item.name}</td>
                      <td class="cell-center"><span class="badge badge-draft">${item.unit}</span></td>
                      <td class="cell-right cell-mono cell-accent">${item.unit === 'hr' || item.unit === 'day' || item.unit === 'month' || item.unit === 'truck' || item.unit === 'each' || item.unit === 'ton' || item.unit === 'LS' ? fmt(item.price) : fmtDec(item.price)}</td>
                      <td class="cell-right cell-mono text-muted">${fmtDec(item.range[0])}</td>
                      <td class="cell-right cell-mono text-muted">${fmtDec(item.range[1])}</td>
                      <td style="font-size:0.78rem;">${item.supplier}</td>
                      <td class="cell-center text-muted text-sm">${item.updated}</td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}


// --- ANALYTICS PAGE ---
function renderAnalyticsPage() {
  const estimates = STATE.estimates;
  const wonEstimates = estimates.filter(e => e.status === 'won');
  const totalPipeline = estimates.reduce((s, e) => s + (e.totalCost || 0), 0);
  const avgEstimate = estimates.length > 0 ? totalPipeline / estimates.length : 0;

  // Group by delivery model
  const byModel = {};
  estimates.forEach(e => {
    const m = e.deliveryModel || 'unknown';
    if (!byModel[m]) byModel[m] = { count: 0, total: 0 };
    byModel[m].count++;
    byModel[m].total += (e.totalCost || 0);
  });

  // Group by status
  const byStatus = {};
  estimates.forEach(e => {
    const s = e.status || 'draft';
    if (!byStatus[s]) byStatus[s] = { count: 0, total: 0 };
    byStatus[s].count++;
    byStatus[s].total += (e.totalCost || 0);
  });

  // Phase cost averages across all estimates
  const phaseAvgs = {};
  estimates.forEach(est => {
    if (est.phases) {
      Object.entries(est.phases).forEach(([pk, phase]) => {
        const cost = calcPhaseTotal(phase);
        if (cost > 0) {
          if (!phaseAvgs[pk]) phaseAvgs[pk] = { total: 0, count: 0 };
          phaseAvgs[pk].total += cost;
          phaseAvgs[pk].count++;
        }
      });
    }
  });

  const maxPhaseAvg = Math.max(...Object.values(phaseAvgs).map(p => p.total / p.count), 1);

  return `
    <div class="fade-in">
      <div class="section-header">
        <div>
          <div class="section-title">${ICONS.analytics} Analytics & Insights</div>
          <div class="section-desc">Historical trends, benchmarks, and cost intelligence from your estimating library</div>
        </div>
      </div>

      <div class="kpi-grid mb-20">
        <div class="kpi-card">
          <div class="kpi-label">Total Pipeline</div>
          <div class="kpi-value">${fmt(totalPipeline)}</div>
        </div>
        <div class="kpi-card">
          <div class="kpi-label">Average Estimate</div>
          <div class="kpi-value">${fmt(avgEstimate)}</div>
        </div>
        <div class="kpi-card">
          <div class="kpi-label">Win Rate</div>
          <div class="kpi-value">${estimates.filter(e=>['won','lost'].includes(e.status)).length > 0 ? Math.round(wonEstimates.length / estimates.filter(e=>['won','lost'].includes(e.status)).length * 100) : 0}%</div>
        </div>
        <div class="kpi-card">
          <div class="kpi-label">Largest Estimate</div>
          <div class="kpi-value">${fmt(Math.max(...estimates.map(e => e.totalCost || 0), 0))}</div>
        </div>
      </div>

      <div class="grid-2 mb-20">
        <!-- By Delivery Model -->
        <div class="chart-container">
          <div class="chart-header">
            <div class="chart-title">By Delivery Model</div>
          </div>
          ${Object.entries(byModel).map(([key, data]) => {
            const pct = totalPipeline > 0 ? (data.total / totalPipeline * 100) : 0;
            return `
              <div class="bar-chart-row">
                <div class="bar-chart-label">${DELIVERY_MODELS[key]?.name || key}</div>
                <div class="bar-chart-track">
                  <div class="bar-chart-fill" style="width:${Math.max(pct,3)}%">
                    ${pct > 15 ? `<span class="bar-chart-value">${data.count}</span>` : ''}
                  </div>
                </div>
                <div class="bar-chart-amount">${fmt(data.total)}</div>
              </div>
            `;
          }).join('')}
        </div>

        <!-- By Status -->
        <div class="chart-container">
          <div class="chart-header">
            <div class="chart-title">By Status</div>
          </div>
          ${Object.entries(byStatus).map(([status, data]) => {
            const pct = estimates.length > 0 ? (data.count / estimates.length * 100) : 0;
            return `
              <div class="bar-chart-row">
                <div class="bar-chart-label"><span class="badge badge-${status}">${status}</span></div>
                <div class="bar-chart-track">
                  <div class="bar-chart-fill" style="width:${Math.max(pct,5)}%">
                    ${pct > 15 ? `<span class="bar-chart-value">${data.count}</span>` : ''}
                  </div>
                </div>
                <div class="bar-chart-amount">${fmt(data.total)}</div>
              </div>
            `;
          }).join('')}
        </div>
      </div>

      <!-- Phase Cost Averages -->
      <div class="chart-container mb-20">
        <div class="chart-header">
          <div class="chart-title">Average Phase Costs (Across All Estimates)</div>
        </div>
        ${Object.entries(phaseAvgs).sort((a,b) => (b[1].total/b[1].count) - (a[1].total/a[1].count)).map(([pk, data]) => {
          const avg = data.total / data.count;
          const pct = (avg / maxPhaseAvg * 100);
          return `
            <div class="bar-chart-row">
              <div class="bar-chart-label">${PHASE_DEFS[pk]?.name || pk}</div>
              <div class="bar-chart-track">
                <div class="bar-chart-fill" style="width:${Math.max(pct,3)}%">
                  ${pct > 20 ? `<span class="bar-chart-value">${data.count} est.</span>` : ''}
                </div>
              </div>
              <div class="bar-chart-amount">${fmt(avg)}</div>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;
}

// --- Q&A PAGE ---
function renderQAPage() {
  const faqs = [
    {
      q: 'How do I create a new estimate?',
      a: 'Navigate to the <strong>Input</strong> tab in the sidebar. Fill in the project information, select your delivery model, describe the project scope, and upload any relevant documents. Then click <strong>Generate Estimate</strong> to create a baseline estimate, or manually add line items in the <strong>Output</strong> tab.'
    },
    {
      q: 'What are the four delivery models?',
      a: '<strong>EOR Build:</strong> Full scope — StructureCraft is Engineer of Record and handles everything from consulting through installation.<br><strong>Delegated Design Build:</strong> Same as EOR but without consulting engineering. SC does timber design, fab, and install.<br><strong>DLT Supply Only:</strong> Just supplying DLT material from our shop — material, fab, and shipping.<br><strong>Engineer + Supervise:</strong> SC is structural engineer for superstructure with site supervision, but no fabrication or installation.'
    },
    {
      q: 'How do I use the Connector tool?',
      a: 'Go to the <strong>Connector</strong> page. Select a past estimate from the dropdown. All its line items will appear in the left panel. You can <strong>drag and drop</strong> items into your current estimate on the right, or <strong>double-click</strong> any item to quick-add it. Items are matched to the appropriate phase in your current estimate.'
    },
    {
      q: 'How do I compare past estimates?',
      a: 'Go to the <strong>Past Estimates</strong> page and click <strong>Compare Mode</strong>. This shows a side-by-side benchmark of all filtered estimates, including phase-by-phase cost breakdowns and totals. Use the filters to narrow down to specific delivery models or statuses.'
    },
    {
      q: 'Can I edit the pricing assumptions?',
      a: 'Yes. In the <strong>Output</strong> tab, the Assumptions box at the top shows all current pricing assumptions. <strong>Click any value</strong> to edit it inline. Changes immediately recalculate the estimate. You can also update default assumptions in <strong>Settings</strong>.'
    },
    {
      q: 'How does the file upload work?',
      a: 'Each upload zone accepts specific file types (PDF, DOCX, XLSX) up to <strong>40 MB each</strong>. Files are stored locally in your browser. In the future, uploaded files will be processed by AI to automatically extract quantities and requirements. Currently, files are stored for reference.'
    },
    {
      q: 'What do the different themes mean?',
      a: 'The 10 themes are purely aesthetic — they change the color scheme and feel of the interface. Go to <strong>Settings</strong> to browse all themes, or click the theme icon in the bottom-left sidebar to cycle through them. Your preference is saved automatically.'
    },
    {
      q: 'How are costs calculated?',
      a: 'Each line item has a Qty × Rate = Total. Phase subtotals are the sum of all line items. The grand total adds Overhead, Margin, Contingency, and Bond/Insurance percentages on top of the direct cost subtotal. All percentages are configurable in the Assumptions box.'
    },
    {
      q: 'What does "Load to Workspace" do?',
      a: 'When you click <strong>Load to Workspace</strong> on a past estimate, it copies that estimate\'s full data into the Input/Output workspace so you can modify it as a starting point for a new estimate. The original estimate is not affected.'
    },
    {
      q: 'Is my data saved?',
      a: 'All data is saved in your browser\'s local storage. This means your estimates persist between sessions on the same device and browser. For sharing across devices, use the Export feature to download your data.'
    },
  ];

  return `
    <div class="fade-in">
      <div class="section-header">
        <div>
          <div class="section-title">${ICONS.qa} Questions & Answers</div>
          <div class="section-desc">Common questions about using the StructureCraft Estimator Pro platform</div>
        </div>
      </div>

      ${faqs.map((faq, i) => `
        <div class="qa-item" id="qa-${i}">
          <div class="qa-question" onclick="toggleQA(${i})">
            <span>${faq.q}</span>
            ${ICONS.chevDown}
          </div>
          <div class="qa-answer">${faq.a}</div>
        </div>
      `).join('')}

      <div class="section-divider mt-24">Keyboard Shortcuts</div>
      <div class="card">
        <div class="table-container" style="border:none;">
          <table>
            <tbody>
              <tr><td class="cell-bold" style="width:180px;"><kbd>⌘K</kbd> / <kbd>Ctrl+K</kbd></td><td>Open command palette</td></tr>
              <tr><td class="cell-bold"><kbd>1</kbd>-<kbd>8</kbd></td><td>Quick-navigate to pages (when not in an input field)</td></tr>
              <tr><td class="cell-bold"><kbd>T</kbd></td><td>Cycle through themes</td></tr>
              <tr><td class="cell-bold"><kbd>N</kbd></td><td>New estimate</td></tr>
              <tr><td class="cell-bold"><kbd>S</kbd></td><td>Save current estimate</td></tr>
              <tr><td class="cell-bold"><kbd>G</kbd></td><td>Toggle user guide</td></tr>
              <tr><td class="cell-bold"><kbd>Esc</kbd></td><td>Close modals, panels, and command palette</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;
}

// --- SETTINGS PAGE ---
function renderSettingsPage() {
  const currentTheme = STATE.currentTheme;
  const assumptions = STATE.currentEstimate.assumptions;

  return `
    <div class="fade-in">
      <div class="section-header">
        <div>
          <div class="section-title">${ICONS.settings} Settings</div>
          <div class="section-desc">Customize your experience, default assumptions, and display preferences</div>
        </div>
      </div>

      <!-- Theme Selection -->
      <div class="card mb-20">
        <div class="card-header">
          <div class="card-title">Display Theme</div>
          <div class="card-subtitle">Choose from 10 carefully designed themes</div>
        </div>
        <div class="theme-grid">
          ${THEMES.map(theme => `
            <div class="theme-card ${currentTheme === theme.id ? 'active' : ''}" onclick="setTheme('${theme.id}')">
              <div class="theme-preview" style="background:${theme.preview};"></div>
              <div class="theme-card-name">${theme.name}</div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Default Assumptions -->
      <div class="card mb-20">
        <div class="card-header">
          <div>
            <div class="card-title">Default Pricing Assumptions</div>
            <div class="card-subtitle">These defaults apply to all new estimates. Existing estimates are not affected.</div>
          </div>
          <button class="btn btn-sm" onclick="resetAssumptions()">Reset to Defaults</button>
        </div>

        <div class="section-divider">Markup & Overhead</div>
        <div class="form-row">
          <div class="form-group">
            <label class="form-label">Margin %</label>
            <input class="form-input" type="number" step="0.5" value="${assumptions.marginPercent}" onchange="updateAssumption('marginPercent', parseFloat(this.value))">
          </div>
          <div class="form-group">
            <label class="form-label">Overhead %</label>
            <input class="form-input" type="number" step="0.5" value="${assumptions.overheadPercent}" onchange="updateAssumption('overheadPercent', parseFloat(this.value))">
          </div>
          <div class="form-group">
            <label class="form-label">Contingency %</label>
            <input class="form-input" type="number" step="0.5" value="${assumptions.contingencyPercent}" onchange="updateAssumption('contingencyPercent', parseFloat(this.value))">
          </div>
          <div class="form-group">
            <label class="form-label">Bond & Insurance %</label>
            <input class="form-input" type="number" step="0.5" value="${assumptions.bondInsurancePercent}" onchange="updateAssumption('bondInsurancePercent', parseFloat(this.value))">
          </div>
        </div>

        <div class="section-divider">Material Pricing</div>
        <div class="form-row">
          <div class="form-group">
            <label class="form-label">Glulam ($/BF)</label>
            <input class="form-input" type="number" step="0.05" value="${assumptions.glulamPriceBF}" onchange="updateAssumption('glulamPriceBF', parseFloat(this.value))">
          </div>
          <div class="form-group">
            <label class="form-label">CLT 3-ply ($/SF)</label>
            <input class="form-input" type="number" step="0.5" value="${assumptions.cltPriceSF3}" onchange="updateAssumption('cltPriceSF3', parseFloat(this.value))">
          </div>
          <div class="form-group">
            <label class="form-label">CLT 5-ply ($/SF)</label>
            <input class="form-input" type="number" step="0.5" value="${assumptions.cltPriceSF5}" onchange="updateAssumption('cltPriceSF5', parseFloat(this.value))">
          </div>
          <div class="form-group">
            <label class="form-label">DLT ($/SF)</label>
            <input class="form-input" type="number" step="0.5" value="${assumptions.dltPriceSF}" onchange="updateAssumption('dltPriceSF', parseFloat(this.value))">
          </div>
        </div>

        <div class="section-divider">Labor Rates</div>
        <div class="form-row">
          <div class="form-group">
            <label class="form-label">Engineering ($/hr)</label>
            <input class="form-input" type="number" step="5" value="${assumptions.engHourlyRate}" onchange="updateAssumption('engHourlyRate', parseFloat(this.value))">
          </div>
          <div class="form-group">
            <label class="form-label">Drafting ($/hr)</label>
            <input class="form-input" type="number" step="5" value="${assumptions.draftHourlyRate}" onchange="updateAssumption('draftHourlyRate', parseFloat(this.value))">
          </div>
          <div class="form-group">
            <label class="form-label">Shop Fabrication ($/hr)</label>
            <input class="form-input" type="number" step="1" value="${assumptions.shopHourlyRate}" onchange="updateAssumption('shopHourlyRate', parseFloat(this.value))">
          </div>
          <div class="form-group">
            <label class="form-label">Site Carpenter ($/hr)</label>
            <input class="form-input" type="number" step="5" value="${assumptions.siteCarpentrHourlyRate}" onchange="updateAssumption('siteCarpentrHourlyRate', parseFloat(this.value))">
          </div>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label class="form-label">Site Super ($/hr)</label>
            <input class="form-input" type="number" step="5" value="${assumptions.siteSuperHourlyRate}" onchange="updateAssumption('siteSuperHourlyRate', parseFloat(this.value))">
          </div>
          <div class="form-group">
            <label class="form-label">Crane Daily Rate ($)</label>
            <input class="form-input" type="number" step="100" value="${assumptions.craneDailyRate}" onchange="updateAssumption('craneDailyRate', parseFloat(this.value))">
          </div>
          <div class="form-group">
            <label class="form-label">PM ($/hr)</label>
            <input class="form-input" type="number" step="5" value="${assumptions.pmHourlyRate}" onchange="updateAssumption('pmHourlyRate', parseFloat(this.value))">
          </div>
          <div class="form-group">
            <label class="form-label">Shop Hrs/Piece</label>
            <input class="form-input" type="number" step="0.1" value="${assumptions.shopManHoursPerPiece}" onchange="updateAssumption('shopManHoursPerPiece', parseFloat(this.value))">
          </div>
        </div>

        <div class="section-divider">Shipping & Escalation</div>
        <div class="form-row">
          <div class="form-group">
            <label class="form-label">Shipping ($/BF)</label>
            <input class="form-input" type="number" step="0.05" value="${assumptions.shippingPerBF}" onchange="updateAssumption('shippingPerBF', parseFloat(this.value))">
          </div>
          <div class="form-group">
            <label class="form-label">Shipping ($/Truck)</label>
            <input class="form-input" type="number" step="100" value="${assumptions.shippingPerTruck}" onchange="updateAssumption('shippingPerTruck', parseFloat(this.value))">
          </div>
          <div class="form-group">
            <label class="form-label">Escalation %/yr</label>
            <input class="form-input" type="number" step="0.5" value="${assumptions.escalationPercent}" onchange="updateAssumption('escalationPercent', parseFloat(this.value))">
          </div>
        </div>
      </div>

      <!-- Data Management -->
      <div class="card mb-20">
        <div class="card-header">
          <div class="card-title">Data Management</div>
        </div>
        <div class="flex gap-8 flex-wrap">
          <button class="btn" onclick="exportAllData()">
            ${ICONS.download} Export All Data (CSV)
          </button>
          <button class="btn" onclick="document.getElementById('import-file').click()">
            ${ICONS.upload} Import Data
          </button>
          <input type="file" id="import-file" style="display:none" accept=".json" onchange="importData(event)">
          <button class="btn btn-danger" onclick="confirmClearData()">
            ${ICONS.trash} Clear All Data
          </button>
        </div>
      </div>
    </div>
  `;
}


// ---- SECTION 10: ACTION FUNCTIONS ----

function updateEstimate(field, value) {
  STATE.currentEstimate[field] = value;
  STATE.currentEstimate.updatedAt = new Date().toISOString();
  saveState();
}

function updateAssumption(key, value) {
  STATE.currentEstimate.assumptions[key] = value;
  saveState();
}

function setDeliveryModel(model) {
  STATE.currentEstimate.deliveryModel = model;
  // Initialize phases for this model if they don't exist
  const phases = DELIVERY_MODELS[model].phases;
  if (!STATE.currentEstimate.phases) STATE.currentEstimate.phases = {};
  phases.forEach(pk => {
    if (!STATE.currentEstimate.phases[pk]) {
      STATE.currentEstimate.phases[pk] = { items: [], subtotal: 0 };
    }
  });
  saveState();
  renderPage();
}

function switchOutputTab(tab) {
  STATE.outputActiveTab = tab;
  renderPage();
}

function addLineItem(phaseKey) {
  if (!STATE.currentEstimate.phases) STATE.currentEstimate.phases = {};
  if (!STATE.currentEstimate.phases[phaseKey]) {
    STATE.currentEstimate.phases[phaseKey] = { items: [] };
  }
  STATE.currentEstimate.phases[phaseKey].items.push({
    name: 'New Line Item',
    qty: 0,
    unit: 'LS',
    rate: 0,
    total: 0,
  });
  saveState();
  renderPage();
}

function updateLineItem(phaseKey, idx, field, value) {
  const item = STATE.currentEstimate.phases[phaseKey].items[idx];
  if (!item) return;
  item[field] = value;
  item.total = (item.qty || 0) * (item.rate || 0);
  STATE.currentEstimate.phases[phaseKey].subtotal = calcPhaseTotal(STATE.currentEstimate.phases[phaseKey]);
  saveState();
  // Re-render the total cell without full page re-render for snappy feel
  renderPage();
}

function removeLineItem(phaseKey, idx) {
  STATE.currentEstimate.phases[phaseKey].items.splice(idx, 1);
  saveState();
  renderPage();
}

function editAssumption(key, el) {
  const current = STATE.currentEstimate.assumptions[key];
  const input = document.createElement('input');
  input.type = 'number';
  input.step = key.includes('Percent') ? '0.5' : '0.01';
  input.value = current;
  input.className = 'form-input';
  input.style.cssText = 'width:100px; padding:4px 6px; font-size:0.85rem; font-family:JetBrains Mono,monospace;';
  input.onblur = function() {
    STATE.currentEstimate.assumptions[key] = parseFloat(this.value) || 0;
    saveState();
    renderPage();
  };
  input.onkeydown = function(e) {
    if (e.key === 'Enter') this.blur();
    if (e.key === 'Escape') { renderPage(); }
  };
  el.innerHTML = '';
  el.appendChild(input);
  input.focus();
  input.select();
}

function generateEstimate() {
  const est = STATE.currentEstimate;
  const model = DELIVERY_MODELS[est.deliveryModel];
  if (!model) {
    showToast('Please select a delivery model first.', 'warning');
    return;
  }

  // Initialize phases based on delivery model with template data
  if (!est.phases) est.phases = {};
  const a = est.assumptions;

  // Use building parameters to auto-calculate quantities where available
  const area = est.buildingArea || 30000;
  const stories = est.numStories || 4;
  const floorArea = area / Math.max(stories, 1);
  const glulamBF = Math.round(area * 0.75);
  const glulamColBF = Math.round(area * 0.22);
  const cltSF = Math.round(floorArea * stories * 0.85);
  const steelTons = Math.max(Math.round(area / 4000), 6);
  const fabHrs = Math.round(area * 0.045);
  const siteHrs = Math.round(area * 0.055);
  const laborHrs = Math.round(area * 0.02);
  const superHrs = Math.round(siteHrs * 0.22);
  const craneDays = Math.round(area / 1400);
  const craneOpHrs = craneDays * 8;
  const truckLoads = Math.max(Math.round(area / 2500), 8);
  const sdHrs = Math.round(60 + area * 0.002);
  const ddHrs = Math.round(100 + area * 0.003);
  const cdHrs = Math.round(140 + area * 0.005);
  const caHrs = Math.round(40 + area * 0.001);
  const pmHrs = Math.round(120 + area * 0.004);

  // Generate template line items based on delivery model
  const templates = {
    'consulting': [
      { name: 'SD Structural Engineering', qty: sdHrs, unit: 'hr', rate: a.engHourlyRate },
      { name: 'DD Structural Engineering', qty: ddHrs, unit: 'hr', rate: a.engHourlyRate },
      { name: 'CD Structural Engineering', qty: cdHrs, unit: 'hr', rate: a.engHourlyRate },
      { name: 'CA Services', qty: caHrs, unit: 'hr', rate: a.engHourlyRate },
    ],
    'structural-engineering': [
      { name: 'SD Structural Engineering', qty: Math.round(sdHrs * 1.1), unit: 'hr', rate: a.engHourlyRate },
      { name: 'DD Structural Engineering', qty: Math.round(ddHrs * 1.2), unit: 'hr', rate: a.engHourlyRate },
      { name: 'CD Structural Engineering', qty: Math.round(cdHrs * 1.15), unit: 'hr', rate: a.engHourlyRate },
      { name: 'CA Services', qty: Math.round(caHrs * 1.2), unit: 'hr', rate: a.engHourlyRate },
    ],
    'timber-engineering': [
      { name: 'Shop Drawing Engineering', qty: Math.round(area * 0.008), unit: 'hr', rate: 180 },
      { name: 'Erection Engineering', qty: Math.round(area * 0.0025), unit: 'hr', rate: 180 },
      { name: 'Connection Design', qty: Math.round(area * 0.005), unit: 'hr', rate: 180 },
      { name: 'Drafting / Detailing', qty: Math.round(area * 0.012), unit: 'hr', rate: a.draftHourlyRate },
    ],
    'construction-engineering': [
      { name: 'Construction Phase Engineering', qty: Math.round(area * 0.003), unit: 'hr', rate: 180 },
      { name: 'Construction Drafting', qty: Math.round(area * 0.002), unit: 'hr', rate: a.draftHourlyRate },
    ],
    'fabrication': [
      { name: 'Glulam Beams (24F-V8)', qty: glulamBF, unit: 'BF', rate: a.glulamPriceBF },
      { name: 'Glulam Columns', qty: glulamColBF, unit: 'BF', rate: a.glulamPriceBF + 0.25 },
      { name: 'CLT Floor Panels (5-ply)', qty: cltSF, unit: 'SF', rate: a.cltPriceSF5 },
      { name: 'Steel Connections', qty: steelTons, unit: 'ton', rate: a.steelConnectionsTon || 4500 },
      { name: 'Fasteners & Hardware', qty: 1, unit: 'LS', rate: Math.round(area * 1.1) },
      { name: 'Shop Fabrication Labor', qty: fabHrs, unit: 'hr', rate: a.shopHourlyRate },
      { name: 'CNC Processing', qty: 1, unit: 'LS', rate: Math.round(area * 0.9) },
    ],
    'shipping': [
      { name: 'Flatbed Trucks', qty: truckLoads, unit: 'truck', rate: a.shippingPerTruck || 4500 },
      { name: 'Oversized Load Permits', qty: Math.max(Math.round(truckLoads * 0.2), 2), unit: 'each', rate: 2500 },
      { name: 'Logistics Coordination', qty: Math.round(truckLoads * 2.5), unit: 'hr', rate: a.draftHourlyRate },
    ],
    'installation': [
      { name: 'Site Carpenters', qty: siteHrs, unit: 'hr', rate: a.siteCarpentrHourlyRate },
      { name: 'Site Laborers', qty: laborHrs, unit: 'hr', rate: a.siteLaborHourlyRate },
      { name: 'Site Superintendent', qty: superHrs, unit: 'hr', rate: a.siteSuperHourlyRate },
      { name: 'Mobile Crane', qty: craneDays, unit: 'day', rate: a.craneDailyRate },
      { name: 'Crane Operator', qty: craneOpHrs, unit: 'hr', rate: a.craneOperatorHourlyRate },
      { name: 'Rigging & Hardware', qty: 1, unit: 'LS', rate: Math.round(area * 0.5) },
    ],
    'general-conditions': [
      { name: 'Project Management', qty: pmHrs, unit: 'hr', rate: a.pmHourlyRate },
      { name: 'Insurance & Bonds', qty: 1, unit: 'LS', rate: Math.round(area * 1.6) },
      { name: 'Contingency', qty: 1, unit: 'LS', rate: Math.round(area * 1.5) },
    ],
    'dlt-material': [
      { name: 'DLT Panels - Standard', qty: Math.round(area * 0.35), unit: 'SF', rate: a.dltPriceSF },
      { name: 'Edge Banding & Finish', qty: Math.round(area * 0.35), unit: 'SF', rate: 2.50 },
      { name: 'Grading & QC', qty: 1, unit: 'LS', rate: 6500 },
    ],
    'site-supervision': [
      { name: 'Site Supervisor (full time)', qty: Math.round(pmHrs * 1.8), unit: 'hr', rate: a.siteSuperHourlyRate },
      { name: 'Site Visits - Engineer', qty: Math.round(caHrs * 0.8), unit: 'hr', rate: a.engHourlyRate },
      { name: 'Travel & Expenses', qty: 1, unit: 'LS', rate: 6000 },
    ],
    'coordination': [
      { name: 'Fabricator Coordination', qty: Math.round(pmHrs * 0.5), unit: 'hr', rate: a.pmHourlyRate },
      { name: 'Installer Coordination', qty: Math.round(pmHrs * 0.4), unit: 'hr', rate: a.pmHourlyRate },
      { name: 'Shop Drawing Review', qty: Math.round(pmHrs * 0.3), unit: 'hr', rate: 180 },
    ],
  };

  model.phases.forEach(pk => {
    if (!est.phases[pk] || est.phases[pk].items.length === 0) {
      const templateItems = templates[pk] || [];
      est.phases[pk] = {
        items: templateItems.map(t => ({
          name: t.name,
          qty: t.qty,
          unit: t.unit,
          rate: t.rate,
          total: t.qty * t.rate,
        })),
      };
      est.phases[pk].subtotal = calcPhaseTotal(est.phases[pk]);
    }
  });

  est.totalCost = calcEstimateTotal(est);
  est.updatedAt = new Date().toISOString();
  saveState();

  // Switch to output page
  STATE.currentPage = 'output';
  STATE.outputActiveTab = 'summary';
  renderPage();
  updateNavigation();
  showToast('Estimate generated successfully! Review in the Output tab.', 'success');
}

function saveCurrentEstimate() {
  const est = STATE.currentEstimate;
  est.totalCost = calcEstimateTotal(est);
  est.updatedAt = new Date().toISOString();

  // Add to estimates list or update existing
  const existingIdx = STATE.estimates.findIndex(e => e.id === est.id);
  if (existingIdx >= 0) {
    STATE.estimates[existingIdx] = JSON.parse(JSON.stringify(est));
  } else {
    STATE.estimates.push(JSON.parse(JSON.stringify(est)));
  }
  saveState();
  showToast('Estimate saved to library.', 'success');
}

function clearCurrentEstimate() {
  STATE.currentEstimate = createNewEstimate();
  saveState();
  renderPage();
  showToast('Workspace cleared.', 'info');
}

function connectEstimate(id) {
  STATE.connectedEstimateId = id;
  if (STATE.currentPage !== 'connector') {
    STATE.currentPage = 'connector';
    updateNavigation();
  }
  renderPage();
}

function duplicateEstimate(id) {
  const orig = STATE.estimates.find(e => e.id === id);
  if (!orig) return;
  const dupe = JSON.parse(JSON.stringify(orig));
  dupe.id = generateId();
  dupe.name = orig.name + ' (Copy)';
  dupe.status = 'draft';
  dupe.createdAt = new Date().toISOString();
  dupe.updatedAt = new Date().toISOString();
  STATE.estimates.push(dupe);
  saveState();
  renderPage();
  showToast('Estimate duplicated.', 'success');
}

function loadEstimateToWorkspace(id) {
  const est = STATE.estimates.find(e => e.id === id);
  if (!est) return;
  STATE.currentEstimate = JSON.parse(JSON.stringify(est));
  STATE.currentEstimate.id = generateId();
  STATE.currentEstimate.status = 'draft';
  STATE.currentPage = 'input';
  saveState();
  updateNavigation();
  renderPage();
  showToast('Estimate loaded to workspace. Modify and save as new.', 'success');
}

function viewEstimateDetail(id) {
  const est = STATE.estimates.find(e => e.id === id);
  if (!est) return;
  STATE.currentEstimate = JSON.parse(JSON.stringify(est));
  STATE.currentPage = 'output';
  STATE.outputActiveTab = 'summary';
  saveState();
  updateNavigation();
  renderPage();
}

function toggleComparisonMode() {
  STATE.comparisonMode = !STATE.comparisonMode;
  renderPage();
}

function toggleQA(idx) {
  const el = document.getElementById('qa-' + idx);
  if (el) el.classList.toggle('open');
}

function togglePricingCategory(header) {
  const body = header.nextElementSibling;
  if (body) body.style.display = body.style.display === 'none' ? 'block' : 'none';
}

function filterPricing(query) {
  const q = query.toLowerCase();
  document.querySelectorAll('.pricing-row').forEach(row => {
    const name = row.getAttribute('data-name') || '';
    row.style.display = name.includes(q) ? '' : 'none';
  });
}

function setTheme(themeId) {
  STATE.currentTheme = themeId;
  document.documentElement.setAttribute('data-theme', themeId);
  localStorage.setItem('sc-theme', themeId);
  const themeName = THEMES.find(t => t.id === themeId);
  document.getElementById('current-theme-name').textContent = themeName ? themeName.name : themeId;
  if (STATE.currentPage === 'settings') renderPage();
}

function cycleTheme() {
  const idx = THEMES.findIndex(t => t.id === STATE.currentTheme);
  const next = THEMES[(idx + 1) % THEMES.length];
  setTheme(next.id);
  showToast('Theme: ' + next.name, 'info');
}

function resetAssumptions() {
  STATE.currentEstimate.assumptions = getDefaultAssumptions();
  saveState();
  renderPage();
  showToast('Assumptions reset to defaults.', 'info');
}

function estimateToCSVRows(est) {
  const rows = [];
  const model = DELIVERY_MODELS[est.deliveryModel];
  const phases = est.phases || {};
  for (const [phaseKey, phase] of Object.entries(phases)) {
    const phaseName = PHASE_DEFS[phaseKey]?.name || phaseKey;
    const items = phase.items || [];
    for (const item of items) {
      rows.push({
        estimateName: est.name || '',
        client: est.client || '',
        location: est.location || '',
        projectType: est.projectType || '',
        deliveryModel: model ? model.name : est.deliveryModel || '',
        status: est.status || '',
        createdAt: est.createdAt || '',
        phase: phaseName,
        lineItem: item.name || '',
        qty: item.qty ?? '',
        unit: item.unit || '',
        rate: item.rate ?? '',
        total: item.total ?? '',
      });
    }
    // Phase subtotal row
    if (phase.subtotal != null) {
      rows.push({
        estimateName: est.name || '',
        client: est.client || '',
        location: est.location || '',
        projectType: est.projectType || '',
        deliveryModel: model ? model.name : est.deliveryModel || '',
        status: est.status || '',
        createdAt: est.createdAt || '',
        phase: phaseName,
        lineItem: 'SUBTOTAL',
        qty: '',
        unit: '',
        rate: '',
        total: phase.subtotal,
      });
    }
  }
  // Grand total row
  if (est.totalCost != null) {
    rows.push({
      estimateName: est.name || '',
      client: est.client || '',
      location: est.location || '',
      projectType: est.projectType || '',
      deliveryModel: model ? model.name : est.deliveryModel || '',
      status: est.status || '',
      createdAt: est.createdAt || '',
      phase: 'TOTAL',
      lineItem: 'GRAND TOTAL',
      qty: '',
      unit: '',
      rate: '',
      total: est.totalCost,
    });
  }
  return rows;
}

function csvEscape(val) {
  const s = String(val == null ? '' : val);
  if (s.includes(',') || s.includes('"') || s.includes('\n')) {
    return '"' + s.replace(/"/g, '""') + '"';
  }
  return s;
}

function rowsToCSV(rows) {
  if (!rows.length) return '';
  const headers = Object.keys(rows[0]);
  const lines = [headers.map(csvEscape).join(',')];
  for (const row of rows) {
    lines.push(headers.map(h => csvEscape(row[h])).join(','));
  }
  return lines.join('\n');
}

function exportEstimate() {
  const est = STATE.currentEstimate;
  const rows = estimateToCSVRows(est);
  if (!rows.length) {
    showToast('No estimate data to export. Generate an estimate first.', 'warning');
    return;
  }
  const csv = rowsToCSV(rows);
  downloadFile(csv, (est.name || 'estimate').replace(/[^a-zA-Z0-9_-]/g, '_') + '.csv', 'text/csv');
  showToast('Estimate exported as CSV.', 'success');
}

function exportAllData() {
  const allRows = [];
  const allEstimates = [...STATE.estimates];
  if (STATE.currentEstimate && STATE.currentEstimate.name) {
    const exists = allEstimates.some(e => e.id === STATE.currentEstimate.id);
    if (!exists) allEstimates.push(STATE.currentEstimate);
  }
  for (const est of allEstimates) {
    allRows.push(...estimateToCSVRows(est));
  }
  if (!allRows.length) {
    showToast('No estimate data to export.', 'warning');
    return;
  }
  const csv = rowsToCSV(allRows);
  downloadFile(csv, 'structurecraft-all-estimates.csv', 'text/csv');
  showToast('All estimates exported as CSV.', 'success');
}

function importData(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const data = JSON.parse(e.target.result);
      if (data.estimates) STATE.estimates = data.estimates;
      if (data.currentEstimate) STATE.currentEstimate = data.currentEstimate;
      saveState();
      renderPage();
      showToast('Data imported successfully.', 'success');
    } catch(err) {
      showToast('Import failed: invalid JSON.', 'error');
    }
  };
  reader.readAsText(file);
}

function confirmClearData() {
  if (confirm('Are you sure you want to clear ALL data? This cannot be undone.')) {
    localStorage.clear();
    STATE.estimates = [...SAMPLE_ESTIMATES];
    STATE.currentEstimate = createNewEstimate();
    renderPage();
    showToast('All data cleared. Sample data restored.', 'warning');
  }
}

function downloadFile(content, filename, type) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// File upload handlers
function triggerUpload(category) {
  document.getElementById('file-input-' + category)?.click();
}

function handleFileSelect(event, category) {
  const files = Array.from(event.target.files);
  addFiles(files, category);
}

function handleDrop(event, category) {
  event.preventDefault();
  event.currentTarget.classList.remove('drag-over');
  const files = Array.from(event.dataTransfer.files);
  addFiles(files, category);
}

function handleDragOver(event) {
  event.preventDefault();
  event.currentTarget.classList.add('drag-over');
}

function handleDragLeave(event) {
  event.currentTarget.classList.remove('drag-over');
}

function addFiles(files, category) {
  const MAX_SIZE = 40 * 1024 * 1024; // 40MB
  files.forEach(file => {
    if (file.size > MAX_SIZE) {
      showToast(`${file.name} exceeds 40 MB limit.`, 'error');
      return;
    }
    if (!STATE.currentEstimate.files[category]) {
      STATE.currentEstimate.files[category] = [];
    }
    STATE.currentEstimate.files[category].push({
      name: file.name,
      size: file.size,
      type: file.type,
      lastModified: file.lastModified,
    });
  });
  saveState();
  renderPage();
  showToast(`${files.length} file(s) added.`, 'success');
}

function removeFile(category, index) {
  STATE.currentEstimate.files[category].splice(index, 1);
  saveState();
  renderPage();
}

// Connector drag-drop
function dragConnectorItem(event, phaseKey, idx) {
  event.dataTransfer.setData('text/plain', JSON.stringify({ phaseKey, idx }));
}

function dropConnectorItem(event) {
  event.preventDefault();
  event.currentTarget.classList.remove('drag-over', 'drop-target');
  try {
    const data = JSON.parse(event.dataTransfer.getData('text/plain'));
    quickAddFromConnector(data.phaseKey, data.idx);
  } catch(e) {}
}

function quickAddFromConnector(phaseKey, idx) {
  const connected = STATE.estimates.find(e => e.id === STATE.connectedEstimateId);
  if (!connected || !connected.phases || !connected.phases[phaseKey]) return;
  const item = connected.phases[phaseKey].items[idx];
  if (!item) return;

  if (!STATE.currentEstimate.phases) STATE.currentEstimate.phases = {};
  if (!STATE.currentEstimate.phases[phaseKey]) {
    STATE.currentEstimate.phases[phaseKey] = { items: [] };
  }
  STATE.currentEstimate.phases[phaseKey].items.push({ ...item });
  STATE.currentEstimate.phases[phaseKey].subtotal = calcPhaseTotal(STATE.currentEstimate.phases[phaseKey]);
  saveState();
  renderPage();
  showToast(`Added "${item.name}" to ${PHASE_DEFS[phaseKey]?.name || phaseKey}`, 'success');
}


// ---- SECTION 11: ROUTING & RENDERING ----

const PAGE_MAP = {
  'input': { title: 'Input', render: renderInputPage, breadcrumb: 'Workspace → Input' },
  'output': { title: 'Output', render: renderOutputPage, breadcrumb: 'Workspace → Output' },
  'footbridge': { title: 'Footbridges', render: renderFootbridgePage, breadcrumb: 'Workspace → Footbridges' },
  'past-estimates': { title: 'Past Estimates', render: renderPastEstimatesPage, breadcrumb: 'Reference → Past Estimates' },
  'connector': { title: 'Connector', render: renderConnectorPage, breadcrumb: 'Workspace → Connector' },
  'pricing-library': { title: 'Pricing Library', render: renderPricingLibraryPage, breadcrumb: 'Reference → Pricing Library' },
  'analytics': { title: 'Analytics', render: renderAnalyticsPage, breadcrumb: 'Reference → Analytics' },
  'qa': { title: 'Q&A', render: renderQAPage, breadcrumb: 'Help → Q&A' },
  'settings': { title: 'Settings', render: renderSettingsPage, breadcrumb: 'System → Settings' },
};

function renderPage() {
  const page = PAGE_MAP[STATE.currentPage];
  if (!page) return;
  const content = document.getElementById('page-content');
  content.innerHTML = page.render();
  updateBreadcrumb(page.breadcrumb);
}

function updateBreadcrumb(text) {
  const bc = document.getElementById('breadcrumb');
  if (!bc) return;
  const parts = text.split(' → ');
  bc.innerHTML = parts.map((p, i) =>
    i === parts.length - 1
      ? `<span class="bc-current">${p}</span>`
      : `<span>${p}</span><span class="bc-sep">›</span>`
  ).join('');
}

function navigateTo(page) {
  STATE.currentPage = page;
  updateNavigation();
  renderPage();
  saveState();
}

function updateNavigation() {
  document.querySelectorAll('.nav-item').forEach(item => {
    item.classList.toggle('active', item.getAttribute('data-page') === STATE.currentPage);
  });
}

// ---- SECTION 12: USER GUIDE CONTENT ----
function renderUserGuide() {
  const guideContent = document.getElementById('guide-content');
  if (!guideContent) return;
  guideContent.innerHTML = `
    <h4>Welcome to StructureCraft Estimator Pro</h4>
    <p>Your all-in-one Mass Timber estimating platform. Build estimates faster, compare with historical data, and produce accurate fee proposals — all from one unified workspace.</p>

    <div class="guide-steps">
      <div class="guide-step">
        <div class="guide-step-num">1</div>
        <h5>Define Scope</h5>
        <p>Fill in project details, select delivery model, and describe the scope in the Input tab.</p>
      </div>
      <div class="guide-step">
        <div class="guide-step-num">2</div>
        <h5>Upload Docs</h5>
        <p>Drag and drop RFPs, drawings, and narratives (up to 40 MB each).</p>
      </div>
      <div class="guide-step">
        <div class="guide-step-num">3</div>
        <h5>Generate</h5>
        <p>Click Generate to create a baseline estimate with all applicable phases.</p>
      </div>
      <div class="guide-step">
        <div class="guide-step-num">4</div>
        <h5>Refine</h5>
        <p>Edit line items, adjust assumptions, and compare with past estimates in the Output tab.</p>
      </div>
      <div class="guide-step">
        <div class="guide-step-num">5</div>
        <h5>Compare</h5>
        <p>Use Past Estimates and Connector to benchmark against historical data.</p>
      </div>
    </div>

    <h4>Delivery Models</h4>
    <ul>
      <li><strong>EOR Build</strong> — Full scope: structural engineering, design, fabrication, shipping, installation</li>
      <li><strong>Delegated Design Build</strong> — Same as EOR without consulting engineering</li>
      <li><strong>DLT Supply Only</strong> — Material supply, fabrication, and shipping of DLT</li>
      <li><strong>Engineer + Supervise</strong> — Structural engineering and site supervision only</li>
    </ul>

    <h4>Tips</h4>
    <ul>
      <li>Press <code>⌘K</code> to open the command palette for quick navigation</li>
      <li>Click any assumption value in the Output tab to edit it inline</li>
      <li>Use the Connector to drag costs from past estimates into your current workspace</li>
      <li>All data saves automatically to your browser's local storage</li>
    </ul>
  `;
}

// ---- SECTION 13: COMMAND PALETTE ----
function initCommandPalette() {
  const commands = [
    { label: 'Go to Input', action: () => navigateTo('input'), icon: ICONS.input },
    { label: 'Go to Output', action: () => navigateTo('output'), icon: ICONS.output },
    { label: 'Go to Past Estimates', action: () => navigateTo('past-estimates'), icon: ICONS.past },
    { label: 'Go to Connector', action: () => navigateTo('connector'), icon: ICONS.connector },
    { label: 'Go to Pricing Library', action: () => navigateTo('pricing-library'), icon: ICONS.pricing },
    { label: 'Go to Analytics', action: () => navigateTo('analytics'), icon: ICONS.analytics },
    { label: 'Go to Q&A', action: () => navigateTo('qa'), icon: ICONS.qa },
    { label: 'Go to Settings', action: () => navigateTo('settings'), icon: ICONS.settings },
    { label: 'Go to Footbridges', action: () => navigateTo('footbridge'), icon: ICONS.footbridge },
    { label: 'New Estimate', action: () => { clearCurrentEstimate(); navigateTo('input'); }, icon: ICONS.plus },
    { label: 'Generate Estimate', action: generateEstimate, icon: ICONS.generate },
    { label: 'Save Estimate', action: saveCurrentEstimate, icon: ICONS.check },
    { label: 'Export Estimate (XLSX)', action: exportEstimateXLSX, icon: ICONS.xlsx },
    { label: 'Export Estimate (CSV)', action: exportEstimate, icon: ICONS.download },
    { label: 'Export All Data', action: exportAllData, icon: ICONS.download },
    { label: 'Toggle User Guide', action: toggleGuide, icon: ICONS.info },
    { label: 'Cycle Theme', action: cycleTheme, icon: ICONS.palette },
    ...THEMES.map(t => ({ label: 'Theme: ' + t.name, action: () => setTheme(t.id), icon: ICONS.palette })),
  ];

  window._commands = commands;
}

function showCommandPalette() {
  const palette = document.getElementById('command-palette');
  palette.classList.remove('hidden');
  const input = document.getElementById('palette-search');
  input.value = '';
  input.focus();
  renderPaletteResults('');
}

function hideCommandPalette() {
  document.getElementById('command-palette').classList.add('hidden');
}

function renderPaletteResults(query) {
  const results = document.getElementById('palette-results');
  const q = query.toLowerCase();
  const filtered = window._commands.filter(c => c.label.toLowerCase().includes(q)).slice(0, 10);
  results.innerHTML = filtered.map((cmd, i) => `
    <div class="palette-item ${i === 0 ? 'selected' : ''}" data-idx="${i}" onclick="executePaletteCommand(${i})">
      <span class="palette-item-icon">${typeof cmd.icon === 'string' && cmd.icon.startsWith('<') ? cmd.icon : cmd.icon}</span>
      <span class="palette-item-label">${cmd.label}</span>
    </div>
  `).join('');
  window._paletteFiltered = filtered;
  window._paletteIdx = 0;
}

function executePaletteCommand(idx) {
  const cmds = window._paletteFiltered || window._commands;
  if (cmds[idx]) {
    cmds[idx].action();
    hideCommandPalette();
  }
}

function toggleGuide() {
  const guide = document.getElementById('user-guide');
  guide.classList.toggle('collapsed');
  STATE.guideOpen = !guide.classList.contains('collapsed');
}

// ---- SECTION 14: KEYBOARD SHORTCUTS ----
function initKeyboardShortcuts() {
  document.addEventListener('keydown', function(e) {
    // Ignore when typing in inputs
    const tag = e.target.tagName;
    const isInput = tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT';

    // Command palette: Cmd+K or Ctrl+K
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      const palette = document.getElementById('command-palette');
      if (palette.classList.contains('hidden')) {
        showCommandPalette();
      } else {
        hideCommandPalette();
      }
      return;
    }

    // Escape: close things
    if (e.key === 'Escape') {
      hideCommandPalette();
      document.getElementById('modal-overlay')?.classList.add('hidden');
      return;
    }

    // Command palette navigation
    if (!document.getElementById('command-palette').classList.contains('hidden')) {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        window._paletteIdx = Math.min((window._paletteIdx || 0) + 1, (window._paletteFiltered || []).length - 1);
        updatePaletteSelection();
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        window._paletteIdx = Math.max((window._paletteIdx || 0) - 1, 0);
        updatePaletteSelection();
      } else if (e.key === 'Enter') {
        e.preventDefault();
        executePaletteCommand(window._paletteIdx || 0);
      }
      return;
    }

    if (isInput) return;

    // Quick navigation
    const navKeys = {
      '1': 'input',
      '2': 'output',
      '3': 'footbridge',
      '4': 'past-estimates',
      '5': 'connector',
      '6': 'pricing-library',
      '7': 'analytics',
      '8': 'qa',
      '9': 'settings',
    };
    if (navKeys[e.key]) {
      navigateTo(navKeys[e.key]);
      return;
    }
    if (e.key === 't' || e.key === 'T') { cycleTheme(); return; }
    if (e.key === 'n' || e.key === 'N') { clearCurrentEstimate(); navigateTo('input'); return; }
    if (e.key === 's' || e.key === 'S') { saveCurrentEstimate(); return; }
    if (e.key === 'g' || e.key === 'G') { toggleGuide(); return; }
  });
}

function updatePaletteSelection() {
  document.querySelectorAll('.palette-item').forEach((el, i) => {
    el.classList.toggle('selected', i === window._paletteIdx);
  });
}

// ---- SECTION 15: INITIALIZATION ----
function initApp() {
  // Apply saved theme
  document.documentElement.setAttribute('data-theme', STATE.currentTheme);
  const themeName = THEMES.find(t => t.id === STATE.currentTheme);
  const themeNameEl = document.getElementById('current-theme-name');
  if (themeNameEl && themeName) themeNameEl.textContent = themeName.name;

  // Load saved state
  loadState();

  // Set nav icons
  document.getElementById('nav-icon-input').innerHTML = ICONS.input;
  document.getElementById('nav-icon-output').innerHTML = ICONS.output;
  document.getElementById('nav-icon-footbridge').innerHTML = ICONS.footbridge;
  document.getElementById('nav-icon-past').innerHTML = ICONS.past;
  document.getElementById('nav-icon-connector').innerHTML = ICONS.connector;
  document.getElementById('nav-icon-pricing').innerHTML = ICONS.pricing;
  document.getElementById('nav-icon-analytics').innerHTML = ICONS.analytics;
  document.getElementById('nav-icon-qa').innerHTML = ICONS.qa;
  document.getElementById('nav-icon-settings').innerHTML = ICONS.settings;

  // Badge counts
  const pastBadge = document.getElementById('badge-past');
  if (pastBadge) pastBadge.textContent = STATE.estimates.length;

  // Navigation clicks
  document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', () => {
      const page = item.getAttribute('data-page');
      if (page) navigateTo(page);
    });
  });

  // Sidebar collapse
  document.getElementById('sidebar-collapse')?.addEventListener('click', () => {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('collapsed');
    STATE.sidebarCollapsed = sidebar.classList.contains('collapsed');
  });

  // Mobile sidebar toggle
  document.getElementById('sidebar-toggle')?.addEventListener('click', () => {
    document.getElementById('sidebar').classList.toggle('mobile-open');
  });

  // Theme cycle
  document.getElementById('theme-cycle')?.addEventListener('click', cycleTheme);

  // User guide toggle
  document.getElementById('guide-toggle')?.addEventListener('click', toggleGuide);

  // New estimate button
  document.getElementById('btn-new-estimate')?.addEventListener('click', () => {
    clearCurrentEstimate();
    navigateTo('input');
  });

  // Global search
  document.getElementById('global-search')?.addEventListener('focus', function() {
    showCommandPalette();
    this.blur();
  });

  // Command palette
  initCommandPalette();
  document.getElementById('palette-search')?.addEventListener('input', function() {
    renderPaletteResults(this.value);
  });
  document.querySelector('.palette-backdrop')?.addEventListener('click', hideCommandPalette);

  // Keyboard shortcuts
  initKeyboardShortcuts();

  // Render user guide
  renderUserGuide();

  // Render initial page
  renderPage();
  updateNavigation();

  // Hide loading screen
  setTimeout(() => {
    document.getElementById('loading-screen')?.classList.add('hidden');
  }, 1600);
}

// ---- SECTION 16: BRIDGE TYPE DEFINITIONS ----
const BRIDGE_TYPES = {
  'parabolic-arch': { name: 'Parabolic Arch', description: 'Curved glulam compression arch with deck suspended below or above' },
  'tied-arch': { name: 'Tied Arch (Bowstring)', description: 'Glulam arch with horizontal tie at deck level resisting thrust' },
  'warren-truss': { name: 'Warren Truss', description: 'Triangulated web members alternating in orientation' },
  'pratt-truss': { name: 'Pratt Truss', description: 'Vertical posts with diagonal tension members between chords' },
  'clear-span-beam': { name: 'Clear Span Beam', description: 'Deep glulam beam(s) spanning continuously between abutments' },
  'multi-span-beam': { name: 'Multi-Span Beam', description: 'Continuous or simple-span beams over intermediate piers' },
  'cable-stayed': { name: 'Cable-Stayed', description: 'Timber deck supported by stay cables from mast tower(s)' },
  'king-post-truss': { name: 'King Post Truss', description: 'Classic truss with single vertical king post and inclined struts' },
};

const FOOTBRIDGE_PHASE_DEFS = {
  'fb-engineering': { name: 'Engineering & Design', description: 'Structural design, shop drawings, and construction engineering' },
  'fb-fabrication': { name: 'Fabrication', description: 'CNC processing, glulam fabrication, steel connections, and QC' },
  'fb-shipping': { name: 'Shipping & Logistics', description: 'Transport of fabricated elements to site' },
  'fb-foundations': { name: 'Foundations & Substructure', description: 'Abutments, piers, and foundation systems' },
  'fb-installation': { name: 'Erection & Installation', description: 'Crane operations, assembly, and structural erection' },
  'fb-railing': { name: 'Railing & Finishes', description: 'Guard rails, decking, lighting, and surface finishes' },
  'fb-general': { name: 'General Conditions', description: 'Project management, insurance, bonds, and contingency' },
};

// ---- SECTION 17: BRIDGE SVG GENERATOR ----
function generateBridgeSVG(config) {
  const w = 800, h = 350;
  const pad = 60;
  const groundY = h - 40;
  const deckY = groundY - 80;
  const span = config.spanLength || 30;
  const rise = config.archRise || 0.25;
  const nSpans = config.numSpans || 1;
  const type = config.bridgeType || 'parabolic-arch';

  const leftX = pad + 40;
  const rightX = w - pad - 40;
  const spanPx = rightX - leftX;

  let elements = '';

  // Ground line
  elements += `<line x1="20" y1="${groundY}" x2="${w-20}" y2="${groundY}" stroke="var(--text-muted)" stroke-width="2" stroke-dasharray="6,4"/>`;
  elements += `<text x="${w/2}" y="${groundY+25}" text-anchor="middle" fill="var(--text-muted)" font-size="11" font-family="Inter,sans-serif">Grade</text>`;

  // Dimension line
  elements += `<line x1="${leftX}" y1="${groundY+8}" x2="${leftX}" y2="${groundY+18}" stroke="var(--text-secondary)" stroke-width="1"/>`;
  elements += `<line x1="${rightX}" y1="${groundY+8}" x2="${rightX}" y2="${groundY+18}" stroke="var(--text-secondary)" stroke-width="1"/>`;
  elements += `<line x1="${leftX}" y1="${groundY+14}" x2="${rightX}" y2="${groundY+14}" stroke="var(--text-secondary)" stroke-width="1" marker-start="url(#arrowL)" marker-end="url(#arrowR)"/>`;
  elements += `<text x="${(leftX+rightX)/2}" y="${groundY+28}" text-anchor="middle" fill="var(--accent)" font-size="12" font-weight="600" font-family="JetBrains Mono,monospace">${span}m span</text>`;

  // Abutments
  const abutW = 16, abutH = deckY - groundY + 30;
  elements += `<rect x="${leftX - abutW/2}" y="${deckY - 10}" width="${abutW}" height="${groundY - deckY + 10}" fill="var(--text-muted)" opacity="0.5" rx="2"/>`;
  elements += `<rect x="${rightX - abutW/2}" y="${deckY - 10}" width="${abutW}" height="${groundY - deckY + 10}" fill="var(--text-muted)" opacity="0.5" rx="2"/>`;

  // Deck line
  elements += `<line x1="${leftX - 10}" y1="${deckY}" x2="${rightX + 10}" y2="${deckY}" stroke="var(--accent)" stroke-width="4" stroke-linecap="round"/>`;

  if (type === 'parabolic-arch') {
    const peakY = deckY - spanPx * rise;
    let path = `M ${leftX} ${deckY}`;
    for (let i = 0; i <= 40; i++) {
      const t = i / 40;
      const x = leftX + t * spanPx;
      const y = deckY - 4 * rise * spanPx * t * (1 - t);
      path += ` L ${x} ${y}`;
    }
    elements += `<path d="${path}" fill="none" stroke="var(--accent)" stroke-width="3" stroke-linecap="round"/>`;
    // Hangers
    for (let i = 1; i < 10; i++) {
      const t = i / 10;
      const x = leftX + t * spanPx;
      const archY = deckY - 4 * rise * spanPx * t * (1 - t);
      elements += `<line x1="${x}" y1="${archY}" x2="${x}" y2="${deckY}" stroke="var(--text-secondary)" stroke-width="1" stroke-dasharray="3,3"/>`;
    }
  } else if (type === 'tied-arch') {
    const peakY = deckY - spanPx * rise;
    let path = `M ${leftX} ${deckY}`;
    for (let i = 0; i <= 40; i++) {
      const t = i / 40;
      const x = leftX + t * spanPx;
      const y = deckY - 4 * rise * spanPx * t * (1 - t);
      path += ` L ${x} ${y}`;
    }
    elements += `<path d="${path}" fill="none" stroke="var(--accent)" stroke-width="3"/>`;
    // Vertical hangers
    for (let i = 1; i < 12; i++) {
      const t = i / 12;
      const x = leftX + t * spanPx;
      const archY = deckY - 4 * rise * spanPx * t * (1 - t);
      elements += `<line x1="${x}" y1="${archY}" x2="${x}" y2="${deckY}" stroke="var(--text-secondary)" stroke-width="1.5"/>`;
    }
    // Tie member (deck acts as tie)
    elements += `<line x1="${leftX}" y1="${deckY + 4}" x2="${rightX}" y2="${deckY + 4}" stroke="var(--text-secondary)" stroke-width="2"/>`;
  } else if (type === 'warren-truss') {
    const trussH = spanPx * 0.12;
    const topY = deckY - trussH;
    elements += `<line x1="${leftX}" y1="${topY}" x2="${rightX}" y2="${topY}" stroke="var(--accent)" stroke-width="2.5"/>`;
    const nPanels = 10;
    const panelW = spanPx / nPanels;
    for (let i = 0; i <= nPanels; i++) {
      const x = leftX + i * panelW;
      if (i < nPanels) {
        const x2 = leftX + (i + 0.5) * panelW;
        elements += `<line x1="${x}" y1="${deckY}" x2="${x2}" y2="${topY}" stroke="var(--text-secondary)" stroke-width="1.5"/>`;
        elements += `<line x1="${x2}" y1="${topY}" x2="${x + panelW}" y2="${deckY}" stroke="var(--text-secondary)" stroke-width="1.5"/>`;
      }
    }
    // Verticals
    elements += `<line x1="${leftX}" y1="${topY}" x2="${leftX}" y2="${deckY}" stroke="var(--accent)" stroke-width="2"/>`;
    elements += `<line x1="${rightX}" y1="${topY}" x2="${rightX}" y2="${deckY}" stroke="var(--accent)" stroke-width="2"/>`;
  } else if (type === 'pratt-truss') {
    const trussH = spanPx * 0.12;
    const topY = deckY - trussH;
    elements += `<line x1="${leftX}" y1="${topY}" x2="${rightX}" y2="${topY}" stroke="var(--accent)" stroke-width="2.5"/>`;
    const nPanels = 8;
    const panelW = spanPx / nPanels;
    for (let i = 0; i <= nPanels; i++) {
      const x = leftX + i * panelW;
      elements += `<line x1="${x}" y1="${topY}" x2="${x}" y2="${deckY}" stroke="var(--text-secondary)" stroke-width="1.5"/>`;
      if (i < nPanels / 2) {
        elements += `<line x1="${x}" y1="${deckY}" x2="${x + panelW}" y2="${topY}" stroke="var(--text-secondary)" stroke-width="1"/>`;
      } else if (i >= nPanels / 2 && i < nPanels) {
        elements += `<line x1="${x + panelW}" y1="${deckY}" x2="${x}" y2="${topY}" stroke="var(--text-secondary)" stroke-width="1"/>`;
      }
    }
  } else if (type === 'clear-span-beam') {
    const beamD = Math.max(spanPx * 0.04, 8);
    elements += `<rect x="${leftX}" y="${deckY - beamD}" width="${spanPx}" height="${beamD}" fill="var(--accent)" opacity="0.3" stroke="var(--accent)" stroke-width="1.5" rx="2"/>`;
    elements += `<text x="${(leftX+rightX)/2}" y="${deckY - beamD/2 + 4}" text-anchor="middle" fill="var(--accent)" font-size="10" font-family="Inter,sans-serif">Glulam Beam</text>`;
  } else if (type === 'multi-span-beam') {
    const beamD = Math.max(spanPx * 0.03, 6);
    elements += `<rect x="${leftX}" y="${deckY - beamD}" width="${spanPx}" height="${beamD}" fill="var(--accent)" opacity="0.3" stroke="var(--accent)" stroke-width="1.5" rx="2"/>`;
    for (let i = 1; i < nSpans; i++) {
      const px = leftX + (spanPx / nSpans) * i;
      elements += `<rect x="${px - 6}" y="${deckY - 5}" width="12" height="${groundY - deckY + 5}" fill="var(--text-muted)" opacity="0.5" rx="2"/>`;
      elements += `<text x="${px}" y="${groundY - 8}" text-anchor="middle" fill="var(--text-muted)" font-size="9" font-family="Inter,sans-serif">Pier ${i}</text>`;
    }
  } else if (type === 'cable-stayed') {
    const towerH = spanPx * 0.35;
    const towerX = (leftX + rightX) / 2;
    const towerTopY = deckY - towerH;
    elements += `<line x1="${towerX}" y1="${towerTopY}" x2="${towerX}" y2="${deckY}" stroke="var(--accent)" stroke-width="4"/>`;
    elements += `<rect x="${towerX - 4}" y="${towerTopY - 6}" width="8" height="6" fill="var(--accent)" rx="1"/>`;
    for (let i = 1; i <= 6; i++) {
      const cableTopY = towerTopY + (i * 8);
      const cableLeftX = towerX - (i * spanPx * 0.075);
      const cableRightX = towerX + (i * spanPx * 0.075);
      elements += `<line x1="${towerX}" y1="${cableTopY}" x2="${Math.max(cableLeftX, leftX)}" y2="${deckY}" stroke="var(--text-secondary)" stroke-width="1"/>`;
      elements += `<line x1="${towerX}" y1="${cableTopY}" x2="${Math.min(cableRightX, rightX)}" y2="${deckY}" stroke="var(--text-secondary)" stroke-width="1"/>`;
    }
  } else if (type === 'king-post-truss') {
    const trussH = spanPx * 0.18;
    const midX = (leftX + rightX) / 2;
    const peakY = deckY - trussH;
    // King post (vertical)
    elements += `<line x1="${midX}" y1="${peakY}" x2="${midX}" y2="${deckY}" stroke="var(--accent)" stroke-width="3"/>`;
    // Top chords
    elements += `<line x1="${leftX}" y1="${deckY}" x2="${midX}" y2="${peakY}" stroke="var(--accent)" stroke-width="2.5"/>`;
    elements += `<line x1="${midX}" y1="${peakY}" x2="${rightX}" y2="${deckY}" stroke="var(--accent)" stroke-width="2.5"/>`;
    // Struts
    const qx1 = leftX + spanPx * 0.25;
    const qx2 = rightX - spanPx * 0.25;
    elements += `<line x1="${midX}" y1="${peakY + trussH * 0.3}" x2="${qx1}" y2="${deckY}" stroke="var(--text-secondary)" stroke-width="1.5"/>`;
    elements += `<line x1="${midX}" y1="${peakY + trussH * 0.3}" x2="${qx2}" y2="${deckY}" stroke="var(--text-secondary)" stroke-width="1.5"/>`;
  }

  // Width label
  elements += `<text x="${w - 30}" y="${deckY - 20}" text-anchor="end" fill="var(--text-muted)" font-size="10" font-family="Inter,sans-serif">Width: ${config.clearWidth || 3.5}m</text>`;

  // Title
  const typeName = BRIDGE_TYPES[type]?.name || type;
  elements += `<text x="${w/2}" y="22" text-anchor="middle" fill="var(--text-primary)" font-size="13" font-weight="600" font-family="Inter,sans-serif">${typeName} — Elevation</text>`;

  return `<svg viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="arrowL" markerWidth="6" markerHeight="6" refX="6" refY="3" orient="auto"><path d="M6,0 L0,3 L6,6" fill="var(--text-secondary)"/></marker>
      <marker id="arrowR" markerWidth="6" markerHeight="6" refX="0" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="var(--text-secondary)"/></marker>
    </defs>
    ${elements}
  </svg>`;
}


// ---- SECTION 18: FOOTBRIDGE PAGE ----
function renderFootbridgePage() {
  const cfg = STATE.footbridgeConfig;
  const fbEst = STATE.footbridgeEstimate;
  const activeTab = STATE.footbridgeOutputTab || 'summary';

  return `
    <div class="fade-in">
      <div class="section-header">
        <div>
          <div class="section-title">${ICONS.footbridge} Footbridge Estimator</div>
          <div class="section-desc">Configure bridge geometry, select structural parameters, and generate a detailed footbridge estimate</div>
        </div>
        <div class="section-actions">
          ${fbEst ? `
            <div class="export-btn-group">
              <button class="btn btn-sm" onclick="exportFootbridgeXLSX()">
                ${ICONS.xlsx} Export XLSX
              </button>
            </div>
          ` : ''}
        </div>
      </div>

      <!-- Bridge Type Selector -->
      <div class="card mb-16">
        <div class="card-header">
          <div class="card-title">${ICONS.footbridge} Bridge Configuration</div>
          <div class="card-subtitle">Select the structural typology and adjust span parameters</div>
        </div>
        <div class="bridge-type-selector">
          ${Object.entries(BRIDGE_TYPES).map(([key, bt]) => `
            <div class="bridge-type-option ${cfg.bridgeType === key ? 'active' : ''}" onclick="updateFootbridgeConfig('bridgeType', '${key}')">
              <div class="bto-name">${bt.name}</div>
              <div class="bto-desc">${bt.description}</div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Bridge SVG Visualizer -->
      <div class="bridge-visualizer">
        <div class="bridge-svg-container">
          ${generateBridgeSVG(cfg)}
        </div>
        <div class="bridge-controls">
          <div class="bridge-control-group">
            <div class="bridge-control-label">Span Length</div>
            <div class="bridge-control-value">${cfg.spanLength}m</div>
            <input type="range" class="bridge-slider" min="10" max="120" step="5" value="${cfg.spanLength}" oninput="updateFootbridgeConfig('spanLength', parseInt(this.value))">
          </div>
          <div class="bridge-control-group">
            <div class="bridge-control-label">Clear Width</div>
            <div class="bridge-control-value">${cfg.clearWidth}m</div>
            <input type="range" class="bridge-slider" min="2" max="6" step="0.5" value="${cfg.clearWidth}" oninput="updateFootbridgeConfig('clearWidth', parseFloat(this.value))">
          </div>
          ${['parabolic-arch','tied-arch','king-post-truss'].includes(cfg.bridgeType) ? `
            <div class="bridge-control-group">
              <div class="bridge-control-label">Rise-to-Span Ratio</div>
              <div class="bridge-control-value">${cfg.archRise}</div>
              <input type="range" class="bridge-slider" min="0.1" max="0.45" step="0.05" value="${cfg.archRise}" oninput="updateFootbridgeConfig('archRise', parseFloat(this.value))">
            </div>
          ` : ''}
          ${cfg.bridgeType === 'multi-span-beam' ? `
            <div class="bridge-control-group">
              <div class="bridge-control-label">Number of Spans</div>
              <div class="bridge-control-value">${cfg.numSpans}</div>
              <input type="range" class="bridge-slider" min="2" max="5" step="1" value="${cfg.numSpans}" oninput="updateFootbridgeConfig('numSpans', parseInt(this.value))">
            </div>
          ` : ''}
        </div>
      </div>

      <!-- Footbridge Scope & Parameters -->
      <div class="section-divider">Project Scope & Site Parameters</div>
      <div class="fb-scope-grid mb-16">
        <div class="card">
          <div class="card-header"><div class="card-title">Project Information</div></div>
          <div class="form-group">
            <label class="form-label">Project Name</label>
            <input class="form-input" type="text" placeholder="e.g., Stanley Park Pedestrian Crossing" value="${cfg.projectName || ''}" onchange="updateFootbridgeConfig('projectName', this.value)">
          </div>
          <div class="form-row">
            <div class="form-group">
              <label class="form-label">Client</label>
              <input class="form-input" type="text" placeholder="e.g., City of Vancouver" value="${cfg.client || ''}" onchange="updateFootbridgeConfig('client', this.value)">
            </div>
            <div class="form-group">
              <label class="form-label">Location</label>
              <input class="form-input" type="text" placeholder="e.g., Vancouver, BC" value="${cfg.location || ''}" onchange="updateFootbridgeConfig('location', this.value)">
            </div>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label class="form-label">Loading Condition</label>
              <select class="form-select" onchange="updateFootbridgeConfig('loading', this.value)">
                <option value="pedestrian" ${cfg.loading==='pedestrian'?'selected':''}>Pedestrian Only (5.0 kPa)</option>
                <option value="ped-cyclist" ${cfg.loading==='ped-cyclist'?'selected':''}>Pedestrian + Cyclist (5.0 kPa + point loads)</option>
                <option value="light-vehicle" ${cfg.loading==='light-vehicle'?'selected':''}>Light Vehicle &lt; 5t (CL-625 reduced)</option>
              </select>
            </div>
            <div class="form-group">
              <label class="form-label">StructureCraft Scope</label>
              <select class="form-select" onchange="updateFootbridgeConfig('scScope', this.value)">
                <option value="prime-design-build" ${cfg.scScope==='prime-design-build'?'selected':''}>Prime Contractor (Design-Build)</option>
                <option value="eng-supply" ${cfg.scScope==='eng-supply'?'selected':''}>Engineering + Supply</option>
                <option value="supply-only" ${cfg.scScope==='supply-only'?'selected':''}>Supply Only</option>
                <option value="eng-supervision" ${cfg.scScope==='eng-supervision'?'selected':''}>Engineering + Supervision</option>
              </select>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-header"><div class="card-title">Site & Material Specifications</div></div>
          <div class="form-row">
            <div class="form-group">
              <label class="form-label">Geotechnical Conditions</label>
              <select class="form-select" onchange="updateFootbridgeConfig('geoCondition', this.value)">
                <option value="competent-rock" ${cfg.geoCondition==='competent-rock'?'selected':''}>Competent Rock</option>
                <option value="dense-soil" ${cfg.geoCondition==='dense-soil'?'selected':''}>Dense Soil / Gravel</option>
                <option value="soft-soil" ${cfg.geoCondition==='soft-soil'?'selected':''}>Soft Soil / Clay</option>
                <option value="piled" ${cfg.geoCondition==='piled'?'selected':''}>Piled Foundation Required</option>
              </select>
            </div>
            <div class="form-group">
              <label class="form-label">Structural Material</label>
              <select class="form-select" onchange="updateFootbridgeConfig('structuralMaterial', this.value)">
                <option value="glulam-df" ${cfg.structuralMaterial==='glulam-df'?'selected':''}>Glulam (Douglas Fir, 24F-V8)</option>
                <option value="glulam-spruce" ${cfg.structuralMaterial==='glulam-spruce'?'selected':''}>Glulam (Spruce)</option>
                <option value="clt-hybrid" ${cfg.structuralMaterial==='clt-hybrid'?'selected':''}>CLT + Glulam Hybrid</option>
                <option value="steel-timber" ${cfg.structuralMaterial==='steel-timber'?'selected':''}>Steel + Timber Hybrid</option>
              </select>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label class="form-label">Deck System</label>
              <select class="form-select" onchange="updateFootbridgeConfig('deckSystem', this.value)">
                <option value="dlt" ${cfg.deckSystem==='dlt'?'selected':''}>Timber Deck (DLT)</option>
                <option value="clt-deck" ${cfg.deckSystem==='clt-deck'?'selected':''}>Timber Deck (CLT)</option>
                <option value="concrete-timber" ${cfg.deckSystem==='concrete-timber'?'selected':''}>Concrete on Timber</option>
                <option value="frp" ${cfg.deckSystem==='frp'?'selected':''}>FRP Composite</option>
              </select>
            </div>
            <div class="form-group">
              <label class="form-label">Railing Type</label>
              <select class="form-select" onchange="updateFootbridgeConfig('railingType', this.value)">
                <option value="timber-cable" ${cfg.railingType==='timber-cable'?'selected':''}>Timber Posts + Steel Cable</option>
                <option value="steel-mesh" ${cfg.railingType==='steel-mesh'?'selected':''}>Steel Mesh Panels</option>
                <option value="glass" ${cfg.railingType==='glass'?'selected':''}>Glass Panel</option>
                <option value="aluminum" ${cfg.railingType==='aluminum'?'selected':''}>Aluminum</option>
              </select>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label class="form-label">Site Access</label>
              <select class="form-select" onchange="updateFootbridgeConfig('siteAccess', this.value)">
                <option value="standard" ${cfg.siteAccess==='standard'?'selected':''}>Standard Vehicular Access</option>
                <option value="restricted" ${cfg.siteAccess==='restricted'?'selected':''}>Restricted / Pedestrian Only</option>
                <option value="helicopter" ${cfg.siteAccess==='helicopter'?'selected':''}>Helicopter Required</option>
                <option value="barge" ${cfg.siteAccess==='barge'?'selected':''}>Barge / Water Access</option>
              </select>
            </div>
            <div class="form-group">
              <label class="form-label">Coverage</label>
              <select class="form-select" onchange="updateFootbridgeConfig('coverage', this.value)">
                <option value="open" ${cfg.coverage==='open'?'selected':''}>Open (Uncovered)</option>
                <option value="covered" ${cfg.coverage==='covered'?'selected':''}>Covered / Canopy</option>
                <option value="partial" ${cfg.coverage==='partial'?'selected':''}>Partially Covered</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <!-- Generate Button -->
      <div class="card mb-16" style="text-align:center; padding: 24px;">
        <p style="color: var(--text-secondary); margin-bottom: 14px; font-size: 0.82rem;">
          Configure bridge parameters above, then generate a detailed footbridge estimate.
        </p>
        <button class="btn btn-lg btn-accent" onclick="generateFootbridgeEstimate()" style="padding: 14px 40px; font-size: 1rem;">
          ${ICONS.generate} Generate Footbridge Estimate
        </button>
      </div>

      ${fbEst ? renderFootbridgeOutput(fbEst, activeTab) : ''}
    </div>
  `;
}

function renderFootbridgeOutput(fbEst, activeTab) {
  const phaseKeys = Object.keys(fbEst.phases || {});
  let subtotal = 0;
  phaseKeys.forEach(pk => { subtotal += calcPhaseTotal(fbEst.phases[pk]); });
  const a = fbEst.assumptions || getDefaultAssumptions();
  const margin = subtotal * (a.marginPercent / 100);
  const overhead = subtotal * (a.overheadPercent / 100);
  const contingency = subtotal * (a.contingencyPercent / 100);
  const bondIns = subtotal * (a.bondInsurancePercent / 100);
  const grandTotal = subtotal + margin + overhead + bondIns;

  return `
    <div class="fb-output-section">
      <div class="section-divider">Footbridge Estimate Output</div>

      <!-- Assumptions -->
      <div class="assumptions-box mb-20">
        <div class="assumptions-header">
          ${ICONS.warning} Pricing Assumptions
          <span style="margin-left:auto; font-size:0.72rem; font-weight:400; color:var(--text-secondary);">Click any value to edit</span>
        </div>
        <div class="assumptions-grid">
          <div class="assumption-item">
            <div class="assumption-label">Margin</div>
            <div class="assumption-value editable" onclick="editFBAssumption('marginPercent', this)">${fmtPct(a.marginPercent)}</div>
          </div>
          <div class="assumption-item">
            <div class="assumption-label">Overhead</div>
            <div class="assumption-value editable" onclick="editFBAssumption('overheadPercent', this)">${fmtPct(a.overheadPercent)}</div>
          </div>
          <div class="assumption-item">
            <div class="assumption-label">Contingency</div>
            <div class="assumption-value editable" onclick="editFBAssumption('contingencyPercent', this)">${fmtPct(a.contingencyPercent)}</div>
          </div>
          <div class="assumption-item">
            <div class="assumption-label">Glulam (per BF)</div>
            <div class="assumption-value editable" onclick="editFBAssumption('glulamPriceBF', this)">${fmtDec(a.glulamPriceBF)}</div>
          </div>
        </div>
      </div>

      <!-- Phase Tabs -->
      <div class="tabs">
        <div class="tab ${activeTab === 'summary' ? 'active' : ''}" onclick="STATE.footbridgeOutputTab='summary'; renderPage();">Summary</div>
        ${phaseKeys.map(pk => `
          <div class="tab ${activeTab === pk ? 'active' : ''}" onclick="STATE.footbridgeOutputTab='${pk}'; renderPage();">
            ${FOOTBRIDGE_PHASE_DEFS[pk]?.name || pk}
          </div>
        `).join('')}
      </div>

      ${activeTab === 'summary' ? `
        <div class="slide-up">
          <div class="output-summary">
            <div>
              <div class="card">
                <div class="card-title mb-12">Cost Breakdown by Phase</div>
                <div class="mini-chart">
                  ${phaseKeys.map(pk => {
                    const pt = calcPhaseTotal(fbEst.phases[pk]);
                    const pct = subtotal > 0 ? (pt / subtotal * 100) : 0;
                    return `
                      <div class="bar-chart-row">
                        <div class="bar-chart-label">${FOOTBRIDGE_PHASE_DEFS[pk]?.name || pk}</div>
                        <div class="bar-chart-track">
                          <div class="bar-chart-fill" style="width:${Math.max(pct, 2)}%">
                            ${pct > 15 ? `<span class="bar-chart-value">${fmtPct(pct)}</span>` : ''}
                          </div>
                        </div>
                        <div class="bar-chart-amount">${fmt(pt)}</div>
                      </div>
                    `;
                  }).join('')}
                </div>
              </div>
            </div>
            <div>
              <div class="card">
                <div class="card-title mb-12">Cost Summary</div>
                <div class="summary-row"><span class="summary-row-label">Direct Costs (Subtotal)</span><span class="summary-row-value">${fmt(subtotal)}</span></div>
                <div class="summary-divider"></div>
                <div class="summary-row"><span class="summary-row-label">Overhead (${fmtPct(a.overheadPercent)})</span><span class="summary-row-value">${fmt(overhead)}</span></div>
                <div class="summary-row"><span class="summary-row-label">Margin (${fmtPct(a.marginPercent)})</span><span class="summary-row-value">${fmt(margin)}</span></div>
                <div class="summary-row"><span class="summary-row-label">Contingency (${fmtPct(a.contingencyPercent)})</span><span class="summary-row-value">${fmt(contingency)}</span></div>
                <div class="summary-row"><span class="summary-row-label">Bond & Insurance (${fmtPct(a.bondInsurancePercent)})</span><span class="summary-row-value">${fmt(bondIns)}</span></div>
                <div class="summary-divider"></div>
                <div class="summary-total mt-8">
                  <div class="summary-total-label">Grand Total</div>
                  <div class="summary-total-value">${fmt(grandTotal)}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ` : ''}

      ${phaseKeys.map(pk => activeTab === pk ? renderFBPhaseTab(fbEst, pk) : '').join('')}
    </div>
  `;
}

function renderFBPhaseTab(fbEst, phaseKey) {
  const phase = fbEst.phases[phaseKey] || { items: [] };
  const phaseDef = FOOTBRIDGE_PHASE_DEFS[phaseKey] || { name: phaseKey, description: '' };
  const phaseSubtotal = calcPhaseTotal(phase);
  return `
    <div class="slide-up">
      <div class="card">
        <div class="card-header">
          <div>
            <div class="card-title">${phaseDef.name}</div>
            <div class="card-subtitle">${phaseDef.description}</div>
          </div>
        </div>
        <div class="line-items-header">
          <div></div><div>Description</div><div class="cell-right">Qty</div><div class="cell-center">Unit</div><div class="cell-right">Rate</div><div class="cell-right">Total</div><div></div>
        </div>
        ${phase.items.map((item, idx) => `
          <div class="line-item-row">
            <div class="line-item-grip">${ICONS.grip}</div>
            <div><input class="line-item-input" value="${item.name}" onchange="updateFBLineItem('${phaseKey}', ${idx}, 'name', this.value)"></div>
            <div><input class="line-item-input numeric" type="number" value="${item.qty}" onchange="updateFBLineItem('${phaseKey}', ${idx}, 'qty', parseFloat(this.value))"></div>
            <div><input class="line-item-input" value="${item.unit}" style="text-align:center" onchange="updateFBLineItem('${phaseKey}', ${idx}, 'unit', this.value)"></div>
            <div><input class="line-item-input numeric" type="number" step="0.01" value="${item.rate}" onchange="updateFBLineItem('${phaseKey}', ${idx}, 'rate', parseFloat(this.value))"></div>
            <div class="cell-right cell-mono cell-bold" style="padding:4px 6px;">${fmt(item.total)}</div>
            <div class="line-item-delete" onclick="removeFBLineItem('${phaseKey}', ${idx})">${ICONS.trash}</div>
          </div>
        `).join('')}
        ${phase.items.length > 0 ? `
          <div class="line-item-row subtotal-row">
            <div></div><div style="font-weight:700; color:var(--text-primary);">Phase Subtotal</div>
            <div></div><div></div><div></div>
            <div class="cell-right cell-mono cell-accent" style="padding:4px 6px; font-size:0.92rem;">${fmt(phaseSubtotal)}</div>
            <div></div>
          </div>
        ` : ''}
      </div>
    </div>
  `;
}

function updateFootbridgeConfig(key, value) {
  STATE.footbridgeConfig[key] = value;
  renderPage();
}

function editFBAssumption(key, el) {
  if (!STATE.footbridgeEstimate) return;
  const current = STATE.footbridgeEstimate.assumptions[key];
  const input = document.createElement('input');
  input.type = 'number';
  input.step = key.includes('Percent') ? '0.5' : '0.01';
  input.value = current;
  input.className = 'form-input';
  input.style.cssText = 'width:100px; padding:4px 6px; font-size:0.85rem; font-family:JetBrains Mono,monospace;';
  input.onblur = function() {
    STATE.footbridgeEstimate.assumptions[key] = parseFloat(this.value) || 0;
    renderPage();
  };
  input.onkeydown = function(e) {
    if (e.key === 'Enter') this.blur();
    if (e.key === 'Escape') renderPage();
  };
  el.innerHTML = '';
  el.appendChild(input);
  input.focus();
  input.select();
}

function updateFBLineItem(phaseKey, idx, field, value) {
  if (!STATE.footbridgeEstimate) return;
  const item = STATE.footbridgeEstimate.phases[phaseKey].items[idx];
  if (!item) return;
  item[field] = value;
  item.total = (item.qty || 0) * (item.rate || 0);
  renderPage();
}

function removeFBLineItem(phaseKey, idx) {
  if (!STATE.footbridgeEstimate) return;
  STATE.footbridgeEstimate.phases[phaseKey].items.splice(idx, 1);
  renderPage();
}

// ---- SECTION 19: FOOTBRIDGE ESTIMATE GENERATOR ----
function generateFootbridgeEstimate() {
  const cfg = STATE.footbridgeConfig;
  const a = getDefaultAssumptions();
  const span = cfg.spanLength || 30;
  const width = cfg.clearWidth || 3.5;
  const deckArea = span * width;
  const type = cfg.bridgeType;

  // Material factors based on bridge type
  const typeFactors = {
    'parabolic-arch': { glulamMult: 1.4, steelMult: 1.2, complexityHrs: 1.3 },
    'tied-arch': { glulamMult: 1.5, steelMult: 1.4, complexityHrs: 1.4 },
    'warren-truss': { glulamMult: 1.2, steelMult: 1.6, complexityHrs: 1.2 },
    'pratt-truss': { glulamMult: 1.3, steelMult: 1.5, complexityHrs: 1.3 },
    'clear-span-beam': { glulamMult: 1.8, steelMult: 0.8, complexityHrs: 0.8 },
    'multi-span-beam': { glulamMult: 1.0, steelMult: 0.7, complexityHrs: 0.9 },
    'cable-stayed': { glulamMult: 1.1, steelMult: 2.0, complexityHrs: 1.6 },
    'king-post-truss': { glulamMult: 1.3, steelMult: 1.3, complexityHrs: 1.1 },
  };
  const tf = typeFactors[type] || { glulamMult: 1.2, steelMult: 1.0, complexityHrs: 1.0 };

  // Geotechnical cost multiplier
  const geoMult = { 'competent-rock': 0.7, 'dense-soil': 1.0, 'soft-soil': 1.4, 'piled': 2.2 }[cfg.geoCondition] || 1.0;
  // Access cost multiplier
  const accessMult = { 'standard': 1.0, 'restricted': 1.3, 'helicopter': 3.0, 'barge': 1.8 }[cfg.siteAccess] || 1.0;

  // Glulam quantity (BF) based on span, width, type
  const glulamBF = Math.round(deckArea * 3.2 * tf.glulamMult * (span / 30));
  const glulamRate = cfg.structuralMaterial === 'glulam-spruce' ? 3.80 : 4.25;
  // Steel connections
  const steelTons = Math.max(Math.round(glulamBF / 8000 * tf.steelMult * 10) / 10, 1);
  // Deck material
  const deckRates = { 'dlt': 22, 'clt-deck': 28, 'concrete-timber': 35, 'frp': 45 };
  const deckRate = deckRates[cfg.deckSystem] || 22;
  // Railing
  const railRates = { 'timber-cable': 180, 'steel-mesh': 220, 'glass': 450, 'aluminum': 280 };
  const railRate = railRates[cfg.railingType] || 180;
  const railLength = (span + 2) * 2;
  // Foundation costs
  const foundationBase = 35000 * geoMult;
  const numAbutments = cfg.bridgeType === 'multi-span-beam' ? 2 + (cfg.numSpans - 1) : 2;
  // Engineering hours
  const engHrs = Math.round((80 + span * 2.5) * tf.complexityHrs);
  const draftHrs = Math.round(engHrs * 1.2);
  // Coverage add-on
  const coverageCost = cfg.coverage === 'covered' ? deckArea * 65 : cfg.coverage === 'partial' ? deckArea * 35 : 0;

  const phases = {};

  // Engineering
  if (cfg.scScope !== 'supply-only') {
    phases['fb-engineering'] = { items: [
      { name: 'Structural Design & Analysis', qty: engHrs, unit: 'hr', rate: a.engHourlyRate, total: engHrs * a.engHourlyRate },
      { name: 'Shop Drawing Production', qty: draftHrs, unit: 'hr', rate: a.draftHourlyRate, total: draftHrs * a.draftHourlyRate },
      { name: 'Connection Design', qty: Math.round(engHrs * 0.4), unit: 'hr', rate: 180, total: Math.round(engHrs * 0.4) * 180 },
      { name: 'Construction Engineering', qty: Math.round(engHrs * 0.3), unit: 'hr', rate: 180, total: Math.round(engHrs * 0.3) * 180 },
      { name: 'Geotechnical Review', qty: 1, unit: 'LS', rate: 8500, total: 8500 },
    ] };
  }

  // Fabrication
  phases['fb-fabrication'] = { items: [
    { name: `Glulam Members (${cfg.structuralMaterial === 'glulam-spruce' ? 'Spruce' : '24F-V8 DF'})`, qty: glulamBF, unit: 'BF', rate: glulamRate, total: glulamBF * glulamRate },
    { name: 'Steel Connections & Hardware', qty: steelTons, unit: 'ton', rate: 4500, total: Math.round(steelTons * 4500) },
    { name: `Deck Panels (${cfg.deckSystem.toUpperCase()})`, qty: Math.round(deckArea), unit: 'SF', rate: deckRate, total: Math.round(deckArea * deckRate) },
    { name: 'Shop Fabrication Labour', qty: Math.round(glulamBF / 25), unit: 'hr', rate: a.shopHourlyRate, total: Math.round(glulamBF / 25) * a.shopHourlyRate },
    { name: 'CNC Processing & Assembly', qty: 1, unit: 'LS', rate: Math.round(glulamBF * 0.8), total: Math.round(glulamBF * 0.8) },
    { name: 'Protective Coatings & Finishes', qty: 1, unit: 'LS', rate: Math.round(deckArea * 8), total: Math.round(deckArea * 8) },
  ] };

  // Shipping
  phases['fb-shipping'] = { items: [
    { name: 'Flatbed Trucks', qty: Math.max(Math.ceil(glulamBF / 6000), 2), unit: 'truck', rate: 4800, total: Math.max(Math.ceil(glulamBF / 6000), 2) * 4800 },
    { name: 'Oversized Load Permits', qty: span > 40 ? 2 : 1, unit: 'each', rate: 2800, total: (span > 40 ? 2 : 1) * 2800 },
    { name: 'Logistics Coordination', qty: 20, unit: 'hr', rate: a.draftHourlyRate, total: 20 * a.draftHourlyRate },
  ] };

  // Foundations
  if (cfg.scScope === 'prime-design-build') {
    phases['fb-foundations'] = { items: [
      { name: 'Abutment Construction', qty: 2, unit: 'each', rate: Math.round(foundationBase), total: Math.round(foundationBase * 2) },
      ...(cfg.bridgeType === 'multi-span-beam' && cfg.numSpans > 1 ? [{ name: 'Intermediate Pier(s)', qty: cfg.numSpans - 1, unit: 'each', rate: Math.round(foundationBase * 0.8), total: Math.round(foundationBase * 0.8 * (cfg.numSpans - 1)) }] : []),
      { name: 'Excavation & Earthworks', qty: 1, unit: 'LS', rate: Math.round(18000 * geoMult), total: Math.round(18000 * geoMult) },
      { name: 'Reinforcing Steel', qty: 1, unit: 'LS', rate: Math.round(12000 * numAbutments * geoMult * 0.5), total: Math.round(12000 * numAbutments * geoMult * 0.5) },
      { name: 'Concrete Supply & Placement', qty: 1, unit: 'LS', rate: Math.round(15000 * numAbutments * geoMult * 0.5), total: Math.round(15000 * numAbutments * geoMult * 0.5) },
    ] };
  }

  // Installation
  if (cfg.scScope !== 'supply-only' && cfg.scScope !== 'eng-supply') {
    const installDays = Math.max(Math.ceil(span / 8 * accessMult), 5);
    phases['fb-installation'] = { items: [
      { name: 'Site Carpenters', qty: Math.round(installDays * 8 * 3), unit: 'hr', rate: a.siteCarpentrHourlyRate, total: Math.round(installDays * 8 * 3 * a.siteCarpentrHourlyRate) },
      { name: 'Site Labourers', qty: Math.round(installDays * 8 * 1.5), unit: 'hr', rate: a.siteLaborHourlyRate, total: Math.round(installDays * 8 * 1.5 * a.siteLaborHourlyRate) },
      { name: 'Site Superintendent', qty: Math.round(installDays * 8), unit: 'hr', rate: a.siteSuperHourlyRate, total: Math.round(installDays * 8 * a.siteSuperHourlyRate) },
      { name: 'Mobile Crane (100-ton)', qty: installDays, unit: 'day', rate: Math.round(7500 * accessMult), total: Math.round(installDays * 7500 * accessMult) },
      { name: 'Crane Operator', qty: Math.round(installDays * 8), unit: 'hr', rate: a.craneOperatorHourlyRate, total: Math.round(installDays * 8 * a.craneOperatorHourlyRate) },
      { name: 'Rigging & Temporary Works', qty: 1, unit: 'LS', rate: Math.round(8000 * accessMult), total: Math.round(8000 * accessMult) },
    ] };
  }

  // Railing & Finishes
  phases['fb-railing'] = { items: [
    { name: `Railing System (${cfg.railingType.replace('-', ' ')})`, qty: Math.round(railLength), unit: 'LF', rate: railRate, total: Math.round(railLength * railRate) },
    { name: 'Anti-Slip Surface Treatment', qty: Math.round(deckArea), unit: 'SF', rate: 4.50, total: Math.round(deckArea * 4.50) },
    ...(coverageCost > 0 ? [{ name: 'Canopy / Cover Structure', qty: 1, unit: 'LS', rate: Math.round(coverageCost), total: Math.round(coverageCost) }] : []),
    { name: 'Approach Ramps & Transitions', qty: 2, unit: 'each', rate: 6500, total: 13000 },
  ] };

  // General Conditions
  phases['fb-general'] = { items: [
    { name: 'Project Management', qty: Math.round(engHrs * 0.6), unit: 'hr', rate: a.pmHourlyRate, total: Math.round(engHrs * 0.6 * a.pmHourlyRate) },
    { name: 'Insurance & Bonds', qty: 1, unit: 'LS', rate: 25000, total: 25000 },
    { name: 'Permits & Approvals', qty: 1, unit: 'LS', rate: 8000, total: 8000 },
    { name: 'Site Safety & Environmental', qty: 1, unit: 'LS', rate: 6000, total: 6000 },
  ] };

  // Compute subtotals
  Object.values(phases).forEach(phase => {
    phase.subtotal = phase.items.reduce((s, i) => s + (i.total || 0), 0);
  });

  STATE.footbridgeEstimate = {
    name: cfg.projectName || 'Footbridge Estimate',
    client: cfg.client || '',
    location: cfg.location || '',
    bridgeType: type,
    spanLength: span,
    clearWidth: width,
    assumptions: { ...a },
    phases,
    totalCost: Object.values(phases).reduce((s, p) => s + p.subtotal, 0),
  };
  STATE.footbridgeOutputTab = 'summary';
  renderPage();
  showToast('Footbridge estimate generated. Review output below.', 'success');
}


// ---- SECTION 20: XLSX EXPORT ----
function exportEstimateXLSX() {
  if (typeof XLSX === 'undefined') {
    showToast('XLSX library not loaded. Please check your internet connection.', 'warning');
    exportEstimate(); // Fallback to CSV
    return;
  }

  const est = STATE.currentEstimate;
  if (!est.phases || Object.keys(est.phases).length === 0) {
    showToast('No estimate data to export. Generate an estimate first.', 'warning');
    return;
  }

  const wb = XLSX.utils.book_new();
  const modelKey = est.deliveryModel || 'eor-build';
  const model = DELIVERY_MODELS[modelKey];
  const phaseKeys = model ? model.phases : Object.keys(est.phases);

  // Calculate totals
  let subtotal = 0;
  phaseKeys.forEach(pk => {
    if (est.phases && est.phases[pk]) subtotal += calcPhaseTotal(est.phases[pk]);
  });
  const a = est.assumptions;
  const margin = subtotal * (a.marginPercent / 100);
  const overhead = subtotal * (a.overheadPercent / 100);
  const contingency = subtotal * (a.contingencyPercent / 100);
  const bondIns = subtotal * (a.bondInsurancePercent / 100);
  const grandTotal = subtotal + margin + overhead + bondIns;

  // --- SUMMARY TAB ---
  const summaryData = [
    ['STRUCTURECRAFT ESTIMATOR PRO'],
    ['Estimate Summary'],
    [],
    ['Project Name', est.name || 'Untitled'],
    ['Client', est.client || ''],
    ['Location', est.location || ''],
    ['Project Type', est.projectType || ''],
    ['Delivery Model', model ? model.name : ''],
    ['Date', new Date().toLocaleDateString()],
    ['Status', est.status || 'draft'],
    [],
    ['COST SUMMARY'],
    [],
    ['Phase', 'Subtotal'],
  ];
  phaseKeys.forEach(pk => {
    const pt = est.phases[pk] ? calcPhaseTotal(est.phases[pk]) : 0;
    summaryData.push([PHASE_DEFS[pk]?.name || pk, pt]);
  });
  summaryData.push([]);
  summaryData.push(['Direct Costs (Subtotal)', subtotal]);
  summaryData.push(['Overhead (' + a.overheadPercent + '%)', overhead]);
  summaryData.push(['Margin (' + a.marginPercent + '%)', margin]);
  summaryData.push(['Contingency (' + a.contingencyPercent + '%)', contingency]);
  summaryData.push(['Bond & Insurance (' + a.bondInsurancePercent + '%)', bondIns]);
  summaryData.push([]);
  summaryData.push(['GRAND TOTAL', grandTotal]);

  const wsSummary = XLSX.utils.aoa_to_sheet(summaryData);
  wsSummary['!cols'] = [{ wch: 35 }, { wch: 18 }];
  XLSX.utils.book_append_sheet(wb, wsSummary, 'Summary');

  // --- ESTIMATE DETAIL TAB ---
  const detailData = [
    ['STRUCTURECRAFT ESTIMATOR PRO — FULL ESTIMATE DETAIL'],
    [est.name || 'Untitled', est.client, est.location, model ? model.name : ''],
    [],
    ['Phase', 'Line Item', 'Qty', 'Unit', 'Rate', 'Total'],
  ];
  phaseKeys.forEach(pk => {
    const phase = est.phases[pk];
    if (!phase || !phase.items) return;
    const phaseName = PHASE_DEFS[pk]?.name || pk;
    phase.items.forEach(item => {
      detailData.push([phaseName, item.name, item.qty, item.unit, item.rate, item.total]);
    });
    detailData.push(['', phaseName + ' SUBTOTAL', '', '', '', calcPhaseTotal(phase)]);
    detailData.push([]);
  });
  detailData.push([]);
  detailData.push(['', 'DIRECT COSTS SUBTOTAL', '', '', '', subtotal]);
  detailData.push(['', 'Overhead (' + a.overheadPercent + '%)', '', '', '', overhead]);
  detailData.push(['', 'Margin (' + a.marginPercent + '%)', '', '', '', margin]);
  detailData.push(['', 'Bond & Insurance (' + a.bondInsurancePercent + '%)', '', '', '', bondIns]);
  detailData.push(['', 'GRAND TOTAL', '', '', '', grandTotal]);

  const wsDetail = XLSX.utils.aoa_to_sheet(detailData);
  wsDetail['!cols'] = [{ wch: 25 }, { wch: 30 }, { wch: 12 }, { wch: 8 }, { wch: 14 }, { wch: 16 }];
  XLSX.utils.book_append_sheet(wb, wsDetail, 'Estimate Detail');

  // --- INDIVIDUAL PHASE TABS ---
  phaseKeys.forEach(pk => {
    const phase = est.phases[pk];
    if (!phase || !phase.items || phase.items.length === 0) return;
    const phaseName = (PHASE_DEFS[pk]?.name || pk).substring(0, 28);
    const phaseData = [
      [phaseName],
      [],
      ['Line Item', 'Qty', 'Unit', 'Rate', 'Total'],
    ];
    phase.items.forEach(item => {
      phaseData.push([item.name, item.qty, item.unit, item.rate, item.total]);
    });
    phaseData.push([]);
    phaseData.push(['PHASE SUBTOTAL', '', '', '', calcPhaseTotal(phase)]);

    const ws = XLSX.utils.aoa_to_sheet(phaseData);
    ws['!cols'] = [{ wch: 35 }, { wch: 12 }, { wch: 8 }, { wch: 14 }, { wch: 16 }];
    XLSX.utils.book_append_sheet(wb, ws, phaseName);
  });

  // --- ASSUMPTIONS TAB ---
  const assumpData = [
    ['PRICING ASSUMPTIONS'],
    [],
    ['Category', 'Parameter', 'Value'],
    ['Markup', 'Margin %', a.marginPercent],
    ['Markup', 'Overhead %', a.overheadPercent],
    ['Markup', 'Contingency %', a.contingencyPercent],
    ['Markup', 'Bond & Insurance %', a.bondInsurancePercent],
    [],
    ['Materials', 'Glulam 24F-V8 ($/BF)', a.glulamPriceBF],
    ['Materials', 'CLT 3-ply ($/SF)', a.cltPriceSF3],
    ['Materials', 'CLT 5-ply ($/SF)', a.cltPriceSF5],
    ['Materials', 'CLT 7-ply ($/SF)', a.cltPriceSF7],
    ['Materials', 'DLT ($/SF)', a.dltPriceSF],
    ['Materials', 'MPP ($/SF)', a.mppPriceSF],
    ['Materials', 'NLT ($/SF)', a.nltPriceSF],
    ['Materials', 'Steel Connections ($/ton)', a.steelConnectionsTon],
    [],
    ['Labour', 'Engineering ($/hr)', a.engHourlyRate],
    ['Labour', 'Drafting ($/hr)', a.draftHourlyRate],
    ['Labour', 'Shop Fabrication ($/hr)', a.shopHourlyRate],
    ['Labour', 'Site Carpenter ($/hr)', a.siteCarpentrHourlyRate],
    ['Labour', 'Site Labourer ($/hr)', a.siteLaborHourlyRate],
    ['Labour', 'Site Superintendent ($/hr)', a.siteSuperHourlyRate],
    ['Labour', 'Crane Operator ($/hr)', a.craneOperatorHourlyRate],
    ['Labour', 'Project Manager ($/hr)', a.pmHourlyRate],
    [],
    ['Equipment', 'Crane Daily Rate ($)', a.craneDailyRate],
    ['Shipping', 'Shipping per BF ($)', a.shippingPerBF],
    ['Shipping', 'Shipping per Truck ($)', a.shippingPerTruck],
    ['Escalation', 'Escalation %/yr', a.escalationPercent],
  ];

  const wsAssump = XLSX.utils.aoa_to_sheet(assumpData);
  wsAssump['!cols'] = [{ wch: 15 }, { wch: 30 }, { wch: 14 }];
  XLSX.utils.book_append_sheet(wb, wsAssump, 'Assumptions');

  // Write file
  const filename = (est.name || 'estimate').replace(/[^a-zA-Z0-9_-]/g, '_') + '.xlsx';
  XLSX.writeFile(wb, filename);
  showToast('Estimate exported as XLSX spreadsheet.', 'success');
}

function exportFootbridgeXLSX() {
  if (typeof XLSX === 'undefined' || !STATE.footbridgeEstimate) {
    showToast('Cannot export. Generate a footbridge estimate first.', 'warning');
    return;
  }
  const fbEst = STATE.footbridgeEstimate;
  const wb = XLSX.utils.book_new();
  const phaseKeys = Object.keys(fbEst.phases);
  let subtotal = 0;
  phaseKeys.forEach(pk => { subtotal += calcPhaseTotal(fbEst.phases[pk]); });
  const a = fbEst.assumptions;
  const grandTotal = subtotal + subtotal * (a.marginPercent + a.overheadPercent + a.bondInsurancePercent) / 100;

  const summaryData = [
    ['STRUCTURECRAFT ESTIMATOR PRO — FOOTBRIDGE ESTIMATE'],
    [],
    ['Project', fbEst.name], ['Client', fbEst.client], ['Location', fbEst.location],
    ['Bridge Type', BRIDGE_TYPES[fbEst.bridgeType]?.name || fbEst.bridgeType],
    ['Span', fbEst.spanLength + 'm'], ['Width', fbEst.clearWidth + 'm'],
    [],
    ['Phase', 'Subtotal'],
  ];
  phaseKeys.forEach(pk => {
    summaryData.push([FOOTBRIDGE_PHASE_DEFS[pk]?.name || pk, calcPhaseTotal(fbEst.phases[pk])]);
  });
  summaryData.push([]); summaryData.push(['GRAND TOTAL (incl. markups)', grandTotal]);
  const ws = XLSX.utils.aoa_to_sheet(summaryData);
  ws['!cols'] = [{ wch: 35 }, { wch: 18 }];
  XLSX.utils.book_append_sheet(wb, ws, 'Summary');

  phaseKeys.forEach(pk => {
    const phase = fbEst.phases[pk];
    if (!phase || !phase.items) return;
    const name = (FOOTBRIDGE_PHASE_DEFS[pk]?.name || pk).substring(0, 28);
    const data = [[name], [], ['Line Item', 'Qty', 'Unit', 'Rate', 'Total']];
    phase.items.forEach(i => data.push([i.name, i.qty, i.unit, i.rate, i.total]));
    data.push([]); data.push(['SUBTOTAL', '', '', '', calcPhaseTotal(phase)]);
    const pws = XLSX.utils.aoa_to_sheet(data);
    pws['!cols'] = [{ wch: 35 }, { wch: 12 }, { wch: 8 }, { wch: 14 }, { wch: 16 }];
    XLSX.utils.book_append_sheet(wb, pws, name);
  });

  XLSX.writeFile(wb, (fbEst.name || 'footbridge-estimate').replace(/[^a-zA-Z0-9_-]/g, '_') + '.xlsx');
  showToast('Footbridge estimate exported as XLSX.', 'success');
}


// ---- SECTION 21: FOOTBRIDGE SAMPLE ESTIMATES ----
SAMPLE_ESTIMATES.push(
  {
    id: 'est-fb-001',
    name: 'Stanley Park Pedestrian Bridge',
    client: 'City of Vancouver',
    location: 'Vancouver, BC',
    projectType: 'institutional',
    deliveryModel: 'eor-build',
    status: 'won',
    createdAt: '2025-09-12',
    updatedAt: '2025-11-05',
    scopeDescription: '45m parabolic arch pedestrian footbridge spanning Beaver Creek in Stanley Park. Glulam Douglas Fir structure with DLT deck, timber + steel cable railings. StructureCraft as prime contractor (design-build).',
    assumptions: getDefaultAssumptions(),
    phases: {
      'consulting': { items: [
        { name: 'SD Structural Engineering', qty: 60, unit: 'hr', rate: 195, total: 11700 },
        { name: 'DD Structural Engineering', qty: 100, unit: 'hr', rate: 195, total: 19500 },
        { name: 'CD Structural Engineering', qty: 140, unit: 'hr', rate: 195, total: 27300 },
        { name: 'CA Services', qty: 40, unit: 'hr', rate: 195, total: 7800 },
      ], subtotal: 66300 },
      'timber-engineering': { items: [
        { name: 'Shop Drawing Engineering', qty: 160, unit: 'hr', rate: 180, total: 28800 },
        { name: 'Erection Engineering', qty: 60, unit: 'hr', rate: 180, total: 10800 },
        { name: 'Connection Design', qty: 80, unit: 'hr', rate: 180, total: 14400 },
        { name: 'Drafting / Detailing', qty: 200, unit: 'hr', rate: 115, total: 23000 },
      ], subtotal: 77000 },
      'fabrication': { items: [
        { name: 'Glulam Arch Members (24F-V8)', qty: 6200, unit: 'BF', rate: 4.50, total: 27900 },
        { name: 'Glulam Deck Beams', qty: 3800, unit: 'BF', rate: 4.25, total: 16150 },
        { name: 'DLT Deck Panels', qty: 1580, unit: 'SF', rate: 22, total: 34760 },
        { name: 'Steel Connections', qty: 3.5, unit: 'ton', rate: 4500, total: 15750 },
        { name: 'Stainless Steel Tension Rods', qty: 1, unit: 'LS', rate: 18000, total: 18000 },
        { name: 'Shop Fabrication Labour', qty: 420, unit: 'hr', rate: 82, total: 34440 },
        { name: 'CNC Processing', qty: 1, unit: 'LS', rate: 22000, total: 22000 },
        { name: 'Protective Coatings', qty: 1, unit: 'LS', rate: 14000, total: 14000 },
      ], subtotal: 183000 },
      'shipping': { items: [
        { name: 'Flatbed Trucks (local)', qty: 4, unit: 'truck', rate: 4500, total: 18000 },
        { name: 'Oversized Load Permits', qty: 2, unit: 'each', rate: 2800, total: 5600 },
      ], subtotal: 23600 },
      'installation': { items: [
        { name: 'Site Carpenters', qty: 640, unit: 'hr', rate: 95, total: 60800 },
        { name: 'Site Labourers', qty: 240, unit: 'hr', rate: 65, total: 15600 },
        { name: 'Site Superintendent', qty: 160, unit: 'hr', rate: 140, total: 22400 },
        { name: 'Mobile Crane 100-ton', qty: 12, unit: 'day', rate: 7500, total: 90000 },
        { name: 'Crane Operator', qty: 96, unit: 'hr', rate: 115, total: 11040 },
        { name: 'Temporary Falsework', qty: 1, unit: 'LS', rate: 35000, total: 35000 },
        { name: 'Rigging & Hardware', qty: 1, unit: 'LS', rate: 12000, total: 12000 },
      ], subtotal: 246840 },
      'general-conditions': { items: [
        { name: 'Project Management', qty: 160, unit: 'hr', rate: 165, total: 26400 },
        { name: 'Foundations (Abutments)', qty: 1, unit: 'LS', rate: 85000, total: 85000 },
        { name: 'Railing (Timber + Steel Cable)', qty: 94, unit: 'LF', rate: 180, total: 16920 },
        { name: 'Approach Ramps', qty: 2, unit: 'each', rate: 8500, total: 17000 },
        { name: 'Insurance & Bonds', qty: 1, unit: 'LS', rate: 22000, total: 22000 },
        { name: 'Permits & Approvals', qty: 1, unit: 'LS', rate: 8500, total: 8500 },
      ], subtotal: 175820 },
    },
    totalCost: 772560,
  },
  {
    id: 'est-fb-002',
    name: 'Kicking Horse River Crossing',
    client: 'Town of Golden',
    location: 'Golden, BC',
    projectType: 'institutional',
    deliveryModel: 'eor-build',
    status: 'sent',
    createdAt: '2025-11-08',
    updatedAt: '2026-01-15',
    scopeDescription: '65m tied arch (bowstring) footbridge crossing the Kicking Horse River. Glulam Douglas Fir arch with steel hangers, concrete-on-timber deck for durability. Piled foundations due to riverbank geotechnical conditions. StructureCraft as EOR and prime contractor.',
    assumptions: getDefaultAssumptions(),
    phases: {
      'consulting': { items: [
        { name: 'SD Structural Engineering', qty: 80, unit: 'hr', rate: 195, total: 15600 },
        { name: 'DD Structural Engineering', qty: 140, unit: 'hr', rate: 195, total: 27300 },
        { name: 'CD Structural Engineering', qty: 200, unit: 'hr', rate: 195, total: 39000 },
        { name: 'CA Services', qty: 60, unit: 'hr', rate: 195, total: 11700 },
        { name: 'Geotechnical Coordination', qty: 30, unit: 'hr', rate: 195, total: 5850 },
      ], subtotal: 99450 },
      'timber-engineering': { items: [
        { name: 'Shop Drawing Engineering', qty: 240, unit: 'hr', rate: 180, total: 43200 },
        { name: 'Erection Engineering', qty: 100, unit: 'hr', rate: 180, total: 18000 },
        { name: 'Connection Design', qty: 120, unit: 'hr', rate: 180, total: 21600 },
        { name: 'Drafting / Detailing', qty: 300, unit: 'hr', rate: 115, total: 34500 },
      ], subtotal: 117300 },
      'fabrication': { items: [
        { name: 'Glulam Arch Members (24F-V8)', qty: 12800, unit: 'BF', rate: 4.50, total: 57600 },
        { name: 'Glulam Deck Beams', qty: 5600, unit: 'BF', rate: 4.25, total: 23800 },
        { name: 'CLT Deck Panels (5-ply)', qty: 2275, unit: 'SF', rate: 34, total: 77350 },
        { name: 'Concrete Topping (2")', qty: 2275, unit: 'SF', rate: 10, total: 22750 },
        { name: 'Steel Connections & Hangers', qty: 6.5, unit: 'ton', rate: 4500, total: 29250 },
        { name: 'Steel Tie Member', qty: 1, unit: 'LS', rate: 42000, total: 42000 },
        { name: 'Shop Fabrication Labour', qty: 680, unit: 'hr', rate: 82, total: 55760 },
        { name: 'CNC Processing', qty: 1, unit: 'LS', rate: 35000, total: 35000 },
        { name: 'Protective Coatings', qty: 1, unit: 'LS', rate: 22000, total: 22000 },
      ], subtotal: 365510 },
      'shipping': { items: [
        { name: 'Flatbed Trucks (regional)', qty: 8, unit: 'truck', rate: 5400, total: 43200 },
        { name: 'Oversized Load Permits', qty: 3, unit: 'each', rate: 3200, total: 9600 },
        { name: 'Logistics Coordination', qty: 30, unit: 'hr', rate: 115, total: 3450 },
      ], subtotal: 56250 },
      'installation': { items: [
        { name: 'Site Carpenters', qty: 1200, unit: 'hr', rate: 95, total: 114000 },
        { name: 'Site Labourers', qty: 480, unit: 'hr', rate: 65, total: 31200 },
        { name: 'Site Superintendent', qty: 320, unit: 'hr', rate: 140, total: 44800 },
        { name: 'Mobile Crane 100-ton', qty: 22, unit: 'day', rate: 7500, total: 165000 },
        { name: 'Crane Operator', qty: 176, unit: 'hr', rate: 115, total: 20240 },
        { name: 'Temporary Falsework / Shoring', qty: 1, unit: 'LS', rate: 65000, total: 65000 },
        { name: 'Rigging & Hardware', qty: 1, unit: 'LS', rate: 18000, total: 18000 },
      ], subtotal: 458240 },
      'general-conditions': { items: [
        { name: 'Project Management', qty: 260, unit: 'hr', rate: 165, total: 42900 },
        { name: 'Piled Foundations (2 abutments)', qty: 1, unit: 'LS', rate: 145000, total: 145000 },
        { name: 'Railing (Steel Mesh)', qty: 134, unit: 'LF', rate: 220, total: 29480 },
        { name: 'Approach Ramps & Transitions', qty: 2, unit: 'each', rate: 12000, total: 24000 },
        { name: 'Insurance & Bonds', qty: 1, unit: 'LS', rate: 35000, total: 35000 },
        { name: 'Permits & Environmental', qty: 1, unit: 'LS', rate: 15000, total: 15000 },
        { name: 'Travel & Accommodation', qty: 1, unit: 'LS', rate: 18000, total: 18000 },
      ], subtotal: 309380 },
    },
    totalCost: 1406130,
  }
);


// Boot
document.addEventListener('DOMContentLoaded', initApp);

