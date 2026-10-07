import { technologies, techCategories } from "@/data/technologies";

export default function TechStack() {
  return (
    <section
      id="tech-stack"
      className="section"
      aria-labelledby="tech-heading"
      style={{ backgroundColor: "var(--bg-secondary)" }}
    >
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <p className="section-label">Technology</p>
          <h2 id="tech-heading" className="section-title mb-4">
            Built With Modern Technology
          </h2>
          <p className="section-desc mx-auto">
            We select tools that are proven, well-supported, and right for each
            specific project — not just trendy.
          </p>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {techCategories.map((category) => {
            const items = technologies.filter((t) => t.category === category);
            return (
              <div
                key={category}
                className="rounded-2xl p-6"
                style={{
                  background: "var(--card)",
                  border: "1px solid var(--card-border)",
                }}
                aria-label={`${category} technologies`}
              >
                <h3
                  className="text-xs font-bold uppercase tracking-widest mb-4"
                  style={{ color: "var(--accent)" }}
                >
                  {category}
                </h3>
                <ul className="flex flex-col gap-3" role="list">
                  {items.map(({ name }) => (
                    <li
                      key={name}
                      className="flex items-center gap-3 text-sm font-medium"
                      style={{ color: "var(--fg)" }}
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ background: "var(--accent)" }}
                        aria-hidden="true"
                      />
                      {name}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Marquee tech strip */}
        <div
          className="mt-12 overflow-hidden py-4"
          aria-hidden="true"
        >
          <div className="animate-marquee flex gap-8 whitespace-nowrap">
            {[...technologies, ...technologies].map((tech, i) => (
              <span
                key={`${tech.name}-${i}`}
                className="text-sm font-semibold px-4 py-2 rounded-full shrink-0"
                style={{
                  background: "var(--bg)",
                  color: "var(--fg-muted)",
                  border: "1px solid var(--border)",
                }}
              >
                {tech.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
