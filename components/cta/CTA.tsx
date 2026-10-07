import Link from "next/link";
import { ArrowRight, Mail, MessageCircle } from "lucide-react";
import { CONTACT_EMAIL, CONTACT_WHATSAPP } from "@/lib/constants";

export default function CTA() {
  return (
    <section
      id="cta"
      className="section"
      aria-labelledby="cta-heading"
      style={{ backgroundColor: "var(--bg)" }}
    >
      <div className="container">
        <div
          className="relative rounded-3xl p-8 md:p-16 overflow-hidden text-center"
          style={{
            background: "var(--fg)",
          }}
        >
          {/* Background accent circles */}
          <div
            className="absolute -top-24 -right-24 w-64 h-64 rounded-full pointer-events-none"
            style={{
              background: "color-mix(in srgb, var(--accent) 20%, transparent)",
              filter: "blur(60px)",
            }}
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full pointer-events-none"
            style={{
              background: "color-mix(in srgb, var(--accent) 10%, transparent)",
              filter: "blur(80px)",
            }}
            aria-hidden="true"
          />

          <div className="relative z-10">
            <p
              className="section-label mb-4 mx-auto"
              style={{ color: "var(--accent)" }}
            >
              Start a Project
            </p>
            <h2
              id="cta-heading"
              className="section-title mb-4"
              style={{ color: "var(--bg)" }}
            >
              Have a Project in Mind?
            </h2>
            <p
              className="section-desc mx-auto mb-10"
              style={{ color: "color-mix(in srgb, var(--bg) 65%, transparent)" }}
            >
              Tell us about your idea and let&apos;s discuss how we can turn it into a
              real digital product — together.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                id="cta-primary"
                className="btn btn-accent"
                style={{
                  fontSize: "1rem",
                  padding: "0.875rem 2rem",
                }}
              >
                Start a Conversation
                <ArrowRight size={18} aria-hidden="true" />
              </Link>

              <a
                href={CONTACT_WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                id="cta-whatsapp"
                className="btn"
                style={{
                  fontSize: "1rem",
                  padding: "0.875rem 2rem",
                  background: "transparent",
                  color: "var(--bg)",
                  border: "1px solid color-mix(in srgb, var(--bg) 40%, transparent)",
                }}
              >
                <MessageCircle size={18} aria-hidden="true" />
                WhatsApp Us
              </a>
            </div>

            {/* Contact shortcuts */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="inline-flex items-center gap-2 text-sm transition-opacity hover:opacity-80"
                style={{
                  color: "color-mix(in srgb, var(--bg) 65%, transparent)",
                }}
              >
                <Mail size={14} aria-hidden="true" />
                {CONTACT_EMAIL}
              </a>
              <span
                className="hidden sm:block w-1 h-1 rounded-full"
                style={{ background: "color-mix(in srgb, var(--bg) 30%, transparent)" }}
                aria-hidden="true"
              />
              <p
                className="text-sm"
                style={{ color: "color-mix(in srgb, var(--bg) 50%, transparent)" }}
              >
                Usually respond within 1 business day
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
