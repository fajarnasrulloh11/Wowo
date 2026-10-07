"use client";

import { useState } from "react";
import { faqs } from "@/data/faqs";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="section"
      aria-labelledby="faq-heading"
      style={{ backgroundColor: "var(--bg)" }}
    >
      <div className="container max-w-3xl">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="section-label">FAQ</p>
          <h2 id="faq-heading" className="section-title mb-4">
            Frequently Asked Questions
          </h2>
          <p className="section-desc mx-auto">
            Quick answers to questions we hear most often from potential clients.
          </p>
        </div>

        {/* Accordion */}
        <div
          className="rounded-2xl overflow-hidden"
          style={{ border: "1px solid var(--border)" }}
          role="list"
          aria-label="Frequently asked questions"
        >
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                role="listitem"
                style={{
                  borderBottom:
                    index < faqs.length - 1 ? "1px solid var(--border)" : "none",
                }}
              >
                <button
                  type="button"
                  id={`faq-btn-${index}`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${index}`}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full text-left flex items-center justify-between gap-4 px-6 py-5 transition-colors"
                  style={{
                    background: isOpen ? "var(--accent-subtle)" : "var(--card)",
                    color: "var(--fg)",
                  }}
                >
                  <span className="font-semibold text-sm md:text-base">
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={18}
                    aria-hidden="true"
                    className="shrink-0 transition-transform duration-300"
                    style={{
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      color: "var(--accent)",
                    }}
                  />
                </button>

                {/* Answer panel */}
                <div
                  id={`faq-panel-${index}`}
                  role="region"
                  aria-labelledby={`faq-btn-${index}`}
                  hidden={!isOpen}
                >
                  <div
                    className="px-6 py-5"
                    style={{
                      background: "var(--card)",
                      color: "var(--fg-muted)",
                      fontSize: "0.9375rem",
                      lineHeight: "1.75",
                    }}
                  >
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
