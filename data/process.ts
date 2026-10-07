export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  details: string[];
}

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We start by deeply understanding your business problem, target users, requirements, and objectives.",
    details: [
      "Business needs analysis",
      "User research & personas",
      "Technical requirements gathering",
      "Project scoping & timeline",
    ],
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "We map out the technical architecture, product strategy, and a clear project roadmap before writing a single line of code.",
    details: [
      "Technical architecture design",
      "Technology stack selection",
      "Product roadmap creation",
      "Risk assessment & planning",
    ],
  },
  {
    number: "03",
    title: "Design",
    description:
      "We create UI/UX wireframes and high-fidelity prototypes that you can review and approve before development begins.",
    details: [
      "Wireframes & user flows",
      "High-fidelity UI design",
      "Interactive prototyping",
      "Design review & iteration",
    ],
  },
  {
    number: "04",
    title: "Development",
    description:
      "We implement the full solution — frontend, backend, database, API, and integrations — with regular progress updates.",
    details: [
      "Agile development sprints",
      "Frontend & backend implementation",
      "API & third-party integrations",
      "Code reviews & testing",
    ],
  },
  {
    number: "05",
    title: "Launch & Support",
    description:
      "We handle deployment, monitoring, performance optimization, and provide ongoing support after launch.",
    details: [
      "Deployment & CI/CD setup",
      "Performance monitoring",
      "Post-launch testing",
      "Ongoing maintenance & support",
    ],
  },
];
