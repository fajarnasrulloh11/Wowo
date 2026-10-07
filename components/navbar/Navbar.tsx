"use client";

import { useEffect, useState, useCallback, useSyncExternalStore } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { SITE_NAME, CONTACT_WHATSAPP } from "@/lib/constants";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Process", href: "/process" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 20);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`navbar ${scrolled ? "scrolled" : ""}`}
        role="banner"
      >
        <div className="container">
          <nav
            className="flex items-center justify-between h-16 md:h-20"
            aria-label="Main navigation"
          >
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 font-bold text-xl tracking-tight"
              aria-label={`${SITE_NAME} — Home`}
            >
              <span
                className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-black"
                style={{
                  background: "var(--accent)",
                  color: "var(--accent-fg)",
                }}
                aria-hidden="true"
              >
                N
              </span>
              <span style={{ color: "var(--fg)" }}>{SITE_NAME}</span>
            </Link>

            {/* Desktop Nav */}
            <ul className="hidden md:flex items-center gap-1" role="list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                    style={{ color: "var(--fg-muted)" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "var(--fg)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "var(--fg-muted)")
                    }
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              <ThemeToggle />
              <Link
                href="/contact"
                className="btn btn-primary"
                style={{ padding: "0.5rem 1.125rem", fontSize: "0.875rem" }}
              >
                Let&apos;s Work Together
              </Link>
            </div>

            {/* Mobile controls */}
            <div className="flex md:hidden items-center gap-2">
              <ThemeToggle />
              <button
                type="button"
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileOpen}
                aria-controls="mobile-menu"
                onClick={() => setMobileOpen((v) => !v)}
                className="p-2 rounded-lg"
                style={{ color: "var(--fg)" }}
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`mobile-menu ${mobileOpen ? "open" : ""}`}
        aria-hidden={!mobileOpen}
      >
        <nav aria-label="Mobile navigation">
          <ul className="flex flex-col gap-1" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block px-4 py-3 rounded-xl text-lg font-medium transition-colors"
                  style={{ color: "var(--fg-muted)" }}
                  onClick={() => setMobileOpen(false)}
                  onFocus={(e) => (e.currentTarget.style.color = "var(--fg)")}
                  onBlur={(e) =>
                    (e.currentTarget.style.color = "var(--fg-muted)")
                  }
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div
          className="mt-auto pt-6 flex flex-col gap-3"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          <Link
            href={CONTACT_WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary w-full justify-center"
            onClick={() => setMobileOpen(false)}
          >
            WhatsApp
          </Link>
          <Link
            href="/contact"
            className="btn btn-primary w-full justify-center"
            onClick={() => setMobileOpen(false)}
          >
            Let&apos;s Work Together
          </Link>
        </div>
      </div>
    </>
  );
}

/* ── Theme Toggle ─────────────────────────────────────────── */
function subscribeTheme(callback: () => void) {
  window.addEventListener("storage", callback);
  const mq = window.matchMedia("(prefers-color-scheme: dark)");
  mq.addEventListener("change", callback);
  return () => {
    window.removeEventListener("storage", callback);
    mq.removeEventListener("change", callback);
  };
}

function getThemeSnapshot() {
  const stored = localStorage.getItem("theme");
  if (stored) return stored === "dark";
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

function getThemeServerSnapshot() {
  return false;
}

function ThemeToggle() {
  const dark = useSyncExternalStore(subscribeTheme, getThemeSnapshot, getThemeServerSnapshot);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  const toggle = () => {
    const next = !dark;
    localStorage.setItem("theme", next ? "dark" : "light");
    document.documentElement.classList.toggle("dark", next);
    window.dispatchEvent(new Event("storage"));
  };

  return (
    <button
      type="button"
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={toggle}
      className="p-2 rounded-lg transition-colors"
      style={{ color: "var(--fg-muted)" }}
    >
      {dark ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      )}
    </button>
  );
}
