import type { Metadata } from "next";
import { projects } from "@/data/projects";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import CTA from "@/components/cta/CTA";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Portfolio",
  description: `Explore ${SITE_NAME}'s portfolio of digital products — web apps, custom software, and more. Real projects built with modern technology.`,
};

export default function PortfolioPage() {
  return (
    <>
      <div
        className="pt-32 pb-20 section"
        style={{ backgroundColor: "var(--bg)" }}
      >
        <div className="container">
          {/* Header */}
          <div className="max-w-2xl mb-16">
            <p className="section-label">Portfolio</p>
            <h1 className="section-title mb-4">Selected Work</h1>
            <p className="section-desc">
              Every project represents a partnership built on clear communication,
              technical excellence, and a shared focus on outcomes.
            </p>
          </div>

          {/* Projects grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <article
                key={project.id}
                className="card flex flex-col gap-5 group overflow-hidden"
              >
                {/* Project Image */}
                <div
                  className="w-full rounded-xl aspect-video relative overflow-hidden bg-slate-900 border border-[var(--border)]"
                  aria-label={`${project.title} project preview`}
                >
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div
                      className="w-full h-full flex items-center justify-center"
                      style={{
                        background: `linear-gradient(135deg, hsl(${(index * 80 + 200)}, 70%, 15%), hsl(${(index * 80 + 240)}, 60%, 25%))`,
                      }}
                    >
                      <span
                        className="text-5xl font-black opacity-25 select-none text-white"
                        aria-hidden="true"
                      >
                        {project.title.slice(0, 2).toUpperCase()}
                      </span>
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-3">
                  <span
                    className="text-xs font-semibold px-3 py-1 rounded-full"
                    style={{
                      background: "var(--accent-subtle)",
                      color: "var(--accent)",
                    }}
                  >
                    {project.category}
                  </span>
                  <span className="text-xs" style={{ color: "var(--fg-muted)" }}>
                    {project.year}
                  </span>
                </div>

                <div className="flex-1">
                  <h2
                    className="text-xl font-bold mb-2"
                    style={{ color: "var(--fg)" }}
                  >
                    {project.title}
                  </h2>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--fg-muted)" }}
                  >
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-0.5 rounded-full"
                      style={{
                        background: "var(--bg-secondary)",
                        color: "var(--fg-muted)",
                        border: "1px solid var(--border)",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/portfolio/${project.slug}`}
                  className="inline-flex items-center gap-1 text-sm font-semibold transition-colors"
                  style={{ color: "var(--accent)" }}
                  aria-label={`View case study for ${project.title}`}
                >
                  View Case Study
                  <ArrowRight
                    size={14}
                    aria-hidden="true"
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>

      <CTA />
    </>
  );
}
