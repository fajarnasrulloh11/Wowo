import { ImageResponse } from "next/og";
import { SITE_NAME, SITE_TAGLINE } from "@/lib/constants";

export const runtime = "nodejs";
export const alt = `${SITE_NAME} — ${SITE_TAGLINE}`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #090d16 0%, #0d1527 50%, #111e38 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, -apple-system, sans-serif",
          color: "#ffffff",
          padding: "60px",
          position: "relative",
        }}
      >
        {/* Glow effect */}
        <div
          style={{
            position: "absolute",
            width: "600px",
            height: "400px",
            background: "radial-gradient(circle, rgba(99, 102, 241, 0.25) 0%, transparent 70%)",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />

        {/* Badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "8px 20px",
            borderRadius: "9999px",
            background: "rgba(99, 102, 241, 0.15)",
            border: "1px solid rgba(99, 102, 241, 0.3)",
            color: "#818cf8",
            fontSize: "18px",
            fontWeight: "600",
            marginBottom: "32px",
            letterSpacing: "0.05em",
            textTransform: "uppercase",
          }}
        >
          Digital Engineering &amp; Product Design Studio
        </div>

        {/* Brand Title */}
        <h1
          style={{
            fontSize: "64px",
            fontWeight: "900",
            letterSpacing: "-0.03em",
            margin: "0 0 20px 0",
            textAlign: "center",
            background: "linear-gradient(180deg, #ffffff 0%, #cbd5e1 100%)",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          {SITE_NAME}
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontSize: "26px",
            color: "#94a3b8",
            textAlign: "center",
            maxWidth: "800px",
            lineHeight: "1.5",
            margin: "0 0 40px 0",
          }}
        >
          {SITE_TAGLINE}
        </p>

        {/* Tech tags preview */}
        <div
          style={{
            display: "flex",
            gap: "16px",
          }}
        >
          {["Next.js", "React", "TypeScript", "TailwindCSS", "Node.js", "Cloud"].map((tech) => (
            <span
              key={tech}
              style={{
                padding: "6px 14px",
                borderRadius: "8px",
                background: "rgba(255, 255, 255, 0.06)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                color: "#e2e8f0",
                fontSize: "16px",
                fontWeight: "500",
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
