import type { Metadata } from "next";
import Process from "@/components/process/Process";
import CTA from "@/components/cta/CTA";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Our Process",
  description: `Learn how ${SITE_NAME} works — a transparent 5-step process from discovery to launch that keeps you in control at every stage.`,
};

export default function ProcessPage() {
  return (
    <>
      <div
        className="pt-32 pb-0"
        style={{ backgroundColor: "var(--bg)" }}
      >
        <div className="container mb-0">
          <div className="max-w-2xl">
            <p className="section-label">Process</p>
            <h1 className="section-title mb-4">How We Work</h1>
            <p className="section-desc">
              Every great digital product starts with a great process. Ours keeps
              you informed, in control, and confident at every step.
            </p>
          </div>
        </div>
      </div>

      <Process />
      <CTA />
    </>
  );
}
