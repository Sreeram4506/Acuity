import {
  BriefcaseBusiness,
  BadgeIndianRupee,
  Landmark,
  ReceiptText,
  Calculator,
  ShieldCheck,
  Lightbulb,
  BadgeCheck,
} from "lucide-react";

export const services = [
  {
    id: "business-registration",
    title: "Business Registration",
    description: "Start your venture legally across India with guided setup.",
    details:
      "Get sole proprietorship, partnership, LLP, and startup registration handled with document support and status tracking.",
    features: ["PAN/TAN Application", "Partnership Deed Drafting", "MSME Registration", "Digital Signature (DSC)"],
    icon: BriefcaseBusiness,
    price: 4999,
    category: "Registration",
  },
  {
    id: "gst-registration",
    title: "GST Registration",
    description: "Fast GST application and onboarding.",
    details:
      "End-to-end GSTIN filing, document checks, ARN follow-up, and post-registration advisory.",
    features: ["GSTIN ARN Generation", "HSN/SAC Classification", "E-way Bill Setup", "GST Advisory"],
    icon: BadgeIndianRupee,
    price: 3499,
    category: "Tax",
  },
  {
    id: "company-incorporation",
    title: "Company Incorporation",
    description: "Private Limited and OPC incorporation done right.",
    details:
      "MCA approvals, DIN/DSC support, incorporation filing, and compliance checklist for launch.",
    features: ["Name Approval (RUN)", "MoA/AoA Drafting", "Commencement Certificate", "Share Certificates"],
    icon: Landmark,
    price: 12999,
    category: "Registration",
  },
  {
    id: "tax-filing",
    title: "Tax Filing Services",
    description: "Accurate ITR and business tax filing with audits in mind.",
    details:
      "ITR filing for salaried, professionals, and businesses with advanced deduction and compliance checks.",
    features: ["ITR-1 to ITR-7 Filing", "TDS Returns", "Tax Audit Support", "Advance Tax Planning"],
    icon: ReceiptText,
    price: 2999,
    category: "Tax",
  },
  {
    id: "accounting",
    title: "Accounting Services",
    description: "Monthly bookkeeping and MIS for growth-focused founders.",
    details:
      "Cloud accounting, reconciliations, GST books, payroll entries, and monthly dashboard reports.",
    features: ["Tally/Zoho/Quickbooks", "Bank Reconciliation", "P&L and Balance Sheet", "Payroll Management"],
    icon: Calculator,
    price: 7999,
    category: "Accounting",
  },
  {
    id: "compliance",
    title: "Compliance Management",
    description: "Never miss ROC, GST, or labor law deadlines again.",
    details:
      "Automated reminders, return filing calendars, and dedicated compliance manager support.",
    features: ["ROC Annual Returns", "Director KYC", "Minutes Book Maintenance", "Statutory Registers"],
    icon: ShieldCheck,
    price: 6999,
    category: "Compliance",
  },
  {
    id: "advisory",
    title: "Business Advisory",
    description: "Strategic guidance for funding, growth, and structure.",
    details:
      "Financial planning, tax optimization, entity structuring, and expansion advisory for Indian markets.",
    features: ["Fundraising Advisory", "Virtual CFO Services", "Due Diligence Support", "Exit Planning"],
    icon: Lightbulb,
    price: 14999,
    category: "Advisory",
  },
  {
    id: "trademark",
    title: "Trademark Registration",
    description: "Protect your brand identity nationwide.",
    details:
      "Trademark search, class selection, filing, objection response, and legal follow-through.",
    features: ["TM Search & Report", "Class Selection", "Response to Objections", "TM Renewal"],
    icon: BadgeCheck,
    price: 5999,
    category: "Legal",
  },
];

export const stats = [
  { label: "Clients Served", value: 12000, suffix: "+" },
  { label: "Cities Covered", value: 180, suffix: "+" },
  { label: "Returns Filed", value: 95000, suffix: "+" },
  { label: "Avg. Rating", value: 4.9, suffix: "/5" },
];

export const testimonials = [
  {
    name: "Ritika Sharma",
    company: "Founder, Jaipur Weaves",
    quote:
      "Their team converted a stressful compliance load into a smooth operating system for our business.",
  },
  {
    name: "Arjun Mehta",
    company: "Director, Nexa Logistics",
    quote:
      "Fast GST support, clear communication, and a dashboard that actually helps us make decisions.",
  },
  {
    name: "Naveen Iyer",
    company: "Co-founder, BuildGrid",
    quote:
      "We handled incorporation, accounting, and tax filing through one partner without chaos.",
  },
];

export const blogPosts = [
  {
    title: "GST Filing Checklist for FY 2025-26",
    category: "Tax",
    excerpt: "A practical checklist to avoid penalties and filing delays.",
  },
  {
    title: "Private Limited vs LLP: What Fits Your Startup?",
    category: "Registration",
    excerpt: "Compare compliance, tax impact, and investor readiness.",
  },
  {
    title: "Monthly Compliance Calendar for Indian SMEs",
    category: "Compliance",
    excerpt: "Track ROC, GST, TDS, payroll and labor law deadlines.",
  },
  {
    title: "How to Build Investor-Ready Financial Statements",
    category: "Advisory",
    excerpt: "Key reports VCs expect before due diligence meetings.",
  },
];
