import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { services } from "@/data/services";
import { Globe, Code2, Palette, Smartphone, Plug, Cloud, ArrowRight } from "lucide-react";
import Link from "next/link";
import CTA from "@/components/cta/CTA";
import { SITE_NAME } from "@/lib/constants";

interface Props {
  params: Promise<{ service: string }>;
}

const iconMap: Record<string, React.ComponentType<{ size?: number; 'aria-hidden'?: boolean | "true" | "false" }>> = {
  Globe, Code2, Palette, Smartphone, Plug, Cloud,
};

export async function generateStaticParams() {
  return services.map((s) => ({ service: s.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { service: serviceId } = await params;
  const service = services.find((s) => s.id === serviceId);
  if (!service) return { title: "Service Not Found" };

  return {
    title: service.title,
    description: `${service.description} — ${SITE_NAME} provides expert ${service.title.toLowerCase()} services for businesses of all sizes.`,
  };
}

export default async function ServicePage({ params }: Props) {
  const { service: serviceId } = await params;
  const service = services.find((s) => s.id === serviceId);

  if (!service) notFound();

  const Icon = iconMap[service.icon] ?? Globe;
  const index = services.indexOf(service);
  const others = services.filter((s) => s.id !== service.id).slice(0, 3);

  return (
    <>
      <div
        className="pt-32 pb-20 section"
        style={{ backgroundColor: "var(--bg)" }}
      >
        <div className="container">
          {/* Back link */}
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-medium mb-12 transition-colors"
            style={{ color: "var(--fg-muted)" }}
          >
            <span aria-hidden="true">←</span>
            All Services
          </Link>

          {/* Header */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
            <div>
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                style={{
                  background: "var(--accent-subtle)",
                  color: "var(--accent)",
                  border: "1px solid color-mix(in srgb, var(--accent) 20%, transparent)",
                }}
                aria-hidden="true"
              >
                <Icon size={32} aria-hidden={true} />
              </div>

              <span
                className="text-xs font-bold uppercase tracking-widest"
                style={{ color: "var(--fg-muted)" }}
              >
                Service {String(index + 1).padStart(2, "0")}
              </span>

              <h1
                className="text-4xl md:text-5xl font-black mt-2 mb-4"
                style={{ color: "var(--fg)" }}
              >
                {service.title}
              </h1>

              <p
                className="text-lg leading-relaxed mb-8"
                style={{ color: "var(--fg-muted)", maxWidth: "52ch" }}
              >
                {service.description}
              </p>

              <Link href="/contact" className="btn btn-accent">
                Start This Project
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>

            {/* Features card */}
            <div
              className="rounded-2xl p-8"
              style={{
                background: "var(--bg-secondary)",
                border: "1px solid var(--border)",
              }}
            >
              <h2
                className="text-xs font-bold uppercase tracking-widest mb-6"
                style={{ color: "var(--accent)" }}
              >
                What&apos;s Included
              </h2>
              <ul className="flex flex-col gap-4" role="list">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-sm font-medium"
                    style={{ color: "var(--fg)" }}
                  >
                    <span
                      className="w-2 h-2 rounded-full shrink-0"
                      style={{ background: "var(--accent)" }}
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Other services */}
          <div>
            <h2
              className="text-lg font-bold mb-6"
              style={{ color: "var(--fg)" }}
            >
              Explore Other Services
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {others.map((other) => {
                const OtherIcon = iconMap[other.icon] ?? Globe;
                return (
                  <Link
                    key={other.id}
                    href={other.href}
                    className="card flex items-center gap-4 group"
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{
                        background: "var(--accent-subtle)",
                        color: "var(--accent)",
                      }}
                      aria-hidden="true"
                    >
                      <OtherIcon size={18} aria-hidden={true} />
                    </div>
                    <div>
                      <p className="text-sm font-bold" style={{ color: "var(--fg)" }}>
                        {other.title}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <CTA />
    </>
  );
}
