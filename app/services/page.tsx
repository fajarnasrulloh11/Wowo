import type { Metadata } from "next";
import { services } from "@/data/services";
import { Globe, Code2, Palette, Smartphone, Plug, Cloud, ArrowRight } from "lucide-react";
import Link from "next/link";
import CTA from "@/components/cta/CTA";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Services",
  description: `Explore ${SITE_NAME}'s full range of digital services — web development, custom software, UI/UX design, mobile apps, API integration, and cloud & DevOps.`,
};

const iconMap: Record<string, React.ComponentType<{ size?: number; 'aria-hidden'?: boolean | "true" | "false" }>> = {
  Globe, Code2, Palette, Smartphone, Plug, Cloud,
};

export default function ServicesPage() {
  return (
    <>
      <div
        className="pt-32 pb-16 section"
        style={{ backgroundColor: "var(--bg)" }}
      >
        <div className="container">
          {/* Header */}
          <div className="max-w-2xl mb-20">
            <p className="section-label">Services</p>
            <h1 className="section-title mb-4">
              Everything You Need to Build Your Digital Product
            </h1>
            <p className="section-desc">
              We cover every aspect of digital product development — from strategy
              and design to development, deployment, and long-term support.
            </p>
          </div>

          {/* Services detail list */}
          <div className="flex flex-col gap-12">
            {services.map((service, index) => {
              const Icon = iconMap[service.icon] ?? Globe;
              return (
                <article
                  key={service.id}
                  id={service.id}
                  className={`flex flex-col md:flex-row gap-8 md:gap-16 items-start ${
                    index % 2 === 1 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Icon block */}
                  <div
                    className="w-20 h-20 rounded-2xl flex items-center justify-center shrink-0"
                    style={{
                      background: "var(--accent-subtle)",
                      color: "var(--accent)",
                      border: "1px solid color-mix(in srgb, var(--accent) 20%, transparent)",
                    }}
                    aria-hidden="true"
                  >
                    <Icon size={36} aria-hidden={true} />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <span
                      className="text-xs font-bold uppercase tracking-widest"
                      style={{ color: "var(--fg-muted)" }}
                    >
                      Service {String(index + 1).padStart(2, "0")}
                    </span>
                    <h2
                      className="text-2xl md:text-3xl font-bold mt-2 mb-3"
                      style={{ color: "var(--fg)" }}
                    >
                      {service.title}
                    </h2>
                    <p
                      className="text-base leading-relaxed mb-6"
                      style={{ color: "var(--fg-muted)", maxWidth: "52ch" }}
                    >
                      {service.description}
                    </p>

                    {/* Features */}
                    <ul
                      className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6"
                      aria-label="Key capabilities"
                    >
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2 text-sm"
                          style={{ color: "var(--fg-muted)" }}
                        >
                          <span
                            className="w-1.5 h-1.5 rounded-full shrink-0"
                            style={{ background: "var(--accent)" }}
                            aria-hidden="true"
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Link
                      href="/contact"
                      className="btn btn-primary"
                    >
                      Discuss This Service
                      <ArrowRight size={16} aria-hidden="true" />
                    </Link>
                  </div>

                  {/* Divider */}
                  <div
                    className="hidden md:block"
                    style={{
                      display: index < services.length - 1 ? "block" : "none",
                    }}
                  />
                </article>
              );
            })}
          </div>
        </div>
      </div>

      <CTA />
    </>
  );
}
