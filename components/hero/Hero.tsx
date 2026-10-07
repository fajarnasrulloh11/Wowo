"use client";

import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden"
      aria-label="Hero"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 hero-grid pointer-events-none"
        aria-hidden="true"
      />

      {/* Radial gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, color-mix(in srgb, var(--accent) 10%, transparent), transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="container relative z-10 pt-32 pb-20 flex flex-col items-center text-center">
        {/* Eyebrow badge */}
        <div className="badge animate-fade-in mb-8">
          Technology Partner for Growing Businesses
        </div>

        {/* Headline */}
        <h1
          className="animate-fade-in-up delay-100 font-black tracking-tighter"
          style={{
            fontSize: "clamp(2.5rem, 7vw, 5rem)",
            lineHeight: 1.05,
            maxWidth: "18ch",
            color: "var(--fg)",
          }}
        >
          We Build Digital Products That{" "}
          <span className="gradient-text">Move Businesses Forward.</span>
        </h1>

        {/* Sub-headline */}
        <p
          className="animate-fade-in-up delay-200 mt-6 text-lg md:text-xl leading-relaxed"
          style={{ color: "var(--fg-muted)", maxWidth: "54ch" }}
        >
          We design and develop modern digital experiences, web applications, and
          custom software that help businesses grow faster and operate smarter.
        </p>

        {/* CTAs */}
        <div className="animate-fade-in-up delay-300 mt-10 flex flex-col sm:flex-row gap-4 items-center">
          <Link
            href="/contact"
            id="hero-cta-primary"
            className="btn btn-accent"
            style={{ fontSize: "1rem", padding: "0.875rem 2rem" }}
          >
            Start a Project
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
          <Link
            href="/portfolio"
            id="hero-cta-secondary"
            className="btn btn-secondary"
            style={{ fontSize: "1rem", padding: "0.875rem 2rem" }}
          >
            View Our Work
          </Link>
        </div>

        {/* Visual — floating UI cards */}
        <div
          className="animate-fade-in-up delay-400 mt-20 w-full max-w-3xl relative"
          aria-hidden="true"
        >
          <HeroVisual />
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#services"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float"
        aria-label="Scroll to services"
        style={{ color: "var(--fg-muted)" }}
      >
        <ChevronDown size={20} />
      </a>
    </section>
  );
}

/* ── Hero Visual — Abstract dashboard mockup ──────────────── */
function HeroVisual() {
  const metrics = [
    { label: "Projects Delivered", value: "50+" },
    { label: "Client Satisfaction", value: "98%" },
    { label: "Lines of Code", value: "1M+" },
  ];

  const stack = ["Next.js", "Django", "PostgreSQL", "Docker", "AWS"];

  return (
    <div
      className="relative rounded-2xl overflow-hidden p-6 md:p-8"
      style={{
        background: "var(--card)",
        border: "1px solid var(--card-border)",
        boxShadow: "0 32px 80px color-mix(in srgb, var(--fg) 10%, transparent)",
      }}
    >
      {/* Top bar */}
      <div className="flex items-center gap-2 mb-6">
        <div className="w-3 h-3 rounded-full" style={{ background: "#ef4444" }} />
        <div className="w-3 h-3 rounded-full" style={{ background: "#f59e0b" }} />
        <div className="w-3 h-3 rounded-full" style={{ background: "#22c55e" }} />
        <div
          className="ml-4 flex-1 rounded-md px-3 py-1 text-xs"
          style={{
            background: "var(--bg-secondary)",
            color: "var(--fg-muted)",
            maxWidth: "200px",
          }}
        >
          nexalab.dev/dashboard
        </div>
      </div>

      {/* Metrics row */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        {metrics.map(({ label, value }) => (
          <div
            key={label}
            className="rounded-xl p-4 text-center"
            style={{ background: "var(--bg-secondary)", border: "1px solid var(--border)" }}
          >
            <div
              className="text-2xl font-black mb-1"
              style={{ color: "var(--accent)" }}
            >
              {value}
            </div>
            <div className="text-xs" style={{ color: "var(--fg-muted)" }}>
              {label}
            </div>
          </div>
        ))}
      </div>

      {/* Code snippet mockup */}
      <div
        className="rounded-xl p-4 mb-6 text-left font-mono text-xs leading-relaxed"
        style={{ background: "#09090b", color: "#a1a1aa" }}
      >
        <span style={{ color: "#7c3aed" }}>const</span>{" "}
        <span style={{ color: "#60a5fa" }}>project</span>{" "}
        <span style={{ color: "#f8fafc" }}>= await</span>{" "}
        <span style={{ color: "#34d399" }}>buildDigitalProduct</span>
        <span style={{ color: "#f8fafc" }}>{"({"}</span>
        <br />
        <span style={{ color: "#f8fafc" }}>{"  "}</span>
        <span style={{ color: "#fbbf24" }}>idea</span>
        <span style={{ color: "#f8fafc" }}>:</span>{" "}
        <span style={{ color: "#f87171" }}>&quot;Your vision&quot;</span>
        <span style={{ color: "#f8fafc" }}>,</span>
        <br />
        <span style={{ color: "#f8fafc" }}>{"  "}</span>
        <span style={{ color: "#fbbf24" }}>outcome</span>
        <span style={{ color: "#f8fafc" }}>:</span>{" "}
        <span style={{ color: "#f87171" }}>&quot;Real digital product&quot;</span>
        <br />
        <span style={{ color: "#f8fafc" }}>{"});"}</span>
      </div>

      {/* Tech stack row */}
      <div className="flex flex-wrap gap-2">
        {stack.map((tech) => (
          <span
            key={tech}
            className="text-xs font-medium px-3 py-1 rounded-full"
            style={{
              background: "var(--accent-subtle)",
              color: "var(--accent)",
              border: "1px solid color-mix(in srgb, var(--accent) 25%, transparent)",
            }}
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
