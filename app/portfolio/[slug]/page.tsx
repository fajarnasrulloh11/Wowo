import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Calendar, Tag } from "lucide-react";
import CTA from "@/components/cta/CTA";
import { SITE_NAME } from "@/lib/constants";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} — Case Study`,
    description: `${project.description} Built with ${project.technologies.join(", ")}.`,
    openGraph: {
      title: `${project.title} | ${SITE_NAME}`,
      description: project.description,
    },
  };
}

export default async function ProjectDetail({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  const index = projects.indexOf(project);
  const next = projects[(index + 1) % projects.length];

  return (
    <>
      <div
        className="pt-32 pb-20"
        style={{ backgroundColor: "var(--bg)" }}
      >
        <div className="container max-w-4xl">
          {/* Back link */}
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-sm font-medium mb-10 transition-colors"
            style={{ color: "var(--fg-muted)" }}
          >
            <ArrowLeft size={16} aria-hidden="true" />
            All Projects
          </Link>

          {/* Header */}
          <div className="mb-10">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span
                className="text-xs font-semibold px-3 py-1 rounded-full"
                style={{
                  background: "var(--accent-subtle)",
                  color: "var(--accent)",
                }}
              >
                <Tag size={10} className="inline mr-1" aria-hidden="true" />
                {project.category}
              </span>
              <span
                className="flex items-center gap-1 text-xs"
                style={{ color: "var(--fg-muted)" }}
              >
                <Calendar size={12} aria-hidden="true" />
                {project.year}
              </span>
            </div>

            <h1
              className="text-4xl md:text-5xl font-black mb-4"
              style={{ color: "var(--fg)" }}
            >
              {project.title}
            </h1>
            <p
              className="text-lg leading-relaxed"
              style={{ color: "var(--fg-muted)", maxWidth: "60ch" }}
            >
              {project.description}
            </p>
          </div>

          {/* Project preview image */}
          <div
            className="w-full rounded-2xl aspect-video relative overflow-hidden bg-slate-900 border border-[var(--border)] mb-14 shadow-2xl"
            aria-label={`${project.title} project preview`}
          >
            {project.image ? (
              <Image
                src={project.image}
                alt={project.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 896px"
                className="object-cover"
              />
            ) : (
              <div
                className="w-full h-full flex items-center justify-center"
                style={{
                  background: `linear-gradient(135deg, hsl(${(index * 80 + 200)}, 70%, 15%), hsl(${(index * 80 + 240)}, 60%, 25%))`,
                }}
              >
                <span
                  className="text-8xl font-black opacity-20 select-none text-white"
                  aria-hidden="true"
                >
                  {project.title.slice(0, 2).toUpperCase()}
                </span>
              </div>
            )}
          </div>

          {/* Technologies */}
          <div className="mb-12">
            <h2 className="text-lg font-bold mb-4" style={{ color: "var(--fg)" }}>
              Technologies Used
            </h2>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-full text-sm font-medium"
                  style={{
                    background: "var(--bg-secondary)",
                    color: "var(--fg)",
                    border: "1px solid var(--border)",
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Case study details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              { label: "Challenge", content: project.challenge },
              { label: "Solution", content: project.solution },
              { label: "Outcome", content: project.result },
            ].map(({ label, content }) => (
              <div
                key={label}
                className="rounded-2xl p-6"
                style={{
                  background: "var(--bg-secondary)",
                  border: "1px solid var(--border)",
                }}
              >
                <h3
                  className="text-xs font-bold uppercase tracking-widest mb-3"
                  style={{ color: "var(--accent)" }}
                >
                  {label}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--fg-muted)" }}
                >
                  {content}
                </p>
              </div>
            ))}
          </div>

          {/* Next project */}
          <div
            className="rounded-2xl p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
            style={{
              background: "var(--bg-secondary)",
              border: "1px solid var(--border)",
            }}
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: "var(--fg-muted)" }}>
                Next Project
              </p>
              <p className="text-lg font-bold" style={{ color: "var(--fg)" }}>
                {next.title}
              </p>
            </div>
            <Link
              href={`/portfolio/${next.slug}`}
              className="btn btn-primary shrink-0"
              aria-label={`View ${next.title} case study`}
            >
              View Case Study
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>

      <CTA />
    </>
  );
}
