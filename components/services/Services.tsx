import Link from "next/link";
import { ArrowRight, Globe, Code2, Palette, Smartphone, Plug, Cloud } from "lucide-react";
import { services } from "@/data/services";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string; 'aria-hidden'?: boolean | "true" | "false" }>> = {
  Globe,
  Code2,
  Palette,
  Smartphone,
  Plug,
  Cloud,
};

export default function Services() {
  return (
    <section
      id="services"
      className="section"
      aria-labelledby="services-heading"
      style={{ backgroundColor: "var(--bg)" }}
    >
      <div className="container">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="section-label">Services</p>
          <h2
            id="services-heading"
            className="section-title mb-4"
          >
            Everything You Need to Build Your Digital Product
          </h2>
          <p className="section-desc">
            From strategy to deployment, we cover every aspect of digital product
            development so your team can focus on what matters most — your business.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] ?? Globe;
            return (
              <Link
                key={service.id}
                href={service.href}
                className="card group flex flex-col gap-4"
                style={{
                  animationDelay: `${index * 80}ms`,
                }}
                aria-label={`${service.title} — ${service.description}`}
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center transition-colors"
                  style={{
                    background: "var(--accent-subtle)",
                    color: "var(--accent)",
                  }}
                >
                  <Icon size={22} aria-hidden={true} />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3
                    className="text-lg font-bold mb-2 transition-colors"
                    style={{ color: "var(--fg)" }}
                  >
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--fg-muted)" }}>
                    {service.description}
                  </p>
                </div>

                {/* Features */}
                <ul className="flex flex-wrap gap-2" role="list" aria-label="Key features">
                  {service.features.map((feature) => (
                    <li key={feature}>
                      <span
                        className="text-xs px-2 py-0.5 rounded-full"
                        style={{
                          background: "var(--bg-secondary)",
                          color: "var(--fg-muted)",
                          border: "1px solid var(--border)",
                        }}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Learn more link */}
                <div
                  className="flex items-center gap-1 text-sm font-semibold transition-colors"
                  style={{ color: "var(--accent)" }}
                >
                  Learn more
                  <ArrowRight
                    size={14}
                    aria-hidden="true"
                    className="transition-transform group-hover:translate-x-1"
                  />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-sm mb-4" style={{ color: "var(--fg-muted)" }}>
            Not sure which service fits your needs?
          </p>
          <Link href="/contact" className="btn btn-primary">
            Let&apos;s Talk About Your Project
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
