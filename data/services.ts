export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  href: string;
}

export const services: Service[] = [
  {
    id: "web-development",
    title: "Web Development",
    description:
      "Modern websites and web applications built for performance and scalability.",
    icon: "Globe",
    features: [
      "Next.js & React",
      "TypeScript",
      "REST & GraphQL APIs",
      "Performance optimized",
    ],
    href: "/services/web-development",
  },
  {
    id: "custom-software",
    title: "Custom Software",
    description:
      "Business-specific software designed around your workflow and operations.",
    icon: "Code2",
    features: [
      "Requirements analysis",
      "Custom architecture",
      "Scalable systems",
      "Full-stack development",
    ],
    href: "/services/custom-software",
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    description:
      "Clean, intuitive, and conversion-focused digital experiences that users love.",
    icon: "Palette",
    features: [
      "User research",
      "Wireframing & prototyping",
      "Design systems",
      "Usability testing",
    ],
    href: "/services/ui-ux-design",
  },
  {
    id: "mobile-development",
    title: "Mobile Development",
    description:
      "Cross-platform mobile applications for iOS and Android built with modern tooling.",
    icon: "Smartphone",
    features: [
      "React Native",
      "Cross-platform",
      "Native performance",
      "App Store deployment",
    ],
    href: "/services/mobile-development",
  },
  {
    id: "api-integration",
    title: "API & Integration",
    description:
      "Connect your systems, payment gateways, third-party services, and internal tools.",
    icon: "Plug",
    features: [
      "REST & GraphQL APIs",
      "Payment gateways",
      "Third-party services",
      "Webhooks & automation",
    ],
    href: "/services/api-integration",
  },
  {
    id: "cloud-devops",
    title: "Cloud & DevOps",
    description:
      "Deployment, infrastructure, monitoring, security, and scalability at every stage.",
    icon: "Cloud",
    features: [
      "Docker & containers",
      "CI/CD pipelines",
      "AWS / Vercel / Cloudflare",
      "Monitoring & alerting",
    ],
    href: "/services/cloud-devops",
  },
];
