import { pricingPlans } from "@/data/pricing";
import Link from "next/link";
import { Check } from "lucide-react";

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="section"
      aria-labelledby="pricing-heading"
      style={{ backgroundColor: "var(--bg-secondary)" }}
    >
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="section-label">Pricing</p>
          <h2 id="pricing-heading" className="section-title mb-4">
            Flexible Solutions for Every Stage
          </h2>
          <p className="section-desc mx-auto">
            All prices are starting points. Final pricing depends on project scope,
            complexity, and timeline. We&apos;ll provide a detailed quote after our
            discovery call.
          </p>
        </div>

        {/* Plans grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className="relative flex flex-col rounded-2xl p-8"
              style={{
                background: plan.highlighted ? "var(--fg)" : "var(--card)",
                border: plan.highlighted
                  ? "1px solid var(--fg)"
                  : "1px solid var(--card-border)",
                color: plan.highlighted ? "var(--bg)" : "var(--fg)",
              }}
              aria-label={`${plan.name} plan`}
            >
              {/* Popular badge */}
              {plan.highlighted && (
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2"
                  aria-label="Most popular plan"
                >
                  <span
                    className="text-xs font-bold px-4 py-1 rounded-full"
                    style={{ background: "var(--accent)", color: "var(--accent-fg)" }}
                  >
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan name */}
              <p
                className="text-sm font-semibold mb-1"
                style={{
                  color: plan.highlighted ? "color-mix(in srgb, var(--bg) 70%, transparent)" : "var(--fg-muted)",
                }}
              >
                {plan.name}
              </p>

              {/* Price */}
              <div className="mb-2">
                <span
                  className="text-xs font-medium"
                  style={{
                    color: plan.highlighted
                      ? "color-mix(in srgb, var(--bg) 60%, transparent)"
                      : "var(--fg-muted)",
                  }}
                >
                  {plan.priceLabel}
                </span>
                <div
                  className="text-3xl font-black mt-1"
                  style={{
                    color: plan.highlighted ? "var(--bg)" : "var(--fg)",
                  }}
                >
                  {plan.price}
                </div>
              </div>

              {/* Description */}
              <p
                className="text-sm leading-relaxed mb-6 pb-6"
                style={{
                  color: plan.highlighted
                    ? "color-mix(in srgb, var(--bg) 70%, transparent)"
                    : "var(--fg-muted)",
                  borderBottom: `1px solid ${
                    plan.highlighted
                      ? "color-mix(in srgb, var(--bg) 20%, transparent)"
                      : "var(--border)"
                  }`,
                }}
              >
                {plan.description}
              </p>

              {/* Suitable for */}
              <div className="mb-4">
                <p
                  className="text-xs font-semibold mb-2 uppercase tracking-wider"
                  style={{
                    color: plan.highlighted
                      ? "color-mix(in srgb, var(--bg) 60%, transparent)"
                      : "var(--fg-muted)",
                  }}
                >
                  Suitable for
                </p>
                <ul className="flex flex-wrap gap-2" role="list">
                  {plan.suitableFor.map((item) => (
                    <li key={item}>
                      <span
                        className="text-xs px-2 py-0.5 rounded-full"
                        style={{
                          background: plan.highlighted
                            ? "color-mix(in srgb, var(--bg) 15%, transparent)"
                            : "var(--bg-secondary)",
                          color: plan.highlighted ? "var(--bg)" : "var(--fg-muted)",
                          border: `1px solid ${
                            plan.highlighted
                              ? "color-mix(in srgb, var(--bg) 20%, transparent)"
                              : "var(--border)"
                          }`,
                        }}
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Features */}
              <ul className="flex flex-col gap-3 flex-1 mb-8" role="list" aria-label="Plan features">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <Check
                      size={16}
                      className="shrink-0 mt-0.5"
                      style={{
                        color: plan.highlighted ? "var(--bg)" : "var(--accent)",
                      }}
                      aria-hidden="true"
                    />
                    <span
                      style={{
                        color: plan.highlighted
                          ? "color-mix(in srgb, var(--bg) 85%, transparent)"
                          : "var(--fg-muted)",
                      }}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                href={plan.ctaHref}
                className="btn w-full justify-center"
                id={`pricing-cta-${plan.id}`}
                style={
                  plan.highlighted
                    ? {
                        background: "var(--bg)",
                        color: "var(--fg)",
                        border: "1px solid var(--bg)",
                      }
                    : {
                        background: "var(--fg)",
                        color: "var(--bg)",
                        border: "1px solid var(--fg)",
                      }
                }
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p
          className="text-center text-sm mt-8"
          style={{ color: "var(--fg-muted)" }}
        >
          All prices in IDR and exclude applicable taxes.{" "}
          <Link
            href="/contact"
            className="font-semibold underline underline-offset-4"
            style={{ color: "var(--fg)" }}
          >
            Contact us
          </Link>{" "}
          for a custom quote.
        </p>
      </div>
    </section>
  );
}
