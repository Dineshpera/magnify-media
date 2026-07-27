import { BarChart3, Bot, BrainCircuit, Code2, Palette, RadioTower } from 'lucide-react';

export const services = [
  ['attention-engineering', 'Attention Engineering', 'Signal-led creative systems that earn attention before media spend has to force it.', RadioTower],
  ['ai-content-intelligence', 'AI Content Intelligence', 'Research, briefs, variants, and optimization loops that scale content without diluting taste.', BrainCircuit],
  ['brand-experience-design', 'Brand Experience Design', 'Identity, messaging, interaction, and launch worlds with enterprise-grade polish.', Palette],
  ['revenue-automation', 'Revenue Automation', 'Lifecycle journeys, CRM architecture, and routing logic that turn demand into pipeline.', Bot],
  ['growth-analytics', 'Growth Analytics', 'Attribution, experimentation, and executive reporting built for sharper decisions.', BarChart3],
  ['website-development', 'Website Development', 'Next.js experiences engineered for speed, accessibility, SEO, and sales conversion.', Code2],
] as const;

export const industries = ['SaaS', 'Healthcare', 'Real Estate', 'Education', 'Hospitality', 'Finance', 'E-commerce', 'Creators'];

export const work = [
  {
    slug: 'nova-finance',
    title: 'Nova Finance',
    cat: 'Brand + Web',
    metric: '+214% qualified leads',
    problem: 'A premium fintech offer looked interchangeable in a crowded trust category.',
    strategy: 'Reframe the brand around confident financial clarity and executive proof.',
    execution: 'Built a cinematic identity, conversion site, and analytics-backed launch system.',
  },
  {
    slug: 'aura-clinic',
    title: 'Aura Clinic',
    cat: 'SEO + Content',
    metric: '4.8× organic growth',
    problem: 'Clinical expertise was buried behind thin local pages and inconsistent messaging.',
    strategy: 'Create a search-led education platform that made patient trust measurable.',
    execution: 'Shipped technical SEO, expert content clusters, and appointment-focused journeys.',
  },
  {
    slug: 'orbit-saas',
    title: 'Orbit SaaS',
    cat: 'Performance',
    metric: '−38% CAC',
    problem: 'Paid acquisition scaled spend faster than learning velocity.',
    strategy: 'Connect creative testing, landing-page relevance, and pipeline quality signals.',
    execution: 'Launched a modular campaign system with weekly experiments and revenue dashboards.',
  },
  {
    slug: 'lumen-studios',
    title: 'Lumen Studios',
    cat: 'Video',
    metric: '12M campaign views',
    problem: 'A creator-led product needed cultural reach without sacrificing premium perception.',
    strategy: 'Design a story arc built for short-form discovery and long-form authority.',
    execution: 'Produced hero films, social cutdowns, creator kits, and distribution playbooks.',
  },
];

export const posts = [
  { slug: 'ai-search-readiness', title: 'How brands should prepare for AI search', cat: 'SEO', read: '7 min' },
  { slug: 'premium-web-performance', title: 'Performance is a brand signal', cat: 'Engineering', read: '5 min' },
  { slug: 'full-funnel-creative', title: 'Creative systems for full-funnel growth', cat: 'Growth', read: '6 min' },
];

export const faqs = ['How fast can we launch?', 'Do you work with existing teams?', 'Can you own strategy and execution?', 'How do you measure ROI?'];
