import { capabilityItems, solutionItems } from "@/lib/site-data";

export const siteConfig = {
  name: "Aarkax",
  legalName: "Aarkax Private Limited",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://aarkax.com",
  description:
    "Aarkax builds dependable data, AI, automation, and platform reliability systems for organizations moving from architecture to production.",
  email: "info@aarkax.com",
  linkedIn: "https://www.linkedin.com/company/aarkax"
};

export const brandColors = {
  navy: "#06172A",
  teal: "#08473D",
  orange: "#E89610",
  white: "#FFFFFF",
  offWhite: "#F8F5EE"
};

export const megaMenuGroups = [
  {
    label: "What We Do",
    href: "/what-we-do",
    eyebrow: "Capabilities",
    title: "Production-ready data, AI, automation, and reliability systems.",
    description: "Explore the four capability areas Aarkax uses to move work from architecture to dependable operations.",
    items: capabilityItems
  },
  {
    label: "Solutions",
    href: "/solutions",
    eyebrow: "Solution patterns",
    title: "Repeatable outcomes for teams that depend on trusted data.",
    description: "Start with a focused business problem, then shape the data, AI, and workflow architecture around it.",
    items: solutionItems.slice(0, 4)
  }
];
