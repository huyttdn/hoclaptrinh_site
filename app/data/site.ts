export const site = {
  name: "Northline",
  legalName: "Northline Studio LLC",
  tagline: "A senior design and engineering studio for ambitious teams.",
  description:
    "Northline is an independent digital studio helping ambitious teams shape, build, and launch websites and products that are clear, fast, and built to last.",
  email: "hello@northline.studio",
  phone: "+1 (415) 555-0142",
  phoneHref: "+14155550142",
  address: "1200 Market Street, Suite 500\nSan Francisco, CA 94103",
  hours: "Monday–Friday, 9am–6pm PT",
  responseTime: "We reply within one business day.",
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/", icon: "linkedin" },
    { label: "X", href: "https://x.com/", icon: "x" },
    { label: "Dribbble", href: "https://dribbble.com/", icon: "dribbble" },
    { label: "Instagram", href: "https://www.instagram.com/", icon: "instagram" },
  ],
} as const;

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
] as const;

export type ServiceIcon = "strategy" | "design" | "engineering" | "growth";

export type Service = {
  slug: string;
  number: string;
  title: string;
  tagline: string;
  summary: string;
  description: string;
  features: string[];
  deliverables: string[];
  bestFor: string;
  icon: ServiceIcon;
};

export const services: Service[] = [
  {
    slug: "brand-strategy",
    number: "01",
    title: "Brand & Strategy",
    tagline: "Find the clearest version of your story.",
    summary:
      "Positioning, messaging, and identity work that gives your team a shared direction before a single screen is designed.",
    description:
      "Good products start with a sharp point of view. We help you understand what makes your offer distinct, who it is for, and how to explain it without jargon. The result is a practical brand foundation your whole team can use.",
    features: [
      "Stakeholder interviews and market review",
      "Positioning and messaging framework",
      "Visual identity and art direction",
      "Brand guidelines your team can apply",
    ],
    deliverables: ["Brand platform", "Messaging kit", "Visual identity", "Guidelines"],
    bestFor: "Teams launching something new or repositioning an existing offer.",
    icon: "strategy",
  },
  {
    slug: "product-design",
    number: "02",
    title: "Product Design",
    tagline: "Turn complexity into a product people understand.",
    summary:
      "Research-led UX and interface design for websites, dashboards, and digital products that need to feel effortless.",
    description:
      "We work from real user needs, not assumptions. From early flows to polished interfaces, we design systems that are accessible, consistent, and ready for engineering. Every decision is documented so the work survives handoff.",
    features: [
      "Discovery workshops and user research",
      "Information architecture and user flows",
      "UI design and interactive prototypes",
      "Design systems and component libraries",
    ],
    deliverables: ["Research summary", "UX flows", "High-fidelity UI", "Design system"],
    bestFor: "Teams with a product idea, a redesign, or a growing design backlog.",
    icon: "design",
  },
  {
    slug: "web-development",
    number: "03",
    title: "Web Development",
    tagline: "Fast, accessible builds without the technical debt.",
    summary:
      "React and TypeScript engineering for marketing sites and product interfaces — performant, accessible, and easy to maintain.",
    description:
      "We build the front end we would want to inherit: typed, tested, documented, and light on dependencies. Our team handles everything from design systems and CMS integration to performance budgets and launch support.",
    features: [
      "React, TypeScript, and modern CSS",
      "CMS and marketing tool integrations",
      "Performance and accessibility audits",
      "Documentation and team handover",
    ],
    deliverables: ["Production build", "Component library", "CMS setup", "Launch support"],
    bestFor: "Teams who need a dependable build partner or a fresh start.",
    icon: "engineering",
  },
  {
    slug: "growth-optimization",
    number: "04",
    title: "Growth & Optimization",
    tagline: "Keep improving after launch.",
    summary:
      "Measurement, experimentation, and iterative improvements that help your digital experience earn its keep.",
    description:
      "Launch is a starting point. We help you define the right signals, identify friction, and run focused experiments that improve conversion and retention without adding noise. Small, evidence-led changes compound over time.",
    features: [
      "Analytics and event tracking setup",
      "Conversion and usability reviews",
      "A/B testing and experiment design",
      "Quarterly optimization roadmaps",
    ],
    deliverables: ["Measurement plan", "Audit report", "Experiment backlog", "Roadmap"],
    bestFor: "Teams with a live product who want a clearer path to growth.",
    icon: "growth",
  },
];

export const clients = [
  "Meridian",
  "Cove Financial",
  "Atlas Logistics",
  "Loomis",
  "Fieldwork",
  "Northstar Health",
];

export const stats = [
  { value: "48+", label: "Products and sites launched" },
  { value: "98%", label: "Client retention since 2019" },
  { value: "12", label: "Industries served" },
  { value: "4.9/5", label: "Average client rating" },
];

export type FeatureIcon = "users" | "clarity" | "shield" | "spark";

export const whyChooseUs: {
  title: string;
  description: string;
  icon: FeatureIcon;
}[] = [
  {
    title: "Senior people, directly involved",
    description:
      "You work with the people doing the work. No layers of account management and no handoffs to a junior team.",
    icon: "users",
  },
  {
    title: "Clear scope and honest timelines",
    description:
      "Every engagement starts with a written plan, named milestones, and a realistic view of what it will take.",
    icon: "clarity",
  },
  {
    title: "Designed and built under one roof",
    description:
      "Strategy, design, and engineering sit at the same table, so decisions stay coherent from first sketch to launch.",
    icon: "shield",
  },
  {
    title: "Built to be handed over",
    description:
      "Documentation, accessible components, and clean code mean your team is never locked in or left guessing.",
    icon: "spark",
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  initials: string;
  accent: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Northline helped us turn a vague idea into a product our customers actually understand. The process was calm, clear, and remarkably fast.",
    name: "Maya Chen",
    role: "VP of Product",
    company: "Meridian Health",
    initials: "MC",
    accent: "from-blue-500 to-cyan-400",
  },
  {
    quote:
      "Our new site is faster, clearer, and finally feels like us. Inbound leads are up 38% quarter over quarter.",
    name: "Daniel Ortiz",
    role: "Founder",
    company: "Cove Financial",
    initials: "DO",
    accent: "from-violet-500 to-fuchsia-400",
  },
  {
    quote:
      "They ask better questions than anyone we have worked with. Every decision was tied back to a real customer need.",
    name: "Priya Nair",
    role: "Chief Operating Officer",
    company: "Atlas Logistics",
    initials: "PN",
    accent: "from-emerald-500 to-teal-400",
  },
  {
    quote:
      "The handover was the best we have ever had. Our team picked up the design system in a day and shipped the next release without us.",
    name: "Elliot Brooks",
    role: "Head of Engineering",
    company: "Fieldwork",
    initials: "EB",
    accent: "from-amber-500 to-orange-400",
  },
];

export type ValueIcon = "compass" | "layers" | "heart";

export const values: { title: string; description: string; icon: ValueIcon }[] =
  [
    {
      title: "Clarity over cleverness",
      description:
        "The best work is easy to understand. We remove ambiguity before we add polish, and we explain our thinking in plain language.",
      icon: "compass",
    },
    {
      title: "Outcomes over output",
      description:
        "We measure success by what the work does for your business, not by how many screens or slide decks we produce.",
      icon: "layers",
    },
    {
      title: "Collaboration over ego",
      description:
        "The strongest ideas get better when the whole team is involved. We work with you, not around you.",
      icon: "heart",
    },
  ];

export const team = [
  {
    name: "Alex Morgan",
    role: "Founder & Creative Director",
    initials: "AM",
    accent: "from-brand-500 to-cyan-400",
    bio: "Leads strategy and design with 15 years of experience across healthcare, fintech, and climate tech.",
  },
  {
    name: "Sam Rivera",
    role: "Design Lead",
    initials: "SR",
    accent: "from-violet-500 to-fuchsia-400",
    bio: "Turns complex workflows into interfaces that feel obvious. Obsessed with systems and accessible defaults.",
  },
  {
    name: "Jordan Lee",
    role: "Engineering Lead",
    initials: "JL",
    accent: "from-emerald-500 to-teal-400",
    bio: "Builds fast, resilient front ends in React and TypeScript. Happiest when the Lighthouse score is green.",
  },
  {
    name: "Nina Patel",
    role: "Strategy Director",
    initials: "NP",
    accent: "from-amber-500 to-orange-400",
    bio: "Connects customer insight to business goals, keeping every engagement pointed at the right problem.",
  },
];

export const process = [
  {
    number: "01",
    title: "Discover",
    description:
      "We interview your team and customers, review the market, and agree on the problem worth solving.",
  },
  {
    number: "02",
    title: "Define",
    description:
      "We turn what we learned into positioning, scope, and a clear plan with milestones you can hold us to.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "We explore, prototype, and test the experience early — so the big decisions are made before build.",
  },
  {
    number: "04",
    title: "Deliver",
    description:
      "We build, test, and launch together, then hand over documentation and a roadmap for what is next.",
  },
];

export const engagements = [
  {
    title: "Product sprint",
    duration: "2–4 weeks",
    description:
      "A focused sprint to clarify direction, prototype the core experience, and de-risk the next phase.",
    items: ["Discovery workshop", "Concept direction", "Clickable prototype", "Recommendation"],
  },
  {
    title: "End-to-end project",
    duration: "6–12 weeks",
    description:
      "Strategy, design, and build as one connected engagement with a clear launch date.",
    items: ["Full discovery", "Brand and product design", "Production build", "Launch support"],
  },
  {
    title: "Ongoing partner",
    duration: "Monthly",
    description:
      "A senior design and engineering partner for teams shipping continuously.",
    items: ["Reserved capacity", "Design system support", "Iterative improvements", "Quarterly reviews"],
  },
];

export const faqs = [
  {
    question: "What does a typical engagement look like?",
    answer:
      "Most projects begin with a short discovery phase, followed by design and build in weekly milestones. You will have a clear scope, a named team, and a shared channel for questions before we start.",
  },
  {
    question: "How much does a project cost?",
    answer:
      "Projects are scoped around the outcome rather than a fixed package. After an initial conversation we provide a written proposal with a fixed fee, timeline, and deliverables — no open-ended hourly surprises.",
  },
  {
    question: "Do you work with in-house teams?",
    answer:
      "Yes. We often embed with internal product, design, or engineering teams. We adapt to your tools and rituals, and we document decisions so the work continues smoothly after we leave.",
  },
  {
    question: "Can you maintain the site after launch?",
    answer:
      "We offer ongoing partnerships for teams that want a reliable senior team on call. We can also hand over to your team with documentation, a component library, and a recorded walkthrough.",
  },
  {
    question: "Are you available remotely?",
    answer:
      "We are based in San Francisco and work with teams across North America and Europe. Most collaboration happens remotely, with regular working sessions in your time zone.",
  },
];

export const projectTypes = [
  "Brand and website",
  "Product design",
  "Web development",
  "Growth and optimization",
  "Not sure yet",
];

export const budgets = [
  "Under $25k",
  "$25k – $50k",
  "$50k – $100k",
  "$100k+",
  "Prefer not to say",
];
