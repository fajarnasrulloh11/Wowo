import Link from "next/link";
import { ArrowRight, Target, Cpu, Layers, Eye, Zap, Handshake } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Business First",
    description:
      "Technology must solve real business problems. We start with your goals, not our preferred stack.",
  },
  {
    icon: Cpu,
    title: "Modern Technology",
    description:
      "We use current, well-supported technologies that are maintainable and built for longevity.",
  },
  {
    icon: Layers,
    title: "Scalable Architecture",
    description:
      "Systems designed to grow with your business — not just for today's traffic, but tomorrow's scale.",
  },
  {
    icon: Eye,
    title: "Transparent Process",
    description:
      "No black boxes. You always know what we're working on, why, and what comes next.",
  },
  {
    icon: Zap,
    title: "Performance Focused",
    description:
      "Fast, reliable applications with excellent Core Web Vitals and optimized user experiences.",
  },
  {
    icon: Handshake,
    title: "Long-Term Partnership",
    description:
      "We don't disappear after launch. We support, maintain, and evolve your product with you.",
  },
];

export default function WhyUs() {
  return (
    <section
      id="why-us"
      className="section"
      aria-labelledby="why-us-heading"
      style={{ backgroundColor: "var(--bg)" }}
    >
      <div className="container">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="section-label">Why Choose Us</p>
          <h2 id="why-us-heading" className="section-title mb-4">
            Why Businesses Choose Us
          </h2>
          <p className="section-desc">
            We combine technical excellence with genuine business understanding to
            deliver outcomes that matter — not just deliverables.
          </p>
        </div>

        {/* Values grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group p-6 rounded-2xl transition-all duration-200"
              style={{
                border: "1px solid var(--border)",
                background: "var(--card)",
              }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                style={{
                  background: "var(--accent-subtle)",
                  color: "var(--accent)",
                }}
              >
                <Icon size={20} aria-hidden="true" />
              </div>
              <h3
                className="text-base font-bold mb-2"
                style={{ color: "var(--fg)" }}
              >
                {title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--fg-muted)" }}>
                {description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA row */}
        <div className="mt-14 flex flex-col sm:flex-row items-center gap-4">
          <Link href="/about" className="btn btn-primary">
            Learn About Us
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
          <Link href="/process" className="btn btn-secondary">
            See How We Work
          </Link>
        </div>
      </div>
    </section>
  );
}
