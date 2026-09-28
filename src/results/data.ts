export type Partner = {
  id: string;
  name: string;
  score: number;
  stars: number;
  verdict: string;
  badge: string;
  badgeTone: "editorial" | "accent";
  ribbonAside: string;
  price: string;
  fitLabel: string;
  highlight: string;
  check: string;
  columnLabel: string;
  tablePrice: string;
  offer: string;
  offerMuted?: boolean;
  teamFit: string;
  teamMet: boolean;
};

export const hero = {
  eyebrow: "Your results are ready",
  title: "Congrats, your payroll match is ready.",
  lead: "Here’s the partner that fits your answers best, and how your top three compare.",
};

export const voice = {
  title: "What 5 out of 5 means",
  lead: "You told us → Here’s why we matched you.",
  body: "Your top match covers all 5 needs you named. A lower score means it covers fewer of your stated needs.",
};

export const matchLead =
  "You told us what matters most. Here’s how it shaped your matches.";

export const matchReasons = [
  {
    id: "taxes",
    told: "Getting payroll taxes right",
    why: "Gusto provides automatic tax filing and compliance guidance",
  },
  {
    id: "paperwork",
    told: "Saving time on paperwork",
    why: "Gusto handles payroll calculations and filings",
  },
  {
    id: "cost",
    told: "Keeping costs affordable",
    why: "First month of payroll is free*",
  },
  {
    id: "team",
    told: "10–49 employees",
    why: "Built for businesses with 10–50 employees",
  },
  {
    id: "who",
    told: "Employees + contractors",
    why: "Supports contractor payments",
  },
] as const;

export const needs = {
  covered: matchReasons.length,
  total: matchReasons.length,
};

export const partners: Partner[] = [
  {
    id: "surepayroll",
    name: "SurePayroll",
    score: 9.9,
    stars: 5,
    verdict: "Outstanding",
    badge: "Your match",
    badgeTone: "editorial",
    ribbonAside: "Best for small teams",
    price: "From $29.99/mo + $8/mo per person",
    fitLabel: "100% fit",
    highlight: "Highlighted for 1 of your 1 needs",
    check: "Ideal for small businesses with 1–9 employees",
    columnLabel: "Best fit for your answers",
    tablePrice: "From $7/person a month + $29 base",
    offer: "No offer listed",
    offerMuted: true,
    teamFit: "Ideal for small businesses with 1–9 employees",
    teamMet: true,
  },
  {
    id: "gusto",
    name: "Gusto",
    score: 9.5,
    stars: 5,
    verdict: "Very good",
    badge: "Best for HR and benefits",
    badgeTone: "accent",
    ribbonAside: "Best for HR and benefits",
    price: "From $49/mo + $6/mo per person",
    fitLabel: "Strong fit",
    highlight: "Highlighted for HR and benefits",
    check: "First month of payroll free",
    columnLabel: "Best for HR and benefits",
    tablePrice: "From $6/person a month + $49 base",
    offer: "First month of payroll free",
    teamFit: "Built for 10–50 employees, with packages up to 250",
    teamMet: false,
  },
  {
    id: "justworks",
    name: "Justworks",
    score: 9.4,
    stars: 4.7,
    verdict: "Very good",
    badge: "Best all-rounder",
    badgeTone: "accent",
    ribbonAside: "Best all-rounder",
    price: "From $59/mo + $8/mo per person",
    fitLabel: "Strong fit",
    highlight: "Highlighted as a balanced all-rounder",
    check: "3 months free",
    columnLabel: "Best all-rounder",
    tablePrice: "From $8/person a month + $50 base",
    offer: "3 months free",
    teamFit: "Built for 10–200 employees",
    teamMet: false,
  },
];

export const pricingCtas = [
  "Your most cost efficient match",
  "Best overall for price and needs",
  "Best for savings",
] as const;

export const topMatch = partners[0];

export const needsMatch = partners.find((partner) => partner.id === "gusto") ?? partners[0];

export const compareTable = {
  title: "Compare your top matches",
  lead: "We’ve compared the options based on price, what they include, and how they fit your needs.",
  note: "*Estimated from listed starting/base pricing and your employee count. Actual pricing may vary.",
  columns: [
    { id: "gusto", name: "Gusto", lead: true, kicker: "Best fit for your answers" },
    { id: "justworks", name: "Justworks", lead: false, kicker: "Best for HR and benefits" },
    { id: "paychex", name: "Paychex", lead: false, kicker: "Best for a custom quote" },
  ],
  rows: [
    { id: "fit", label: "Your fit", values: ["5/5 priorities", "4/5 priorities", "3/5 priorities"] },
    { id: "cost", label: "Estimated monthly cost", values: ["$199/mo*", "$250/mo*", "Custom quote"] },
    { id: "model", label: "Pricing model", values: ["$49 + $6/person", "$50 + $8/person", "Quote required"] },
    { id: "payroll", label: "Payroll", values: ["W-2 + 1099", "W-2 + 1099", "—"] },
    {
      id: "benefit",
      label: "Key benefit",
      values: ["Global contractor payments", "HR + compliance", "Payroll + HR add-ons"],
    },
    {
      id: "support",
      label: "Support",
      values: ["Dedicated onboarding on premium plan", "Expert support", "—"],
    },
    {
      id: "suited",
      label: "Best suited to",
      values: ["Growing SMBs", "HR + benefits needs", "~20-employee businesses"],
    },
    { id: "contract", label: "Contract", values: ["Month-to-month", "Month-to-month", "—"] },
    {
      id: "know",
      label: "Good to know",
      values: [
        "Global payments limited to 120 countries",
        "PEO model",
        "Pricing isn’t published upfront",
      ],
    },
    {
      id: "why",
      label: "Why consider it",
      values: ["Closest fit to your priorities", "More HR capability", "Quote-based alternative"],
    },
  ],
} as const;

export const faqs = [
  {
    id: "top-match",
    question: "How did you choose my top match?",
    paragraphs: [
      "We matched providers based on the answers you gave us, including **what you need your payroll service to handle, your priorities, business size, contractor needs, industry, and other details about your business.** Your top match is the provider that aligns most closely with the needs you selected.",
    ],
  },
  {
    id: "score",
    question: "What does my match score mean?",
    paragraphs: [
      "Your match score shows **how many of the needs you told us were important are covered by a provider.**",
      "For example, **5 out of 5 means your top match covers all five needs you selected.** A lower score means the provider covers fewer of your stated needs. It reflects **your fit with the provider**, not an overall rating of how good the provider is.",
    ],
  },
  {
    id: "cost",
    question: "How much will payroll cost me?",
    paragraphs: [
      "Your estimated cost depends on the provider, your number of employees, and the pricing structure of the plan.",
      "Where upfront pricing is available, we use the provider’s listed **monthly base fee and per-person price** to give you an estimate. Your final cost may vary depending on your specific setup, plan, and any additional services or fees.",
    ],
  },
  {
    id: "estimate",
    question: "How is the estimated monthly cost calculated?",
    paragraphs: [
      "Where a provider publishes a base fee and per-person price, we calculate an estimate using:",
      "**Monthly base fee + (number of employees × per-person price)**",
      "For example, if a provider charges **$49/month + $6 per person**, a business with 25 employees would have a starting estimate of **$199/month**.",
      "This is an estimate based on the listed starting pricing, **not a guaranteed quote**. Actual pricing may vary.",
    ],
  },
  {
    id: "fees",
    question: "Are there additional fees I should know about?",
    paragraphs: [
      "There may be. Some providers charge additional fees for certain services, features, HR capabilities, contractors, or other requirements.",
      "Where additional costs are identified in the available provider information, we’ll surface them in your comparison. If pricing isn’t fully available upfront, we’ll make that clear rather than implying that the estimate represents your final cost.",
      "This is particularly important because **hidden or unexpected fees were the #1 deal-breaker in the consumer research**, selected by 29 of 50 respondents.",
    ],
  },
  {
    id: "included",
    question: "What’s included in the advertised price?",
    paragraphs: [
      "What’s included depends on the provider and plan.",
      "The comparison highlights the key capabilities identified for each provider — such as **payroll processing, tax filings, employee and contractor payments, onboarding, HR support, benefits, or international capabilities** — so you can understand what you’re getting for the stated price.",
      "Some capabilities may only be available on specific plans or may cost extra.",
    ],
  },
  {
    id: "taxes",
    question: "Will the provider handle payroll taxes and filings?",
    paragraphs: [
      "Many of the providers offer payroll tax and filing capabilities, but **the exact coverage can vary by provider and plan**.",
      "Your comparison should show the relevant tax and compliance capabilities for each provider rather than assuming they are included in every plan.",
      "This is particularly important because **accuracy and compliance was the strongest single forced-choice factor in the consumer research**, with 18 of 50 respondents selecting it as their most important consideration.",
    ],
  },
  {
    id: "support",
    question: "Can I talk to a real person if something goes wrong?",
    paragraphs: [
      "Support options vary by provider and plan.",
      "Human support was a significant consideration in the research: **46 of 50 respondents rated human support as essential or very important**, while phone support was expected by 43 of 50 respondents.",
      "Where the provider information identifies dedicated onboarding, specialist support, phone support, or other human assistance, this should be surfaced in the comparison.",
    ],
  },
  {
    id: "switch",
    question: "How difficult is it to switch to a new payroll provider?",
    paragraphs: [
      "The difficulty depends on your current setup, business complexity, and the provider you choose.",
      "Some providers offer **dedicated onboarding or setup support**, while others are designed around self-service setup. For example, the provider research identifies dedicated onboarding support for certain Gusto plans and dedicated SurePayroll specialist onboarding at no additional cost.",
      "The consumer research also found that **difficult setup/onboarding was one of the most common current frustrations**, affecting 26 of 50 respondents.",
    ],
  },
  {
    id: "grows",
    question: "Can the provider support my business as it grows?",
    paragraphs: [
      "It depends on the provider and your business needs.",
      "Providers differ in the employee sizes they are designed to support, as well as their ability to handle **additional states, contractors, HR, benefits, international employees, and business expansion**.",
      "For example, the provider research identifies Gusto as supporting businesses from 10–50 employees with packages extending to 250, Justworks at 10–200 employees, and Rippling at 20–500 employees.",
      "Your comparison should therefore consider not only **what fits your business today, but what capabilities you may need as it changes.**",
    ],
  },
] as const;
