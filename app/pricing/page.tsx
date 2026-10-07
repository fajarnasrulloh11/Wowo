import type { Metadata } from "next";
import Pricing from "@/components/pricing/Pricing";
import FAQ from "@/components/faq/FAQ";
import CTA from "@/components/cta/CTA";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Pricing",
  description: `${SITE_NAME} pricing — transparent starting prices for web development, business websites, and custom software. Get a custom quote for your project.`,
};

export default function PricingPage() {
  return (
    <>
      <div
        className="pt-32 pb-0"
        style={{ backgroundColor: "var(--bg-secondary)" }}
      >
        <div className="container mb-0">
          <div className="max-w-2xl">
            <p className="section-label">Pricing</p>
            <h1 className="section-title mb-4">Flexible Solutions for Every Stage</h1>
            <p className="section-desc">
              Clear starting points for common project types. All pricing is
              transparent — we provide a detailed custom quote after understanding
              your specific needs.
            </p>
          </div>
        </div>
      </div>

      <Pricing />
      <FAQ />
      <CTA />
    </>
  );
}
