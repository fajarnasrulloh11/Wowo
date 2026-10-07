import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div
      className="flex-1 flex flex-col items-center justify-center py-32 px-6 text-center"
      style={{ backgroundColor: "var(--bg)" }}
    >
      <p
        className="text-8xl font-black mb-4"
        style={{ color: "var(--border)" }}
        aria-hidden="true"
      >
        404
      </p>
      <h1
        className="text-2xl md:text-3xl font-bold mb-3"
        style={{ color: "var(--fg)" }}
      >
        Page Not Found
      </h1>
      <p
        className="text-base mb-8"
        style={{ color: "var(--fg-muted)", maxWidth: "40ch" }}
      >
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link href="/" className="btn btn-primary">
          <ArrowLeft size={16} aria-hidden="true" />
          Back to Home
        </Link>
        <Link href="/contact" className="btn btn-secondary">
          Contact Us
          <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}
