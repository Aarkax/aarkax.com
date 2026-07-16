import {
  Activity,
  BarChart3,
  Bot,
  BrainCircuit,
  BriefcaseBusiness,
  CloudCog,
  DatabaseZap,
  FileSearch,
  Gauge,
  GitBranch,
  Layers3,
  LineChart,
  LockKeyhole,
  Network,
  Radar,
  Scale,
  SearchCheck,
  ShieldCheck,
  Sparkles,
  Workflow,
  type LucideIcon
} from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
};

export type Capability = {
  title: string;
  slug: string;
  description: string;
  outcome: string;
  href: string;
  icon: LucideIcon;
  points: string[];
  outputs: string[];
};

export type Solution = {
  title: string;
  slug: string;
  challenge: string;
  system: string;
  outcome: string;
  href: string;
  icon: LucideIcon;
};

export type EvidenceItem = {
  title: string;
  type: string;
  challenge: string;
  approach: string;
  architecture: string;
  outcome: string;
  href: string;
};

export type Insight = {
  title: string;
  pillar: string;
  excerpt: string;
  href: string;
  readTime: string;
};

export const navItems: NavItem[] = [
  { label: "What We Do", href: "/what-we-do" },
  { label: "Solutions", href: "/solutions" },
  { label: "Work", href: "/work" },
  { label: "Insights", href: "/insights" },
  { label: "Company", href: "/company" },
  { label: "Contact", href: "/contact" }
];

export const primaryCta = {
  label: "Discuss your challenge",
  href: "/contact"
};

export const secondaryCta = {
  label: "View technical work",
  href: "/work"
};

export const problemFrames = [
  {
    title: "Fragmented data",
    before: "Source systems disagree, reports require manual reconciliation, and teams lose trust.",
    after: "Data contracts, observable pipelines, and governed models create a reliable operating layer."
  },
  {
    title: "Stalled AI pilots",
    before: "AI demos work in isolation but lack controls, evaluation, permissions, and production workflows.",
    after: "AI systems ship with retrieval, guardrails, monitoring, lifecycle management, and clear ownership."
  },
  {
    title: "Manual operations",
    before: "Teams repeat document review, ticket triage, spreadsheet updates, approvals, and handoffs.",
    after: "Workflow automation connects systems, keeps humans in control, and escalates exceptions."
  },
  {
    title: "Unreliable platforms",
    before: "Jobs fail silently, costs rise, dashboards drift, and incident response stays reactive.",
    after: "Reliability engineering improves observability, performance, cost visibility, and runbooks."
  }
];

export const capabilityItems: Capability[] = [
  {
    title: "Data Engineering",
    slug: "data-engineering",
    description: "Modern data platforms, pipelines, lakehouse patterns, semantic layers, quality, and governance.",
    outcome: "From fragmented pipelines to a dependable data platform.",
    href: "/what-we-do#data-engineering",
    icon: DatabaseZap,
    points: ["Batch and streaming ingestion", "Data modelling and semantic layers", "Lineage, quality, and observability"],
    outputs: ["Target architecture", "Production pipelines", "Data quality controls", "Runbooks and ownership model"]
  },
  {
    title: "AI Systems",
    slug: "ai-systems",
    description: "Machine learning, generative AI, retrieval, agentic workflows, evaluation, and controlled deployment.",
    outcome: "Move AI from demonstration to controlled production.",
    href: "/what-we-do#ai-systems",
    icon: BrainCircuit,
    points: ["RAG and enterprise knowledge systems", "Model and prompt evaluation", "MLOps, LLMOps, guardrails"],
    outputs: ["Use-case design", "Evaluation plan", "Secure retrieval layer", "Monitoring and feedback loops"]
  },
  {
    title: "Enterprise Automation",
    slug: "enterprise-automation",
    description: "Traceable automation for documents, tickets, operations, approvals, and human-in-the-loop decisions.",
    outcome: "Automate complete workflows, not isolated tasks.",
    href: "/what-we-do#enterprise-automation",
    icon: Workflow,
    points: ["Workflow discovery", "Document and task automation", "API and enterprise integration"],
    outputs: ["Process map", "Automation backlog", "Integrated workflows", "Exception handling model"]
  },
  {
    title: "Platform Reliability",
    slug: "platform-reliability",
    description: "Observability, incident prevention, performance, data and AI reliability, runbooks, and cost controls.",
    outcome: "Make critical platforms faster, more reliable, and easier to operate.",
    href: "/what-we-do#platform-reliability",
    icon: Activity,
    points: ["Operational health assessment", "Pipeline and job reliability", "Performance and cloud-cost analysis"],
    outputs: ["Reliability review", "Alert design", "Optimization backlog", "SLOs and operating routines"]
  }
];

export const solutionItems: Solution[] = [
  {
    title: "Modern Data Platform",
    slug: "modern-data-platform",
    challenge: "Data is scattered, slow to change, costly to operate, or hard to govern.",
    system: "Target architecture, prioritized migration path, production pipelines, and data controls.",
    outcome: "Reliable data foundations for analytics, automation, and AI.",
    href: "/solutions#modern-data-platform",
    icon: CloudCog
  },
  {
    title: "Enterprise Knowledge Assistant",
    slug: "enterprise-knowledge-assistant",
    challenge: "Employees cannot find trusted information across internal tools, policies, documents, and systems.",
    system: "Permission-aware retrieval, citation-first answers, evaluation, access control, and usage monitoring.",
    outcome: "Faster internal decisions without exposing confidential knowledge.",
    href: "/solutions#enterprise-knowledge-assistant",
    icon: Bot
  },
  {
    title: "Data Quality & Observability",
    slug: "data-quality-observability",
    challenge: "Bad data and pipeline failures are detected late, often after dashboards or workflows are wrong.",
    system: "Rules, anomaly detection, freshness checks, lineage, ownership, alerts, and reliability dashboards.",
    outcome: "Higher trust in the data products teams use to make decisions.",
    href: "/solutions#data-quality-observability",
    icon: SearchCheck
  },
  {
    title: "Intelligent Document Processing",
    slug: "intelligent-document-processing",
    challenge: "Teams manually classify, extract, validate, and route invoices, contracts, forms, or records.",
    system: "Document ingestion, extraction, validation, human review, workflow integration, and audit trail.",
    outcome: "Lower manual handling while keeping approvals and exceptions visible.",
    href: "/solutions#intelligent-document-processing",
    icon: FileSearch
  },
  {
    title: "AI Operations Assistant",
    slug: "ai-operations-assistant",
    challenge: "Operations teams spend too much time triaging incidents, tickets, and recurring questions.",
    system: "Evidence collection, summarization, recommendations, controlled actions, and workflow escalation.",
    outcome: "Faster triage with better context and accountable decision paths.",
    href: "/solutions#ai-operations-assistant",
    icon: Radar
  },
  {
    title: "Cloud Cost Intelligence",
    slug: "cloud-cost-intelligence",
    challenge: "Cloud and data platform spend rises without clear attribution or optimization ownership.",
    system: "Cost model, anomaly detection, workload attribution, optimization backlog, and reporting.",
    outcome: "Better cost decisions without compromising platform reliability.",
    href: "/solutions#cloud-cost-intelligence",
    icon: LineChart
  }
];

export const processSteps = [
  {
    title: "Discover",
    description: "Map goals, source systems, workflows, constraints, risk, ownership, and AI readiness."
  },
  {
    title: "Architect",
    description: "Define target data, AI, automation, security, governance, and operating architecture."
  },
  {
    title: "Build",
    description: "Develop modular pipelines, APIs, models, dashboards, controls, and workflow automation."
  },
  {
    title: "Integrate",
    description: "Connect enterprise systems, permissions, human review, deployment paths, and adoption routines."
  },
  {
    title: "Validate",
    description: "Test quality, evaluation, performance, observability, failure modes, and business acceptance."
  },
  {
    title: "Scale",
    description: "Improve reliability, cost, reuse, documentation, monitoring, and long-term operating maturity."
  }
];

export const differentiators = [
  {
    title: "Engineering-first execution",
    description: "Architecture and implementation are shown through diagrams, artefacts, trade-offs, and working systems."
  },
  {
    title: "Production readiness",
    description: "AI and data work includes evaluation, monitoring, security, observability, and operating ownership."
  },
  {
    title: "Vendor-neutral decisions",
    description: "Technology choices follow business constraints, existing systems, cost, skill base, and risk tolerance."
  },
  {
    title: "Modular delivery",
    description: "Start with a bounded assessment or pilot, prove value, then scale the system responsibly."
  }
];

export const evidenceItems: EvidenceItem[] = [
  {
    title: "Data Pipeline Incident Investigation Assistant",
    type: "Aarkax reference build",
    challenge: "Data teams need faster context when pipeline freshness, schema, or quality incidents occur.",
    approach: "A reference workflow collects run history, lineage, validation failures, logs, and ownership context.",
    architecture: "Sources → orchestration metadata → quality checks → retrieval layer → triage interface.",
    outcome: "Demonstrates how AI can support investigation without replacing human ownership or incident controls.",
    href: "/work#pipeline-incident-assistant"
  },
  {
    title: "Data Quality and Freshness Control Center",
    type: "Aarkax reference build",
    challenge: "Business users often discover failed or stale data only after a decision has already been made.",
    approach: "A governed control center makes freshness, schema drift, anomaly checks, and ownership visible.",
    architecture: "Warehouse tables → validation rules → alerting → reliability dashboard → action log.",
    outcome: "Shows a practical reliability layer for analytics, automation, and AI workflows.",
    href: "/work#quality-control-center"
  },
  {
    title: "Permission-Aware Enterprise Knowledge Assistant",
    type: "Aarkax reference build",
    challenge: "Internal knowledge is distributed across documents and systems with different access boundaries.",
    approach: "A retrieval assistant answers with citations, permission checks, feedback capture, and evaluation sets.",
    architecture: "Documents → indexing → access policy → retrieval → answer evaluation → monitoring.",
    outcome: "Demonstrates how enterprise AI can be useful without ignoring governance or auditability.",
    href: "/work#knowledge-assistant"
  }
];

export const architectureLayers = [
  {
    title: "Data sources",
    description: "Applications, databases, files, documents, events, third-party systems, and operational logs."
  },
  {
    title: "Ingestion",
    description: "Batch, streaming, APIs, document intake, orchestration, contracts, and change capture."
  },
  {
    title: "Storage & processing",
    description: "Lakehouse, warehouse, semantic models, transformations, feature stores, and workload tuning."
  },
  {
    title: "Intelligence layer",
    description: "ML models, retrieval systems, agents, rules, evaluation sets, and decision services."
  },
  {
    title: "Applications & workflows",
    description: "Dashboards, assistants, automations, approvals, integrations, and human review surfaces."
  },
  {
    title: "Governance & monitoring",
    description: "Access control, lineage, observability, alerts, cost visibility, audit trails, and runbooks."
  }
];

export const technicalCapabilities = [
  { title: "Architecture decisions", icon: Layers3 },
  { title: "Data contracts", icon: GitBranch },
  { title: "API-ready systems", icon: Network },
  { title: "Reliability controls", icon: ShieldCheck },
  { title: "Governance", icon: LockKeyhole },
  { title: "Outcome dashboards", icon: BarChart3 }
];

export const insights: Insight[] = [
  {
    title: "How enterprises become AI-ready without skipping the data work",
    pillar: "Production AI",
    excerpt: "A practical view of the architecture patterns that help teams move from scattered data to reliable AI workflows.",
    href: "/insights#ai-ready",
    readTime: "8 min read"
  },
  {
    title: "Data quality is an operating model, not a dashboard",
    pillar: "Reliable Data Systems",
    excerpt: "Why rules, lineage, ownership, and alert design matter before leaders can trust automated decisions.",
    href: "/insights#data-quality",
    readTime: "7 min read"
  },
  {
    title: "Automate the workflow, not just one task",
    pillar: "Enterprise Automation",
    excerpt: "How human review, exception paths, and system integration turn automation into operational leverage.",
    href: "/insights#automation",
    readTime: "6 min read"
  }
];

export const contactInterestOptions = [
  "Data engineering",
  "AI systems",
  "Enterprise automation",
  "Platform reliability",
  "Architecture review",
  "Partnership or hiring"
];

export const timelineOptions = ["Not defined", "0-3 months", "3-6 months", "6+ months"];

export const budgetOptions = ["Not defined", "Assessment only", "Pilot project", "Production build", "Ongoing improvement"];

export const footerLinks = {
  "What We Do": [
    { label: "Data Engineering", href: "/what-we-do#data-engineering" },
    { label: "AI Systems", href: "/what-we-do#ai-systems" },
    { label: "Enterprise Automation", href: "/what-we-do#enterprise-automation" },
    { label: "Platform Reliability", href: "/what-we-do#platform-reliability" }
  ],
  Solutions: solutionItems.slice(0, 4).map((item) => ({ label: item.title, href: item.href })),
  Company: [
    { label: "About Aarkax", href: "/company" },
    { label: "Work", href: "/work" },
    { label: "Insights", href: "/insights" },
    { label: "Contact", href: "/contact" }
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
    { label: "Cookie Policy", href: "/cookies" },
    { label: "Accessibility", href: "/accessibility" }
  ]
};

export const sitemapLinks = [
  { label: "Home", href: "/" },
  { label: "What We Do", href: "/what-we-do" },
  { label: "Solutions", href: "/solutions" },
  { label: "Work", href: "/work" },
  { label: "Insights", href: "/insights" },
  { label: "Company", href: "/company" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms and Conditions", href: "/terms" },
  { label: "Cookie Policy", href: "/cookies" },
  { label: "Accessibility", href: "/accessibility" },
  { label: "HTML Sitemap", href: "/sitemap" }
];

export const companyPrinciples = [
  {
    title: "Understand the system before prescribing technology",
    description: "Aarkax starts with workflows, data realities, constraints, people, risk, and operating context."
  },
  {
    title: "Make architecture visible",
    description: "Buyers and builders should be able to see the decisions, trade-offs, dependencies, and outputs."
  },
  {
    title: "Treat production as the standard",
    description: "Reliability, security, observability, documentation, and ownership are part of the work."
  },
  {
    title: "Prefer useful systems over inflated claims",
    description: "The site avoids unsupported percentages, client logos, awards, and AI promises that cannot be verified."
  }
];

export const trustSignals = [
  "Vendor-neutral architecture",
  "Data + AI + operations",
  "Evaluation and observability",
  "Modular delivery",
  "Transparent artefacts"
];

export const homepageFrames = [
  "Opening signal",
  "Complexity to clarity",
  "Core capabilities",
  "Parallel workflow",
  "Solutions",
  "Selected work",
  "Architecture",
  "Research direction",
  "Insights",
  "Conversion"
];

export const iconMap = {
  scale: Scale,
  sparkles: Sparkles,
  briefcase: BriefcaseBusiness,
  gauge: Gauge
};
