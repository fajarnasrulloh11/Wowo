"use client";

import { useState } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

type FormState = "idle" | "loading" | "success" | "error";

interface FormData {
  name: string;
  email: string;
  company: string;
  projectType: string;
  budget: string;
  message: string;
}

const projectTypes = [
  "Website / Landing Page",
  "Web Application",
  "Mobile App",
  "Custom Software",
  "UI/UX Design",
  "API Integration",
  "Cloud & DevOps",
  "Other",
];

const budgetRanges = [
  "< Rp 5.000.000",
  "Rp 5.000.000 – Rp 15.000.000",
  "Rp 15.000.000 – Rp 50.000.000",
  "Rp 50.000.000 – Rp 150.000.000",
  "> Rp 150.000.000",
  "Not sure yet",
];

export default function ContactForm() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [data, setData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    projectType: "",
    budget: "",
    message: "",
  });

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!data.name.trim()) newErrors.name = "Name is required.";
    if (!data.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!data.projectType) newErrors.projectType = "Please select a project type.";
    if (!data.message.trim()) {
      newErrors.message = "Message is required.";
    } else if (data.message.trim().length < 20) {
      newErrors.message = "Please provide at least 20 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setFormState("loading");

    // Simulate form submission (replace with actual API call or form service)
    try {
      await new Promise((res) => setTimeout(res, 1500));
      // TODO: Replace with actual form submission (e.g., Formspree, Resend, or your own API)
      setFormState("success");
    } catch {
      setFormState("error");
    }
  };

  if (formState === "success") {
    return (
      <div
        className="rounded-2xl p-12 flex flex-col items-center text-center gap-4"
        style={{
          background: "var(--card)",
          border: "1px solid var(--card-border)",
        }}
        role="alert"
        aria-live="polite"
      >
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center"
          style={{ background: "var(--accent-subtle)", color: "var(--accent)" }}
        >
          <CheckCircle size={32} aria-hidden="true" />
        </div>
        <h3 className="text-xl font-bold" style={{ color: "var(--fg)" }}>
          Message Received!
        </h3>
        <p style={{ color: "var(--fg-muted)", maxWidth: "36ch" }}>
          Thanks for reaching out. We&apos;ll get back to you within 1 business day.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      aria-label="Contact form"
      className="rounded-2xl p-6 md:p-8 flex flex-col gap-5"
      style={{
        background: "var(--card)",
        border: "1px solid var(--card-border)",
      }}
    >
      {/* Error banner */}
      {formState === "error" && (
        <div
          className="flex items-start gap-3 p-4 rounded-xl"
          style={{
            background: "color-mix(in srgb, var(--error) 10%, transparent)",
            color: "var(--error)",
            border: "1px solid color-mix(in srgb, var(--error) 25%, transparent)",
          }}
          role="alert"
        >
          <AlertCircle size={18} className="shrink-0 mt-0.5" aria-hidden="true" />
          <p className="text-sm">
            Something went wrong. Please try again or email us directly.
          </p>
        </div>
      )}

      {/* Name + Email row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field
          id="name"
          label="Full Name"
          required
          error={errors.name}
        >
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            className="input"
            placeholder="Your name"
            value={data.name}
            onChange={handleChange}
            aria-required="true"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            disabled={formState === "loading"}
          />
        </Field>

        <Field
          id="email"
          label="Email Address"
          required
          error={errors.email}
        >
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            className="input"
            placeholder="you@company.com"
            value={data.email}
            onChange={handleChange}
            aria-required="true"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            disabled={formState === "loading"}
          />
        </Field>
      </div>

      {/* Company */}
      <Field id="company" label="Company / Organization" error={errors.company}>
        <input
          id="company"
          name="company"
          type="text"
          autoComplete="organization"
          className="input"
          placeholder="Your company (optional)"
          value={data.company}
          onChange={handleChange}
          disabled={formState === "loading"}
        />
      </Field>

      {/* Project type + Budget */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field
          id="projectType"
          label="Project Type"
          required
          error={errors.projectType}
        >
          <select
            id="projectType"
            name="projectType"
            className="input"
            value={data.projectType}
            onChange={handleChange}
            aria-required="true"
            aria-invalid={!!errors.projectType}
            disabled={formState === "loading"}
          >
            <option value="">Select type...</option>
            {projectTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </Field>

        <Field id="budget" label="Estimated Budget" error={errors.budget}>
          <select
            id="budget"
            name="budget"
            className="input"
            value={data.budget}
            onChange={handleChange}
            disabled={formState === "loading"}
          >
            <option value="">Select range...</option>
            {budgetRanges.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
        </Field>
      </div>

      {/* Message */}
      <Field
        id="message"
        label="Tell Us About Your Project"
        required
        error={errors.message}
      >
        <textarea
          id="message"
          name="message"
          rows={5}
          className="input resize-none"
          placeholder="Describe your idea, goals, or the problem you're trying to solve..."
          value={data.message}
          onChange={handleChange}
          aria-required="true"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          disabled={formState === "loading"}
          style={{ minHeight: "120px" }}
        />
      </Field>

      {/* Submit */}
      <button
        type="submit"
        id="contact-submit"
        className="btn btn-accent w-full justify-center"
        disabled={formState === "loading"}
        style={{ fontSize: "1rem", padding: "0.875rem 2rem" }}
        aria-label={formState === "loading" ? "Sending message..." : "Send message"}
      >
        {formState === "loading" ? (
          <>
            <span
              className="w-4 h-4 rounded-full border-2 border-t-transparent animate-spin"
              style={{ borderColor: "var(--accent-fg)", borderTopColor: "transparent" }}
              aria-hidden="true"
            />
            Sending...
          </>
        ) : (
          <>
            Send Message
            <Send size={16} aria-hidden="true" />
          </>
        )}
      </button>

      <p className="text-xs text-center" style={{ color: "var(--fg-muted)" }}>
        By submitting, you agree that we may contact you about your inquiry.
      </p>
    </form>
  );
}

/* ── Field wrapper ────────────────────────────────────────── */
interface FieldProps {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}

function Field({ id, label, required, error, children }: FieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={id}
        className="text-sm font-medium"
        style={{ color: "var(--fg)" }}
      >
        {label}
        {required && (
          <span
            aria-hidden="true"
            className="ml-1"
            style={{ color: "var(--error)" }}
          >
            *
          </span>
        )}
      </label>
      {children}
      {error && (
        <p
          id={`${id}-error`}
          className="text-xs"
          style={{ color: "var(--error)" }}
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  );
}
