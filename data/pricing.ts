export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  priceLabel: string;
  description: string;
  suitableFor: string[];
  features: string[];
  cta: string;
  ctaHref: string;
  highlighted: boolean;
}

export const pricingPlans: PricingPlan[] = [
  {
    id: "starter",
    name: "Starter",
    price: "Rp 2.500.000",
    priceLabel: "Starting from",
    description: "Perfect for getting your digital presence established quickly.",
    suitableFor: ["Landing page", "Personal brand", "Small business"],
    features: [
      "Responsive design",
      "Basic SEO setup",
      "Contact form",
      "Deployment & hosting guidance",
      "1 revision round",
    ],
    cta: "Get Started",
    ctaHref: "/contact",
    highlighted: false,
  },
  {
    id: "business",
    name: "Business",
    price: "Rp 7.500.000",
    priceLabel: "Starting from",
    description: "For businesses that need a robust digital foundation.",
    suitableFor: ["Company profile", "Business website", "CMS", "Simple dashboard"],
    features: [
      "Custom UI/UX design",
      "Content Management System",
      "Database integration",
      "Advanced SEO",
      "Deployment & CI/CD",
      "3 revision rounds",
    ],
    cta: "Discuss Your Project",
    ctaHref: "/contact",
    highlighted: true,
  },
  {
    id: "custom",
    name: "Custom",
    price: "Let's Talk",
    priceLabel: "Tailored to your needs",
    description: "For complex projects that require a fully custom solution.",
    suitableFor: ["SaaS", "E-commerce", "Custom software", "API integration"],
    features: [
      "Custom architecture & planning",
      "Authentication & user management",
      "Payment gateway integration",
      "API development",
      "Cloud infrastructure setup",
      "Ongoing maintenance & support",
    ],
    cta: "Contact Us",
    ctaHref: "/contact",
    highlighted: false,
  },
];
