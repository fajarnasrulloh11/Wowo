import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";

export default function Portfolio() {
  const featured = projects.filter((p) => p.featured);

  return (
    <section
      id="portfolio"
      className="section"
      aria-labelledby="portfolio-heading"
      style={{ backgroundColor: "var(--bg-secondary)" }}
    >
      <div className="container">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <p className="section-label">Portfolio</p>
            <h2 id="portfolio-heading" className="section-title mb-4">
              Selected Work
            </h2>
            <p className="section-desc">
              A snapshot of projects we&apos;ve built for clients across industries.
              Each project is a collaboration built on clear communication and
              attention to detail.
            </p>
          </div>
          <Link
            href="/portfolio"
            className="btn btn-secondary shrink-0"
          >
            View All Projects
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((project, index) => (
            <article
              key={project.id}
              className="card flex flex-col gap-5 group overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
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
                      className="text-4xl font-black opacity-30 select-none text-white"
                      aria-hidden="true"
                    >
                      {project.title.slice(0, 2).toUpperCase()}
                    </span>
                  </div>
                )}
              </div>

              {/* Category badge */}
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

              {/* Content */}
              <div className="flex-1">
                <h3
                  className="text-xl font-bold mb-2"
                  style={{ color: "var(--fg)" }}
                >
                  {project.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--fg-muted)" }}>
                  {project.description}
                </p>
              </div>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2" aria-label="Technologies used">
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

              {/* Result notice */}
              <div
                className="text-xs italic py-2 px-3 rounded-lg"
                style={{
                  background: "var(--accent-subtle)",
                  color: "var(--accent)",
                  border: "1px solid color-mix(in srgb, var(--accent) 20%, transparent)",
                }}
              >
                {project.result}
              </div>

              {/* Case study link */}
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
    </section>
  );
}
