export interface TechItem {
  name: string;
  category: "Frontend" | "Backend" | "Database" | "Infrastructure";
}

export const technologies: TechItem[] = [
  // Frontend
  { name: "Next.js", category: "Frontend" },
  { name: "React", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  // Backend
  { name: "Django", category: "Backend" },
  { name: "FastAPI", category: "Backend" },
  { name: "Node.js", category: "Backend" },
  { name: "Go", category: "Backend" },
  // Database
  { name: "PostgreSQL", category: "Database" },
  { name: "MySQL", category: "Database" },
  { name: "Redis", category: "Database" },
  // Infrastructure
  { name: "Docker", category: "Infrastructure" },
  { name: "Vercel", category: "Infrastructure" },
  { name: "AWS", category: "Infrastructure" },
  { name: "Cloudflare", category: "Infrastructure" },
];

export const techCategories = ["Frontend", "Backend", "Database", "Infrastructure"] as const;
