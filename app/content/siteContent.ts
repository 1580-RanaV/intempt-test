export type NavItem = { label: string; href: string; subItems?: NavItem[] };

export const siteContent = {
  brand: "Intempt",
  nav: {
    items: [
      { 
        label: "GrowthOS™", 
        href: "#growthos",
        subItems: [
          { label: "Sales CRM", href: "/sales-crm" },
          { label: "Journeys", href: "/journeys" },
          { label: "Blu: AI", href: "/blu-ai" },
          { label: "Experiment", href: "/experiment" },
          { label: "Analytics", href: "/analytics" },
          { label: "Agents", href: "/agents" },
          { label: "Personalisation", href: "/personalization" },
          { label: "Recommendations", href: "/recommendations" },
          { label: "User Privacy", href: "/privacy" },
        ]
      },
      { 
        label: "Solutions", 
        href: "#solutions",
        subItems: [
          { label: "Sales Teams", href: "/sales-teams" },
          { label: "Agentic CRM", href: "/agentic-crm" },
          { label: "LTV eCommerce", href: "/ltv-ecommerce" },
          { label: "AOV eCommerce", href: "/aov-ecommerce" },
          { label: "Analytics PLG SaaS", href: "/analytics-plg-saas" },
          { label: "Analytics eCommerce", href: "/analytics-ecommerce" },
          { label: "CRO eCommerce", href: "/cro-ecommerce" },
        ]
      },
      { 
        label: "Resources", 
        href: "#resources",
        subItems: [
          { label: "Help and Support", href: "https://help.intempt.com" },
          { label: "Growth Plays", href: "/growthplays" },
          { label: "Academy", href: "/academy" },
          { label: "Blogs", href: "/blog" },
        ]
      },
      { 
        label: "Partners", 
        href: "#partners",
        subItems: [
          { label: "Affiliates", href: "/affiliates" },
          { label: "Agencies", href: "/agencies" },
        ]
      },
      { 
        label: "Docs", 
        href: "#docs",
        subItems: [
          { label: "Help and support docs", href: "https://help.intempt.com" },
          { label: "Developer docs", href: "https://docs.intempt.com" },
        ]
      },
        { label: "Pricing", href: "/pricing" },
    ] satisfies NavItem[],
    actions: [
      { label: "Product Tour", href: "/product-tour" },
      { label: "Log in", href: "https://app.intempt.com/" },
      { label: "Book a demo", href: "https://calendly.com/sidchaudhary/meet-sid?month=2025-12" },
      { label: "Get started", href: "https://app.intempt.com/" },
    ] satisfies NavItem[],
  },
  hero: {
    headline: "Build a growth engine that drives revenue.",
    subhead:
      "Intempt is an all‑in‑one GrowthOS to acquire, convert, retain, and expand customers — powered by data, AI, and agent automation.",
    primaryCta: { label: "Start Free Trial", href: "https://app.intempt.com/" },
    secondaryCta: { label: "Book a 15-min demo", href: "https://calendly.com/sidchaudhary/meet-sid?month=2025-12" },
    mediaLabel: "Product explainer video: Intempt GrowthOS",
  },
  blu: {
    ask: {
      title: "Ask Blu.",
      subtitle: "From leads to lifecycle: Blu drives growth, not just outreach.",
      prompts: [
        "How are my campaigns performing?",
        "Who are my best customers?",
        "What's the best way to segment users?",
        "How do I track conversion rates?",
        "Which accounts are at risk of churning?",
        "What's my customer lifetime value?",
        "What are the top revenue-driving channels?",
        "Which features drive the most engagement?",
        "How can I reduce customer acquisition costs?",
        "What's the average time to convert?",
        "Which user segments have highest retention?",
        "What's causing cart abandonment?",
        "How do product recommendations impact sales?",
        "What's the ROI of my email campaigns?",
        "Which leads are most likely to convert?",
        "How does seasonality affect our metrics?",
      ],
    },
    do: {
      title: "Do.",
      subtitle: "Blu elevates your GTM process.",
      workspace: {
        title: "Set up your workspace",
        subtitle: "Customize as you go.",
      },
      modules: [
        "Agentic CRM",
        "Journeys",
        "Analytics",
        "Personalizations",
        "Recommendations",
        "Experiments",
      ],
      primaryCta: { label: "Get started", href: "https://app.intempt.com/" },
    },
    everywhere: {
      title: "From idea to execution, instantly.",
      subtitle:
        "Blu turns plain-language prompts into working campaigns, segments, and events — no rules, no syntax, no waiting on ops.",
      actions: [
        "Set up a new journey",
        "Generate A/B test for homepage",
        "Build a welcome email sequence",
        "Find at-risk accounts",
        "Create a segment of VIP users",
      ],
    },
  },
  grow: {
    title: "Grow.",
    subtitle:
      "Orchestrate acquisition, qualification, activation, retention, and expansion — with always-on feedback loops.",
    metrics: [
      "Average Order Value",
      "Customer Lifetime Value",
      "Retention %",
      "Conversion %",
      "Growth %",
    ],
  },
  proof: {
    title: "GrowthOS automates and orchestrates GTM workflows for modern teams.",
    impact: [
      { value: "35M", label: "user lifecycles optimized" },
      { value: "5M", label: "accounts optimized" },
      { value: "350M", label: "events tracked" },
      { value: "20+", label: "integrations configured" },
    ],
    teams: ["Sales Reps", "Product Analysts", "Merchandisers"],
  },
  integrations: {
    title: "Connect trusted sources to GrowthOS",
    items: [
      "Twilio",
      "Shopify",
      "iOS",
      "Node.js",
      "SendGrid",
      "HubSpot",
      "Stripe",
      "Slack",
    ],
  },
  why: {
    title: "Growth is BROKEN.",
    subtitle:
      "Disconnected and fragmented tools block your growth across teams. Intempt replaces the stitched GTM stack with a single GrowthOS built on data and powered by AI agents.",
    stacks: [
      { category: "Marketing", tools: ["Braze", "Klaviyo", "Customer.io"] },
      { category: "Product", tools: ["Mixpanel", "Amplitude", "VWO"] },
      { category: "Sales", tools: ["Salesloft", "Outreach", "Reply"] },
    ],
    fix: {
      title: "Fix it with GrowthOS.",
      subtitle:
        "Built on data → powered by AI & agent automation → used by modern teams.",
    },
  },
  roles: {
    title: "Built for every GTM role.",
    items: [
      {
        role: "Lifecycle Marketers",
        value: "Increase engagement",
        bullets: ["Email", "SMS", "Push"],
      },
      {
        role: "Experience Marketers",
        value: "Optimize conversions",
        bullets: ["A/B testing", "Visual editor", "AI targeting"],
      },
      {
        role: "Sales Reps",
        value: "Prospect & close faster",
        bullets: ["Accounts", "Tasks", "Deals"],
      },
      {
        role: "Analysts",
        value: "Understand performance",
        bullets: ["Insights", "Funnel", "Retention"],
      },
      {
        role: "Merchandisers",
        value: "Personalize catalog",
        bullets: ["Affinity", "Popularity", "Similarity"],
      },
    ],
  },
  platform: {
    title: "All-in-one GrowthOS to 10X your GTM",
    subtitle:
      "Replace fragmented tools with one unified platform — plus Blu, your AI co‑marketer.",
    highlights: [
      "Unified customer profiles",
      "Sales CRM",
      "Personalization",
      "Journeys",
      "Agents",
    ],
    sections: [
      {
        title: "Unified customer view",
        subtitle:
          "Create rich, real-time profiles of every user and account — and activate them across all channels.",
        chips: [
          "Next best offer",
          "Churn likelihood",
          "Likelihood to buy",
          "Segments: At-risk, Price-sensitive",
        ],
      },
      {
        title: "Measure what matters, instantly",
        subtitle:
          "Track how users engage, convert, and retain — and feed insights back into your campaigns automatically.",
        chips: ["Insights", "Funnels", "Retention", "Attribution-ready"],
      },
    ],
  },
  finalCtas: {
    items: [
      {
        title: "Growth Plays",
        description:
          "Browse ready-to-use plays tailored to every step of the customer journey.",
        cta: { label: "View Growth Plays", href: "/growthplays" },
      },
      {
        title: "Help & Support",
        description:
          "Guides and documentation packed with practical tips to put growth into action.",
        cta: { label: "Go to Docs", href: "https://help.intempt.com" },
      },
    ],
  },
  footer: {
    contact: {
      title: "Contact Us",
      locations: [
        {
          region: "United States",
          lines: [
            "268 Bush St, #2824",
            "San Francisco, CA 94104",
            "1101 W 34th St, #595",
            "Austin, TX 78705",
            "United States",
          ],
        },
        {
          region: "Europe",
          lines: [
            "Odminiu 11-4",
            "Vilnius, LT-01122",
            "Lithuania",
            "European Union",
          ],
        },
      ],
    },
    columns: [
      {
        title: "GrowthOS™",
        links: [
          "Sales CRM",
          "Experiment",
          "Personalization",
          "Recommendations",
          "Journeys",
          "Analytics",
          "Agents",
          "Blu: AI Co-Marketer",
          "Integrations",
          "Privacy",
          "Pricing",
        ],
      },
      {
        title: "Solutions",
        links: [
          "Sales Teams",
          "Agentic CRM",
          "LTV eCommerce",
          "AOV eCommerce",
          "Analytics PLG SaaS",
          "Analytics eCommerce",
          "CRO eCommerce",
        ],
      },
      {
        title: "Learn",
        links: [
          "Growth Plays",
          "Blog",
          "Developer docs",
          "Help & Support",
        ],
      },
      { title: "Company", links: ["About us", "Employee Handbook", "Jobs"] },
      { title: "Partners", links: ["Affiliates", "Agencies"] },
      {
        title: "Socials",
        links: [
          "YouTube",
          "Twitter(X)",
          "LinkedIn",
          "Slack",
          "Instagram",
          "Reddit",
        ],
      },
    ],
  },
} as const;
