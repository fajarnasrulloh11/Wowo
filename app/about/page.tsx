import type { Metadata } from "next";
import CTA from "@/components/cta/CTA";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About",
  description: `Learn about ${SITE_NAME} — our mission, vision, values, and the team behind your digital products.`,
};

const stats = [
  { label: "Projects Delivered", value: "50+" },
  { label: "Technologies Mastered", value: "15+" },
  { label: "Years in Operation", value: "3+" },
  { label: "Industries Served", value: "8+" },
];

export default function AboutPage() {
  return (
    <>
      <div
        className="pt-32 pb-20 section"
        style={{ backgroundColor: "var(--bg)" }}
      >
        <div className="container">
          {/* Header */}
          <div className="max-w-3xl mb-20">
            <p className="section-label">About Us</p>
            <h1 className="section-title mb-6">
              We Turn Ideas Into Digital Products.
            </h1>
            <p
              className="text-lg leading-relaxed mb-4"
              style={{ color: "var(--fg-muted)" }}
            >
              We are a technology-focused digital agency helping businesses transform
              ideas into reliable digital products. From early-stage startups to
              established enterprises, we partner with clients at every stage of their
              digital journey.
            </p>
            <p
              className="text-lg leading-relaxed"
              style={{ color: "var(--fg-muted)" }}
            >
              We don&apos;t just write code — we solve business problems through
              technology. Every project starts with understanding your goals, and we
              don&apos;t stop until those goals are met.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {stats.map(({ label, value }) => (
              <div
                key={label}
                className="rounded-2xl p-6 text-center"
                style={{
                  background: "var(--bg-secondary)",
                  border: "1px solid var(--border)",
                }}
              >
                <div
                  className="text-4xl font-black mb-2"
                  style={{ color: "var(--fg)" }}
                >
                  {value}
                </div>
                <div className="text-sm" style={{ color: "var(--fg-muted)" }}>
                  {label}
                </div>
              </div>
            ))}
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            <div
              className="rounded-2xl p-8"
              style={{
                background: "var(--bg-secondary)",
                border: "1px solid var(--border)",
              }}
            >
              <h2
                className="text-xs font-bold uppercase tracking-widest mb-4"
                style={{ color: "var(--accent)" }}
              >
                Our Mission
              </h2>
              <p
                className="text-xl font-semibold leading-relaxed"
                style={{ color: "var(--fg)" }}
              >
                Build technology that creates measurable business value.
              </p>
              <p
                className="text-sm mt-3 leading-relaxed"
                style={{ color: "var(--fg-muted)" }}
              >
                We measure success not by lines of code shipped, but by the
                impact our work has on your business metrics.
              </p>
            </div>

            <div
              className="rounded-2xl p-8"
              style={{
                background: "var(--fg)",
                border: "1px solid var(--fg)",
              }}
            >
              <h2
                className="text-xs font-bold uppercase tracking-widest mb-4"
                style={{ color: "var(--accent)" }}
              >
                Our Vision
              </h2>
              <p
                className="text-xl font-semibold leading-relaxed"
                style={{ color: "var(--bg)" }}
              >
                Become a trusted technology partner for businesses building the future.
              </p>
              <p
                className="text-sm mt-3 leading-relaxed"
                style={{ color: "color-mix(in srgb, var(--bg) 65%, transparent)" }}
              >
                We aim to be the agency clients return to for every new challenge —
                because we earn that trust through every project.
              </p>
            </div>
          </div>

          {/* What we offer */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold mb-8" style={{ color: "var(--fg)" }}>
              What We Offer
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "Strategy & Consulting",
                "Product Design",
                "Frontend Development",
                "Backend Development",
                "API & Integration",
                "Cloud & DevOps",
                "Mobile Development",
                "Performance Optimization",
                "Ongoing Maintenance",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 p-4 rounded-xl text-sm font-medium"
                  style={{
                    background: "var(--bg-secondary)",
                    border: "1px solid var(--border)",
                    color: "var(--fg)",
                  }}
                >
                  <span
                    className="w-2 h-2 rounded-full shrink-0"
                    style={{ background: "var(--accent)" }}
                    aria-hidden="true"
                  />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <CTA />
    </>
  );
}
