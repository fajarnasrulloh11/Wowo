export interface Project {
  id: string;
  title: string;
  slug: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  challenge: string;
  solution: string;
  result: string;
  year: number;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "FoodFlow",
    slug: "foodflow",
    category: "Food Ordering Platform",
    description:
      "A modern ordering platform that helps restaurants manage orders, payments, and daily operations — all from one dashboard.",
    image: "/makanan.jfif",
    technologies: ["Next.js", "Django", "PostgreSQL", "Docker"],
    challenge:
      "The client needed to replace a fragmented manual process for managing restaurant orders, inventory, and payments across multiple branches.",
    solution:
      "We built a unified platform with real-time order tracking, multi-branch support, and integrated payment processing.",
    result: "Case study available upon request.",
    year: 2024,
    featured: true,
  },
  {
    id: "2",
    title: "BuildTrack",
    slug: "buildtrack",
    category: "Construction Management SaaS",
    description:
      "A project management platform tailored for construction companies to track tasks, timelines, budgets, and field teams.",
    image: "/contraction.png",
    technologies: ["React", "FastAPI", "PostgreSQL", "AWS"],
    challenge:
      "Construction teams were using spreadsheets and WhatsApp to coordinate projects, causing delays and budget overruns.",
    solution:
      "We designed and developed a web app with real-time updates, document management, and a mobile-friendly field interface.",
    result: "Case study available upon request.",
    year: 2024,
    featured: true,
  },
  {
    id: "3",
    title: "StorePro",
    slug: "storepro",
    category: "E-Commerce Platform",
    description:
      "A full-featured e-commerce solution with product management, order tracking, and payment gateway integration for an UMKM client.",
    image: "/ec.png",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Midtrans"],
    challenge:
      "The client needed an affordable, scalable online store to replace their manual order-taking process.",
    solution:
      "We built a clean storefront with an admin dashboard, inventory management, and integrated local payment methods.",
    result: "Case study available upon request.",
    year: 2023,
    featured: true,
  },
];
