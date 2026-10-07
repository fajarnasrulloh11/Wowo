import { processSteps } from "@/data/process";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Process() {
  return (
    <section
      id="process"
      className="section"
      aria-labelledby="process-heading"
      style={{ backgroundColor: "var(--bg)" }}
    >
      <div className="container">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="section-label">How We Work</p>
          <h2 id="process-heading" className="section-title mb-4">
            A Clear Process, Every Time
          </h2>
          <p className="section-desc">
            No surprises. Every project follows a structured process that keeps you
            informed, in control, and confident in the outcome.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div
            className="hidden lg:block absolute left-[2.25rem] top-8 bottom-8 w-px"
            style={{ background: "var(--border)" }}
            aria-hidden="true"
          />

          <ol className="flex flex-col gap-8 lg:gap-0" role="list">
            {processSteps.map((step, index) => (
              <li
                key={step.number}
                className="relative flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-10 lg:pb-12 last:lg:pb-0"
              >
                {/* Step number circle */}
                <div
                  className="shrink-0 w-[4.5rem] h-[4.5rem] rounded-2xl flex items-center justify-center font-black text-xl relative z-10"
                  style={{
                    background: index === 0 ? "var(--accent)" : "var(--bg-secondary)",
                    color: index === 0 ? "var(--accent-fg)" : "var(--fg-muted)",
                    border: "1px solid var(--border)",
                  }}
                  aria-hidden="true"
                >
                  {step.number}
                </div>

                {/* Content */}
                <div className="flex-1 pt-2">
                  <h3
                    className="text-xl font-bold mb-2"
                    style={{ color: "var(--fg)" }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed mb-4"
                    style={{ color: "var(--fg-muted)", maxWidth: "48ch" }}
                  >
                    {step.description}
                  </p>

                  {/* Detail tags */}
                  <ul className="flex flex-wrap gap-2" role="list" aria-label="Step details">
                    {step.details.map((detail) => (
                      <li key={detail}>
                        <span
                          className="text-xs px-3 py-1 rounded-full font-medium"
                          style={{
                            background: "var(--bg-secondary)",
                            color: "var(--fg-muted)",
                            border: "1px solid var(--border)",
                          }}
                        >
                          {detail}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* CTA */}
        <div
          className="mt-16 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
          style={{
            background: "var(--bg-secondary)",
            border: "1px solid var(--border)",
          }}
        >
          <div>
            <h3 className="text-2xl font-bold mb-2" style={{ color: "var(--fg)" }}>
              Ready to get started?
            </h3>
            <p className="text-sm" style={{ color: "var(--fg-muted)" }}>
              Tell us about your project and we&apos;ll kick off the discovery phase.
            </p>
          </div>
          <Link href="/contact" className="btn btn-accent shrink-0">
            Start a Project
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
