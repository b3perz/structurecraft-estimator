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
  eorBuild: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 20h20M5 20V8l7-5 7 5v12"/><path d="M9 20v-4h6v4"/><path d="M9 12h1M14 12h1"/></svg>',
  delegatedDesign: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 21h18"/><path d="M5 21V10l7-7 7 7v11"/><path d="M14 3l4 4"/><path d="M9 14h6M9 18h6"/></svg>',
  dltSupply: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="4" rx="1"/><rect x="2" y="13" width="20" height="4" rx="1"/><rect x="2" y="1" width="20" height="4" rx="1"/><path d="M6 19v2M18 19v2M12 19v2"/></svg>',
  engineerSupervise: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="7" r="4"/><path d="M5.5 21v-2a6.5 6.5 0 0113 0v2"/><path d="M17 11l2 2 4-4"/></svg>',
  calendar: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>',
  bolt: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>',
  palette: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="13.5" cy="6.5" r="2"/><circle cx="17.5" cy="10.5" r="2"/><circle cx="8.5" cy="7.5" r="2"/><circle cx="6.5" cy="12" r="2"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.9 0 1.7-.1 2.5-.3C13.6 20.4 13 18.8 13 17c0-2.8 2.2-5 5-5 1.2 0 2.3.4 3.2 1.1.5-1 .8-2 .8-3.1 0-5.5-4.5-10-10-10z"/></svg>',
  footbridge: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 18h20"/><path d="M4 18v-4"/><path d="M20 18v-4"/><path d="M4 14c0-4 3.6-8 8-8s8 4 8 8"/><path d="M4 14h16"/><path d="M8 14v-2M12 14v-4M16 14v-2"/></svg>',
  locationPin: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>',
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
    deckElevation: 0,
    supportLeftX: 0,
    supportRightX: 1,
    archRise: 0.25,
    numSpans: 1,
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
    structuralSystem: 'post-beam',
    materials: {
      beams: 'glulam-df',
      columns: 'glulam-df',
      girders: 'glulam-df',
      posts: 'glulam-df',
      floors: 'clt-5ply',
      roofs: 'clt-3ply',
    },
    files: { rfp: [], drawings: [], structural: [], narratives: [], other: [] },
    assumptions: getDefaultAssumptions(),
    phases: {},
    aiNotes: [],
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
    icon: ICONS.eorBuild,
    description: 'Engineer of Record + Full Build. StructureCraft is the EOR and handles everything: consulting, structural engineering (SD/DD/CD/CA), timber design, fabrication, shipping, and site installation.',
    phases: ['consulting', 'structural-engineering', 'timber-engineering', 'construction-engineering', 'fabrication', 'shipping', 'installation', 'general-conditions'],
  },
  'delegated-design-build': {
    name: 'Delegated Design Build',
    icon: ICONS.delegatedDesign,
    description: 'StructureCraft handles all timber design, engineering, fabrication, shipping, and installation. Not the EOR -- no consulting engineering phase.',
    phases: ['timber-engineering', 'construction-engineering', 'fabrication', 'shipping', 'installation', 'general-conditions'],
  },
  'dlt-supply-only': {
    name: 'DLT Supply Only',
    icon: ICONS.dltSupply,
    description: 'Supply Dowel Laminated Timber from our shop only. Material supply, fabrication, and shipping. No design, engineering, or installation.',
    phases: ['dlt-material', 'fabrication', 'shipping'],
  },
  'engineer-supervise': {
    name: 'Engineer + Supervise',
    icon: ICONS.engineerSupervise,
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
  'fb-engineering': { name: 'Engineering', description: 'Structural design, analysis, and shop drawing engineering for footbridge' },
  'fb-fabrication': { name: 'Fabrication', description: 'Glulam fabrication, CNC, steel connections, and assembly' },
  'fb-shipping': { name: 'Shipping', description: 'Transport to site including oversized loads' },
  'fb-foundations': { name: 'Foundations', description: 'Abutments, piers, and geotechnical work' },
  'fb-installation': { name: 'Installation', description: 'Crane, crew, erection, and site work' },
  'fb-railing-finishes': { name: 'Railing & Finishes', description: 'Railing system, deck finish, and protective coatings' },
  'fb-general-conditions': { name: 'General Conditions', description: 'Project management, bonds, insurance, and contingency' },
};

// ---- SECTION 5B: BRIDGE TYPE DEFINITIONS ----
const BRIDGE_TYPES = {
  'parabolic-arch': { name: 'Parabolic Arch', description: 'Curved compression arch with deck suspended below' },
  'tied-arch': { name: 'Tied Arch (Bowstring)', description: 'Arch with horizontal tie member at deck level' },
  'warren-truss': { name: 'Warren Truss', description: 'Triangular web members alternating in orientation' },
  'pratt-truss': { name: 'Pratt Truss', description: 'Vertical and diagonal web members, diagonals in tension' },
  'clear-span-beam': { name: 'Clear Span Beam', description: 'Simple glulam beam spanning between supports' },
  'multi-span-beam': { name: 'Multi-Span Beam', description: 'Continuous beam over multiple intermediate piers' },
  'cable-stayed': { name: 'Cable-Stayed', description: 'Deck supported by cables from tower(s)' },
  'king-post-truss': { name: 'King Post Truss', description: 'Simple truss with single vertical post and two diagonals' },
};

// ---- SECTION 5C: MATERIAL OPTIONS ----
const MATERIAL_OPTIONS = {
  beams: {
    label: 'Beams',
    options: [
      { value: 'glulam-df', label: 'Glulam - Douglas Fir (24F-V8)', category: 'timber', pricePer: 4.25, unit: 'BF' },
      { value: 'glulam-spruce', label: 'Glulam - Spruce', category: 'timber', pricePer: 3.80, unit: 'BF' },
      { value: 'glulam-yc', label: 'Glulam - Yellow Cedar', category: 'timber', pricePer: 5.50, unit: 'BF' },
      { value: 'glulam-wrc', label: 'Glulam - Western Red Cedar', category: 'timber', pricePer: 5.25, unit: 'BF' },
      { value: 'lvl', label: 'LVL (Laminated Veneer Lumber)', category: 'timber', pricePer: 3.50, unit: 'BF' },
      { value: 'psl', label: 'PSL (Parallel Strand Lumber)', category: 'timber', pricePer: 4.00, unit: 'BF' },
      { value: 'steel-w', label: 'Steel W-Shape (Wide Flange)', category: 'steel', pricePer: 2800, unit: 'ton' },
      { value: 'steel-hss-rect', label: 'Steel HSS Rectangular', category: 'steel', pricePer: 3200, unit: 'ton' },
      { value: 'steel-hss-round', label: 'Steel HSS Round', category: 'steel', pricePer: 3400, unit: 'ton' },
      { value: 'concrete-precast', label: 'Precast Concrete Beam', category: 'concrete', pricePer: 18, unit: 'LF' },
      { value: 'concrete-cip', label: 'Cast-in-Place Concrete', category: 'concrete', pricePer: 22, unit: 'LF' },
    ]
  },
  columns: {
    label: 'Columns',
    options: [
      { value: 'glulam-df', label: 'Glulam - Douglas Fir', category: 'timber', pricePer: 4.50, unit: 'BF' },
      { value: 'glulam-spruce', label: 'Glulam - Spruce', category: 'timber', pricePer: 4.00, unit: 'BF' },
      { value: 'glulam-yc', label: 'Glulam - Yellow Cedar', category: 'timber', pricePer: 5.75, unit: 'BF' },
      { value: 'glulam-wrc', label: 'Glulam - Western Red Cedar', category: 'timber', pricePer: 5.50, unit: 'BF' },
      { value: 'psl', label: 'PSL (Parallel Strand Lumber)', category: 'timber', pricePer: 4.25, unit: 'BF' },
      { value: 'lvl', label: 'LVL (Laminated Veneer Lumber)', category: 'timber', pricePer: 3.75, unit: 'BF' },
      { value: 'steel-w', label: 'Steel W-Shape', category: 'steel', pricePer: 2800, unit: 'ton' },
      { value: 'steel-hss-sq', label: 'Steel HSS Square', category: 'steel', pricePer: 3200, unit: 'ton' },
      { value: 'steel-hss-round', label: 'Steel HSS Round', category: 'steel', pricePer: 3400, unit: 'ton' },
      { value: 'steel-pipe', label: 'Steel Pipe', category: 'steel', pricePer: 3000, unit: 'ton' },
      { value: 'concrete-cip', label: 'Cast-in-Place Concrete', category: 'concrete', pricePer: 45, unit: 'LF' },
      { value: 'concrete-precast', label: 'Precast Concrete', category: 'concrete', pricePer: 40, unit: 'LF' },
    ]
  },
  girders: {
    label: 'Girders',
    options: [
      { value: 'glulam-df', label: 'Glulam - Douglas Fir (24F-V8)', category: 'timber', pricePer: 4.50, unit: 'BF' },
      { value: 'glulam-spruce', label: 'Glulam - Spruce', category: 'timber', pricePer: 4.00, unit: 'BF' },
      { value: 'glulam-yc', label: 'Glulam - Yellow Cedar', category: 'timber', pricePer: 5.75, unit: 'BF' },
      { value: 'glulam-wrc', label: 'Glulam - Western Red Cedar', category: 'timber', pricePer: 5.50, unit: 'BF' },
      { value: 'steel-w', label: 'Steel W-Shape (Wide Flange)', category: 'steel', pricePer: 2800, unit: 'ton' },
      { value: 'steel-plate', label: 'Steel Plate Girder', category: 'steel', pricePer: 3500, unit: 'ton' },
      { value: 'concrete-precast', label: 'Precast Concrete Girder', category: 'concrete', pricePer: 25, unit: 'LF' },
      { value: 'concrete-cip', label: 'Cast-in-Place Concrete', category: 'concrete', pricePer: 30, unit: 'LF' },
    ]
  },
  posts: {
    label: 'Posts',
    options: [
      { value: 'glulam-df', label: 'Glulam - Douglas Fir', category: 'timber', pricePer: 4.25, unit: 'BF' },
      { value: 'glulam-spruce', label: 'Glulam - Spruce', category: 'timber', pricePer: 3.80, unit: 'BF' },
      { value: 'glulam-yc', label: 'Glulam - Yellow Cedar', category: 'timber', pricePer: 5.50, unit: 'BF' },
      { value: 'solid-df', label: 'Solid Sawn - Douglas Fir', category: 'timber', pricePer: 2.80, unit: 'BF' },
      { value: 'solid-spruce', label: 'Solid Sawn - Spruce', category: 'timber', pricePer: 2.40, unit: 'BF' },
      { value: 'steel-hss-sq', label: 'Steel HSS Square', category: 'steel', pricePer: 3200, unit: 'ton' },
      { value: 'steel-hss-round', label: 'Steel HSS Round', category: 'steel', pricePer: 3400, unit: 'ton' },
      { value: 'steel-pipe', label: 'Steel Pipe', category: 'steel', pricePer: 3000, unit: 'ton' },
      { value: 'steel-w', label: 'Steel W-Shape', category: 'steel', pricePer: 2800, unit: 'ton' },
    ]
  },
  floors: {
    label: 'Floors',
    options: [
      { value: 'clt-3ply', label: 'CLT 3-Ply (105mm)', category: 'timber', pricePer: 26, unit: 'SF' },
      { value: 'clt-5ply', label: 'CLT 5-Ply (175mm)', category: 'timber', pricePer: 34, unit: 'SF' },
      { value: 'clt-7ply', label: 'CLT 7-Ply (245mm)', category: 'timber', pricePer: 44, unit: 'SF' },
      { value: 'dlt', label: 'DLT (Dowel Laminated Timber)', category: 'timber', pricePer: 22, unit: 'SF' },
      { value: 'nlt', label: 'NLT (Nail Laminated Timber)', category: 'timber', pricePer: 15, unit: 'SF' },
      { value: 'mpp', label: 'MPP (Mass Plywood Panel)', category: 'timber', pricePer: 28, unit: 'SF' },
      { value: 'concrete-metal-deck', label: 'Concrete on Metal Deck', category: 'concrete', pricePer: 14, unit: 'SF' },
      { value: 'concrete-pt', label: 'Post-Tensioned Concrete Slab', category: 'concrete', pricePer: 18, unit: 'SF' },
      { value: 'steel-deck', label: 'Steel Deck (bare)', category: 'steel', pricePer: 8, unit: 'SF' },
      { value: 'composite-deck', label: 'Composite Steel Deck + Concrete', category: 'steel', pricePer: 16, unit: 'SF' },
    ]
  },
  roofs: {
    label: 'Roof',
    options: [
      { value: 'clt-3ply', label: 'CLT 3-Ply (105mm)', category: 'timber', pricePer: 26, unit: 'SF' },
      { value: 'clt-5ply', label: 'CLT 5-Ply (175mm)', category: 'timber', pricePer: 34, unit: 'SF' },
      { value: 'dlt', label: 'DLT (Dowel Laminated Timber)', category: 'timber', pricePer: 22, unit: 'SF' },
      { value: 'nlt', label: 'NLT (Nail Laminated Timber)', category: 'timber', pricePer: 15, unit: 'SF' },
      { value: 'mpp', label: 'MPP (Mass Plywood Panel)', category: 'timber', pricePer: 28, unit: 'SF' },
      { value: 'steel-deck', label: 'Steel Deck', category: 'steel', pricePer: 8, unit: 'SF' },
      { value: 'sip', label: 'SIP (Structural Insulated Panel)', category: 'timber', pricePer: 18, unit: 'SF' },
      { value: 'concrete-slab', label: 'Concrete Roof Slab', category: 'concrete', pricePer: 16, unit: 'SF' },
    ]
  },
};

// Global file storage - keeps actual File objects in memory for PDF extraction
var FILE_STORE = {};

// AI processing state
var AI_STATE = {
  processing: false,
  estimateId: null,
  progress: 0,
  step: '',
  startTime: null,
  extractedText: {},
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
  'Structural Steel': [
    { id: 'steel-w-shapes', name: 'W-Shapes (Wide Flange)', unit: 'ton', price: 2800, range: [2400, 3400], supplier: 'Various Mills', updated: '2025-12' },
    { id: 'steel-hss-rect', name: 'HSS Rectangular Sections', unit: 'ton', price: 3200, range: [2800, 3800], supplier: 'Atlas Tube', updated: '2025-12' },
    { id: 'steel-hss-sq', name: 'HSS Square Sections', unit: 'ton', price: 3200, range: [2800, 3800], supplier: 'Atlas Tube', updated: '2025-12' },
    { id: 'steel-hss-round', name: 'HSS Round Sections', unit: 'ton', price: 3400, range: [2900, 4000], supplier: 'Atlas Tube', updated: '2025-12' },
    { id: 'steel-pipe', name: 'Steel Pipe Sections', unit: 'ton', price: 3000, range: [2600, 3600], supplier: 'Various', updated: '2025-11' },
    { id: 'steel-angles', name: 'Steel Angles (L-Shapes)', unit: 'ton', price: 2600, range: [2200, 3200], supplier: 'Various Mills', updated: '2025-11' },
    { id: 'steel-channels', name: 'Steel Channels (C-Shapes)', unit: 'ton', price: 2700, range: [2300, 3300], supplier: 'Various Mills', updated: '2025-11' },
    { id: 'steel-plate', name: 'Steel Plate (fabricated)', unit: 'ton', price: 3500, range: [3000, 4200], supplier: 'Various', updated: '2025-11' },
    { id: 'steel-rebar', name: 'Reinforcing Steel (Rebar)', unit: 'ton', price: 1800, range: [1500, 2200], supplier: 'Harris Rebar', updated: '2025-12' },
  ],
  'Concrete': [
    { id: 'concrete-3000', name: 'Ready-Mix Concrete 3000 PSI', unit: 'CY', price: 185, range: [160, 220], supplier: 'Local Ready-Mix', updated: '2025-12' },
    { id: 'concrete-4000', name: 'Ready-Mix Concrete 4000 PSI', unit: 'CY', price: 200, range: [175, 240], supplier: 'Local Ready-Mix', updated: '2025-12' },
    { id: 'concrete-5000', name: 'Ready-Mix Concrete 5000 PSI', unit: 'CY', price: 220, range: [190, 260], supplier: 'Local Ready-Mix', updated: '2025-12' },
    { id: 'concrete-6000', name: 'Ready-Mix Concrete 6000 PSI', unit: 'CY', price: 245, range: [210, 290], supplier: 'Local Ready-Mix', updated: '2025-12' },
    { id: 'concrete-scc', name: 'Self-Consolidating Concrete', unit: 'CY', price: 280, range: [240, 340], supplier: 'Specialty Mix', updated: '2025-11' },
    { id: 'concrete-metal-deck', name: 'Concrete on Metal Deck (3")', unit: 'SF', price: 14, range: [11, 18], supplier: 'Various', updated: '2025-11' },
    { id: 'concrete-pt-slab', name: 'Post-Tensioned Slab', unit: 'SF', price: 18, range: [15, 24], supplier: 'Various', updated: '2025-10' },
    { id: 'concrete-precast-beam', name: 'Precast Concrete Beam', unit: 'LF', price: 18, range: [14, 24], supplier: 'Various', updated: '2025-10' },
    { id: 'concrete-precast-col', name: 'Precast Concrete Column', unit: 'LF', price: 40, range: [30, 55], supplier: 'Various', updated: '2025-10' },
    { id: 'concrete-formwork', name: 'Formwork (standard)', unit: 'SF', price: 12, range: [8, 18], supplier: 'Various', updated: '2025-11' },
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
  // ---- FOOTBRIDGE SAMPLE ESTIMATES ----
  {
    id: 'est-fb-001',
    name: 'Stanley Park Pedestrian Bridge',
    client: 'Vancouver Parks Board',
    location: 'Vancouver, BC',
    projectType: 'footbridge',
    deliveryModel: 'eor-build',
    status: 'won',
    createdAt: '2025-05-12',
    updatedAt: '2025-07-08',
    scopeDescription: '45m parabolic arch pedestrian bridge in Stanley Park. Glulam Douglas Fir structure with DLT deck, timber and steel cable railings. Pedestrian traffic only. Standard vehicular site access.',
    assumptions: getDefaultAssumptions(),
    phases: {
      'fb-engineering': { items: [
        { name: 'Structural Design & Analysis', qty: 280, unit: 'hr', rate: 195, total: 54600 },
        { name: 'Shop Drawing Engineering', qty: 180, unit: 'hr', rate: 180, total: 32400 },
        { name: 'Connection Design', qty: 120, unit: 'hr', rate: 180, total: 21600 },
        { name: 'Drafting / Detailing', qty: 200, unit: 'hr', rate: 115, total: 23000 },
        { name: 'Geotechnical Review', qty: 40, unit: 'hr', rate: 195, total: 7800 },
      ], subtotal: 139400 },
      'fb-fabrication': { items: [
        { name: 'Glulam Arch Members (24F-V8 DF)', qty: 8500, unit: 'BF', rate: 4.25, total: 36125 },
        { name: 'Glulam Deck Beams', qty: 3200, unit: 'BF', rate: 4.25, total: 13600 },
        { name: 'DLT Deck Panels', qty: 1720, unit: 'SF', rate: 22, total: 37840 },
        { name: 'Steel Connections & Hardware', qty: 3.5, unit: 'ton', rate: 4500, total: 15750 },
        { name: 'Hanger Rods & Tension Members', qty: 1, unit: 'LS', rate: 18000, total: 18000 },
        { name: 'Shop Fabrication Labor', qty: 640, unit: 'hr', rate: 82, total: 52480 },
        { name: 'CNC Processing', qty: 1, unit: 'LS', rate: 22000, total: 22000 },
        { name: 'Protective Coatings (factory)', qty: 1, unit: 'LS', rate: 14000, total: 14000 },
      ], subtotal: 209795 },
      'fb-shipping': { items: [
        { name: 'Flatbed Trucks (Local)', qty: 4, unit: 'truck', rate: 4500, total: 18000 },
        { name: 'Oversized Load Permits', qty: 2, unit: 'each', rate: 2500, total: 5000 },
        { name: 'Logistics Coordination', qty: 20, unit: 'hr', rate: 115, total: 2300 },
      ], subtotal: 25300 },
      'fb-foundations': { items: [
        { name: 'Abutment Foundations (concrete)', qty: 2, unit: 'each', rate: 28000, total: 56000 },
        { name: 'Excavation & Backfill', qty: 1, unit: 'LS', rate: 15000, total: 15000 },
        { name: 'Geotechnical Investigation', qty: 1, unit: 'LS', rate: 12000, total: 12000 },
        { name: 'Bearing Pads & Anchorage', qty: 1, unit: 'LS', rate: 8000, total: 8000 },
      ], subtotal: 91000 },
      'fb-installation': { items: [
        { name: 'Site Carpenters', qty: 480, unit: 'hr', rate: 95, total: 45600 },
        { name: 'Site Laborers', qty: 240, unit: 'hr', rate: 65, total: 15600 },
        { name: 'Site Superintendent', qty: 120, unit: 'hr', rate: 140, total: 16800 },
        { name: 'Mobile Crane 100-ton', qty: 5, unit: 'day', rate: 7500, total: 37500 },
        { name: 'Crane Operator', qty: 40, unit: 'hr', rate: 115, total: 4600 },
        { name: 'Temporary Works & Shoring', qty: 1, unit: 'LS', rate: 25000, total: 25000 },
      ], subtotal: 145100 },
      'fb-railing-finishes': { items: [
        { name: 'Timber Posts (glulam)', qty: 420, unit: 'LF', rate: 45, total: 18900 },
        { name: 'Stainless Steel Cable Infill', qty: 420, unit: 'LF', rate: 65, total: 27300 },
        { name: 'Top Rail (timber)', qty: 420, unit: 'LF', rate: 28, total: 11760 },
        { name: 'Deck Finish & Sealant', qty: 1720, unit: 'SF', rate: 6, total: 10320 },
        { name: 'Non-Slip Surface Treatment', qty: 1720, unit: 'SF', rate: 3.50, total: 6020 },
      ], subtotal: 74300 },
      'fb-general-conditions': { items: [
        { name: 'Project Management', qty: 160, unit: 'hr', rate: 165, total: 26400 },
        { name: 'Insurance & Bonds', qty: 1, unit: 'LS', rate: 22000, total: 22000 },
        { name: 'Environmental Protection', qty: 1, unit: 'LS', rate: 8000, total: 8000 },
        { name: 'Site Safety & Traffic Mgmt', qty: 1, unit: 'LS', rate: 12000, total: 12000 },
        { name: 'Contingency (5%)', qty: 1, unit: 'LS', rate: 35045, total: 35045 },
      ], subtotal: 103445 },
    },
    totalCost: 788340,
  },
  {
    id: 'est-fb-002',
    name: 'Kicking Horse River Crossing',
    client: 'Town of Golden',
    location: 'Golden, BC',
    projectType: 'footbridge',
    deliveryModel: 'eor-build',
    status: 'sent',
    createdAt: '2025-09-03',
    updatedAt: '2025-10-18',
    scopeDescription: '65m tied arch (bowstring) pedestrian and cyclist bridge crossing the Kicking Horse River. Concrete on timber deck, glulam spruce arch, challenging geotechnical conditions requiring piled foundations. Restricted site access.',
    assumptions: getDefaultAssumptions(),
    phases: {
      'fb-engineering': { items: [
        { name: 'Structural Design & Analysis', qty: 420, unit: 'hr', rate: 195, total: 81900 },
        { name: 'Shop Drawing Engineering', qty: 260, unit: 'hr', rate: 180, total: 46800 },
        { name: 'Connection Design', qty: 180, unit: 'hr', rate: 180, total: 32400 },
        { name: 'Drafting / Detailing', qty: 300, unit: 'hr', rate: 115, total: 34500 },
        { name: 'Geotechnical Review', qty: 80, unit: 'hr', rate: 195, total: 15600 },
        { name: 'Hydraulic Engineering Review', qty: 60, unit: 'hr', rate: 195, total: 11700 },
      ], subtotal: 222900 },
      'fb-fabrication': { items: [
        { name: 'Glulam Arch Members (Spruce)', qty: 14500, unit: 'BF', rate: 3.80, total: 55100 },
        { name: 'Glulam Deck Beams', qty: 5800, unit: 'BF', rate: 3.80, total: 22040 },
        { name: 'Glulam Stringers', qty: 3200, unit: 'BF', rate: 3.80, total: 12160 },
        { name: 'Steel Tie Rod & Connections', qty: 6.5, unit: 'ton', rate: 4500, total: 29250 },
        { name: 'Hanger System (steel rods)', qty: 1, unit: 'LS', rate: 32000, total: 32000 },
        { name: 'Shop Fabrication Labor', qty: 960, unit: 'hr', rate: 82, total: 78720 },
        { name: 'CNC Processing', qty: 1, unit: 'LS', rate: 35000, total: 35000 },
        { name: 'Protective Coatings (factory)', qty: 1, unit: 'LS', rate: 22000, total: 22000 },
      ], subtotal: 286270 },
      'fb-shipping': { items: [
        { name: 'Flatbed Trucks (Long Distance)', qty: 6, unit: 'truck', rate: 6500, total: 39000 },
        { name: 'Oversized Load Permits & Escorts', qty: 4, unit: 'each', rate: 3500, total: 14000 },
        { name: 'Logistics Coordination', qty: 40, unit: 'hr', rate: 115, total: 4600 },
      ], subtotal: 57600 },
      'fb-foundations': { items: [
        { name: 'Piled Foundation - West Abutment', qty: 1, unit: 'LS', rate: 85000, total: 85000 },
        { name: 'Piled Foundation - East Abutment', qty: 1, unit: 'LS', rate: 85000, total: 85000 },
        { name: 'Concrete Abutment Caps', qty: 2, unit: 'each', rate: 35000, total: 70000 },
        { name: 'Geotechnical Investigation', qty: 1, unit: 'LS', rate: 28000, total: 28000 },
        { name: 'Cofferdam / Dewatering', qty: 1, unit: 'LS', rate: 45000, total: 45000 },
        { name: 'Bearing Pads & Anchorage', qty: 1, unit: 'LS', rate: 12000, total: 12000 },
      ], subtotal: 325000 },
      'fb-installation': { items: [
        { name: 'Site Carpenters', qty: 720, unit: 'hr', rate: 95, total: 68400 },
        { name: 'Site Laborers', qty: 400, unit: 'hr', rate: 65, total: 26000 },
        { name: 'Site Superintendent', qty: 200, unit: 'hr', rate: 140, total: 28000 },
        { name: 'Mobile Crane 100-ton', qty: 8, unit: 'day', rate: 7500, total: 60000 },
        { name: 'Crane Operator', qty: 64, unit: 'hr', rate: 115, total: 7360 },
        { name: 'Temporary Works & Shoring', qty: 1, unit: 'LS', rate: 45000, total: 45000 },
        { name: 'Concrete Deck Topping', qty: 2470, unit: 'SF', rate: 10, total: 24700 },
      ], subtotal: 259460 },
      'fb-railing-finishes': { items: [
        { name: 'Timber Posts (glulam)', qty: 580, unit: 'LF', rate: 45, total: 26100 },
        { name: 'Steel Mesh Panels', qty: 580, unit: 'LF', rate: 85, total: 49300 },
        { name: 'Top Rail (steel)', qty: 580, unit: 'LF', rate: 38, total: 22040 },
        { name: 'Deck Finish & Sealant', qty: 2470, unit: 'SF', rate: 6, total: 14820 },
        { name: 'Non-Slip Surface Treatment', qty: 2470, unit: 'SF', rate: 3.50, total: 8645 },
      ], subtotal: 120905 },
      'fb-general-conditions': { items: [
        { name: 'Project Management', qty: 240, unit: 'hr', rate: 165, total: 39600 },
        { name: 'Insurance & Bonds', qty: 1, unit: 'LS', rate: 38000, total: 38000 },
        { name: 'Environmental Protection', qty: 1, unit: 'LS', rate: 25000, total: 25000 },
        { name: 'Site Safety & Traffic Mgmt', qty: 1, unit: 'LS', rate: 18000, total: 18000 },
        { name: 'Contingency (5%)', qty: 1, unit: 'LS', rate: 64757, total: 64757 },
      ], subtotal: 185357 },
    },
    totalCost: 1457492,
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
  toast.className = 'toast toast-' + type;
  toast.innerHTML = '<span>' + (ICONS[type] || ICONS.info) + '</span><span>' + message + '</span>';
  container.appendChild(toast);
  setTimeout(function() { toast.classList.add('leaving'); setTimeout(function() { toast.remove(); }, 300); }, 3000);
}


// ---- SECTION 9: PAGE RENDERERS ----

// --- INPUT PAGE ---
function renderInputPage() {
  var est = STATE.currentEstimate;
  return '<div class="fade-in">' +
    '<div class="section-header">' +
      '<div>' +
        '<div class="section-title">' + ICONS.input + ' New Estimate Workspace</div>' +
        '<div class="section-desc">Define your project scope, upload documents, and select your delivery model</div>' +
      '</div>' +
      '<div class="section-actions">' +
        '<button class="btn btn-sm" onclick="clearCurrentEstimate()">Clear All</button>' +
        '<button class="btn btn-sm btn-accent" onclick="saveCurrentEstimate()">' +
          ICONS.check + ' Save Estimate' +
        '</button>' +
      '</div>' +
    '</div>' +

    '<!-- Project Info -->' +
    '<div class="card mb-16">' +
      '<div class="card-header">' +
        '<div class="card-title">' + ICONS.building + ' Project Information</div>' +
      '</div>' +
      '<div class="form-row">' +
        '<div class="form-group">' +
          '<label class="form-label">Project Name</label>' +
          '<input class="form-input" type="text" placeholder="e.g., Pacific Heights Mixed-Use" value="' + est.name + '" onchange="updateEstimate(\'name\', this.value)">' +
        '</div>' +
        '<div class="form-group">' +
          '<label class="form-label">Client</label>' +
          '<input class="form-input" type="text" placeholder="e.g., Westbank Corp" value="' + est.client + '" onchange="updateEstimate(\'client\', this.value)">' +
        '</div>' +
      '</div>' +
      '<div class="form-row">' +
        '<div class="form-group">' +
          '<label class="form-label">Location</label>' +
          '<input class="form-input" type="text" placeholder="e.g., Vancouver, BC" value="' + est.location + '" onchange="updateEstimate(\'location\', this.value)">' +
        '</div>' +
        '<div class="form-group">' +
          '<label class="form-label">Project Type</label>' +
          '<select class="form-select" onchange="updateEstimate(\'projectType\', this.value)">' +
            '<option value="commercial"' + (est.projectType==='commercial'?' selected':'') + '>Commercial</option>' +
            '<option value="residential"' + (est.projectType==='residential'?' selected':'') + '>Residential</option>' +
            '<option value="institutional"' + (est.projectType==='institutional'?' selected':'') + '>Institutional</option>' +
            '<option value="mixed-use"' + (est.projectType==='mixed-use'?' selected':'') + '>Mixed-Use</option>' +
            '<option value="hospitality"' + (est.projectType==='hospitality'?' selected':'') + '>Hospitality</option>' +
            '<option value="industrial"' + (est.projectType==='industrial'?' selected':'') + '>Industrial</option>' +
          '</select>' +
        '</div>' +
      '</div>' +
    '</div>' +

    '<!-- Structural System -->' +
    '<div class="card mb-16">' +
      '<div class="card-header">' +
        '<div class="card-title">' + ICONS.building + ' Structural System</div>' +
      '</div>' +
      '<div class="form-row">' +
        '<div class="form-group">' +
          '<label class="form-label">Structural System</label>' +
          '<select class="form-select" onchange="updateEstimate(\'structuralSystem\', this.value)">' +
            '<option value="post-beam"' + (est.structuralSystem==='post-beam'?' selected':'') + '>Post-and-Beam</option>' +
            '<option value="panel-system"' + (est.structuralSystem==='panel-system'?' selected':'') + '>Panel System</option>' +
            '<option value="hybrid"' + (est.structuralSystem==='hybrid'?' selected':'') + '>Hybrid (Timber + Steel/Concrete)</option>' +
            '<option value="heavy-timber"' + (est.structuralSystem==='heavy-timber'?' selected':'') + '>Heavy Timber</option>' +
            '<option value="mass-timber"' + (est.structuralSystem==='mass-timber'?' selected':'') + '>Mass Timber (CLT/DLT)</option>' +
            '<option value="steel-frame"' + (est.structuralSystem==='steel-frame'?' selected':'') + '>Steel Frame</option>' +
            '<option value="concrete-frame"' + (est.structuralSystem==='concrete-frame'?' selected':'') + '>Concrete Frame</option>' +
          '</select>' +
        '</div>' +
      '</div>' +
    '</div>' +

    '<!-- Material Selections -->' +
    '<div class="card mb-16">' +
      '<div class="card-header">' +
        '<div>' +
          '<div class="card-title">' + ICONS.building + ' Material Selections</div>' +
          '<div class="card-subtitle">Select the primary material for each structural element. These selections drive pricing in the estimate.</div>' +
        '</div>' +
      '</div>' +
      renderMaterialSelect('beams', est) +
      renderMaterialSelect('columns', est) +
      renderMaterialSelect('girders', est) +
      renderMaterialSelect('posts', est) +
      renderMaterialSelect('floors', est) +
      renderMaterialSelect('roofs', est) +
    '</div>' +

    '<!-- Delivery Model Selector -->' +
    '<div class="card mb-16">' +
      '<div class="card-header">' +
        '<div>' +
          '<div class="card-title">Delivery Model</div>' +
          '<div class="card-subtitle">Select the scope of StructureCraft\'s involvement. This determines which cost phases are included.</div>' +
        '</div>' +
      '</div>' +
      '<div class="delivery-model-grid">' +
        Object.entries(DELIVERY_MODELS).map(function(entry) {
          var key = entry[0], model = entry[1];
          return '<div class="delivery-model-card ' + (est.deliveryModel === key ? 'active' : '') + '" onclick="setDeliveryModel(\'' + key + '\')">' +
            '<div class="dm-icon">' + model.icon + '</div>' +
            '<div class="dm-title">' + model.name + '</div>' +
            '<div class="dm-desc">' + model.description + '</div>' +
            '<div class="dm-phases">' +
              model.phases.map(function(p) { return '<span class="dm-phase-tag">' + (PHASE_DEFS[p] ? PHASE_DEFS[p].name : p) + '</span>'; }).join('') +
            '</div>' +
          '</div>';
        }).join('') +
      '</div>' +
    '</div>' +

    '<!-- Scope & Communications Sandbox -->' +
    '<div class="section-divider">Project Scope & Communications</div>' +
    '<div class="grid-2 mb-16">' +
      '<div class="card">' +
        '<div class="card-header">' +
          '<div class="card-title">Project Scope & Description</div>' +
        '</div>' +
        '<div class="form-group">' +
          '<textarea class="form-textarea" rows="5" placeholder="Describe the full project scope: building type, number of stories, approximate square footage, structural system, key features, special requirements..." onchange="updateEstimate(\'scopeDescription\', this.value)">' + est.scopeDescription + '</textarea>' +
        '</div>' +
      '</div>' +
      '<div class="card">' +
        '<div class="card-header">' +
          '<div class="card-title">RFP Notes & Requirements</div>' +
        '</div>' +
        '<div class="form-group">' +
          '<textarea class="form-textarea" rows="5" placeholder="Key requirements from the RFP: deadlines, scope boundaries, deliverables, evaluation criteria, pricing format requirements..." onchange="updateEstimate(\'rfpNotes\', this.value)">' + est.rfpNotes + '</textarea>' +
        '</div>' +
      '</div>' +
    '</div>' +

    '<div class="grid-2 mb-16">' +
      '<div class="card">' +
        '<div class="card-header">' +
          '<div class="card-title">RFIs & Clarifications</div>' +
        '</div>' +
        '<div class="form-group">' +
          '<textarea class="form-textarea" rows="4" placeholder="Outstanding RFIs, design clarifications, assumptions that need confirmation..." onchange="updateEstimate(\'rfiNotes\', this.value)">' + est.rfiNotes + '</textarea>' +
        '</div>' +
      '</div>' +
      '<div class="card">' +
        '<div class="card-header">' +
          '<div class="card-title">Client & Contractor Communications</div>' +
        '</div>' +
        '<div class="form-group">' +
          '<textarea class="form-textarea" rows="4" placeholder="Important notes from the client, contractor, or architect. Key constraints, preferences, budget signals..." onchange="updateEstimate(\'clientComms\', this.value)">' + est.clientComms + '</textarea>' +
        '</div>' +
      '</div>' +
    '</div>' +

    '<!-- Document Upload Zones -->' +
    '<div class="section-divider">Document Uploads</div>' +
    '<div class="upload-grid mb-16">' +
      '<div class="card">' +
        '<div class="upload-zone" id="upload-rfp" ondrop="handleDrop(event,\'rfp\')" ondragover="handleDragOver(event)" ondragleave="handleDragLeave(event)" onclick="triggerUpload(\'rfp\')">' +
          '<div class="upload-icon">' + ICONS.upload + '</div>' +
          '<div class="upload-title">RFP / Bid Documents</div>' +
          '<div class="upload-subtitle">Drop files here or click to browse</div>' +
          '<div class="upload-limit">PDF, DOCX, XLSX - Max 40 MB each</div>' +
          '<input type="file" id="file-input-rfp" style="display:none" multiple accept=".pdf,.docx,.xlsx,.xls,.doc" onchange="handleFileSelect(event,\'rfp\')">' +
        '</div>' +
        renderFileList(est.files.rfp, 'rfp') +
      '</div>' +
      '<div class="card">' +
        '<div class="upload-zone" id="upload-drawings" ondrop="handleDrop(event,\'drawings\')" ondragover="handleDragOver(event)" ondragleave="handleDragLeave(event)" onclick="triggerUpload(\'drawings\')">' +
          '<div class="upload-icon">' + ICONS.upload + '</div>' +
          '<div class="upload-title">Architectural Drawings</div>' +
          '<div class="upload-subtitle">SD or DD drawing sets</div>' +
          '<div class="upload-limit">PDF - Max 40 MB each</div>' +
          '<input type="file" id="file-input-drawings" style="display:none" multiple accept=".pdf,.dwg" onchange="handleFileSelect(event,\'drawings\')">' +
        '</div>' +
        renderFileList(est.files.drawings, 'drawings') +
      '</div>' +
      '<div class="card">' +
        '<div class="upload-zone" id="upload-structural" ondrop="handleDrop(event,\'structural\')" ondragover="handleDragOver(event)" ondragleave="handleDragLeave(event)" onclick="triggerUpload(\'structural\')">' +
          '<div class="upload-icon">' + ICONS.upload + '</div>' +
          '<div class="upload-title">Structural Drawings</div>' +
          '<div class="upload-subtitle">Structural engineering docs</div>' +
          '<div class="upload-limit">PDF - Max 40 MB each</div>' +
          '<input type="file" id="file-input-structural" style="display:none" multiple accept=".pdf,.dwg" onchange="handleFileSelect(event,\'structural\')">' +
        '</div>' +
        renderFileList(est.files.structural, 'structural') +
      '</div>' +
      '<div class="card">' +
        '<div class="upload-zone" id="upload-narratives" ondrop="handleDrop(event,\'narratives\')" ondragover="handleDragOver(event)" ondragleave="handleDragLeave(event)" onclick="triggerUpload(\'narratives\')">' +
          '<div class="upload-icon">' + ICONS.upload + '</div>' +
          '<div class="upload-title">Narratives & Specs</div>' +
          '<div class="upload-subtitle">Structural narratives, specs</div>' +
          '<div class="upload-limit">PDF, DOCX - Max 40 MB each</div>' +
          '<input type="file" id="file-input-narratives" style="display:none" multiple accept=".pdf,.docx,.doc" onchange="handleFileSelect(event,\'narratives\')">' +
        '</div>' +
        renderFileList(est.files.narratives, 'narratives') +
      '</div>' +
    '</div>' +

    '<!-- Generate Estimate Button -->' +
    '<div class="card mb-16" style="text-align:center; padding: 30px;">' +
      (localStorage.getItem('sc-openai-key') ?
        '<p style="color: var(--text-secondary); margin-bottom: 16px; font-size: 0.85rem;">' +
          'AI-powered estimation is active. Upload drawings and click <strong>Generate Estimate</strong> to analyze your documents. ' +
          'The AI will read through your drawing set, perform quantity takeoff, and generate a detailed estimate. ' +
          'This may take 1-2 minutes depending on document size.' +
        '</p>'
      :
        '<p style="color: var(--text-secondary); margin-bottom: 16px; font-size: 0.85rem;">' +
          'Upload your drawing set and click <strong>Generate Estimate</strong>. ' +
          'For AI-powered PDF analysis, add your OpenAI API key in <strong>Settings</strong>. ' +
          'Without an API key, a template-based estimate will be generated based on your scope description and material selections.' +
        '</p>'
      ) +
      '<button class="btn btn-lg btn-accent" onclick="generateEstimate()" id="btn-generate" style="padding: 14px 40px; font-size: 1rem;">' +
        ICONS.bolt + ' Generate Estimate' +
      '</button>' +
      '<div id="ai-progress-container" style="display:none; margin-top: 20px;"></div>' +
    '</div>' +
  '</div>';
}

function renderFileList(files, category) {
  if (!files || files.length === 0) return '';
  return '<div class="upload-file-list">' +
    files.map(function(f, i) {
      return '<div class="upload-file-item">' +
        '<span class="file-icon">' + ICONS.file + '</span>' +
        '<span class="file-name">' + f.name + '</span>' +
        '<span class="file-size">' + formatFileSize(f.size) + '</span>' +
        '<span class="file-remove" onclick="removeFile(\'' + category + '\', ' + i + ')">' + ICONS.trash + '</span>' +
      '</div>';
    }).join('') +
  '</div>';
}

function renderMaterialSelect(elementType, est) {
  var mat = MATERIAL_OPTIONS[elementType];
  if (!mat) return '';
  var current = (est.materials && est.materials[elementType]) || mat.options[0].value;
  var currentOpt = mat.options.find(function(o) { return o.value === current; });
  var categoryLabel = currentOpt ? currentOpt.category : '';
  var categoryBadge = '';
  if (categoryLabel === 'timber') categoryBadge = '<span class="badge badge-won" style="font-size:0.65rem; padding:2px 6px; margin-left:8px;">Timber</span>';
  else if (categoryLabel === 'steel') categoryBadge = '<span class="badge badge-sent" style="font-size:0.65rem; padding:2px 6px; margin-left:8px;">Steel</span>';
  else if (categoryLabel === 'concrete') categoryBadge = '<span class="badge badge-draft" style="font-size:0.65rem; padding:2px 6px; margin-left:8px;">Concrete</span>';

  return '<div class="form-row" style="margin-bottom:8px;">' +
    '<div class="form-group" style="flex:1;">' +
      '<label class="form-label">' + mat.label + categoryBadge + '</label>' +
      '<select class="form-select" onchange="updateMaterial(\'' + elementType + '\', this.value)">' +
        '<optgroup label="Timber">' +
          mat.options.filter(function(o) { return o.category === 'timber'; }).map(function(o) {
            return '<option value="' + o.value + '"' + (current === o.value ? ' selected' : '') + '>' + o.label + '</option>';
          }).join('') +
        '</optgroup>' +
        '<optgroup label="Steel">' +
          mat.options.filter(function(o) { return o.category === 'steel'; }).map(function(o) {
            return '<option value="' + o.value + '"' + (current === o.value ? ' selected' : '') + '>' + o.label + '</option>';
          }).join('') +
        '</optgroup>' +
        '<optgroup label="Concrete">' +
          mat.options.filter(function(o) { return o.category === 'concrete'; }).map(function(o) {
            return '<option value="' + o.value + '"' + (current === o.value ? ' selected' : '') + '>' + o.label + '</option>';
          }).join('') +
        '</optgroup>' +
      '</select>' +
    '</div>' +
  '</div>';
}

function updateMaterial(elementType, value) {
  if (!STATE.currentEstimate.materials) STATE.currentEstimate.materials = {};
  STATE.currentEstimate.materials[elementType] = value;
  STATE.currentEstimate.updatedAt = new Date().toISOString();
  saveState();
  renderPage();
}

function formatFileSize(bytes) {
  if (bytes < 1024) return bytes + ' B';
  if (bytes < 1048576) return (bytes / 1024).toFixed(1) + ' KB';
  return (bytes / 1048576).toFixed(1) + ' MB';
}


// --- OUTPUT PAGE ---
function renderOutputPage() {
  var est = STATE.currentEstimate;
  var modelKey = est.deliveryModel || 'eor-build';
  var model = DELIVERY_MODELS[modelKey];
  var phaseKeys = model ? model.phases : [];
  var hasData = est.phases && Object.keys(est.phases).length > 0;
  var activeTab = STATE.outputActiveTab || 'summary';

  // Calculate totals
  var subtotal = 0;
  phaseKeys.forEach(function(pk) {
    if (est.phases && est.phases[pk]) {
      subtotal += calcPhaseTotal(est.phases[pk]);
    }
  });
  var margin = subtotal * (est.assumptions.marginPercent / 100);
  var overhead = subtotal * (est.assumptions.overheadPercent / 100);
  var contingency = subtotal * (est.assumptions.contingencyPercent / 100);
  var bondIns = subtotal * (est.assumptions.bondInsurancePercent / 100);
  var grandTotal = subtotal + margin + overhead + bondIns;

  return '<div class="fade-in">' +
    '<div class="section-header">' +
      '<div>' +
        '<div class="section-title">' + ICONS.output + ' Estimate Output</div>' +
        '<div class="section-desc">' + (est.name || 'Untitled Project') + ' -- ' + (model ? model.name : 'No model selected') + '</div>' +
      '</div>' +
      '<div class="section-actions">' +
        '<button class="btn btn-sm" onclick="exportEstimateXLSX()">' +
          ICONS.download + ' Export XLSX' +
        '</button>' +
        '<button class="btn btn-sm" onclick="exportEstimate()">' +
          ICONS.download + ' Export CSV' +
        '</button>' +
        '<button class="btn btn-sm btn-accent" onclick="saveCurrentEstimate()">' +
          ICONS.check + ' Save' +
        '</button>' +
      '</div>' +
    '</div>' +

    '<!-- Assumptions Box -->' +
    '<div class="assumptions-box mb-20">' +
      '<div class="assumptions-header">' +
        ICONS.warning + ' Pricing Assumptions' +
        '<span style="margin-left:auto; font-size:0.72rem; font-weight:400; color:var(--text-secondary);">Click any value to edit</span>' +
      '</div>' +
      '<div class="assumptions-grid">' +
        '<div class="assumption-item"><div class="assumption-label">Margin</div><div class="assumption-value editable" onclick="editAssumption(\'marginPercent\', this)">' + fmtPct(est.assumptions.marginPercent) + '</div></div>' +
        '<div class="assumption-item"><div class="assumption-label">Overhead</div><div class="assumption-value editable" onclick="editAssumption(\'overheadPercent\', this)">' + fmtPct(est.assumptions.overheadPercent) + '</div></div>' +
        '<div class="assumption-item"><div class="assumption-label">Contingency</div><div class="assumption-value editable" onclick="editAssumption(\'contingencyPercent\', this)">' + fmtPct(est.assumptions.contingencyPercent) + '</div></div>' +
        '<div class="assumption-item"><div class="assumption-label">Bond & Insurance</div><div class="assumption-value editable" onclick="editAssumption(\'bondInsurancePercent\', this)">' + fmtPct(est.assumptions.bondInsurancePercent) + '</div></div>' +
        '<div class="assumption-item"><div class="assumption-label">Glulam (per BF)</div><div class="assumption-value editable" onclick="editAssumption(\'glulamPriceBF\', this)">' + fmtDec(est.assumptions.glulamPriceBF) + '</div></div>' +
        '<div class="assumption-item"><div class="assumption-label">CLT 5-ply (per SF)</div><div class="assumption-value editable" onclick="editAssumption(\'cltPriceSF5\', this)">' + fmtDec(est.assumptions.cltPriceSF5) + '</div></div>' +
        '<div class="assumption-item"><div class="assumption-label">DLT (per SF)</div><div class="assumption-value editable" onclick="editAssumption(\'dltPriceSF\', this)">' + fmtDec(est.assumptions.dltPriceSF) + '</div></div>' +
        '<div class="assumption-item"><div class="assumption-label">Shipping (per BF)</div><div class="assumption-value editable" onclick="editAssumption(\'shippingPerBF\', this)">' + fmtDec(est.assumptions.shippingPerBF) + '</div></div>' +
        '<div class="assumption-item"><div class="assumption-label">Engineering (per hr)</div><div class="assumption-value editable" onclick="editAssumption(\'engHourlyRate\', this)">' + fmtDec(est.assumptions.engHourlyRate) + '</div></div>' +
        '<div class="assumption-item"><div class="assumption-label">Shop Rate (per hr)</div><div class="assumption-value editable" onclick="editAssumption(\'shopHourlyRate\', this)">' + fmtDec(est.assumptions.shopHourlyRate) + '</div></div>' +
        '<div class="assumption-item"><div class="assumption-label">Site Carpenter (per hr)</div><div class="assumption-value editable" onclick="editAssumption(\'siteCarpentrHourlyRate\', this)">' + fmtDec(est.assumptions.siteCarpentrHourlyRate) + '</div></div>' +
        '<div class="assumption-item"><div class="assumption-label">Crane (per day)</div><div class="assumption-value editable" onclick="editAssumption(\'craneDailyRate\', this)">' + fmt(est.assumptions.craneDailyRate) + '</div></div>' +
      '</div>' +
    '</div>' +

    '<!-- Phase Tabs -->' +
    '<div class="tabs">' +
      '<div class="tab ' + (activeTab === 'summary' ? 'active' : '') + '" onclick="switchOutputTab(\'summary\')">Summary</div>' +
      phaseKeys.map(function(pk) {
        return '<div class="tab ' + (activeTab === pk ? 'active' : '') + '" onclick="switchOutputTab(\'' + pk + '\')">' +
          (PHASE_DEFS[pk] ? PHASE_DEFS[pk].name : pk) +
        '</div>';
      }).join('') +
      (est.aiNotes && est.aiNotes.length > 0 ? '<div class="tab ' + (activeTab === 'ai-notes' ? 'active' : '') + '" onclick="switchOutputTab(\'ai-notes\')" style="color: var(--accent);">' + ICONS.info + ' AI Notes</div>' : '') +
    '</div>' +

    '<!-- Tab Content -->' +
    (activeTab === 'summary' ? renderOutputSummary(est, phaseKeys, subtotal, margin, overhead, contingency, bondIns, grandTotal) : '') +
    (activeTab === 'ai-notes' ? renderAINotesTab(est) : '') +
    phaseKeys.map(function(pk) { return activeTab === pk ? renderPhaseTab(est, pk) : ''; }).join('') +
  '</div>';
}

function renderOutputSummary(est, phaseKeys, subtotal, margin, overhead, contingency, bondIns, grandTotal) {
  return '<div class="slide-up">' +
    '<div class="output-summary">' +
      '<div>' +
        '<div class="card">' +
          '<div class="card-title mb-12">Cost Breakdown by Phase</div>' +
          '<div class="mini-chart">' +
            phaseKeys.map(function(pk) {
              var phaseTotal = est.phases && est.phases[pk] ? calcPhaseTotal(est.phases[pk]) : 0;
              var pct = subtotal > 0 ? (phaseTotal / subtotal * 100) : 0;
              return '<div class="bar-chart-row">' +
                '<div class="bar-chart-label">' + (PHASE_DEFS[pk] ? PHASE_DEFS[pk].name : pk) + '</div>' +
                '<div class="bar-chart-track">' +
                  '<div class="bar-chart-fill" style="width:' + Math.max(pct, 2) + '%">' +
                    (pct > 15 ? '<span class="bar-chart-value">' + fmtPct(pct) + '</span>' : '') +
                  '</div>' +
                '</div>' +
                '<div class="bar-chart-amount">' + fmt(phaseTotal) + '</div>' +
              '</div>';
            }).join('') +
          '</div>' +
        '</div>' +
      '</div>' +
      '<div>' +
        '<div class="card">' +
          '<div class="card-title mb-12">Cost Summary</div>' +
          '<div class="summary-row"><span class="summary-row-label">Direct Costs (Subtotal)</span><span class="summary-row-value">' + fmt(subtotal) + '</span></div>' +
          '<div class="summary-divider"></div>' +
          '<div class="summary-row"><span class="summary-row-label">Overhead (' + fmtPct(est.assumptions.overheadPercent) + ')</span><span class="summary-row-value">' + fmt(overhead) + '</span></div>' +
          '<div class="summary-row"><span class="summary-row-label">Margin (' + fmtPct(est.assumptions.marginPercent) + ')</span><span class="summary-row-value">' + fmt(margin) + '</span></div>' +
          '<div class="summary-row"><span class="summary-row-label">Contingency (' + fmtPct(est.assumptions.contingencyPercent) + ')</span><span class="summary-row-value">' + fmt(contingency) + '</span></div>' +
          '<div class="summary-row"><span class="summary-row-label">Bond & Insurance (' + fmtPct(est.assumptions.bondInsurancePercent) + ')</span><span class="summary-row-value">' + fmt(bondIns) + '</span></div>' +
          '<div class="summary-divider"></div>' +
          '<div class="summary-total mt-8">' +
            '<div class="summary-total-label">Grand Total</div>' +
            '<div class="summary-total-value">' + fmt(grandTotal) + '</div>' +
          '</div>' +
          '<div class="mt-12">' +
            '<div class="summary-row"><span class="summary-row-label">Effective Margin</span><span class="summary-row-value text-accent">' + (subtotal > 0 ? fmtPct((grandTotal - subtotal) / grandTotal * 100) : '0.0%') + '</span></div>' +
          '</div>' +
        '</div>' +
      '</div>' +
    '</div>' +
  '</div>';
}

function renderPhaseTab(est, phaseKey) {
  var phase = est.phases && est.phases[phaseKey] ? est.phases[phaseKey] : { items: [] };
  var phaseDef = PHASE_DEFS[phaseKey] || { name: phaseKey, description: '' };
  var phaseSubtotal = calcPhaseTotal(phase);

  return '<div class="slide-up">' +
    '<div class="card">' +
      '<div class="card-header">' +
        '<div>' +
          '<div class="card-title">' + phaseDef.name + '</div>' +
          '<div class="card-subtitle">' + phaseDef.description + '</div>' +
        '</div>' +
        '<button class="btn btn-sm btn-accent" onclick="addLineItem(\'' + phaseKey + '\')">' +
          ICONS.plus + ' Add Line Item' +
        '</button>' +
      '</div>' +
      '<div class="line-items-header">' +
        '<div></div><div>Description</div><div class="cell-right">Qty</div><div class="cell-center">Unit</div><div class="cell-right">Rate</div><div class="cell-right">Total</div><div></div>' +
      '</div>' +
      phase.items.map(function(item, idx) {
        return '<div class="line-item-row" draggable="true">' +
          '<div class="line-item-grip">' + ICONS.grip + '</div>' +
          '<div><input class="line-item-input" value="' + item.name + '" onchange="updateLineItem(\'' + phaseKey + '\', ' + idx + ', \'name\', this.value)"></div>' +
          '<div><input class="line-item-input numeric" type="number" value="' + item.qty + '" onchange="updateLineItem(\'' + phaseKey + '\', ' + idx + ', \'qty\', parseFloat(this.value))"></div>' +
          '<div><input class="line-item-input" value="' + item.unit + '" style="text-align:center" onchange="updateLineItem(\'' + phaseKey + '\', ' + idx + ', \'unit\', this.value)"></div>' +
          '<div><input class="line-item-input numeric" type="number" step="0.01" value="' + item.rate + '" onchange="updateLineItem(\'' + phaseKey + '\', ' + idx + ', \'rate\', parseFloat(this.value))"></div>' +
          '<div class="cell-right cell-mono cell-bold" style="padding: 4px 6px;">' + fmt(item.total) + '</div>' +
          '<div class="line-item-delete" onclick="removeLineItem(\'' + phaseKey + '\', ' + idx + ')">' + ICONS.trash + '</div>' +
        '</div>';
      }).join('') +
      (phase.items.length === 0 ? '<div style="padding: 30px; text-align: center; color: var(--text-muted); font-size: 0.85rem;">No line items yet. Click "Add Line Item" to start building this phase.</div>' : '') +
      (phase.items.length > 0 ? '<div class="line-item-row subtotal-row"><div></div><div style="font-weight:700; color:var(--text-primary);">Phase Subtotal</div><div></div><div></div><div></div><div class="cell-right cell-mono cell-accent" style="padding:4px 6px; font-size:0.92rem;">' + fmt(phaseSubtotal) + '</div><div></div></div>' : '') +
    '</div>' +
  '</div>';
}


function renderAINotesTab(est) {
  var notes = est.aiNotes || [];
  if (notes.length === 0) return '<div class="slide-up"><div class="card" style="padding: 30px; text-align: center; color: var(--text-muted);">No AI notes available for this estimate.</div></div>';

  return '<div class="slide-up">' +
    '<div class="card">' +
      '<div class="card-header">' +
        '<div>' +
          '<div class="card-title">' + ICONS.info + ' AI Analysis Notes & Context</div>' +
          '<div class="card-subtitle">Important caveats, exclusions, and assumptions from the AI analysis</div>' +
        '</div>' +
      '</div>' +
      '<div style="padding: 4px 0;">' +
        notes.map(function(note, i) {
          var icon = ICONS.info;
          var color = 'var(--text-secondary)';
          var bg = 'var(--bg-tertiary)';
          if (note.toLowerCase().indexOf('could not') >= 0 || note.toLowerCase().indexOf('unable') >= 0 || note.toLowerCase().indexOf('missing') >= 0 || note.toLowerCase().indexOf('excluded') >= 0) {
            icon = ICONS.warning; color = 'var(--warning)'; bg = 'var(--warning-muted)';
          } else if (note.toLowerCase().indexOf('completed') >= 0 || note.toLowerCase().indexOf('derived') >= 0) {
            icon = ICONS.check; color = 'var(--success)'; bg = 'var(--success-muted)';
          }
          return '<div style="display: flex; align-items: flex-start; gap: 10px; padding: 10px 12px; margin-bottom: 4px; background: ' + bg + '; border-radius: 6px; border-left: 3px solid ' + color + ';">' +
            '<span style="color: ' + color + '; flex-shrink: 0; margin-top: 1px;">' + icon + '</span>' +
            '<span style="font-size: 0.82rem; color: var(--text-primary); line-height: 1.5;">' + note + '</span>' +
          '</div>';
        }).join('') +
      '</div>' +
    '</div>' +
  '</div>';
}


// --- PAST ESTIMATES PAGE ---
function renderPastEstimatesPage() {
  var estimates = STATE.estimates;
  var filterModel = STATE.pastFilterModel || 'all';
  var filterStatus = STATE.pastFilterStatus || 'all';

  var filtered = estimates;
  if (filterModel !== 'all') filtered = filtered.filter(function(e) { return e.deliveryModel === filterModel; });
  if (filterStatus !== 'all') filtered = filtered.filter(function(e) { return e.status === filterStatus; });

  return '<div class="fade-in">' +
    '<div class="section-header">' +
      '<div>' +
        '<div class="section-title">' + ICONS.past + ' Past Estimates</div>' +
        '<div class="section-desc">' + estimates.length + ' estimates in library -- compare, benchmark, and reuse historical data</div>' +
      '</div>' +
      '<div class="section-actions">' +
        '<button class="btn btn-sm" onclick="toggleComparisonMode()">' +
          ICONS.analytics + ' ' + (STATE.comparisonMode ? 'Exit Comparison' : 'Compare Mode') +
        '</button>' +
      '</div>' +
    '</div>' +

    '<!-- Filters -->' +
    '<div class="card mb-16" style="padding: 12px 16px;">' +
      '<div class="flex items-center gap-12 flex-wrap">' +
        '<span style="font-size: 0.75rem; font-weight: 600; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.06em;">' + ICONS.filter + ' Filters</span>' +
        '<select class="form-select" style="width: auto; min-width: 160px; padding: 5px 30px 5px 10px;" onchange="STATE.pastFilterModel=this.value; renderPage();">' +
          '<option value="all">All Models</option>' +
          Object.entries(DELIVERY_MODELS).map(function(entry) {
            return '<option value="' + entry[0] + '"' + (filterModel===entry[0]?' selected':'') + '>' + entry[1].name + '</option>';
          }).join('') +
        '</select>' +
        '<select class="form-select" style="width: auto; min-width: 120px; padding: 5px 30px 5px 10px;" onchange="STATE.pastFilterStatus=this.value; renderPage();">' +
          '<option value="all">All Status</option>' +
          '<option value="draft"' + (filterStatus==='draft'?' selected':'') + '>Draft</option>' +
          '<option value="sent"' + (filterStatus==='sent'?' selected':'') + '>Sent</option>' +
          '<option value="won"' + (filterStatus==='won'?' selected':'') + '>Won</option>' +
          '<option value="lost"' + (filterStatus==='lost'?' selected':'') + '>Lost</option>' +
        '</select>' +
        '<span style="margin-left: auto; font-size: 0.78rem; color: var(--text-muted);">' + filtered.length + ' results</span>' +
      '</div>' +
    '</div>' +

    '<!-- KPI Summary -->' +
    '<div class="kpi-grid mb-20">' +
      '<div class="kpi-card"><div class="kpi-label">Total Estimates</div><div class="kpi-value">' + estimates.length + '</div></div>' +
      '<div class="kpi-card"><div class="kpi-label">Pipeline Value</div><div class="kpi-value">' + fmt(estimates.reduce(function(s,e) { return s + (e.totalCost || calcEstimateTotal(e)); }, 0)) + '</div></div>' +
      '<div class="kpi-card"><div class="kpi-label">Win Rate</div><div class="kpi-value">' + (estimates.filter(function(e){return e.status==='won';}).length > 0 ? Math.round(estimates.filter(function(e){return e.status==='won';}).length / estimates.filter(function(e){return ['won','lost'].includes(e.status);}).length * 100) : 0) + '%</div><div class="kpi-change up">' + ICONS.arrowUp + ' ' + estimates.filter(function(e){return e.status==='won';}).length + ' won</div></div>' +
      '<div class="kpi-card"><div class="kpi-label">Avg Estimate</div><div class="kpi-value">' + fmt(estimates.length > 0 ? estimates.reduce(function(s,e) { return s + (e.totalCost || 0); }, 0) / estimates.length : 0) + '</div></div>' +
    '</div>' +

    (STATE.comparisonMode ? renderComparisonView(filtered) : '') +

    '<!-- Estimate Cards -->' +
    filtered.map(function(est) { return renderEstimateCard(est); }).join('') +

    (filtered.length === 0 ? '<div class="empty-state">' + ICONS.past + '<h3>No estimates found</h3><p>Try adjusting your filters or create a new estimate.</p></div>' : '') +
  '</div>';
}

function renderEstimateCard(est) {
  var total = est.totalCost || calcEstimateTotal(est);
  var model = DELIVERY_MODELS[est.deliveryModel];
  var statusClass = est.status || 'draft';

  var phaseCosts = {};
  if (est.phases) {
    Object.entries(est.phases).forEach(function(entry) {
      phaseCosts[entry[0]] = calcPhaseTotal(entry[1]);
    });
  }

  return '<div class="estimate-card" onclick="viewEstimateDetail(\'' + est.id + '\')">' +
    '<div class="estimate-card-header">' +
      '<div>' +
        '<div class="estimate-card-title">' + est.name + '</div>' +
        '<div class="estimate-card-meta">' +
          '<span>' + ICONS.building + ' ' + est.client + '</span>' +
          '<span>' + ICONS.locationPin + ' ' + est.location + '</span>' +
          '<span>' + ICONS.calendar + ' ' + est.createdAt + '</span>' +
          '<span>' + (model ? model.icon + ' ' + model.name : '') + '</span>' +
        '</div>' +
      '</div>' +
      '<div style="text-align:right;">' +
        '<div class="badge badge-' + statusClass + '">' + statusClass + '</div>' +
        '<div class="text-mono" style="font-size:1.1rem; font-weight:700; margin-top:6px; color:var(--text-primary);">' + fmt(total) + '</div>' +
      '</div>' +
    '</div>' +
    '<p style="font-size:0.78rem; color:var(--text-muted); margin-bottom:8px;">' + (est.scopeDescription ? est.scopeDescription.substring(0, 150) + '...' : 'No description') + '</p>' +
    '<div class="estimate-card-costs">' +
      Object.entries(phaseCosts).slice(0, 5).map(function(entry) {
        return '<div class="estimate-cost-item">' +
          '<div class="estimate-cost-label">' + (PHASE_DEFS[entry[0]] ? PHASE_DEFS[entry[0]].name : entry[0]) + '</div>' +
          '<div class="estimate-cost-value">' + fmt(entry[1]) + '</div>' +
        '</div>';
      }).join('') +
    '</div>' +
    '<div style="margin-top:10px; display:flex; gap:6px;">' +
      '<button class="btn btn-sm btn-ghost" onclick="event.stopPropagation(); connectEstimate(\'' + est.id + '\')">' + ICONS.link + ' Connect</button>' +
      '<button class="btn btn-sm btn-ghost" onclick="event.stopPropagation(); duplicateEstimate(\'' + est.id + '\')">' + ICONS.copy + ' Duplicate</button>' +
      '<button class="btn btn-sm btn-ghost" onclick="event.stopPropagation(); loadEstimateToWorkspace(\'' + est.id + '\')">' + ICONS.edit + ' Load to Workspace</button>' +
    '</div>' +
  '</div>';
}

function renderComparisonView(estimates) {
  if (estimates.length < 2) return '<div class="card mb-16" style="padding:20px; text-align:center; color:var(--text-muted);">Need at least 2 estimates to compare. Adjust filters if needed.</div>';

  var allPhases = new Set();
  estimates.forEach(function(est) {
    if (est.phases) Object.keys(est.phases).forEach(function(pk) { allPhases.add(pk); });
  });

  var maxTotal = Math.max.apply(null, estimates.map(function(e) { return e.totalCost || calcEstimateTotal(e); }));

  return '<div class="card mb-20">' +
    '<div class="card-header"><div class="card-title">' + ICONS.analytics + ' Benchmark Comparison</div></div>' +
    '<div style="margin-bottom: 20px;">' +
      '<div class="bar-chart-row" style="font-weight:600; font-size:0.72rem; color:var(--text-muted); text-transform:uppercase; letter-spacing:0.06em;">' +
        '<div class="bar-chart-label">Project</div><div class="bar-chart-track" style="background:none; height:auto;">Total Cost</div><div class="bar-chart-amount">Amount</div>' +
      '</div>' +
      estimates.map(function(est) {
        var total = est.totalCost || calcEstimateTotal(est);
        var pct = maxTotal > 0 ? (total / maxTotal * 100) : 0;
        return '<div class="bar-chart-row">' +
          '<div class="bar-chart-label" title="' + est.name + '">' + est.name + '</div>' +
          '<div class="bar-chart-track"><div class="bar-chart-fill" style="width:' + pct + '%;">' + (pct > 20 ? '<span class="bar-chart-value">' + fmtPct(pct) + '</span>' : '') + '</div></div>' +
          '<div class="bar-chart-amount">' + fmt(total) + '</div>' +
        '</div>';
      }).join('') +
    '</div>' +

    '<div class="table-container"><table><thead><tr><th>Phase</th>' +
    estimates.map(function(e) { return '<th class="cell-right">' + e.name.substring(0,20) + '</th>'; }).join('') +
    '<th class="cell-right">Average</th></tr></thead><tbody>' +
    Array.from(allPhases).map(function(pk) {
      var vals = estimates.map(function(e) { return e.phases && e.phases[pk] ? calcPhaseTotal(e.phases[pk]) : 0; });
      var nonZero = vals.filter(function(v) { return v > 0; });
      var avg = nonZero.length > 0 ? nonZero.reduce(function(a,b){return a+b;},0) / nonZero.length : 0;
      return '<tr><td class="cell-bold">' + (PHASE_DEFS[pk] ? PHASE_DEFS[pk].name : pk) + '</td>' +
        vals.map(function(v) { return '<td class="cell-right cell-mono">' + (v > 0 ? fmt(v) : '--') + '</td>'; }).join('') +
        '<td class="cell-right cell-mono cell-accent">' + fmt(avg) + '</td></tr>';
    }).join('') +
    '</tbody><tfoot class="table-footer"><tr><td class="cell-bold">Total</td>' +
    estimates.map(function(e) { return '<td class="cell-right cell-mono">' + fmt(e.totalCost || calcEstimateTotal(e)) + '</td>'; }).join('') +
    '<td class="cell-right cell-mono cell-accent">' + fmt(estimates.reduce(function(s,e) { return s + (e.totalCost || calcEstimateTotal(e)); }, 0) / estimates.length) + '</td></tr></tfoot></table></div>' +
  '</div>';
}


// --- CONNECTOR PAGE ---
function renderConnectorPage() {
  var connectedId = STATE.connectedEstimateId;
  var connected = connectedId ? STATE.estimates.find(function(e) { return e.id === connectedId; }) : null;
  var currentEst = STATE.currentEstimate;

  var connectedHtml = '';
  if (connected) {
    var phasesList = '';
    if (connected.phases) {
      Object.entries(connected.phases).forEach(function(entry) {
        var phaseKey = entry[0], phase = entry[1];
        var itemsHtml = '';
        if (phase.items) {
          phase.items.forEach(function(item, idx) {
            itemsHtml += '<div class="connector-item" draggable="true" ondragstart="dragConnectorItem(event, \'' + phaseKey + '\', ' + idx + ')" ondblclick="quickAddFromConnector(\'' + phaseKey + '\', ' + idx + ')">' +
              '<div class="flex items-center gap-8" style="width:100%;">' +
                '<span class="drag-handle">' + ICONS.grip + '</span>' +
                '<div style="flex:1; min-width:0;">' +
                  '<div class="connector-item-title">' + item.name + '</div>' +
                  '<div class="connector-item-meta">' + fmtNum(item.qty) + ' ' + item.unit + ' x ' + fmtDec(item.rate) + '</div>' +
                '</div>' +
                '<div class="connector-item-cost">' + fmt(item.total) + '</div>' +
              '</div>' +
            '</div>';
          });
        }
        phasesList += '<div style="margin-bottom: 12px;">' +
          '<div style="font-size:0.75rem; font-weight:600; color:var(--accent); margin-bottom:6px; text-transform:uppercase; letter-spacing:0.06em;">' +
            (PHASE_DEFS[phaseKey] ? PHASE_DEFS[phaseKey].name : phaseKey) +
          '</div>' + itemsHtml +
        '</div>';
      });
    }
    if (!phasesList) phasesList = '<p style="color:var(--text-muted); font-size:0.82rem;">No phase data available.</p>';

    connectedHtml = '<div class="card mb-16">' +
      '<div class="card-header">' +
        '<div><div class="card-title">' + connected.name + '</div>' +
        '<div class="card-subtitle">' + connected.client + ' - ' + connected.location + ' - ' + (DELIVERY_MODELS[connected.deliveryModel] ? DELIVERY_MODELS[connected.deliveryModel].name : '') + '</div></div>' +
        '<div class="badge badge-' + connected.status + '">' + connected.status + '</div>' +
      '</div>' +
      '<p style="font-size:0.78rem; color:var(--text-muted); margin-bottom:12px;">' + (connected.scopeDescription || '') + '</p>' +
      '<div class="section-divider">Drag Items Into Your Current Estimate</div>' +
      phasesList +
    '</div>';
  } else {
    connectedHtml = '<div class="empty-state">' + ICONS.connector + '<h3>No estimate connected</h3><p>Select a past estimate above to browse and drag costs into your current workspace.</p></div>';
  }

  var currentPhasesHtml = '';
  if (currentEst.phases && Object.keys(currentEst.phases).length > 0) {
    Object.entries(currentEst.phases).forEach(function(entry) {
      var phaseKey = entry[0], phase = entry[1];
      var itemLines = '';
      if (phase.items) {
        phase.items.forEach(function(item) {
          itemLines += '<div style="padding:4px 8px; font-size:0.78rem; color:var(--text-secondary); display:flex; justify-content:space-between;"><span>' + item.name + '</span><span class="text-mono">' + fmt(item.total) + '</span></div>';
        });
      }
      currentPhasesHtml += '<div style="margin-bottom:12px;"><div style="font-size:0.72rem; font-weight:600; color:var(--text-muted); text-transform:uppercase; letter-spacing:0.06em; margin-bottom:4px;">' + (PHASE_DEFS[phaseKey] ? PHASE_DEFS[phaseKey].name : phaseKey) + ' -- ' + fmt(calcPhaseTotal(phase)) + '</div>' + itemLines + '</div>';
    });
  } else {
    currentPhasesHtml = '<div class="empty-state" style="padding:40px 20px;"><p>Drop items here to build your estimate.<br>Go to Output tab to see the full breakdown.</p></div>';
  }

  return '<div class="fade-in">' +
    '<div class="section-header"><div><div class="section-title">' + ICONS.connector + ' Estimate Connector</div><div class="section-desc">Link a past estimate to your current workspace. Drag costs from the connected estimate into your current project.</div></div></div>' +
    '<div class="grid-2">' +
      '<div>' +
        '<div class="card mb-16"><div class="card-header"><div class="card-title">Select Past Estimate to Connect</div></div>' +
          '<div class="form-group"><select class="form-select" onchange="connectEstimate(this.value)"><option value="">-- Choose an estimate --</option>' +
            STATE.estimates.map(function(est) { return '<option value="' + est.id + '"' + (connectedId === est.id ? ' selected' : '') + '>' + est.name + ' -- ' + fmt(est.totalCost || calcEstimateTotal(est)) + '</option>'; }).join('') +
          '</select></div>' +
        '</div>' +
        connectedHtml +
      '</div>' +
      '<div>' +
        '<div class="card" style="min-height: 400px;" ondrop="dropConnectorItem(event)" ondragover="handleDragOver(event)" ondragleave="handleDragLeave(event)">' +
          '<div class="card-header"><div class="card-title">Current Estimate: ' + (currentEst.name || 'Untitled') + '</div><div class="badge badge-draft">' + (currentEst.deliveryModel && DELIVERY_MODELS[currentEst.deliveryModel] ? DELIVERY_MODELS[currentEst.deliveryModel].name : 'No model') + '</div></div>' +
          '<p style="font-size: 0.78rem; color: var(--text-muted); margin-bottom: 16px;">Drag items from the connected estimate here, or double-click to quick-add. Items will be added to the matching phase in your current estimate.</p>' +
          currentPhasesHtml +
        '</div>' +
      '</div>' +
    '</div>' +
  '</div>';
}

// --- PRICING LIBRARY PAGE ---
function renderPricingLibraryPage() {
  return '<div class="fade-in">' +
    '<div class="section-header"><div><div class="section-title">' + ICONS.pricing + ' Pricing Library</div><div class="section-desc">Current material costs, labor rates, and equipment pricing. All prices reflect latest supplier quotes and internal standards.</div></div>' +
    '<div class="section-actions"><div class="search-box" style="min-width:220px;">' + ICONS.search + '<input type="text" id="pricing-search" placeholder="Search pricing..." oninput="filterPricing(this.value)"></div></div></div>' +
    Object.entries(PRICING_LIBRARY).map(function(entry) {
      var category = entry[0], items = entry[1];
      return '<div class="pricing-category mb-12" data-category="' + category + '">' +
        '<div class="pricing-category-header" onclick="togglePricingCategory(this)"><div class="pricing-category-title">' + category + '</div><div class="flex items-center gap-8"><span class="pricing-category-count">' + items.length + ' items</span>' + ICONS.chevDown + '</div></div>' +
        '<div class="pricing-category-body" style="display:block;"><div class="table-container" style="border:none; border-radius:0;"><table><thead><tr><th>Item</th><th class="cell-center">Unit</th><th class="cell-right">Current Price</th><th class="cell-right">Low</th><th class="cell-right">High</th><th>Supplier</th><th class="cell-center">Updated</th></tr></thead><tbody>' +
        items.map(function(item) {
          var priceDisplay = (['hr','day','month','truck','each','ton','LS'].indexOf(item.unit) >= 0) ? fmt(item.price) : fmtDec(item.price);
          return '<tr class="pricing-row" data-name="' + item.name.toLowerCase() + '"><td class="cell-bold">' + item.name + '</td><td class="cell-center"><span class="badge badge-draft">' + item.unit + '</span></td><td class="cell-right cell-mono cell-accent">' + priceDisplay + '</td><td class="cell-right cell-mono text-muted">' + fmtDec(item.range[0]) + '</td><td class="cell-right cell-mono text-muted">' + fmtDec(item.range[1]) + '</td><td style="font-size:0.78rem;">' + item.supplier + '</td><td class="cell-center text-muted text-sm">' + item.updated + '</td></tr>';
        }).join('') +
        '</tbody></table></div></div></div>';
    }).join('') +
  '</div>';
}


// --- ANALYTICS PAGE ---
function renderAnalyticsPage() {
  var estimates = STATE.estimates;
  var wonEstimates = estimates.filter(function(e) { return e.status === 'won'; });
  var totalPipeline = estimates.reduce(function(s, e) { return s + (e.totalCost || 0); }, 0);
  var avgEstimate = estimates.length > 0 ? totalPipeline / estimates.length : 0;

  var byModel = {};
  estimates.forEach(function(e) {
    var m = e.deliveryModel || 'unknown';
    if (!byModel[m]) byModel[m] = { count: 0, total: 0 };
    byModel[m].count++;
    byModel[m].total += (e.totalCost || 0);
  });

  var byStatus = {};
  estimates.forEach(function(e) {
    var s = e.status || 'draft';
    if (!byStatus[s]) byStatus[s] = { count: 0, total: 0 };
    byStatus[s].count++;
    byStatus[s].total += (e.totalCost || 0);
  });

  var phaseAvgs = {};
  estimates.forEach(function(est) {
    if (est.phases) {
      Object.entries(est.phases).forEach(function(entry) {
        var pk = entry[0], phase = entry[1];
        var cost = calcPhaseTotal(phase);
        if (cost > 0) {
          if (!phaseAvgs[pk]) phaseAvgs[pk] = { total: 0, count: 0 };
          phaseAvgs[pk].total += cost;
          phaseAvgs[pk].count++;
        }
      });
    }
  });

  var maxPhaseAvg = Math.max.apply(null, Object.values(phaseAvgs).map(function(p) { return p.total / p.count; }).concat([1]));
  var decidedEstimates = estimates.filter(function(e) { return ['won','lost'].includes(e.status); });
  var winRate = decidedEstimates.length > 0 ? Math.round(wonEstimates.length / decidedEstimates.length * 100) : 0;

  return '<div class="fade-in">' +
    '<div class="section-header"><div><div class="section-title">' + ICONS.analytics + ' Analytics & Insights</div><div class="section-desc">Historical trends, benchmarks, and cost intelligence from your estimating library</div></div></div>' +
    '<div class="kpi-grid mb-20">' +
      '<div class="kpi-card"><div class="kpi-label">Total Pipeline</div><div class="kpi-value">' + fmt(totalPipeline) + '</div></div>' +
      '<div class="kpi-card"><div class="kpi-label">Average Estimate</div><div class="kpi-value">' + fmt(avgEstimate) + '</div></div>' +
      '<div class="kpi-card"><div class="kpi-label">Win Rate</div><div class="kpi-value">' + winRate + '%</div></div>' +
      '<div class="kpi-card"><div class="kpi-label">Largest Estimate</div><div class="kpi-value">' + fmt(Math.max.apply(null, estimates.map(function(e) { return e.totalCost || 0; }).concat([0]))) + '</div></div>' +
    '</div>' +
    '<div class="grid-2 mb-20">' +
      '<div class="chart-container"><div class="chart-header"><div class="chart-title">By Delivery Model</div></div>' +
        Object.entries(byModel).map(function(entry) {
          var key = entry[0], data = entry[1];
          var pct = totalPipeline > 0 ? (data.total / totalPipeline * 100) : 0;
          return '<div class="bar-chart-row"><div class="bar-chart-label">' + (DELIVERY_MODELS[key] ? DELIVERY_MODELS[key].name : key) + '</div><div class="bar-chart-track"><div class="bar-chart-fill" style="width:' + Math.max(pct,3) + '%">' + (pct > 15 ? '<span class="bar-chart-value">' + data.count + '</span>' : '') + '</div></div><div class="bar-chart-amount">' + fmt(data.total) + '</div></div>';
        }).join('') +
      '</div>' +
      '<div class="chart-container"><div class="chart-header"><div class="chart-title">By Status</div></div>' +
        Object.entries(byStatus).map(function(entry) {
          var status = entry[0], data = entry[1];
          var pct = estimates.length > 0 ? (data.count / estimates.length * 100) : 0;
          return '<div class="bar-chart-row"><div class="bar-chart-label"><span class="badge badge-' + status + '">' + status + '</span></div><div class="bar-chart-track"><div class="bar-chart-fill" style="width:' + Math.max(pct,5) + '%">' + (pct > 15 ? '<span class="bar-chart-value">' + data.count + '</span>' : '') + '</div></div><div class="bar-chart-amount">' + fmt(data.total) + '</div></div>';
        }).join('') +
      '</div>' +
    '</div>' +
    '<div class="chart-container mb-20"><div class="chart-header"><div class="chart-title">Average Phase Costs (Across All Estimates)</div></div>' +
      Object.entries(phaseAvgs).sort(function(a,b) { return (b[1].total/b[1].count) - (a[1].total/a[1].count); }).map(function(entry) {
        var pk = entry[0], data = entry[1];
        var avg = data.total / data.count;
        var pct = (avg / maxPhaseAvg * 100);
        return '<div class="bar-chart-row"><div class="bar-chart-label">' + (PHASE_DEFS[pk] ? PHASE_DEFS[pk].name : pk) + '</div><div class="bar-chart-track"><div class="bar-chart-fill" style="width:' + Math.max(pct,3) + '%">' + (pct > 20 ? '<span class="bar-chart-value">' + data.count + ' est.</span>' : '') + '</div></div><div class="bar-chart-amount">' + fmt(avg) + '</div></div>';
      }).join('') +
    '</div>' +
  '</div>';
}

// --- Q&A PAGE ---
function renderQAPage() {
  var faqs = [
    { q: 'How do I create a new estimate?', a: 'Navigate to the <strong>Input</strong> tab in the sidebar. Fill in the project information, select your delivery model, describe the project scope, and upload any relevant documents. Then click <strong>Generate Estimate</strong> to create a baseline estimate, or manually add line items in the <strong>Output</strong> tab.' },
    { q: 'What are the four delivery models?', a: '<strong>EOR Build:</strong> Full scope -- StructureCraft is Engineer of Record and handles everything from consulting through installation.<br><strong>Delegated Design Build:</strong> Same as EOR but without consulting engineering. SC does timber design, fab, and install.<br><strong>DLT Supply Only:</strong> Just supplying DLT material from our shop -- material, fab, and shipping.<br><strong>Engineer + Supervise:</strong> SC is structural engineer for superstructure with site supervision, but no fabrication or installation.' },
    { q: 'How do I use the Connector tool?', a: 'Go to the <strong>Connector</strong> page. Select a past estimate from the dropdown. All its line items will appear in the left panel. You can <strong>drag and drop</strong> items into your current estimate on the right, or <strong>double-click</strong> any item to quick-add it. Items are matched to the appropriate phase in your current estimate.' },
    { q: 'How do I compare past estimates?', a: 'Go to the <strong>Past Estimates</strong> page and click <strong>Compare Mode</strong>. This shows a side-by-side benchmark of all filtered estimates, including phase-by-phase cost breakdowns and totals. Use the filters to narrow down to specific delivery models or statuses.' },
    { q: 'Can I edit the pricing assumptions?', a: 'Yes. In the <strong>Output</strong> tab, the Assumptions box at the top shows all current pricing assumptions. <strong>Click any value</strong> to edit it inline. Changes immediately recalculate the estimate. You can also update default assumptions in <strong>Settings</strong>.' },
    { q: 'How does the AI-powered estimation work?', a: 'When you upload PDFs (drawings, specs, RFPs) and have an OpenAI API key configured in <strong>Settings</strong>, the estimator uses AI to analyze your documents. It extracts text from PDFs using PDF.js, sends the content to OpenAI for analysis, and the AI performs a detailed quantity takeoff based on the actual drawing information. The AI identifies building dimensions, structural members, material quantities, and generates line items for each phase. Notes about assumptions and exclusions are provided in the <strong>AI Notes</strong> tab.' },
    { q: 'How does the file upload work?', a: 'Each upload zone accepts specific file types (PDF, DOCX, XLSX) up to <strong>40 MB each</strong>. Files are stored in your browser session for AI processing. When you click Generate Estimate, the AI reads and analyzes all uploaded documents to perform quantity takeoff. Upload structural drawings, architectural drawings, specs, and RFPs for the most accurate estimates.' },
    { q: 'What do the different themes mean?', a: 'The 10 themes are purely aesthetic -- they change the color scheme and feel of the interface. Go to <strong>Settings</strong> to browse all themes, or click the theme icon in the bottom-left sidebar to cycle through them. Your preference is saved automatically.' },
    { q: 'How are costs calculated?', a: 'Each line item has a Qty x Rate = Total. Phase subtotals are the sum of all line items. The grand total adds Overhead, Margin, Contingency, and Bond/Insurance percentages on top of the direct cost subtotal. All percentages are configurable in the Assumptions box.' },
    { q: 'What does "Load to Workspace" do?', a: 'When you click <strong>Load to Workspace</strong> on a past estimate, it copies that estimate\'s full data into the Input/Output workspace so you can modify it as a starting point for a new estimate. The original estimate is not affected.' },
    { q: 'Is my data saved?', a: 'All data is saved in your browser\'s local storage. This means your estimates persist between sessions on the same device and browser. For sharing across devices, use the Export feature to download your data.' },
    { q: 'How do I use the Footbridge Estimator?', a: 'Navigate to the <strong>Footbridges</strong> tab. Select a bridge type, configure span length, width, and structural parameters using the visual controls. The SVG diagram updates dynamically. Fill in scope parameters like loading conditions, materials, and site access, then click <strong>Generate Footbridge Estimate</strong> to produce a detailed cost breakdown.' },
  ];

  return '<div class="fade-in">' +
    '<div class="section-header"><div><div class="section-title">' + ICONS.qa + ' Questions & Answers</div><div class="section-desc">Common questions about using the StructureCraft Estimator Pro platform</div></div></div>' +
    faqs.map(function(faq, i) {
      return '<div class="qa-item" id="qa-' + i + '"><div class="qa-question" onclick="toggleQA(' + i + ')"><span>' + faq.q + '</span>' + ICONS.chevDown + '</div><div class="qa-answer">' + faq.a + '</div></div>';
    }).join('') +
    '<div class="section-divider mt-24">Keyboard Shortcuts</div>' +
    '<div class="card"><div class="table-container" style="border:none;"><table><tbody>' +
      '<tr><td class="cell-bold" style="width:180px;"><kbd>Cmd+K</kbd> / <kbd>Ctrl+K</kbd></td><td>Open command palette</td></tr>' +
      '<tr><td class="cell-bold"><kbd>1</kbd>-<kbd>9</kbd></td><td>Quick-navigate to pages (when not in an input field)</td></tr>' +
      '<tr><td class="cell-bold"><kbd>T</kbd></td><td>Cycle through themes</td></tr>' +
      '<tr><td class="cell-bold"><kbd>N</kbd></td><td>New estimate</td></tr>' +
      '<tr><td class="cell-bold"><kbd>S</kbd></td><td>Save current estimate</td></tr>' +
      '<tr><td class="cell-bold"><kbd>G</kbd></td><td>Toggle user guide</td></tr>' +
      '<tr><td class="cell-bold"><kbd>Esc</kbd></td><td>Close modals, panels, and command palette</td></tr>' +
    '</tbody></table></div></div>' +
  '</div>';
}

// --- SETTINGS PAGE ---
function renderSettingsPage() {
  var currentTheme = STATE.currentTheme;
  var assumptions = STATE.currentEstimate.assumptions;

  return '<div class="fade-in">' +
    '<div class="section-header"><div><div class="section-title">' + ICONS.settings + ' Settings</div><div class="section-desc">Customize your experience, default assumptions, and display preferences</div></div></div>' +

    '<div class="card mb-20"><div class="card-header"><div class="card-title">Display Theme</div><div class="card-subtitle">Choose from 10 carefully designed themes</div></div>' +
      '<div class="theme-grid">' +
        THEMES.map(function(theme) {
          return '<div class="theme-card ' + (currentTheme === theme.id ? 'active' : '') + '" onclick="setTheme(\'' + theme.id + '\')"><div class="theme-preview" style="background:' + theme.preview + ';"></div><div class="theme-card-name">' + theme.name + '</div></div>';
        }).join('') +
      '</div>' +
    '</div>' +

    '<div class="card mb-20"><div class="card-header"><div><div class="card-title">Default Pricing Assumptions</div><div class="card-subtitle">These defaults apply to all new estimates. Existing estimates are not affected.</div></div><button class="btn btn-sm" onclick="resetAssumptions()">Reset to Defaults</button></div>' +
      '<div class="section-divider">Markup & Overhead</div>' +
      '<div class="form-row">' +
        '<div class="form-group"><label class="form-label">Margin %</label><input class="form-input" type="number" step="0.5" value="' + assumptions.marginPercent + '" onchange="updateAssumption(\'marginPercent\', parseFloat(this.value))"></div>' +
        '<div class="form-group"><label class="form-label">Overhead %</label><input class="form-input" type="number" step="0.5" value="' + assumptions.overheadPercent + '" onchange="updateAssumption(\'overheadPercent\', parseFloat(this.value))"></div>' +
        '<div class="form-group"><label class="form-label">Contingency %</label><input class="form-input" type="number" step="0.5" value="' + assumptions.contingencyPercent + '" onchange="updateAssumption(\'contingencyPercent\', parseFloat(this.value))"></div>' +
        '<div class="form-group"><label class="form-label">Bond & Insurance %</label><input class="form-input" type="number" step="0.5" value="' + assumptions.bondInsurancePercent + '" onchange="updateAssumption(\'bondInsurancePercent\', parseFloat(this.value))"></div>' +
      '</div>' +
      '<div class="section-divider">Material Pricing</div>' +
      '<div class="form-row">' +
        '<div class="form-group"><label class="form-label">Glulam ($/BF)</label><input class="form-input" type="number" step="0.05" value="' + assumptions.glulamPriceBF + '" onchange="updateAssumption(\'glulamPriceBF\', parseFloat(this.value))"></div>' +
        '<div class="form-group"><label class="form-label">CLT 3-ply ($/SF)</label><input class="form-input" type="number" step="0.5" value="' + assumptions.cltPriceSF3 + '" onchange="updateAssumption(\'cltPriceSF3\', parseFloat(this.value))"></div>' +
        '<div class="form-group"><label class="form-label">CLT 5-ply ($/SF)</label><input class="form-input" type="number" step="0.5" value="' + assumptions.cltPriceSF5 + '" onchange="updateAssumption(\'cltPriceSF5\', parseFloat(this.value))"></div>' +
        '<div class="form-group"><label class="form-label">DLT ($/SF)</label><input class="form-input" type="number" step="0.5" value="' + assumptions.dltPriceSF + '" onchange="updateAssumption(\'dltPriceSF\', parseFloat(this.value))"></div>' +
      '</div>' +
      '<div class="section-divider">Labor Rates</div>' +
      '<div class="form-row">' +
        '<div class="form-group"><label class="form-label">Engineering ($/hr)</label><input class="form-input" type="number" step="5" value="' + assumptions.engHourlyRate + '" onchange="updateAssumption(\'engHourlyRate\', parseFloat(this.value))"></div>' +
        '<div class="form-group"><label class="form-label">Drafting ($/hr)</label><input class="form-input" type="number" step="5" value="' + assumptions.draftHourlyRate + '" onchange="updateAssumption(\'draftHourlyRate\', parseFloat(this.value))"></div>' +
        '<div class="form-group"><label class="form-label">Shop Fabrication ($/hr)</label><input class="form-input" type="number" step="1" value="' + assumptions.shopHourlyRate + '" onchange="updateAssumption(\'shopHourlyRate\', parseFloat(this.value))"></div>' +
        '<div class="form-group"><label class="form-label">Site Carpenter ($/hr)</label><input class="form-input" type="number" step="5" value="' + assumptions.siteCarpentrHourlyRate + '" onchange="updateAssumption(\'siteCarpentrHourlyRate\', parseFloat(this.value))"></div>' +
      '</div>' +
      '<div class="form-row">' +
        '<div class="form-group"><label class="form-label">Site Super ($/hr)</label><input class="form-input" type="number" step="5" value="' + assumptions.siteSuperHourlyRate + '" onchange="updateAssumption(\'siteSuperHourlyRate\', parseFloat(this.value))"></div>' +
        '<div class="form-group"><label class="form-label">Crane Daily Rate ($)</label><input class="form-input" type="number" step="100" value="' + assumptions.craneDailyRate + '" onchange="updateAssumption(\'craneDailyRate\', parseFloat(this.value))"></div>' +
        '<div class="form-group"><label class="form-label">PM ($/hr)</label><input class="form-input" type="number" step="5" value="' + assumptions.pmHourlyRate + '" onchange="updateAssumption(\'pmHourlyRate\', parseFloat(this.value))"></div>' +
        '<div class="form-group"><label class="form-label">Shop Hrs/Piece</label><input class="form-input" type="number" step="0.1" value="' + assumptions.shopManHoursPerPiece + '" onchange="updateAssumption(\'shopManHoursPerPiece\', parseFloat(this.value))"></div>' +
      '</div>' +
      '<div class="section-divider">Shipping & Escalation</div>' +
      '<div class="form-row">' +
        '<div class="form-group"><label class="form-label">Shipping ($/BF)</label><input class="form-input" type="number" step="0.05" value="' + assumptions.shippingPerBF + '" onchange="updateAssumption(\'shippingPerBF\', parseFloat(this.value))"></div>' +
        '<div class="form-group"><label class="form-label">Shipping ($/Truck)</label><input class="form-input" type="number" step="100" value="' + assumptions.shippingPerTruck + '" onchange="updateAssumption(\'shippingPerTruck\', parseFloat(this.value))"></div>' +
        '<div class="form-group"><label class="form-label">Escalation %/yr</label><input class="form-input" type="number" step="0.5" value="' + assumptions.escalationPercent + '" onchange="updateAssumption(\'escalationPercent\', parseFloat(this.value))"></div>' +
      '</div>' +
    '</div>' +

    '<div class="card mb-20"><div class="card-header"><div><div class="card-title">' + ICONS.bolt + ' AI Configuration</div><div class="card-subtitle">Connect your OpenAI API key to enable AI-powered PDF analysis and quantity takeoff</div></div></div>' +
      '<div class="form-row">' +
        '<div class="form-group" style="flex: 2;">' +
          '<label class="form-label">OpenAI API Key</label>' +
          '<input class="form-input" type="password" id="openai-key-input" placeholder="sk-..." value="' + (localStorage.getItem('sc-openai-key') || '') + '" onchange="saveAPIKey(this.value)" style="font-family: JetBrains Mono, monospace;">' +
          '<div style="font-size: 0.72rem; color: var(--text-muted); margin-top: 6px;">Your key is stored only in your browser\'s localStorage and sent directly to OpenAI. It is never stored on any server.</div>' +
        '</div>' +
        '<div class="form-group">' +
          '<label class="form-label">AI Model</label>' +
          '<select class="form-select" onchange="localStorage.setItem(\'sc-openai-model\', this.value)">' +
            '<option value="gpt-4o"' + (localStorage.getItem('sc-openai-model') === 'gpt-4o' || !localStorage.getItem('sc-openai-model') ? ' selected' : '') + '>GPT-4o (Recommended)</option>' +
            '<option value="gpt-4o-mini"' + (localStorage.getItem('sc-openai-model') === 'gpt-4o-mini' ? ' selected' : '') + '>GPT-4o Mini (Faster)</option>' +
            '<option value="gpt-4-turbo"' + (localStorage.getItem('sc-openai-model') === 'gpt-4-turbo' ? ' selected' : '') + '>GPT-4 Turbo</option>' +
          '</select>' +
        '</div>' +
      '</div>' +
      '<div style="margin-top: 12px;">' +
        '<button class="btn btn-sm" onclick="testAPIKey()">Test Connection</button>' +
        (localStorage.getItem('sc-openai-key') ? '<span style="margin-left: 12px; font-size: 0.78rem; color: var(--success);">' + ICONS.check + ' API key configured</span>' : '') +
      '</div>' +
    '</div>' +

    '<div class="card mb-20"><div class="card-header"><div class="card-title">Data Management</div></div>' +
      '<div class="flex gap-8 flex-wrap">' +
        '<button class="btn" onclick="exportAllDataXLSX()">' + ICONS.download + ' Export All Data (XLSX)</button>' +
        '<button class="btn" onclick="exportAllData()">' + ICONS.download + ' Export All Data (CSV)</button>' +
        '<button class="btn" onclick="document.getElementById(\'import-file\').click()">' + ICONS.upload + ' Import Data</button>' +
        '<input type="file" id="import-file" style="display:none" accept=".json" onchange="importData(event)">' +
        '<button class="btn btn-danger" onclick="confirmClearData()">' + ICONS.trash + ' Clear All Data</button>' +
      '</div>' +
    '</div>' +
  '</div>';
}


// ---- SECTION 9B: FOOTBRIDGE SVG GENERATOR ----
function generateBridgeSVG(config) {
  var w = 800, h = 400;
  var pad = 60;
  var groundY = h - 40;
  var deckY = groundY - 80;
  var span = config.spanLength || 30;
  var rise = config.archRise || 0.25;
  var nSpans = config.numSpans || 1;
  var bType = config.bridgeType || 'parabolic-arch';

  var leftX = pad + 40;
  var rightX = w - pad - 40;
  var spanPx = rightX - leftX;

  var svg = '<svg viewBox="0 0 ' + w + ' ' + h + '" xmlns="http://www.w3.org/2000/svg" style="width:100%; max-height:340px;">';

  // Background grid (subtle)
  svg += '<defs><pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="var(--border)" stroke-width="0.3" opacity="0.3"/></pattern></defs>';
  svg += '<rect width="' + w + '" height="' + h + '" fill="url(#grid)" opacity="0.5"/>';

  // Ground line
  svg += '<line x1="0" y1="' + groundY + '" x2="' + w + '" y2="' + groundY + '" stroke="var(--text-primary)" stroke-width="2"/>';
  // Ground hatching
  for (var gi = 0; gi < w; gi += 12) {
    svg += '<line x1="' + gi + '" y1="' + groundY + '" x2="' + (gi - 8) + '" y2="' + (groundY + 10) + '" stroke="var(--text-primary)" stroke-width="0.8" opacity="0.5"/>';
  }

  // Draw abutments
  var abutW = 16, abutH = 80;
  svg += '<rect x="' + (leftX - abutW/2) + '" y="' + (groundY - abutH) + '" width="' + abutW + '" height="' + abutH + '" fill="var(--text-primary)" opacity="0.25" stroke="var(--text-primary)" stroke-width="1.5"/>';
  svg += '<rect x="' + (rightX - abutW/2) + '" y="' + (groundY - abutH) + '" width="' + abutW + '" height="' + abutH + '" fill="var(--text-primary)" opacity="0.25" stroke="var(--text-primary)" stroke-width="1.5"/>';

  if (bType === 'parabolic-arch') {
    var archTopY = deckY - spanPx * rise;
    // Draw arch
    var archPath = 'M ' + leftX + ' ' + deckY;
    for (var i = 0; i <= 40; i++) {
      var t = i / 40;
      var x = leftX + t * spanPx;
      var y = deckY - 4 * rise * spanPx * t * (1 - t);
      archPath += ' L ' + x.toFixed(1) + ' ' + y.toFixed(1);
    }
    svg += '<path d="' + archPath + '" fill="none" stroke="var(--accent)" stroke-width="4" stroke-linecap="round"/>';
    // Hangers
    for (var hi = 1; hi < 10; hi++) {
      var ht = hi / 10;
      var hx = leftX + ht * spanPx;
      var archY = deckY - 4 * rise * spanPx * ht * (1 - ht);
      svg += '<line x1="' + hx.toFixed(1) + '" y1="' + archY.toFixed(1) + '" x2="' + hx.toFixed(1) + '" y2="' + deckY + '" stroke="var(--text-primary)" stroke-width="1" opacity="0.6"/>';
    }
    // Deck
    svg += '<line x1="' + leftX + '" y1="' + deckY + '" x2="' + rightX + '" y2="' + deckY + '" stroke="var(--accent)" stroke-width="3"/>';

  } else if (bType === 'tied-arch') {
    var archTopY2 = deckY - spanPx * rise;
    // Arch
    var archPath2 = 'M ' + leftX + ' ' + deckY;
    for (var i2 = 0; i2 <= 40; i2++) {
      var t2 = i2 / 40;
      var x2 = leftX + t2 * spanPx;
      var y2 = deckY - 4 * rise * spanPx * t2 * (1 - t2);
      archPath2 += ' L ' + x2.toFixed(1) + ' ' + y2.toFixed(1);
    }
    svg += '<path d="' + archPath2 + '" fill="none" stroke="var(--accent)" stroke-width="4" stroke-linecap="round"/>';
    // Tie (deck level)
    svg += '<line x1="' + leftX + '" y1="' + deckY + '" x2="' + rightX + '" y2="' + deckY + '" stroke="var(--accent)" stroke-width="3"/>';
    // Hangers
    for (var hi2 = 1; hi2 < 10; hi2++) {
      var ht2 = hi2 / 10;
      var hx2 = leftX + ht2 * spanPx;
      var archY2 = deckY - 4 * rise * spanPx * ht2 * (1 - ht2);
      svg += '<line x1="' + hx2.toFixed(1) + '" y1="' + archY2.toFixed(1) + '" x2="' + hx2.toFixed(1) + '" y2="' + deckY + '" stroke="var(--text-primary)" stroke-width="1" opacity="0.6"/>';
    }

  } else if (bType === 'warren-truss') {
    var trussH = spanPx * 0.12;
    var topChord = deckY - trussH;
    svg += '<line x1="' + leftX + '" y1="' + deckY + '" x2="' + rightX + '" y2="' + deckY + '" stroke="var(--accent)" stroke-width="3"/>';
    svg += '<line x1="' + leftX + '" y1="' + topChord + '" x2="' + rightX + '" y2="' + topChord + '" stroke="var(--accent)" stroke-width="3"/>';
    var nPanels = 10;
    var panelW = spanPx / nPanels;
    for (var wi = 0; wi <= nPanels; wi++) {
      var wx = leftX + wi * panelW;
      svg += '<line x1="' + wx.toFixed(1) + '" y1="' + topChord + '" x2="' + wx.toFixed(1) + '" y2="' + deckY + '" stroke="var(--text-primary)" stroke-width="1" opacity="0.4"/>';
    }
    for (var wi2 = 0; wi2 < nPanels; wi2++) {
      var wx1 = leftX + wi2 * panelW;
      var wx2v = leftX + (wi2 + 1) * panelW;
      if (wi2 % 2 === 0) {
        svg += '<line x1="' + wx1.toFixed(1) + '" y1="' + deckY + '" x2="' + wx2v.toFixed(1) + '" y2="' + topChord + '" stroke="var(--accent)" stroke-width="2"/>';
      } else {
        svg += '<line x1="' + wx1.toFixed(1) + '" y1="' + topChord + '" x2="' + wx2v.toFixed(1) + '" y2="' + deckY + '" stroke="var(--accent)" stroke-width="2"/>';
      }
    }

  } else if (bType === 'pratt-truss') {
    var trussHP = spanPx * 0.12;
    var topChordP = deckY - trussHP;
    svg += '<line x1="' + leftX + '" y1="' + deckY + '" x2="' + rightX + '" y2="' + deckY + '" stroke="var(--accent)" stroke-width="3"/>';
    svg += '<line x1="' + leftX + '" y1="' + topChordP + '" x2="' + rightX + '" y2="' + topChordP + '" stroke="var(--accent)" stroke-width="3"/>';
    var nP = 10;
    var pW = spanPx / nP;
    for (var pi = 0; pi <= nP; pi++) {
      var px = leftX + pi * pW;
      svg += '<line x1="' + px.toFixed(1) + '" y1="' + topChordP + '" x2="' + px.toFixed(1) + '" y2="' + deckY + '" stroke="var(--text-primary)" stroke-width="1.5" opacity="0.6"/>';
    }
    var mid = nP / 2;
    for (var pi2 = 0; pi2 < nP; pi2++) {
      var px1 = leftX + pi2 * pW;
      var px2v = leftX + (pi2 + 1) * pW;
      if (pi2 < mid) {
        svg += '<line x1="' + px1.toFixed(1) + '" y1="' + deckY + '" x2="' + px2v.toFixed(1) + '" y2="' + topChordP + '" stroke="var(--accent)" stroke-width="1.5"/>';
      } else {
        svg += '<line x1="' + px1.toFixed(1) + '" y1="' + topChordP + '" x2="' + px2v.toFixed(1) + '" y2="' + deckY + '" stroke="var(--accent)" stroke-width="1.5"/>';
      }
    }

  } else if (bType === 'clear-span-beam') {
    var beamH = 8;
    svg += '<rect x="' + leftX + '" y="' + (deckY - beamH) + '" width="' + spanPx + '" height="' + beamH + '" fill="var(--accent)" opacity="0.8" rx="2"/>';
    svg += '<line x1="' + leftX + '" y1="' + deckY + '" x2="' + rightX + '" y2="' + deckY + '" stroke="var(--accent)" stroke-width="3"/>';
    // Camber indication
    var camberPath = 'M ' + leftX + ' ' + (deckY - beamH);
    for (var ci = 0; ci <= 20; ci++) {
      var ct = ci / 20;
      var cx = leftX + ct * spanPx;
      var cy = (deckY - beamH) - 6 * Math.sin(ct * Math.PI);
      camberPath += ' L ' + cx.toFixed(1) + ' ' + cy.toFixed(1);
    }
    svg += '<path d="' + camberPath + '" fill="none" stroke="var(--accent)" stroke-width="1.5" stroke-dasharray="4 3"/>';

  } else if (bType === 'multi-span-beam') {
    svg += '<line x1="' + leftX + '" y1="' + deckY + '" x2="' + rightX + '" y2="' + deckY + '" stroke="var(--accent)" stroke-width="3"/>';
    var beamHM = 8;
    svg += '<rect x="' + leftX + '" y="' + (deckY - beamHM) + '" width="' + spanPx + '" height="' + beamHM + '" fill="var(--accent)" opacity="0.6" rx="2"/>';
    // Intermediate piers
    var pierW = 12;
    for (var si = 1; si < nSpans; si++) {
      var pierX = leftX + (si / nSpans) * spanPx;
      svg += '<rect x="' + (pierX - pierW/2) + '" y="' + (deckY) + '" width="' + pierW + '" height="' + (groundY - deckY) + '" fill="var(--text-primary)" opacity="0.3" stroke="var(--text-primary)" stroke-width="1.5"/>';
      // Pier cap
      svg += '<rect x="' + (pierX - pierW) + '" y="' + (deckY - 4) + '" width="' + (pierW * 2) + '" height="' + 6 + '" fill="var(--text-primary)" opacity="0.4" rx="1"/>';
    }

  } else if (bType === 'cable-stayed') {
    // Tower
    var towerX = leftX + spanPx * 0.5;
    var towerTop = deckY - spanPx * 0.35;
    svg += '<line x1="' + towerX + '" y1="' + towerTop + '" x2="' + towerX + '" y2="' + deckY + '" stroke="var(--accent)" stroke-width="5"/>';
    // Deck
    svg += '<line x1="' + leftX + '" y1="' + deckY + '" x2="' + rightX + '" y2="' + deckY + '" stroke="var(--accent)" stroke-width="3"/>';
    // Cables
    for (var cab = 1; cab <= 6; cab++) {
      var cableAttachY = towerTop + cab * 8;
      var deckLeftX = towerX - cab * (spanPx * 0.07);
      var deckRightX = towerX + cab * (spanPx * 0.07);
      if (deckLeftX >= leftX) svg += '<line x1="' + towerX + '" y1="' + cableAttachY + '" x2="' + deckLeftX.toFixed(1) + '" y2="' + deckY + '" stroke="var(--text-primary)" stroke-width="1" opacity="0.6"/>';
      if (deckRightX <= rightX) svg += '<line x1="' + towerX + '" y1="' + cableAttachY + '" x2="' + deckRightX.toFixed(1) + '" y2="' + deckY + '" stroke="var(--text-primary)" stroke-width="1" opacity="0.6"/>';
    }

  } else if (bType === 'king-post-truss') {
    svg += '<line x1="' + leftX + '" y1="' + deckY + '" x2="' + rightX + '" y2="' + deckY + '" stroke="var(--accent)" stroke-width="3"/>';
    var midX = leftX + spanPx / 2;
    var postTop = deckY - spanPx * 0.18;
    // King post
    svg += '<line x1="' + midX + '" y1="' + postTop + '" x2="' + midX + '" y2="' + deckY + '" stroke="var(--accent)" stroke-width="3"/>';
    // Diagonals
    svg += '<line x1="' + leftX + '" y1="' + deckY + '" x2="' + midX + '" y2="' + postTop + '" stroke="var(--accent)" stroke-width="2.5"/>';
    svg += '<line x1="' + rightX + '" y1="' + deckY + '" x2="' + midX + '" y2="' + postTop + '" stroke="var(--accent)" stroke-width="2.5"/>';
    // Top node circle
    svg += '<circle cx="' + midX + '" cy="' + postTop + '" r="5" fill="var(--accent)" stroke="var(--text-primary)" stroke-width="1"/>';
  }

  // Dimension lines
  var dimY = groundY + 28;
  svg += '<line x1="' + leftX + '" y1="' + dimY + '" x2="' + rightX + '" y2="' + dimY + '" stroke="var(--text-primary)" stroke-width="1" opacity="0.7"/>';
  svg += '<line x1="' + leftX + '" y1="' + (dimY - 5) + '" x2="' + leftX + '" y2="' + (dimY + 5) + '" stroke="var(--text-primary)" stroke-width="1" opacity="0.7"/>';
  svg += '<line x1="' + rightX + '" y1="' + (dimY - 5) + '" x2="' + rightX + '" y2="' + (dimY + 5) + '" stroke="var(--text-primary)" stroke-width="1" opacity="0.7"/>';
  svg += '<text x="' + ((leftX + rightX) / 2) + '" y="' + (dimY + 16) + '" text-anchor="middle" fill="var(--text-primary)" font-size="13" font-family="JetBrains Mono, monospace">' + span + 'm span</text>';

  // Bridge type label
  svg += '<text x="' + (w / 2) + '" y="24" text-anchor="middle" fill="var(--text-primary)" font-size="14" font-weight="600" opacity="0.7">' + (BRIDGE_TYPES[bType] ? BRIDGE_TYPES[bType].name : bType) + '</text>';

  svg += '</svg>';
  return svg;
}


// ---- SECTION 9C: FOOTBRIDGE PAGE ----
function renderFootbridgePage() {
  var cfg = STATE.footbridgeConfig;
  var fbEst = STATE.footbridgeEstimate;
  var isArch = (cfg.bridgeType === 'parabolic-arch' || cfg.bridgeType === 'tied-arch');
  var isMulti = (cfg.bridgeType === 'multi-span-beam');

  var bridgeSvg = generateBridgeSVG(cfg);

  var outputHtml = '';
  if (fbEst && fbEst.phases && Object.keys(fbEst.phases).length > 0) {
    outputHtml = renderFootbridgeOutput(fbEst);
  }

  return '<div class="fade-in">' +
    '<div class="section-header"><div>' +
      '<div class="section-title">' + ICONS.footbridge + ' Footbridge Estimator</div>' +
      '<div class="section-desc">Configure pedestrian bridge parameters, visualize the structure, and generate a detailed cost estimate</div>' +
    '</div></div>' +

    '<!-- Bridge Visualizer -->' +
    '<div class="card mb-16">' +
      '<div class="card-header"><div class="card-title">' + ICONS.footbridge + ' Bridge Visualizer</div></div>' +
      '<div class="form-row" style="margin-bottom:16px;">' +
        '<div class="form-group" style="flex:2;">' +
          '<label class="form-label">Bridge Type</label>' +
          '<select class="form-select" onchange="updateFootbridgeConfig(\'bridgeType\', this.value)">' +
            Object.entries(BRIDGE_TYPES).map(function(entry) {
              return '<option value="' + entry[0] + '"' + (cfg.bridgeType === entry[0] ? ' selected' : '') + '>' + entry[1].name + ' -- ' + entry[1].description + '</option>';
            }).join('') +
          '</select>' +
        '</div>' +
      '</div>' +
      '<div style="background: var(--bg-primary); border: 1px solid var(--border); border-radius: 8px; padding: 16px; margin-bottom: 16px;">' +
        bridgeSvg +
      '</div>' +
      '<div class="form-row">' +
        '<div class="form-group">' +
          '<label class="form-label">Span Length: ' + cfg.spanLength + 'm</label>' +
          '<input type="range" min="10" max="100" step="1" value="' + cfg.spanLength + '" style="width:100%;" oninput="updateFootbridgeConfig(\'spanLength\', parseInt(this.value))">' +
        '</div>' +
        (isArch ? '<div class="form-group"><label class="form-label">Arch Rise Ratio: ' + cfg.archRise.toFixed(2) + '</label><input type="range" min="0.10" max="0.50" step="0.01" value="' + cfg.archRise + '" style="width:100%;" oninput="updateFootbridgeConfig(\'archRise\', parseFloat(this.value))"></div>' : '') +
        (isMulti ? '<div class="form-group"><label class="form-label">Number of Spans: ' + cfg.numSpans + '</label><input type="range" min="2" max="5" step="1" value="' + cfg.numSpans + '" style="width:100%;" oninput="updateFootbridgeConfig(\'numSpans\', parseInt(this.value))"></div>' : '') +
        '<div class="form-group">' +
          '<label class="form-label">Clear Width: ' + cfg.clearWidth.toFixed(1) + 'm</label>' +
          '<input type="range" min="2" max="6" step="0.1" value="' + cfg.clearWidth + '" style="width:100%;" oninput="updateFootbridgeConfig(\'clearWidth\', parseFloat(this.value))">' +
        '</div>' +
      '</div>' +
    '</div>' +

    '<!-- Scope & Parameters -->' +
    '<div class="card mb-16">' +
      '<div class="card-header"><div class="card-title">' + ICONS.building + ' Footbridge Scope & Parameters</div></div>' +
      '<div class="form-row">' +
        '<div class="form-group"><label class="form-label">Project Name</label><input class="form-input" type="text" id="fb-project-name" placeholder="e.g., Stanley Park Pedestrian Bridge" value="' + (STATE.fbProjectName || '') + '" onchange="STATE.fbProjectName=this.value"></div>' +
        '<div class="form-group"><label class="form-label">Client</label><input class="form-input" type="text" id="fb-client" placeholder="e.g., Vancouver Parks Board" value="' + (STATE.fbClient || '') + '" onchange="STATE.fbClient=this.value"></div>' +
        '<div class="form-group"><label class="form-label">Location</label><input class="form-input" type="text" id="fb-location" placeholder="e.g., Vancouver, BC" value="' + (STATE.fbLocation || '') + '" onchange="STATE.fbLocation=this.value"></div>' +
      '</div>' +
      '<div class="form-row">' +
        '<div class="form-group">' +
          '<label class="form-label">Loading Condition</label>' +
          '<select class="form-select" id="fb-loading" onchange="STATE.fbLoading=this.value">' +
            '<option value="pedestrian"' + (STATE.fbLoading==='pedestrian'?' selected':'') + '>Pedestrian Only</option>' +
            '<option value="ped-cyclist"' + (STATE.fbLoading==='ped-cyclist'?' selected':'') + '>Pedestrian + Cyclist</option>' +
            '<option value="light-vehicle"' + (STATE.fbLoading==='light-vehicle'?' selected':'') + '>Light Vehicle (< 5t)</option>' +
          '</select>' +
        '</div>' +
        '<div class="form-group">' +
          '<label class="form-label">Geotechnical Conditions</label>' +
          '<select class="form-select" id="fb-geotech" onchange="STATE.fbGeotech=this.value">' +
            '<option value="rock"' + (STATE.fbGeotech==='rock'?' selected':'') + '>Competent Rock</option>' +
            '<option value="dense-soil"' + (STATE.fbGeotech==='dense-soil'?' selected':'') + '>Dense Soil / Gravel</option>' +
            '<option value="soft-soil"' + (STATE.fbGeotech==='soft-soil'?' selected':'') + '>Soft Soil / Clay</option>' +
            '<option value="piled"' + (STATE.fbGeotech==='piled'?' selected':'') + '>Piled Foundation Required</option>' +
          '</select>' +
        '</div>' +
      '</div>' +
      '<div class="form-row">' +
        '<div class="form-group">' +
          '<label class="form-label">Structural Material</label>' +
          '<select class="form-select" id="fb-material" onchange="STATE.fbMaterial=this.value">' +
            '<option value="glulam-df"' + (STATE.fbMaterial==='glulam-df'?' selected':'') + '>Glulam (Douglas Fir)</option>' +
            '<option value="glulam-spruce"' + (STATE.fbMaterial==='glulam-spruce'?' selected':'') + '>Glulam (Spruce)</option>' +
            '<option value="clt-hybrid"' + (STATE.fbMaterial==='clt-hybrid'?' selected':'') + '>CLT + Glulam Hybrid</option>' +
            '<option value="steel-timber"' + (STATE.fbMaterial==='steel-timber'?' selected':'') + '>Steel + Timber Hybrid</option>' +
          '</select>' +
        '</div>' +
        '<div class="form-group">' +
          '<label class="form-label">Deck System</label>' +
          '<select class="form-select" id="fb-deck" onchange="STATE.fbDeck=this.value">' +
            '<option value="dlt"' + (STATE.fbDeck==='dlt'?' selected':'') + '>Timber Deck (DLT)</option>' +
            '<option value="clt"' + (STATE.fbDeck==='clt'?' selected':'') + '>Timber Deck (CLT)</option>' +
            '<option value="concrete-timber"' + (STATE.fbDeck==='concrete-timber'?' selected':'') + '>Concrete on Timber</option>' +
            '<option value="frp"' + (STATE.fbDeck==='frp'?' selected':'') + '>FRP Composite</option>' +
          '</select>' +
        '</div>' +
      '</div>' +
      '<div class="form-row">' +
        '<div class="form-group">' +
          '<label class="form-label">Railing Type</label>' +
          '<select class="form-select" id="fb-railing" onchange="STATE.fbRailing=this.value">' +
            '<option value="timber-cable"' + (STATE.fbRailing==='timber-cable'?' selected':'') + '>Timber + Steel Cable</option>' +
            '<option value="steel-mesh"' + (STATE.fbRailing==='steel-mesh'?' selected':'') + '>Steel Mesh</option>' +
            '<option value="glass"' + (STATE.fbRailing==='glass'?' selected':'') + '>Glass Panel</option>' +
            '<option value="aluminum"' + (STATE.fbRailing==='aluminum'?' selected':'') + '>Aluminum</option>' +
          '</select>' +
        '</div>' +
        '<div class="form-group">' +
          '<label class="form-label">Site Access</label>' +
          '<select class="form-select" id="fb-access" onchange="STATE.fbAccess=this.value">' +
            '<option value="standard"' + (STATE.fbAccess==='standard'?' selected':'') + '>Standard vehicular</option>' +
            '<option value="restricted"' + (STATE.fbAccess==='restricted'?' selected':'') + '>Restricted / pedestrian only</option>' +
            '<option value="helicopter"' + (STATE.fbAccess==='helicopter'?' selected':'') + '>Helicopter required</option>' +
            '<option value="barge"' + (STATE.fbAccess==='barge'?' selected':'') + '>Barge access</option>' +
          '</select>' +
        '</div>' +
      '</div>' +
      '<div class="form-row">' +
        '<div class="form-group">' +
          '<label class="form-label">Coverage</label>' +
          '<select class="form-select" id="fb-coverage" onchange="STATE.fbCoverage=this.value">' +
            '<option value="open"' + (STATE.fbCoverage==='open'?' selected':'') + '>Open (uncovered)</option>' +
            '<option value="covered"' + (STATE.fbCoverage==='covered'?' selected':'') + '>Covered / canopy</option>' +
            '<option value="partial"' + (STATE.fbCoverage==='partial'?' selected':'') + '>Partially covered</option>' +
          '</select>' +
        '</div>' +
        '<div class="form-group">' +
          '<label class="form-label">StructureCraft Scope</label>' +
          '<select class="form-select" id="fb-scope" onchange="STATE.fbScope=this.value">' +
            '<option value="prime-db"' + (STATE.fbScope==='prime-db'?' selected':'') + '>Prime Contractor (Design-Build)</option>' +
            '<option value="eng-supply"' + (STATE.fbScope==='eng-supply'?' selected':'') + '>Engineering + Supply</option>' +
            '<option value="supply-only"' + (STATE.fbScope==='supply-only'?' selected':'') + '>Supply Only</option>' +
            '<option value="eng-supervise"' + (STATE.fbScope==='eng-supervise'?' selected':'') + '>Engineering + Supervision</option>' +
          '</select>' +
        '</div>' +
      '</div>' +
    '</div>' +

    '<!-- Generate Button -->' +
    '<div class="card mb-16" style="text-align:center; padding: 30px;">' +
      '<p style="color: var(--text-secondary); margin-bottom: 16px; font-size: 0.85rem;">Configure parameters above, then generate a detailed footbridge cost estimate.</p>' +
      '<button class="btn btn-lg btn-accent" onclick="generateFootbridgeEstimate()" style="padding: 14px 40px; font-size: 1rem;">' +
        ICONS.bolt + ' Generate Footbridge Estimate' +
      '</button>' +
    '</div>' +

    outputHtml +
  '</div>';
}

function updateFootbridgeConfig(key, value) {
  STATE.footbridgeConfig[key] = value;
  renderPage();
}

function renderFootbridgeOutput(fbEst) {
  var phaseKeys = ['fb-engineering', 'fb-fabrication', 'fb-shipping', 'fb-foundations', 'fb-installation', 'fb-railing-finishes', 'fb-general-conditions'];
  var activeTab = STATE.footbridgeOutputTab || 'summary';

  var subtotal = 0;
  phaseKeys.forEach(function(pk) {
    if (fbEst.phases && fbEst.phases[pk]) {
      subtotal += calcPhaseTotal(fbEst.phases[pk]);
    }
  });
  var a = fbEst.assumptions || getDefaultAssumptions();
  var margin = subtotal * (a.marginPercent / 100);
  var overhead = subtotal * (a.overheadPercent / 100);
  var contingency = subtotal * (a.contingencyPercent / 100);
  var bondIns = subtotal * (a.bondInsurancePercent / 100);
  var grandTotal = subtotal + margin + overhead + bondIns;

  return '<div class="section-divider mt-24">Footbridge Estimate Output</div>' +

    '<div class="assumptions-box mb-20">' +
      '<div class="assumptions-header">' + ICONS.warning + ' Footbridge Pricing Assumptions</div>' +
      '<div class="assumptions-grid">' +
        '<div class="assumption-item"><div class="assumption-label">Margin</div><div class="assumption-value">' + fmtPct(a.marginPercent) + '</div></div>' +
        '<div class="assumption-item"><div class="assumption-label">Overhead</div><div class="assumption-value">' + fmtPct(a.overheadPercent) + '</div></div>' +
        '<div class="assumption-item"><div class="assumption-label">Contingency</div><div class="assumption-value">' + fmtPct(a.contingencyPercent) + '</div></div>' +
        '<div class="assumption-item"><div class="assumption-label">Bond & Insurance</div><div class="assumption-value">' + fmtPct(a.bondInsurancePercent) + '</div></div>' +
        '<div class="assumption-item"><div class="assumption-label">Glulam (per BF)</div><div class="assumption-value">' + fmtDec(a.glulamPriceBF) + '</div></div>' +
        '<div class="assumption-item"><div class="assumption-label">DLT (per SF)</div><div class="assumption-value">' + fmtDec(a.dltPriceSF) + '</div></div>' +
        '<div class="assumption-item"><div class="assumption-label">Steel Connections (per ton)</div><div class="assumption-value">' + fmt(a.steelConnectionsTon) + '</div></div>' +
        '<div class="assumption-item"><div class="assumption-label">Crane (per day)</div><div class="assumption-value">' + fmt(a.craneDailyRate) + '</div></div>' +
      '</div>' +
    '</div>' +

    '<div class="tabs">' +
      '<div class="tab ' + (activeTab === 'summary' ? 'active' : '') + '" onclick="STATE.footbridgeOutputTab=\'summary\'; renderPage();">Summary</div>' +
      phaseKeys.map(function(pk) {
        return '<div class="tab ' + (activeTab === pk ? 'active' : '') + '" onclick="STATE.footbridgeOutputTab=\'' + pk + '\'; renderPage();">' + (PHASE_DEFS[pk] ? PHASE_DEFS[pk].name : pk) + '</div>';
      }).join('') +
    '</div>' +

    (activeTab === 'summary' ? renderOutputSummary(fbEst, phaseKeys, subtotal, margin, overhead, contingency, bondIns, grandTotal) : '') +
    phaseKeys.map(function(pk) { return activeTab === pk ? renderFootbridgePhaseTab(fbEst, pk) : ''; }).join('');
}

function renderFootbridgePhaseTab(fbEst, phaseKey) {
  var phase = fbEst.phases && fbEst.phases[phaseKey] ? fbEst.phases[phaseKey] : { items: [] };
  var phaseDef = PHASE_DEFS[phaseKey] || { name: phaseKey, description: '' };
  var phaseSubtotal = calcPhaseTotal(phase);

  return '<div class="slide-up"><div class="card">' +
    '<div class="card-header"><div><div class="card-title">' + phaseDef.name + '</div><div class="card-subtitle">' + phaseDef.description + '</div></div></div>' +
    '<div class="line-items-header"><div></div><div>Description</div><div class="cell-right">Qty</div><div class="cell-center">Unit</div><div class="cell-right">Rate</div><div class="cell-right">Total</div></div>' +
    phase.items.map(function(item) {
      return '<div class="line-item-row">' +
        '<div></div>' +
        '<div style="padding:6px 8px; font-size:0.82rem;">' + item.name + '</div>' +
        '<div class="cell-right cell-mono" style="padding:6px 8px;">' + fmtNum(item.qty) + '</div>' +
        '<div class="cell-center" style="padding:6px 8px;">' + item.unit + '</div>' +
        '<div class="cell-right cell-mono" style="padding:6px 8px;">' + fmtDec(item.rate) + '</div>' +
        '<div class="cell-right cell-mono cell-bold" style="padding:6px 8px;">' + fmt(item.total) + '</div>' +
      '</div>';
    }).join('') +
    (phase.items.length > 0 ? '<div class="line-item-row subtotal-row"><div></div><div style="font-weight:700; color:var(--text-primary);">Phase Subtotal</div><div></div><div></div><div></div><div class="cell-right cell-mono cell-accent" style="padding:4px 6px; font-size:0.92rem;">' + fmt(phaseSubtotal) + '</div></div>' : '') +
  '</div></div>';
}


// ---- SECTION 9D: FOOTBRIDGE ESTIMATE GENERATOR ----
function generateFootbridgeEstimate() {
  var cfg = STATE.footbridgeConfig;
  var a = getDefaultAssumptions();

  var span = cfg.spanLength || 30;
  var width = cfg.clearWidth || 3.5;
  var bType = cfg.bridgeType || 'parabolic-arch';
  var nSpans = cfg.numSpans || 1;
  var rise = cfg.archRise || 0.25;

  var deckAreaM2 = span * width;
  var deckAreaSF = deckAreaM2 * 10.764;
  var railingLF = span * 3.281 * 2; // both sides, meters to feet

  // Material pricing based on selection
  var glulamPrice = a.glulamPriceBF;
  var material = STATE.fbMaterial || 'glulam-df';
  if (material === 'glulam-spruce') glulamPrice = 3.80;

  // Complexity factor based on bridge type
  var complexityFactor = 1.0;
  if (bType === 'cable-stayed') complexityFactor = 1.4;
  else if (bType === 'tied-arch') complexityFactor = 1.2;
  else if (bType === 'parabolic-arch') complexityFactor = 1.15;
  else if (bType === 'warren-truss' || bType === 'pratt-truss') complexityFactor = 1.1;
  else if (bType === 'king-post-truss') complexityFactor = 1.05;
  else if (bType === 'multi-span-beam') complexityFactor = 0.9 + nSpans * 0.1;
  else if (bType === 'clear-span-beam') complexityFactor = 0.85;

  // Glulam BF estimate: roughly span(m) * width(m) * factor * 10 BF/m2
  var glulamBF = Math.round(span * width * complexityFactor * 12);
  // Additional structural BF for beams
  var deckBeamBF = Math.round(deckAreaSF * 0.2);

  // Steel tonnage
  var steelTons = Math.round((span * 0.08 * complexityFactor) * 10) / 10;

  // Engineering hours
  var engDesignHrs = Math.round(span * 5 * complexityFactor);
  var shopDrawHrs = Math.round(span * 3.5 * complexityFactor);
  var connDesignHrs = Math.round(span * 2.5 * complexityFactor);
  var draftHrs = Math.round(span * 4 * complexityFactor);
  var geoReviewHrs = Math.round(span * 0.8);

  // Foundation costs based on geotech
  var geotech = STATE.fbGeotech || 'dense-soil';
  var foundationCostPer = 28000;
  var geoInvestCost = 12000;
  var extraFoundItems = [];
  if (geotech === 'rock') { foundationCostPer = 22000; geoInvestCost = 8000; }
  else if (geotech === 'dense-soil') { foundationCostPer = 28000; geoInvestCost = 12000; }
  else if (geotech === 'soft-soil') { foundationCostPer = 45000; geoInvestCost = 18000; }
  else if (geotech === 'piled') {
    foundationCostPer = 75000; geoInvestCost = 28000;
    extraFoundItems.push({ name: 'Cofferdam / Dewatering', qty: 1, unit: 'LS', rate: 35000, total: 35000 });
  }
  var numAbutments = 2;
  var numPiers = (bType === 'multi-span-beam') ? nSpans - 1 : 0;

  // Site access multiplier
  var access = STATE.fbAccess || 'standard';
  var accessMult = 1.0;
  if (access === 'restricted') accessMult = 1.3;
  else if (access === 'helicopter') accessMult = 2.5;
  else if (access === 'barge') accessMult = 1.6;

  // Carpentry hours
  var carpHrs = Math.round(span * 12 * accessMult);
  var laborHrs = Math.round(carpHrs * 0.5);
  var superHrs = Math.round(carpHrs * 0.25);
  var craneDays = Math.round(span / 8 * accessMult);
  var craneOpHrs = craneDays * 8;
  var tempWorks = Math.round(span * 400 * accessMult);

  // Deck system
  var deck = STATE.fbDeck || 'dlt';
  var deckItems = [];
  if (deck === 'dlt') {
    deckItems.push({ name: 'DLT Deck Panels', qty: Math.round(deckAreaSF), unit: 'SF', rate: a.dltPriceSF, total: Math.round(deckAreaSF) * a.dltPriceSF });
  } else if (deck === 'clt') {
    deckItems.push({ name: 'CLT Deck Panels (3-ply)', qty: Math.round(deckAreaSF), unit: 'SF', rate: a.cltPriceSF3, total: Math.round(deckAreaSF) * a.cltPriceSF3 });
  } else if (deck === 'concrete-timber') {
    deckItems.push({ name: 'Timber Deck Substrate', qty: Math.round(deckAreaSF), unit: 'SF', rate: 18, total: Math.round(deckAreaSF) * 18 });
    deckItems.push({ name: 'Concrete Deck Topping', qty: Math.round(deckAreaSF), unit: 'SF', rate: a.concreteToppingSF, total: Math.round(deckAreaSF) * a.concreteToppingSF });
  } else if (deck === 'frp') {
    deckItems.push({ name: 'FRP Composite Deck Panels', qty: Math.round(deckAreaSF), unit: 'SF', rate: 45, total: Math.round(deckAreaSF) * 45 });
  }

  // Railing
  var railing = STATE.fbRailing || 'timber-cable';
  var railItems = [];
  if (railing === 'timber-cable') {
    railItems.push({ name: 'Timber Posts (glulam)', qty: Math.round(railingLF), unit: 'LF', rate: 45, total: Math.round(railingLF) * 45 });
    railItems.push({ name: 'Stainless Steel Cable Infill', qty: Math.round(railingLF), unit: 'LF', rate: 65, total: Math.round(railingLF) * 65 });
    railItems.push({ name: 'Top Rail (timber)', qty: Math.round(railingLF), unit: 'LF', rate: 28, total: Math.round(railingLF) * 28 });
  } else if (railing === 'steel-mesh') {
    railItems.push({ name: 'Steel Mesh Panels', qty: Math.round(railingLF), unit: 'LF', rate: 85, total: Math.round(railingLF) * 85 });
    railItems.push({ name: 'Steel Top Rail', qty: Math.round(railingLF), unit: 'LF', rate: 38, total: Math.round(railingLF) * 38 });
  } else if (railing === 'glass') {
    railItems.push({ name: 'Tempered Glass Panels', qty: Math.round(railingLF), unit: 'LF', rate: 150, total: Math.round(railingLF) * 150 });
    railItems.push({ name: 'Stainless Steel Top Cap', qty: Math.round(railingLF), unit: 'LF', rate: 45, total: Math.round(railingLF) * 45 });
  } else if (railing === 'aluminum') {
    railItems.push({ name: 'Aluminum Railing System', qty: Math.round(railingLF), unit: 'LF', rate: 95, total: Math.round(railingLF) * 95 });
  }
  railItems.push({ name: 'Deck Finish & Sealant', qty: Math.round(deckAreaSF), unit: 'SF', rate: 6, total: Math.round(deckAreaSF) * 6 });
  railItems.push({ name: 'Non-Slip Surface Treatment', qty: Math.round(deckAreaSF), unit: 'SF', rate: 3.50, total: Math.round(deckAreaSF * 3.50) });

  // Fabrication items
  var fabItems = [
    { name: 'Glulam Primary Members', qty: glulamBF, unit: 'BF', rate: glulamPrice, total: Math.round(glulamBF * glulamPrice) },
    { name: 'Glulam Deck Beams', qty: deckBeamBF, unit: 'BF', rate: glulamPrice, total: Math.round(deckBeamBF * glulamPrice) },
  ];
  fabItems = fabItems.concat(deckItems);
  fabItems.push({ name: 'Steel Connections & Hardware', qty: steelTons, unit: 'ton', rate: a.steelConnectionsTon, total: Math.round(steelTons * a.steelConnectionsTon) });
  if (bType === 'parabolic-arch' || bType === 'tied-arch') {
    fabItems.push({ name: 'Hanger Rods & Tension Members', qty: 1, unit: 'LS', rate: Math.round(span * 350), total: Math.round(span * 350) });
  }
  if (bType === 'cable-stayed') {
    fabItems.push({ name: 'Stay Cables & Anchorage', qty: 1, unit: 'LS', rate: Math.round(span * 600), total: Math.round(span * 600) });
  }
  var fabLabor = Math.round(glulamBF * 0.06 + deckBeamBF * 0.04);
  fabItems.push({ name: 'Shop Fabrication Labor', qty: fabLabor, unit: 'hr', rate: a.shopHourlyRate, total: Math.round(fabLabor * a.shopHourlyRate) });
  fabItems.push({ name: 'CNC Processing', qty: 1, unit: 'LS', rate: Math.round(span * 500 * complexityFactor), total: Math.round(span * 500 * complexityFactor) });
  fabItems.push({ name: 'Protective Coatings (factory)', qty: 1, unit: 'LS', rate: Math.round(span * 300), total: Math.round(span * 300) });

  // Shipping
  var numTrucks = Math.max(3, Math.round(glulamBF / 4000 + deckAreaSF / 3000));
  var truckRate = a.shippingPerTruck;
  if (access === 'barge') truckRate = 8500;

  var shippingItems = [
    { name: 'Flatbed Trucks', qty: numTrucks, unit: 'truck', rate: truckRate, total: numTrucks * truckRate },
    { name: 'Oversized Load Permits', qty: Math.max(1, Math.round(span / 25)), unit: 'each', rate: 2500, total: Math.max(1, Math.round(span / 25)) * 2500 },
    { name: 'Logistics Coordination', qty: Math.round(span * 0.6), unit: 'hr', rate: a.draftHourlyRate, total: Math.round(span * 0.6) * a.draftHourlyRate },
  ];

  // Foundation items
  var foundItems = [
    { name: 'Abutment Foundations', qty: numAbutments, unit: 'each', rate: foundationCostPer, total: numAbutments * foundationCostPer },
  ];
  if (numPiers > 0) {
    foundItems.push({ name: 'Intermediate Pier Foundations', qty: numPiers, unit: 'each', rate: Math.round(foundationCostPer * 0.8), total: numPiers * Math.round(foundationCostPer * 0.8) });
  }
  foundItems.push({ name: 'Excavation & Backfill', qty: 1, unit: 'LS', rate: Math.round(span * 350), total: Math.round(span * 350) });
  foundItems.push({ name: 'Geotechnical Investigation', qty: 1, unit: 'LS', rate: geoInvestCost, total: geoInvestCost });
  foundItems.push({ name: 'Bearing Pads & Anchorage', qty: 1, unit: 'LS', rate: Math.round(span * 180), total: Math.round(span * 180) });
  foundItems = foundItems.concat(extraFoundItems);

  // Installation
  var installItems = [
    { name: 'Site Carpenters', qty: carpHrs, unit: 'hr', rate: a.siteCarpentrHourlyRate, total: carpHrs * a.siteCarpentrHourlyRate },
    { name: 'Site Laborers', qty: laborHrs, unit: 'hr', rate: a.siteLaborHourlyRate, total: laborHrs * a.siteLaborHourlyRate },
    { name: 'Site Superintendent', qty: superHrs, unit: 'hr', rate: a.siteSuperHourlyRate, total: superHrs * a.siteSuperHourlyRate },
    { name: 'Mobile Crane', qty: craneDays, unit: 'day', rate: a.craneDailyRate, total: craneDays * a.craneDailyRate },
    { name: 'Crane Operator', qty: craneOpHrs, unit: 'hr', rate: a.craneOperatorHourlyRate, total: craneOpHrs * a.craneOperatorHourlyRate },
    { name: 'Temporary Works & Shoring', qty: 1, unit: 'LS', rate: tempWorks, total: tempWorks },
  ];
  if (deck === 'concrete-timber') {
    installItems.push({ name: 'Concrete Placement & Finishing', qty: Math.round(deckAreaSF), unit: 'SF', rate: 4, total: Math.round(deckAreaSF) * 4 });
  }

  // Engineering
  var engItems = [
    { name: 'Structural Design & Analysis', qty: engDesignHrs, unit: 'hr', rate: a.engHourlyRate, total: engDesignHrs * a.engHourlyRate },
    { name: 'Shop Drawing Engineering', qty: shopDrawHrs, unit: 'hr', rate: 180, total: shopDrawHrs * 180 },
    { name: 'Connection Design', qty: connDesignHrs, unit: 'hr', rate: 180, total: connDesignHrs * 180 },
    { name: 'Drafting / Detailing', qty: draftHrs, unit: 'hr', rate: a.draftHourlyRate, total: draftHrs * a.draftHourlyRate },
    { name: 'Geotechnical Review', qty: geoReviewHrs, unit: 'hr', rate: a.engHourlyRate, total: geoReviewHrs * a.engHourlyRate },
  ];

  // Build phases
  var phases = {};
  var phaseList = [
    ['fb-engineering', engItems],
    ['fb-fabrication', fabItems],
    ['fb-shipping', shippingItems],
    ['fb-foundations', foundItems],
    ['fb-installation', installItems],
    ['fb-railing-finishes', railItems],
  ];

  var directTotal = 0;
  phaseList.forEach(function(entry) {
    var items = entry[1];
    var sub = items.reduce(function(s, i) { return s + i.total; }, 0);
    phases[entry[0]] = { items: items, subtotal: sub };
    directTotal += sub;
  });

  // General conditions
  var pmHrs = Math.round(span * 3.5);
  var insuranceBonds = Math.round(directTotal * 0.03);
  var envProtection = Math.round(span * 200);
  var siteSafety = Math.round(span * 300);
  var contingencyAmt = Math.round(directTotal * 0.05);

  var gcItems = [
    { name: 'Project Management', qty: pmHrs, unit: 'hr', rate: a.pmHourlyRate, total: pmHrs * a.pmHourlyRate },
    { name: 'Insurance & Bonds', qty: 1, unit: 'LS', rate: insuranceBonds, total: insuranceBonds },
    { name: 'Environmental Protection', qty: 1, unit: 'LS', rate: envProtection, total: envProtection },
    { name: 'Site Safety & Traffic Mgmt', qty: 1, unit: 'LS', rate: siteSafety, total: siteSafety },
    { name: 'Contingency (5%)', qty: 1, unit: 'LS', rate: contingencyAmt, total: contingencyAmt },
  ];
  var gcSub = gcItems.reduce(function(s, i) { return s + i.total; }, 0);
  phases['fb-general-conditions'] = { items: gcItems, subtotal: gcSub };

  STATE.footbridgeEstimate = {
    name: STATE.fbProjectName || 'Footbridge Estimate',
    client: STATE.fbClient || '',
    location: STATE.fbLocation || '',
    assumptions: a,
    phases: phases,
    totalCost: directTotal + gcSub,
  };

  STATE.footbridgeOutputTab = 'summary';
  renderPage();
  showToast('Footbridge estimate generated successfully.', 'success');
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
  var phases = DELIVERY_MODELS[model].phases;
  if (!STATE.currentEstimate.phases) STATE.currentEstimate.phases = {};
  phases.forEach(function(pk) {
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
    name: 'New Line Item', qty: 0, unit: 'LS', rate: 0, total: 0,
  });
  saveState();
  renderPage();
}

function updateLineItem(phaseKey, idx, field, value) {
  var item = STATE.currentEstimate.phases[phaseKey].items[idx];
  if (!item) return;
  item[field] = value;
  item.total = (item.qty || 0) * (item.rate || 0);
  STATE.currentEstimate.phases[phaseKey].subtotal = calcPhaseTotal(STATE.currentEstimate.phases[phaseKey]);
  saveState();
  renderPage();
}

function removeLineItem(phaseKey, idx) {
  STATE.currentEstimate.phases[phaseKey].items.splice(idx, 1);
  saveState();
  renderPage();
}

function editAssumption(key, el) {
  var current = STATE.currentEstimate.assumptions[key];
  var input = document.createElement('input');
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

// ---- SECTION 10A: AI-POWERED ESTIMATION ----

function extractTextFromPDF(file) {
  return new Promise(function(resolve, reject) {
    var reader = new FileReader();
    reader.onload = function(e) {
      var typedArray = new Uint8Array(e.target.result);
      if (typeof pdfjsLib === 'undefined') {
        resolve('[PDF.js not loaded - file: ' + file.name + ']');
        return;
      }
      pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
      pdfjsLib.getDocument(typedArray).promise.then(function(pdf) {
        var totalPages = pdf.numPages;
        var textPromises = [];
        for (var i = 1; i <= totalPages; i++) {
          textPromises.push(
            pdf.getPage(i).then(function(page) {
              return page.getTextContent().then(function(tc) {
                return tc.items.map(function(item) { return item.str; }).join(' ');
              });
            })
          );
        }
        Promise.all(textPromises).then(function(pages) {
          resolve(pages.join('\n\n--- Page Break ---\n\n'));
        }).catch(function(err) {
          resolve('[Error extracting text from ' + file.name + ': ' + err.message + ']');
        });
      }).catch(function(err) {
        resolve('[Error loading PDF ' + file.name + ': ' + err.message + ']');
      });
    };
    reader.onerror = function() { resolve('[Error reading file ' + file.name + ']'); };
    reader.readAsArrayBuffer(file);
  });
}

function getAllUploadedFiles() {
  var allFiles = [];
  var est = STATE.currentEstimate;
  ['rfp', 'drawings', 'structural', 'narratives', 'other'].forEach(function(cat) {
    if (est.files[cat]) {
      est.files[cat].forEach(function(f) {
        if (f.fileKey && FILE_STORE[f.fileKey]) {
          allFiles.push({ category: cat, meta: f, file: FILE_STORE[f.fileKey] });
        }
      });
    }
  });
  return allFiles;
}

function buildAIPrompt(est, extractedTexts) {
  var materialDesc = '';
  if (est.materials) {
    Object.entries(est.materials).forEach(function(entry) {
      var element = entry[0], value = entry[1];
      var opts = MATERIAL_OPTIONS[element];
      if (opts) {
        var selected = opts.options.find(function(o) { return o.value === value; });
        if (selected) materialDesc += '  - ' + opts.label + ': ' + selected.label + ' (' + selected.pricePer + '/' + selected.unit + ')\n';
      }
    });
  }

  var pricingRef = 'Key Pricing Reference:\n';
  pricingRef += '  Glulam DF: $4.25/BF | Glulam Spruce: $3.80/BF | Glulam YC: $5.50/BF\n';
  pricingRef += '  CLT 3-ply: $26/SF | CLT 5-ply: $34/SF | CLT 7-ply: $44/SF\n';
  pricingRef += '  DLT: $22/SF | NLT: $15/SF | MPP: $28/SF\n';
  pricingRef += '  Steel W-Shape: $2,800/ton | HSS: $3,200/ton | Plate: $3,500/ton\n';
  pricingRef += '  Concrete 4000PSI: $200/CY | Metal Deck+Concrete: $14/SF\n';
  pricingRef += '  Steel Connections: $4,500/ton | Rebar: $1,800/ton\n';
  pricingRef += '  Engineering: $195/hr | Drafting: $115/hr | Shop: $82/hr\n';
  pricingRef += '  Site Carpenter: $95/hr | Laborer: $65/hr | Super: $140/hr\n';
  pricingRef += '  Crane 50t: $4,200/day | Crane 100t: $7,500/day | PM: $165/hr\n';

  var model = DELIVERY_MODELS[est.deliveryModel];
  var phases = model ? model.phases : [];

  var prompt = 'You are an expert structural estimator specializing in mass timber, steel, and concrete construction. ' +
    'Analyze the following project documents and produce a detailed quantity takeoff and cost estimate.\n\n' +
    'PROJECT INFORMATION:\n' +
    '  Project Name: ' + (est.name || 'Untitled') + '\n' +
    '  Client: ' + (est.client || 'N/A') + '\n' +
    '  Location: ' + (est.location || 'N/A') + '\n' +
    '  Project Type: ' + (est.projectType || 'commercial') + '\n' +
    '  Delivery Model: ' + (model ? model.name : 'N/A') + '\n' +
    '  Structural System: ' + (est.structuralSystem || 'post-beam') + '\n\n' +
    'SELECTED MATERIALS:\n' + materialDesc + '\n' +
    'SCOPE DESCRIPTION:\n' + (est.scopeDescription || 'No description provided') + '\n\n' +
    (est.rfpNotes ? 'RFP NOTES:\n' + est.rfpNotes + '\n\n' : '') +
    (est.rfiNotes ? 'RFI NOTES:\n' + est.rfiNotes + '\n\n' : '') +
    pricingRef + '\n' +
    'REQUIRED PHASES: ' + phases.map(function(p) { return PHASE_DEFS[p] ? PHASE_DEFS[p].name : p; }).join(', ') + '\n\n' +
    'EXTRACTED DOCUMENT TEXT:\n' + extractedTexts + '\n\n' +
    'INSTRUCTIONS:\n' +
    '1. Carefully read ALL the document text above. Extract building dimensions, areas, structural member sizes, quantities, and specifications.\n' +
    '2. Determine the building area (SF), number of stories, grid spacing, floor-to-floor heights from the documents.\n' +
    '3. Perform a detailed quantity takeoff based on the actual drawings/specs - calculate real BF, SF, tons, hours.\n' +
    '4. Use the selected materials and pricing reference above for unit rates.\n' +
    '5. Generate line items for EACH required phase with realistic quantities.\n\n' +
    'RESPOND WITH VALID JSON ONLY (no markdown, no explanation outside JSON):\n' +
    '{\n' +
    '  "buildingArea": <number in SF>,\n' +
    '  "numStories": <number>,\n' +
    '  "gridSpacing": "<string>",\n' +
    '  "floorToFloor": <number in ft>,\n' +
    '  "phases": {\n' +
    '    "<phase-key>": [\n' +
    '      { "name": "<description>", "qty": <number>, "unit": "<BF|SF|hr|ton|truck|each|LS|LF|day|month>", "rate": <number> }\n' +
    '    ]\n' +
    '  },\n' +
    '  "notes": [\n' +
    '    "<string: important caveats, exclusions, assumptions, items that could not be determined from the documents>"\n' +
    '  ]\n' +
    '}\n\n' +
    'Phase keys to use: ' + phases.map(function(p) { return '"' + p + '"'; }).join(', ') + '\n' +
    'Be thorough. Include ALL structural elements visible in the documents. If you cannot determine exact quantities, provide your best professional estimate and note the uncertainty. The estimate should be complete and realistic.';

  return prompt;
}

async function callOpenAI(prompt, apiKey) {
  var response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + apiKey,
    },
    body: JSON.stringify({
      model: localStorage.getItem('sc-openai-model') || 'gpt-4o',
      messages: [
        { role: 'system', content: 'You are an expert structural engineer and cost estimator. Respond only with valid JSON.' },
        { role: 'user', content: prompt },
      ],
      temperature: 0.3,
      max_tokens: 8000,
    }),
  });

  if (!response.ok) {
    var errText = await response.text();
    throw new Error('OpenAI API error (' + response.status + '): ' + errText);
  }

  var data = await response.json();
  var content = data.choices[0].message.content;
  // Strip markdown code fences if present
  content = content.replace(/^```json\s*/i, '').replace(/\s*```\s*$/i, '').trim();
  return JSON.parse(content);
}

function updateAIProgress(step, progress) {
  AI_STATE.step = step;
  AI_STATE.progress = progress;
  var container = document.getElementById('ai-progress-container');
  if (!container) return;

  var elapsed = Date.now() - AI_STATE.startTime;
  var elapsedSec = Math.round(elapsed / 1000);
  var estimatedTotal = progress > 5 ? Math.round(elapsed / (progress / 100)) : 120000;
  var remaining = Math.max(0, Math.round((estimatedTotal - elapsed) / 1000));
  var remainMin = Math.floor(remaining / 60);
  var remainSec = remaining % 60;

  container.style.display = 'block';
  container.innerHTML = '<div style="background: var(--bg-tertiary); border: 1px solid var(--border); border-radius: 12px; padding: 20px; text-align: left;">' +
    '<div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">' +
      '<div style="font-weight: 600; font-size: 0.9rem; color: var(--text-primary);">' + ICONS.bolt + ' AI Analysis in Progress</div>' +
      '<div style="font-size: 0.78rem; color: var(--text-muted);">' + elapsedSec + 's elapsed</div>' +
    '</div>' +
    '<div style="font-size: 0.82rem; color: var(--accent); margin-bottom: 8px;">' + step + '</div>' +
    '<div style="background: var(--bg-input); border-radius: 6px; height: 8px; overflow: hidden; margin-bottom: 8px;">' +
      '<div style="background: var(--accent); height: 100%; width: ' + progress + '%; border-radius: 6px; transition: width 0.5s ease;"></div>' +
    '</div>' +
    '<div style="display: flex; justify-content: space-between; font-size: 0.75rem; color: var(--text-muted);">' +
      '<span>' + Math.round(progress) + '% complete</span>' +
      '<span>~' + (remainMin > 0 ? remainMin + 'm ' : '') + remainSec + 's remaining</span>' +
    '</div>' +
    '<div style="margin-top: 12px; font-size: 0.75rem; color: var(--text-muted);">' +
      'You can navigate to other pages while the AI works. Check back here or the Output tab for results.' +
    '</div>' +
  '</div>';
}

function hideAIProgress() {
  var container = document.getElementById('ai-progress-container');
  if (container) container.style.display = 'none';
  AI_STATE.processing = false;
}

function generateTemplateEstimate(est, model) {
  if (!est.phases) est.phases = {};
  var a = est.assumptions;
  var mats = est.materials || {};

  // Derive area from scope description as best guess
  var area = 30000;
  var stories = 4;
  var scopeText = (est.scopeDescription || '').toLowerCase();
  var areaMatch = scopeText.match(/(\d[\d,]*)\s*(?:sf|sq\s*ft|square\s*f)/i);
  if (areaMatch) area = parseInt(areaMatch[1].replace(/,/g, ''));
  var storyMatch = scopeText.match(/(\d+)\s*(?:stor|floor|level)/i);
  if (storyMatch) stories = parseInt(storyMatch[1]);

  var totalArea = area;

  // Get material pricing
  function getMatPrice(element) {
    var val = mats[element] || 'glulam-df';
    var opts = MATERIAL_OPTIONS[element];
    if (!opts) return { pricePer: 4.25, unit: 'BF', label: 'Glulam DF', category: 'timber' };
    var found = opts.options.find(function(o) { return o.value === val; });
    return found || opts.options[0];
  }

  var beamMat = getMatPrice('beams');
  var colMat = getMatPrice('columns');
  var floorMat = getMatPrice('floors');
  var roofMat = getMatPrice('roofs');

  // Calculate quantities based on material type
  var beamQty, beamUnit, beamRate, colQty, colUnit, colRate;
  if (beamMat.category === 'timber') {
    beamQty = Math.round(totalArea * 0.56); beamUnit = 'BF'; beamRate = beamMat.pricePer;
  } else if (beamMat.category === 'steel') {
    beamQty = Math.round(totalArea / 4000 * 10) / 10; beamUnit = 'ton'; beamRate = beamMat.pricePer;
  } else {
    beamQty = Math.round(totalArea * 0.02); beamUnit = 'LF'; beamRate = beamMat.pricePer;
  }

  if (colMat.category === 'timber') {
    colQty = Math.round(totalArea * 0.24); colUnit = 'BF'; colRate = colMat.pricePer;
  } else if (colMat.category === 'steel') {
    colQty = Math.round(totalArea / 6000 * 10) / 10; colUnit = 'ton'; colRate = colMat.pricePer;
  } else {
    colQty = Math.round(totalArea * 0.01); colUnit = 'LF'; colRate = colMat.pricePer;
  }

  var floorQty = Math.round(totalArea * 0.85);
  var roofQty = Math.round(totalArea / stories * 0.95);

  var steelTonsCalc = Math.round(totalArea / 4000 * 10) / 10;
  var carpHrsCalc = Math.round(totalArea * 0.06);

  var templates = {
    'consulting': [
      { name: 'SD Structural Engineering', qty: Math.round(60 + stories * 15), unit: 'hr', rate: a.engHourlyRate },
      { name: 'DD Structural Engineering', qty: Math.round(100 + stories * 25), unit: 'hr', rate: a.engHourlyRate },
      { name: 'CD Structural Engineering', qty: Math.round(150 + stories * 35), unit: 'hr', rate: a.engHourlyRate },
      { name: 'CA Services', qty: Math.round(40 + stories * 10), unit: 'hr', rate: a.engHourlyRate },
    ],
    'structural-engineering': [
      { name: 'SD Structural Engineering', qty: Math.round(70 + stories * 18), unit: 'hr', rate: a.engHourlyRate },
      { name: 'DD Structural Engineering', qty: Math.round(120 + stories * 30), unit: 'hr', rate: a.engHourlyRate },
      { name: 'CD Structural Engineering', qty: Math.round(170 + stories * 40), unit: 'hr', rate: a.engHourlyRate },
      { name: 'CA Services', qty: Math.round(50 + stories * 12), unit: 'hr', rate: a.engHourlyRate },
    ],
    'timber-engineering': [
      { name: 'Shop Drawing Engineering', qty: Math.round(totalArea * 0.008), unit: 'hr', rate: 180 },
      { name: 'Erection Engineering', qty: Math.round(totalArea * 0.002), unit: 'hr', rate: 180 },
      { name: 'Connection Design', qty: Math.round(totalArea * 0.004), unit: 'hr', rate: 180 },
      { name: 'Drafting / Detailing', qty: Math.round(totalArea * 0.01), unit: 'hr', rate: a.draftHourlyRate },
    ],
    'construction-engineering': [
      { name: 'Construction Phase Engineering', qty: Math.round(totalArea * 0.003), unit: 'hr', rate: 180 },
      { name: 'Construction Drafting', qty: Math.round(totalArea * 0.002), unit: 'hr', rate: a.draftHourlyRate },
    ],
    'fabrication': [
      { name: beamMat.label + ' Beams', qty: beamQty, unit: beamUnit, rate: beamRate },
      { name: colMat.label + ' Columns', qty: colQty, unit: colUnit, rate: colRate },
      { name: floorMat.label + ' Floor Panels', qty: floorQty, unit: floorMat.unit, rate: floorMat.pricePer },
      { name: roofMat.label + ' Roof', qty: roofQty, unit: roofMat.unit, rate: roofMat.pricePer },
      { name: 'Steel Connections', qty: steelTonsCalc, unit: 'ton', rate: a.steelConnectionsTon || 4500 },
      { name: 'Fasteners & Hardware', qty: 1, unit: 'LS', rate: Math.round(totalArea * 1.0) },
      { name: 'Shop Fabrication Labor', qty: Math.round(totalArea * 0.04), unit: 'hr', rate: a.shopHourlyRate },
      { name: 'CNC Processing', qty: 1, unit: 'LS', rate: Math.round(totalArea * 0.8) },
    ],
    'shipping': [
      { name: 'Flatbed Trucks', qty: Math.max(5, Math.round(totalArea / 3000)), unit: 'truck', rate: a.shippingPerTruck || 4500 },
      { name: 'Oversized Load Permits', qty: Math.max(1, Math.round(totalArea / 15000)), unit: 'each', rate: 2500 },
      { name: 'Logistics Coordination', qty: Math.round(totalArea * 0.001), unit: 'hr', rate: a.draftHourlyRate },
    ],
    'installation': [
      { name: 'Site Carpenters', qty: carpHrsCalc, unit: 'hr', rate: a.siteCarpentrHourlyRate },
      { name: 'Site Laborers', qty: Math.round(carpHrsCalc * 0.35), unit: 'hr', rate: a.siteLaborHourlyRate },
      { name: 'Site Superintendent', qty: Math.round(carpHrsCalc * 0.2), unit: 'hr', rate: a.siteSuperHourlyRate },
      { name: 'Mobile Crane', qty: Math.round(totalArea / 1500), unit: 'day', rate: a.craneDailyRate },
      { name: 'Crane Operator', qty: Math.round(totalArea / 1500 * 8), unit: 'hr', rate: a.craneOperatorHourlyRate },
      { name: 'Rigging & Hardware', qty: 1, unit: 'LS', rate: Math.round(totalArea * 0.4) },
    ],
    'general-conditions': [
      { name: 'Project Management', qty: Math.round(totalArea * 0.007), unit: 'hr', rate: a.pmHourlyRate },
      { name: 'Insurance & Bonds', qty: 1, unit: 'LS', rate: Math.round(totalArea * 1.5) },
      { name: 'Contingency', qty: 1, unit: 'LS', rate: Math.round(totalArea * 1.5) },
    ],
    'dlt-material': [
      { name: 'DLT Panels - Standard', qty: Math.round(totalArea * 0.7), unit: 'SF', rate: a.dltPriceSF },
      { name: 'Edge Banding & Finish', qty: Math.round(totalArea * 0.7), unit: 'SF', rate: 2.50 },
      { name: 'Grading & QC', qty: 1, unit: 'LS', rate: 6500 },
    ],
    'site-supervision': [
      { name: 'Site Supervisor (full time)', qty: Math.round(totalArea * 0.014), unit: 'hr', rate: a.siteSuperHourlyRate },
      { name: 'Site Visits - Engineer', qty: Math.round(totalArea * 0.002), unit: 'hr', rate: a.engHourlyRate },
      { name: 'Travel & Expenses', qty: 1, unit: 'LS', rate: 6000 },
    ],
    'coordination': [
      { name: 'Fabricator Coordination', qty: Math.round(totalArea * 0.003), unit: 'hr', rate: a.pmHourlyRate },
      { name: 'Installer Coordination', qty: Math.round(totalArea * 0.0025), unit: 'hr', rate: a.pmHourlyRate },
      { name: 'Shop Drawing Review', qty: Math.round(totalArea * 0.002), unit: 'hr', rate: 180 },
    ],
  };

  model.phases.forEach(function(pk) {
    if (!est.phases[pk] || est.phases[pk].items.length === 0) {
      var templateItems = templates[pk] || [];
      est.phases[pk] = {
        items: templateItems.map(function(t) {
          return { name: t.name, qty: t.qty, unit: t.unit, rate: t.rate, total: Math.round(t.qty * t.rate) };
        }),
      };
      est.phases[pk].subtotal = calcPhaseTotal(est.phases[pk]);
    }
  });

  est.aiNotes = [
    'This estimate was generated using template-based calculations (no AI analysis).',
    'Building area estimated at ' + fmtNum(area) + ' SF (' + stories + ' stories) based on scope description.',
    'Material selections were used to determine unit pricing. Quantities are approximate.',
    'For more accurate estimates, upload drawings and add your OpenAI API key in Settings.',
  ];

  est.totalCost = calcEstimateTotal(est);
  est.updatedAt = new Date().toISOString();
  saveState();
}

async function generateAIEstimate(est, model, apiKey) {
  AI_STATE.processing = true;
  AI_STATE.estimateId = est.id;
  AI_STATE.startTime = Date.now();
  AI_STATE.progress = 0;

  try {
    // Step 1: Extract text from PDFs
    updateAIProgress('Extracting text from uploaded documents...', 10);
    var files = getAllUploadedFiles();
    var extractedTexts = '';

    if (files.length > 0) {
      for (var i = 0; i < files.length; i++) {
        updateAIProgress('Reading ' + files[i].meta.name + ' (' + (i + 1) + '/' + files.length + ')...', 10 + (i / files.length * 30));
        var isPDF = files[i].meta.type === 'application/pdf' || files[i].meta.name.toLowerCase().endsWith('.pdf');
        if (isPDF) {
          var text = await extractTextFromPDF(files[i].file);
          extractedTexts += '\n\n=== ' + files[i].category.toUpperCase() + ': ' + files[i].meta.name + ' ===\n' + text;
        } else {
          // For non-PDF files, try to read as text
          try {
            var textContent = await files[i].file.text();
            extractedTexts += '\n\n=== ' + files[i].category.toUpperCase() + ': ' + files[i].meta.name + ' ===\n' + textContent;
          } catch(e) {
            extractedTexts += '\n\n=== ' + files[i].category.toUpperCase() + ': ' + files[i].meta.name + ' === [Binary file - could not extract text]';
          }
        }
      }
    }

    if (!extractedTexts.trim()) {
      extractedTexts = 'No document text available. Generate estimate based on project scope description and material selections only.';
    }

    // Truncate if too long (OpenAI token limit)
    if (extractedTexts.length > 80000) {
      extractedTexts = extractedTexts.substring(0, 80000) + '\n\n[Text truncated due to length - ' + Math.round(extractedTexts.length / 1000) + 'KB total]';
    }

    // Step 2: Build and send AI prompt
    updateAIProgress('Analyzing documents and performing quantity takeoff...', 45);
    var prompt = buildAIPrompt(est, extractedTexts);
    var aiResult = await callOpenAI(prompt, apiKey);

    // Step 3: Parse AI response
    updateAIProgress('Building estimate from AI analysis...', 80);

    if (!est.phases) est.phases = {};

    // Process phases from AI
    if (aiResult.phases) {
      model.phases.forEach(function(pk) {
        if (aiResult.phases[pk] && aiResult.phases[pk].length > 0) {
          est.phases[pk] = {
            items: aiResult.phases[pk].map(function(item) {
              var qty = Number(item.qty) || 0;
              var rate = Number(item.rate) || 0;
              return { name: item.name, qty: qty, unit: item.unit || 'LS', rate: rate, total: Math.round(qty * rate) };
            }),
          };
          est.phases[pk].subtotal = calcPhaseTotal(est.phases[pk]);
        } else if (!est.phases[pk] || est.phases[pk].items.length === 0) {
          est.phases[pk] = { items: [], subtotal: 0 };
        }
      });
    }

    // Store AI notes
    est.aiNotes = aiResult.notes || [];
    est.aiNotes.unshift('AI analysis completed in ' + Math.round((Date.now() - AI_STATE.startTime) / 1000) + ' seconds.');
    if (aiResult.buildingArea) est.aiNotes.push('Derived building area: ' + fmtNum(aiResult.buildingArea) + ' SF');
    if (aiResult.numStories) est.aiNotes.push('Derived number of stories: ' + aiResult.numStories);
    if (aiResult.gridSpacing) est.aiNotes.push('Derived grid spacing: ' + aiResult.gridSpacing);

    updateAIProgress('Finalizing estimate...', 95);

    est.totalCost = calcEstimateTotal(est);
    est.updatedAt = new Date().toISOString();
    saveState();

    updateAIProgress('Complete!', 100);

    setTimeout(function() {
      hideAIProgress();
      STATE.currentPage = 'output';
      STATE.outputActiveTab = 'summary';
      renderPage();
      updateNavigation();
      showToast('AI-powered estimate generated successfully!', 'success');
    }, 800);

  } catch(err) {
    hideAIProgress();
    console.error('AI estimation error:', err);
    showToast('AI analysis failed: ' + err.message + '. Falling back to template estimate.', 'warning');
    generateTemplateEstimate(est, model);
    STATE.currentPage = 'output';
    STATE.outputActiveTab = 'summary';
    renderPage();
    updateNavigation();
  }
}

function generateEstimate() {
  var est = STATE.currentEstimate;
  var model = DELIVERY_MODELS[est.deliveryModel];
  if (!model) {
    showToast('Please select a delivery model first.', 'warning');
    return;
  }

  var apiKey = localStorage.getItem('sc-openai-key');
  var hasFiles = getAllUploadedFiles().length > 0;

  if (apiKey && apiKey.trim()) {
    // AI-powered estimation
    generateAIEstimate(est, model, apiKey.trim());
    showToast('AI analysis started. You can navigate to other pages while it processes.', 'info');
  } else {
    // Template-based estimation (fallback)
    generateTemplateEstimate(est, model);
    STATE.currentPage = 'output';
    STATE.outputActiveTab = 'summary';
    renderPage();
    updateNavigation();
    showToast('Estimate generated using templates. Add an OpenAI API key in Settings for AI-powered analysis.', 'success');
  }
}

function saveCurrentEstimate() {
  var est = STATE.currentEstimate;
  est.totalCost = calcEstimateTotal(est);
  est.updatedAt = new Date().toISOString();

  var existingIdx = STATE.estimates.findIndex(function(e) { return e.id === est.id; });
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
  var orig = STATE.estimates.find(function(e) { return e.id === id; });
  if (!orig) return;
  var dupe = JSON.parse(JSON.stringify(orig));
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
  var est = STATE.estimates.find(function(e) { return e.id === id; });
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
  var est = STATE.estimates.find(function(e) { return e.id === id; });
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
  var el = document.getElementById('qa-' + idx);
  if (el) el.classList.toggle('open');
}

function togglePricingCategory(header) {
  var body = header.nextElementSibling;
  if (body) body.style.display = body.style.display === 'none' ? 'block' : 'none';
}

function filterPricing(query) {
  var q = query.toLowerCase();
  document.querySelectorAll('.pricing-row').forEach(function(row) {
    var name = row.getAttribute('data-name') || '';
    row.style.display = name.includes(q) ? '' : 'none';
  });
}

function setTheme(themeId) {
  STATE.currentTheme = themeId;
  document.documentElement.setAttribute('data-theme', themeId);
  localStorage.setItem('sc-theme', themeId);
  var themeName = THEMES.find(function(t) { return t.id === themeId; });
  document.getElementById('current-theme-name').textContent = themeName ? themeName.name : themeId;
  if (STATE.currentPage === 'settings') renderPage();
}

function cycleTheme() {
  var idx = THEMES.findIndex(function(t) { return t.id === STATE.currentTheme; });
  var next = THEMES[(idx + 1) % THEMES.length];
  setTheme(next.id);
  showToast('Theme: ' + next.name, 'info');
}

function saveAPIKey(value) {
  if (value && value.trim()) {
    localStorage.setItem('sc-openai-key', value.trim());
    showToast('OpenAI API key saved.', 'success');
  } else {
    localStorage.removeItem('sc-openai-key');
    showToast('OpenAI API key removed.', 'info');
  }
}

async function testAPIKey() {
  var key = localStorage.getItem('sc-openai-key');
  if (!key) {
    showToast('No API key configured. Enter your key first.', 'warning');
    return;
  }
  try {
    showToast('Testing API connection...', 'info');
    var response = await fetch('https://api.openai.com/v1/models', {
      headers: { 'Authorization': 'Bearer ' + key },
    });
    if (response.ok) {
      showToast('API connection successful! AI-powered estimation is ready.', 'success');
    } else {
      var err = await response.text();
      showToast('API key invalid or expired. Check your key. (' + response.status + ')', 'error');
    }
  } catch(e) {
    showToast('Network error testing API: ' + e.message, 'error');
  }
}

function resetAssumptions() {
  STATE.currentEstimate.assumptions = getDefaultAssumptions();
  saveState();
  renderPage();
  showToast('Assumptions reset to defaults.', 'info');
}


// ---- SECTION 10B: CSV EXPORT FUNCTIONS ----
function estimateToCSVRows(est) {
  var rows = [];
  var model = DELIVERY_MODELS[est.deliveryModel];
  var phases = est.phases || {};
  for (var phaseKey in phases) {
    if (!phases.hasOwnProperty(phaseKey)) continue;
    var phase = phases[phaseKey];
    var phaseName = PHASE_DEFS[phaseKey] ? PHASE_DEFS[phaseKey].name : phaseKey;
    var items = phase.items || [];
    for (var ii = 0; ii < items.length; ii++) {
      var item = items[ii];
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
        qty: item.qty != null ? item.qty : '',
        unit: item.unit || '',
        rate: item.rate != null ? item.rate : '',
        total: item.total != null ? item.total : '',
      });
    }
    if (phase.subtotal != null) {
      rows.push({
        estimateName: est.name || '', client: est.client || '', location: est.location || '',
        projectType: est.projectType || '', deliveryModel: model ? model.name : est.deliveryModel || '',
        status: est.status || '', createdAt: est.createdAt || '',
        phase: phaseName, lineItem: 'SUBTOTAL', qty: '', unit: '', rate: '', total: phase.subtotal,
      });
    }
  }
  if (est.totalCost != null) {
    rows.push({
      estimateName: est.name || '', client: est.client || '', location: est.location || '',
      projectType: est.projectType || '', deliveryModel: model ? model.name : est.deliveryModel || '',
      status: est.status || '', createdAt: est.createdAt || '',
      phase: 'TOTAL', lineItem: 'GRAND TOTAL', qty: '', unit: '', rate: '', total: est.totalCost,
    });
  }
  return rows;
}

function csvEscape(val) {
  var s = String(val == null ? '' : val);
  if (s.indexOf(',') >= 0 || s.indexOf('"') >= 0 || s.indexOf('\n') >= 0) {
    return '"' + s.replace(/"/g, '""') + '"';
  }
  return s;
}

function rowsToCSV(rows) {
  if (!rows.length) return '';
  var headers = Object.keys(rows[0]);
  var lines = [headers.map(csvEscape).join(',')];
  for (var ri = 0; ri < rows.length; ri++) {
    lines.push(headers.map(function(h) { return csvEscape(rows[ri][h]); }).join(','));
  }
  return lines.join('\n');
}

function exportEstimate() {
  var est = STATE.currentEstimate;
  var rows = estimateToCSVRows(est);
  if (!rows.length) {
    showToast('No estimate data to export. Generate an estimate first.', 'warning');
    return;
  }
  var csv = rowsToCSV(rows);
  downloadFile(csv, (est.name || 'estimate').replace(/[^a-zA-Z0-9_-]/g, '_') + '.csv', 'text/csv');
  showToast('Estimate exported as CSV.', 'success');
}

function exportAllData() {
  var allRows = [];
  var allEstimates = STATE.estimates.slice();
  if (STATE.currentEstimate && STATE.currentEstimate.name) {
    var exists = allEstimates.some(function(e) { return e.id === STATE.currentEstimate.id; });
    if (!exists) allEstimates.push(STATE.currentEstimate);
  }
  for (var ei = 0; ei < allEstimates.length; ei++) {
    allRows = allRows.concat(estimateToCSVRows(allEstimates[ei]));
  }
  if (!allRows.length) {
    showToast('No estimate data to export.', 'warning');
    return;
  }
  var csv = rowsToCSV(allRows);
  downloadFile(csv, 'structurecraft-all-estimates.csv', 'text/csv');
  showToast('All estimates exported as CSV.', 'success');
}


// ---- SECTION 10C: XLSX EXPORT FUNCTIONS ----
function exportEstimateXLSX() {
  if (typeof XLSX === 'undefined') {
    showToast('SheetJS library not loaded. XLSX export unavailable.', 'warning');
    return;
  }
  var est = STATE.currentEstimate;
  if (!est.phases || Object.keys(est.phases).length === 0) {
    showToast('No estimate data to export. Generate an estimate first.', 'warning');
    return;
  }

  var wb = XLSX.utils.book_new();
  var modelKey = est.deliveryModel || 'eor-build';
  var model = DELIVERY_MODELS[modelKey];
  var phaseKeys = model ? model.phases : Object.keys(est.phases);

  // Calculate totals
  var subtotal = 0;
  phaseKeys.forEach(function(pk) {
    if (est.phases && est.phases[pk]) subtotal += calcPhaseTotal(est.phases[pk]);
  });
  var a = est.assumptions || getDefaultAssumptions();
  var margin = subtotal * (a.marginPercent / 100);
  var overhead = subtotal * (a.overheadPercent / 100);
  var contingency = subtotal * (a.contingencyPercent / 100);
  var bondIns = subtotal * (a.bondInsurancePercent / 100);
  var grandTotal = subtotal + margin + overhead + bondIns;

  // --- Summary Tab ---
  var summaryData = [
    ['StructureCraft Estimator Pro'],
    [''],
    ['Project Information'],
    ['Project Name', est.name || ''],
    ['Client', est.client || ''],
    ['Location', est.location || ''],
    ['Project Type', est.projectType || ''],
    ['Delivery Model', model ? model.name : ''],
    ['Date', new Date().toLocaleDateString()],
    [''],
    ['Key Assumptions'],
    ['Margin', a.marginPercent + '%'],
    ['Overhead', a.overheadPercent + '%'],
    ['Contingency', a.contingencyPercent + '%'],
    ['Bond & Insurance', a.bondInsurancePercent + '%'],
    ['Glulam (per BF)', a.glulamPriceBF],
    ['CLT 5-ply (per SF)', a.cltPriceSF5],
    ['Engineering (per hr)', a.engHourlyRate],
    [''],
    ['Phase Summary'],
  ];

  phaseKeys.forEach(function(pk) {
    var phaseTotal = est.phases && est.phases[pk] ? calcPhaseTotal(est.phases[pk]) : 0;
    summaryData.push([PHASE_DEFS[pk] ? PHASE_DEFS[pk].name : pk, phaseTotal]);
  });

  summaryData.push(['']);
  summaryData.push(['Direct Costs Subtotal', subtotal]);
  summaryData.push(['Overhead (' + a.overheadPercent + '%)', overhead]);
  summaryData.push(['Margin (' + a.marginPercent + '%)', margin]);
  summaryData.push(['Contingency (' + a.contingencyPercent + '%)', contingency]);
  summaryData.push(['Bond & Insurance (' + a.bondInsurancePercent + '%)', bondIns]);
  summaryData.push(['']);
  summaryData.push(['GRAND TOTAL', grandTotal]);

  var wsSummary = XLSX.utils.aoa_to_sheet(summaryData);
  wsSummary['!cols'] = [{ wch: 30 }, { wch: 18 }];
  // Bold header
  if (wsSummary['A1']) wsSummary['A1'].s = { font: { bold: true, sz: 16 } };
  XLSX.utils.book_append_sheet(wb, wsSummary, 'Summary');

  // --- Estimate Detail Tab ---
  var detailData = [
    ['StructureCraft Estimator Pro - Estimate Detail'],
    ['Project: ' + (est.name || 'Untitled')],
    [''],
    ['Phase', 'Description', 'Qty', 'Unit', 'Rate', 'Total'],
  ];

  phaseKeys.forEach(function(pk) {
    var phase = est.phases && est.phases[pk] ? est.phases[pk] : { items: [] };
    var phaseName = PHASE_DEFS[pk] ? PHASE_DEFS[pk].name : pk;
    detailData.push([phaseName, '', '', '', '', '']);
    if (phase.items) {
      phase.items.forEach(function(item) {
        detailData.push(['', item.name, item.qty, item.unit, item.rate, item.total]);
      });
    }
    detailData.push(['', phaseName + ' Subtotal', '', '', '', calcPhaseTotal(phase)]);
    detailData.push(['', '', '', '', '', '']);
  });

  detailData.push(['', '', '', '', '', '']);
  detailData.push(['', 'GRAND TOTAL', '', '', '', grandTotal]);

  var wsDetail = XLSX.utils.aoa_to_sheet(detailData);
  wsDetail['!cols'] = [{ wch: 26 }, { wch: 32 }, { wch: 12 }, { wch: 8 }, { wch: 14 }, { wch: 16 }];
  XLSX.utils.book_append_sheet(wb, wsDetail, 'Estimate Detail');

  // --- Per-Phase Tabs ---
  phaseKeys.forEach(function(pk) {
    var phase = est.phases && est.phases[pk] ? est.phases[pk] : { items: [] };
    var phaseName = PHASE_DEFS[pk] ? PHASE_DEFS[pk].name : pk;
    var tabName = phaseName.substring(0, 31); // Excel tab name limit

    var phaseData = [
      [phaseName],
      [PHASE_DEFS[pk] ? PHASE_DEFS[pk].description : ''],
      [''],
      ['Description', 'Qty', 'Unit', 'Rate', 'Total'],
    ];
    if (phase.items) {
      phase.items.forEach(function(item) {
        phaseData.push([item.name, item.qty, item.unit, item.rate, item.total]);
      });
    }
    phaseData.push(['']);
    phaseData.push(['Phase Subtotal', '', '', '', calcPhaseTotal(phase)]);

    var wsPhase = XLSX.utils.aoa_to_sheet(phaseData);
    wsPhase['!cols'] = [{ wch: 32 }, { wch: 12 }, { wch: 8 }, { wch: 14 }, { wch: 16 }];
    XLSX.utils.book_append_sheet(wb, wsPhase, tabName);
  });

  // --- AI Notes Tab ---
  if (est.aiNotes && est.aiNotes.length > 0) {
    var notesData = [
      ['AI Analysis Notes & Context'],
      [''],
    ];
    est.aiNotes.forEach(function(note, i) {
      notesData.push([(i + 1) + '.', note]);
    });
    var wsNotes = XLSX.utils.aoa_to_sheet(notesData);
    wsNotes['!cols'] = [{ wch: 6 }, { wch: 80 }];
    XLSX.utils.book_append_sheet(wb, wsNotes, 'AI Notes');
  }

  // --- Assumptions Tab ---
  var assumpData = [
    ['Pricing Assumptions'],
    [''],
    ['Category', 'Parameter', 'Value'],
    ['Markup', 'Margin %', a.marginPercent],
    ['Markup', 'Overhead %', a.overheadPercent],
    ['Markup', 'Contingency %', a.contingencyPercent],
    ['Markup', 'Bond & Insurance %', a.bondInsurancePercent],
    ['Materials', 'Glulam ($/BF)', a.glulamPriceBF],
    ['Materials', 'CLT 3-ply ($/SF)', a.cltPriceSF3],
    ['Materials', 'CLT 5-ply ($/SF)', a.cltPriceSF5],
    ['Materials', 'CLT 7-ply ($/SF)', a.cltPriceSF7],
    ['Materials', 'DLT ($/SF)', a.dltPriceSF],
    ['Materials', 'MPP ($/SF)', a.mppPriceSF],
    ['Materials', 'NLT ($/SF)', a.nltPriceSF],
    ['Materials', 'Steel Connections ($/ton)', a.steelConnectionsTon],
    ['Materials', 'Plywood ($/SF)', a.plywoodSF],
    ['Materials', 'Concrete Topping ($/SF)', a.concreteToppingSF],
    ['Shipping', 'Shipping ($/BF)', a.shippingPerBF],
    ['Shipping', 'Shipping ($/Truck)', a.shippingPerTruck],
    ['Labor', 'Engineering ($/hr)', a.engHourlyRate],
    ['Labor', 'Drafting ($/hr)', a.draftHourlyRate],
    ['Labor', 'Shop Fabrication ($/hr)', a.shopHourlyRate],
    ['Labor', 'Site Carpenter ($/hr)', a.siteCarpentrHourlyRate],
    ['Labor', 'Site Laborer ($/hr)', a.siteLaborHourlyRate],
    ['Labor', 'Site Superintendent ($/hr)', a.siteSuperHourlyRate],
    ['Labor', 'Crane Operator ($/hr)', a.craneOperatorHourlyRate],
    ['Labor', 'Crane Daily Rate ($)', a.craneDailyRate],
    ['Labor', 'Project Manager ($/hr)', a.pmHourlyRate],
    ['Other', 'Shop Hrs per Piece', a.shopManHoursPerPiece],
    ['Other', 'Escalation %/yr', a.escalationPercent],
  ];

  var wsAssump = XLSX.utils.aoa_to_sheet(assumpData);
  wsAssump['!cols'] = [{ wch: 14 }, { wch: 28 }, { wch: 14 }];
  XLSX.utils.book_append_sheet(wb, wsAssump, 'Assumptions');

  // Write file
  var filename = (est.name || 'estimate').replace(/[^a-zA-Z0-9_-]/g, '_') + '.xlsx';
  XLSX.writeFile(wb, filename);
  showToast('Estimate exported as XLSX.', 'success');
}

function exportAllDataXLSX() {
  if (typeof XLSX === 'undefined') {
    showToast('SheetJS library not loaded. XLSX export unavailable.', 'warning');
    return;
  }

  var allEstimates = STATE.estimates.slice();
  if (STATE.currentEstimate && STATE.currentEstimate.name) {
    var exists = allEstimates.some(function(e) { return e.id === STATE.currentEstimate.id; });
    if (!exists) allEstimates.push(STATE.currentEstimate);
  }
  if (!allEstimates.length) {
    showToast('No estimate data to export.', 'warning');
    return;
  }

  var wb = XLSX.utils.book_new();

  // Summary sheet
  var summData = [
    ['StructureCraft Estimator Pro - All Estimates'],
    ['Exported: ' + new Date().toLocaleDateString()],
    [''],
    ['Project Name', 'Client', 'Location', 'Type', 'Delivery Model', 'Status', 'Total Cost'],
  ];
  allEstimates.forEach(function(est) {
    var model = DELIVERY_MODELS[est.deliveryModel];
    summData.push([
      est.name || '', est.client || '', est.location || '', est.projectType || '',
      model ? model.name : '', est.status || '', est.totalCost || calcEstimateTotal(est),
    ]);
  });
  var wsSumm = XLSX.utils.aoa_to_sheet(summData);
  wsSumm['!cols'] = [{ wch: 30 }, { wch: 22 }, { wch: 18 }, { wch: 14 }, { wch: 22 }, { wch: 10 }, { wch: 16 }];
  XLSX.utils.book_append_sheet(wb, wsSumm, 'All Estimates');

  // Detail sheet with all line items
  var detData = [
    ['Project', 'Client', 'Phase', 'Description', 'Qty', 'Unit', 'Rate', 'Total'],
  ];
  allEstimates.forEach(function(est) {
    if (est.phases) {
      Object.entries(est.phases).forEach(function(entry) {
        var phaseKey = entry[0], phase = entry[1];
        var phaseName = PHASE_DEFS[phaseKey] ? PHASE_DEFS[phaseKey].name : phaseKey;
        if (phase.items) {
          phase.items.forEach(function(item) {
            detData.push([est.name, est.client, phaseName, item.name, item.qty, item.unit, item.rate, item.total]);
          });
        }
      });
    }
  });
  var wsDet = XLSX.utils.aoa_to_sheet(detData);
  wsDet['!cols'] = [{ wch: 26 }, { wch: 20 }, { wch: 22 }, { wch: 30 }, { wch: 10 }, { wch: 8 }, { wch: 12 }, { wch: 14 }];
  XLSX.utils.book_append_sheet(wb, wsDet, 'All Line Items');

  XLSX.writeFile(wb, 'structurecraft-all-estimates.xlsx');
  showToast('All estimates exported as XLSX.', 'success');
}


// ---- SECTION 10D: REMAINING UTILITY FUNCTIONS ----

function importData(event) {
  var file = event.target.files[0];
  if (!file) return;
  var reader = new FileReader();
  reader.onload = function(e) {
    try {
      var data = JSON.parse(e.target.result);
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
    STATE.estimates = SAMPLE_ESTIMATES.slice();
    STATE.currentEstimate = createNewEstimate();
    renderPage();
    showToast('All data cleared. Sample data restored.', 'warning');
  }
}

function downloadFile(content, filename, type) {
  var blob = new Blob([content], { type: type });
  var url = URL.createObjectURL(blob);
  var a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// File upload handlers
function triggerUpload(category) {
  var el = document.getElementById('file-input-' + category);
  if (el) el.click();
}

function handleFileSelect(event, category) {
  var files = Array.from(event.target.files);
  addFiles(files, category);
}

function handleDrop(event, category) {
  event.preventDefault();
  event.currentTarget.classList.remove('drag-over');
  var files = Array.from(event.dataTransfer.files);
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
  var MAX_SIZE = 40 * 1024 * 1024;
  files.forEach(function(file) {
    if (file.size > MAX_SIZE) {
      showToast(file.name + ' exceeds 40 MB limit.', 'error');
      return;
    }
    if (!STATE.currentEstimate.files[category]) {
      STATE.currentEstimate.files[category] = [];
    }
    var fileKey = category + '-' + file.name + '-' + file.size;
    FILE_STORE[fileKey] = file;
    STATE.currentEstimate.files[category].push({
      name: file.name, size: file.size, type: file.type, lastModified: file.lastModified, fileKey: fileKey,
    });
  });
  saveState();
  renderPage();
  showToast(files.length + ' file(s) added.', 'success');
}

function removeFile(category, index) {
  STATE.currentEstimate.files[category].splice(index, 1);
  saveState();
  renderPage();
}

// Connector drag-drop
function dragConnectorItem(event, phaseKey, idx) {
  event.dataTransfer.setData('text/plain', JSON.stringify({ phaseKey: phaseKey, idx: idx }));
}

function dropConnectorItem(event) {
  event.preventDefault();
  event.currentTarget.classList.remove('drag-over', 'drop-target');
  try {
    var data = JSON.parse(event.dataTransfer.getData('text/plain'));
    quickAddFromConnector(data.phaseKey, data.idx);
  } catch(e) {}
}

function quickAddFromConnector(phaseKey, idx) {
  var connected = STATE.estimates.find(function(e) { return e.id === STATE.connectedEstimateId; });
  if (!connected || !connected.phases || !connected.phases[phaseKey]) return;
  var item = connected.phases[phaseKey].items[idx];
  if (!item) return;

  if (!STATE.currentEstimate.phases) STATE.currentEstimate.phases = {};
  if (!STATE.currentEstimate.phases[phaseKey]) {
    STATE.currentEstimate.phases[phaseKey] = { items: [] };
  }
  STATE.currentEstimate.phases[phaseKey].items.push(Object.assign({}, item));
  STATE.currentEstimate.phases[phaseKey].subtotal = calcPhaseTotal(STATE.currentEstimate.phases[phaseKey]);
  saveState();
  renderPage();
  showToast('Added "' + item.name + '" to ' + (PHASE_DEFS[phaseKey] ? PHASE_DEFS[phaseKey].name : phaseKey), 'success');
}


// ---- SECTION 11: ROUTING & RENDERING ----

var PAGE_MAP = {
  'input': { title: 'Input', render: renderInputPage, breadcrumb: 'Workspace > Input' },
  'output': { title: 'Output', render: renderOutputPage, breadcrumb: 'Workspace > Output' },
  'footbridge': { title: 'Footbridges', render: renderFootbridgePage, breadcrumb: 'Workspace > Footbridges' },
  'past-estimates': { title: 'Past Estimates', render: renderPastEstimatesPage, breadcrumb: 'Reference > Past Estimates' },
  'connector': { title: 'Connector', render: renderConnectorPage, breadcrumb: 'Workspace > Connector' },
  'pricing-library': { title: 'Pricing Library', render: renderPricingLibraryPage, breadcrumb: 'Reference > Pricing Library' },
  'analytics': { title: 'Analytics', render: renderAnalyticsPage, breadcrumb: 'Reference > Analytics' },
  'qa': { title: 'Q&A', render: renderQAPage, breadcrumb: 'Help > Q&A' },
  'settings': { title: 'Settings', render: renderSettingsPage, breadcrumb: 'System > Settings' },
};

function renderPage() {
  var page = PAGE_MAP[STATE.currentPage];
  if (!page) return;
  var content = document.getElementById('page-content');
  content.innerHTML = page.render();
  updateBreadcrumb(page.breadcrumb);
}

function updateBreadcrumb(text) {
  var bc = document.getElementById('breadcrumb');
  if (!bc) return;
  var parts = text.split(' > ');
  bc.innerHTML = parts.map(function(p, i) {
    return i === parts.length - 1
      ? '<span class="bc-current">' + p + '</span>'
      : '<span>' + p + '</span><span class="bc-sep">></span>';
  }).join('');
}

function navigateTo(page) {
  STATE.currentPage = page;
  updateNavigation();
  renderPage();
  saveState();
}

function updateNavigation() {
  document.querySelectorAll('.nav-item').forEach(function(item) {
    item.classList.toggle('active', item.getAttribute('data-page') === STATE.currentPage);
  });
}

// ---- SECTION 12: USER GUIDE CONTENT ----
function renderUserGuide() {
  var guideContent = document.getElementById('guide-content');
  if (!guideContent) return;
  guideContent.innerHTML = '<h4>Welcome to StructureCraft Estimator Pro</h4>' +
    '<p>Your all-in-one Mass Timber estimating platform. Build estimates faster, compare with historical data, and produce accurate fee proposals -- all from one unified workspace.</p>' +

    '<div class="guide-steps">' +
      '<div class="guide-step"><div class="guide-step-num">1</div><h5>Define Scope</h5><p>Fill in project details, select delivery model, and describe the scope in the Input tab.</p></div>' +
      '<div class="guide-step"><div class="guide-step-num">2</div><h5>Upload Docs</h5><p>Drag and drop RFPs, drawings, and narratives (up to 40 MB each).</p></div>' +
      '<div class="guide-step"><div class="guide-step-num">3</div><h5>Generate</h5><p>Click Generate -- the AI reads your drawings, performs takeoff, and builds a detailed estimate. This may take 1-2 minutes.</p></div>' +
      '<div class="guide-step"><div class="guide-step-num">4</div><h5>Refine</h5><p>Edit line items, adjust assumptions, and compare with past estimates in the Output tab.</p></div>' +
      '<div class="guide-step"><div class="guide-step-num">5</div><h5>Compare</h5><p>Use Past Estimates and Connector to benchmark against historical data.</p></div>' +
    '</div>' +

    '<h4>Delivery Models</h4>' +
    '<ul>' +
      '<li><strong>EOR Build</strong> -- Full scope: structural engineering, design, fabrication, shipping, installation</li>' +
      '<li><strong>Delegated Design Build</strong> -- Same as EOR without consulting engineering</li>' +
      '<li><strong>DLT Supply Only</strong> -- Material supply, fabrication, and shipping of DLT</li>' +
      '<li><strong>Engineer + Supervise</strong> -- Structural engineering and site supervision only</li>' +
    '</ul>' +

    '<h4>Footbridge Estimator</h4>' +
    '<p>Navigate to the <strong>Footbridges</strong> tab to configure and estimate pedestrian bridge projects. Select from 8 structural types, adjust span and width parameters with the visual SVG diagram, and generate detailed cost breakdowns.</p>' +

    '<h4>Tips</h4>' +
    '<ul>' +
      '<li>Press <code>Cmd+K</code> to open the command palette for quick navigation</li>' +
      '<li>Click any assumption value in the Output tab to edit it inline</li>' +
      '<li>Use the Connector to drag costs from past estimates into your current workspace</li>' +
      '<li>Export estimates as XLSX for professional spreadsheet output</li>' +
      '<li>All data saves automatically to your browser local storage</li>' +
    '</ul>';
}

// ---- SECTION 13: COMMAND PALETTE ----
function initCommandPalette() {
  var commands = [
    { label: 'Go to Input', action: function() { navigateTo('input'); }, icon: ICONS.input },
    { label: 'Go to Output', action: function() { navigateTo('output'); }, icon: ICONS.output },
    { label: 'Go to Footbridges', action: function() { navigateTo('footbridge'); }, icon: ICONS.footbridge },
    { label: 'Go to Past Estimates', action: function() { navigateTo('past-estimates'); }, icon: ICONS.past },
    { label: 'Go to Connector', action: function() { navigateTo('connector'); }, icon: ICONS.connector },
    { label: 'Go to Pricing Library', action: function() { navigateTo('pricing-library'); }, icon: ICONS.pricing },
    { label: 'Go to Analytics', action: function() { navigateTo('analytics'); }, icon: ICONS.analytics },
    { label: 'Go to Q&A', action: function() { navigateTo('qa'); }, icon: ICONS.qa },
    { label: 'Go to Settings', action: function() { navigateTo('settings'); }, icon: ICONS.settings },
    { label: 'New Estimate', action: function() { clearCurrentEstimate(); navigateTo('input'); }, icon: ICONS.plus },
    { label: 'Generate Estimate', action: generateEstimate, icon: ICONS.check },
    { label: 'Save Estimate', action: saveCurrentEstimate, icon: ICONS.check },
    { label: 'Export Estimate (XLSX)', action: exportEstimateXLSX, icon: ICONS.download },
    { label: 'Export Estimate (CSV)', action: exportEstimate, icon: ICONS.download },
    { label: 'Export All Data (XLSX)', action: exportAllDataXLSX, icon: ICONS.download },
    { label: 'Export All Data (CSV)', action: exportAllData, icon: ICONS.download },
    { label: 'Toggle User Guide', action: toggleGuide, icon: ICONS.info },
    { label: 'Cycle Theme', action: cycleTheme, icon: ICONS.palette },
  ];

  THEMES.forEach(function(t) {
    commands.push({ label: 'Theme: ' + t.name, action: function() { setTheme(t.id); }, icon: ICONS.palette });
  });

  window._commands = commands;
}

function showCommandPalette() {
  var palette = document.getElementById('command-palette');
  palette.classList.remove('hidden');
  var input = document.getElementById('palette-search');
  input.value = '';
  input.focus();
  renderPaletteResults('');
}

function hideCommandPalette() {
  document.getElementById('command-palette').classList.add('hidden');
}

function renderPaletteResults(query) {
  var results = document.getElementById('palette-results');
  var q = query.toLowerCase();
  var filtered = window._commands.filter(function(c) { return c.label.toLowerCase().indexOf(q) >= 0; }).slice(0, 10);
  results.innerHTML = filtered.map(function(cmd, i) {
    return '<div class="palette-item ' + (i === 0 ? 'selected' : '') + '" data-idx="' + i + '" onclick="executePaletteCommand(' + i + ')">' +
      '<span class="palette-item-icon">' + cmd.icon + '</span>' +
      '<span class="palette-item-label">' + cmd.label + '</span>' +
    '</div>';
  }).join('');
  window._paletteFiltered = filtered;
  window._paletteIdx = 0;
}

function executePaletteCommand(idx) {
  var cmds = window._paletteFiltered || window._commands;
  if (cmds[idx]) {
    cmds[idx].action();
    hideCommandPalette();
  }
}

function toggleGuide() {
  var guide = document.getElementById('user-guide');
  guide.classList.toggle('collapsed');
  STATE.guideOpen = !guide.classList.contains('collapsed');
}

// ---- SECTION 14: KEYBOARD SHORTCUTS ----
function initKeyboardShortcuts() {
  document.addEventListener('keydown', function(e) {
    var tag = e.target.tagName;
    var isInput = tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT';

    // Command palette: Cmd+K or Ctrl+K
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      var palette = document.getElementById('command-palette');
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
      var modal = document.getElementById('modal-overlay');
      if (modal) modal.classList.add('hidden');
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

    // Quick navigation (footbridge = 5, shift existing 5-8 to 6-9)
    var navKeys = {
      '1': 'input',
      '2': 'output',
      '3': 'past-estimates',
      '4': 'connector',
      '5': 'footbridge',
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
  document.querySelectorAll('.palette-item').forEach(function(el, i) {
    el.classList.toggle('selected', i === window._paletteIdx);
  });
}

// ---- SECTION 15: INITIALIZATION ----
function initApp() {
  // Apply saved theme
  document.documentElement.setAttribute('data-theme', STATE.currentTheme);
  var themeName = THEMES.find(function(t) { return t.id === STATE.currentTheme; });
  var themeNameEl = document.getElementById('current-theme-name');
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
  var pastBadge = document.getElementById('badge-past');
  if (pastBadge) pastBadge.textContent = STATE.estimates.length;

  // AI processing badge
  var inputBadge = document.getElementById('badge-input');
  if (inputBadge) {
    if (AI_STATE.processing) {
      inputBadge.textContent = 'AI';
      inputBadge.style.background = 'var(--accent)';
      inputBadge.style.color = 'var(--bg-primary)';
    }
  }

  // Navigation clicks
  document.querySelectorAll('.nav-item').forEach(function(item) {
    item.addEventListener('click', function() {
      var page = item.getAttribute('data-page');
      if (page) navigateTo(page);
    });
  });

  // Sidebar collapse
  var sidebarCollapse = document.getElementById('sidebar-collapse');
  if (sidebarCollapse) {
    sidebarCollapse.addEventListener('click', function() {
      var sidebar = document.getElementById('sidebar');
      sidebar.classList.toggle('collapsed');
      STATE.sidebarCollapsed = sidebar.classList.contains('collapsed');
    });
  }

  // Mobile sidebar toggle
  var sidebarToggle = document.getElementById('sidebar-toggle');
  if (sidebarToggle) {
    sidebarToggle.addEventListener('click', function() {
      document.getElementById('sidebar').classList.toggle('mobile-open');
    });
  }

  // Theme cycle
  var themeCycle = document.getElementById('theme-cycle');
  if (themeCycle) themeCycle.addEventListener('click', cycleTheme);

  // User guide toggle
  var guideToggle = document.getElementById('guide-toggle');
  if (guideToggle) guideToggle.addEventListener('click', toggleGuide);

  // New estimate button
  var btnNew = document.getElementById('btn-new-estimate');
  if (btnNew) {
    btnNew.addEventListener('click', function() {
      clearCurrentEstimate();
      navigateTo('input');
    });
  }

  // Global search
  var globalSearch = document.getElementById('global-search');
  if (globalSearch) {
    globalSearch.addEventListener('focus', function() {
      showCommandPalette();
      this.blur();
    });
  }

  // Command palette
  initCommandPalette();
  var paletteSearch = document.getElementById('palette-search');
  if (paletteSearch) {
    paletteSearch.addEventListener('input', function() {
      renderPaletteResults(this.value);
    });
  }
  var backdrop = document.querySelector('.palette-backdrop');
  if (backdrop) backdrop.addEventListener('click', hideCommandPalette);

  // Keyboard shortcuts
  initKeyboardShortcuts();

  // Render user guide
  renderUserGuide();

  // Render initial page
  renderPage();
  updateNavigation();

  // Hide loading screen
  setTimeout(function() {
    var ls = document.getElementById('loading-screen');
    if (ls) ls.classList.add('hidden');
  }, 1600);
}

// Boot
document.addEventListener('DOMContentLoaded', initApp);
