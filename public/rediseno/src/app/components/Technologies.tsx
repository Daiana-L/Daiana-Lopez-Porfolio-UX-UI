const techCategories = [
  {
    category: "Frontend",
    color: "#61DAFB",
    techs: [
      { name: "React", abbr: "RE", color: "#61DAFB", bg: "#0B1F2E" },
      { name: "HTML", abbr: "HT", color: "#E34F26", bg: "#2E1208" },
      { name: "CSS", abbr: "CS", color: "#1572B6", bg: "#0A1B2E" },
      { name: "JavaScript", abbr: "JS", color: "#F7DF1E", bg: "#2E2808" },
    ],
  },
  {
    category: "Frameworks & Tools",
    color: "#1CCDEC",
    techs: [
      { name: "Next.js", abbr: "NE", color: "#FFFFFF", bg: "#1A1A2E" },
      { name: "Tailwind CSS", abbr: "TW", color: "#38BDF8", bg: "#0A1B2E" },
      { name: "TypeScript", abbr: "TS", color: "#3178C6", bg: "#0A1526" },
    ],
  },
  {
    category: "Diseño",
    color: "#A855F7",
    techs: [
      { name: "Figma", abbr: "FI", color: "#F24E1E", bg: "#2E1208" },
      { name: "Adobe Ph.", abbr: "AD", color: "#31A8FF", bg: "#0A1B2E" },
      { name: "Atomic Design", abbr: "AT", color: "#A855F7", bg: "#1A0E2E" },
    ],
  },
];

export function Technologies() {
  return (
    <section
      id="tecnologias"
      style={{
        background: "linear-gradient(180deg, #0A0D22 0%, #07091C 100%)",
        padding: "100px 0",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
        {/* Section header */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "12px",
            marginBottom: "64px",
            textAlign: "center",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div
              style={{
                width: "24px",
                height: "2px",
                background: "#1CCDEC",
                borderRadius: "2px",
              }}
            />
            <span
              style={{
                color: "#1CCDEC",
                fontSize: "12px",
                fontWeight: 600,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
              }}
            >
              Stack
            </span>
            <div
              style={{
                width: "24px",
                height: "2px",
                background: "#1CCDEC",
                borderRadius: "2px",
              }}
            />
          </div>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 42px)",
              fontWeight: 700,
              color: "#F8FAFC",
              margin: 0,
            }}
          >
            Tecnologías &{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #1CCDEC, #0E9ABB)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Herramientas
            </span>
          </h2>
          <p
            style={{
              color: "#64748B",
              fontSize: "16px",
              maxWidth: "440px",
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            Herramientas y tecnologías que utilizo en mis proyectos de diseño y
            desarrollo.
          </p>
        </div>

        {/* Tech categories */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "40px",
          }}
        >
          {techCategories.map((cat) => (
            <div key={cat.category}>
              {/* Category label */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  marginBottom: "20px",
                }}
              >
                <div
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    backgroundColor: cat.color,
                    boxShadow: `0 0 8px ${cat.color}`,
                  }}
                />
                <span
                  style={{
                    color: "#64748B",
                    fontSize: "12px",
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                >
                  {cat.category}
                </span>
                <div
                  style={{
                    flex: 1,
                    height: "1px",
                    background: "rgba(255,255,255,0.05)",
                  }}
                />
              </div>

              {/* Tech items */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "12px",
                }}
              >
                {cat.techs.map((tech) => (
                  <TechBadge key={tech.name} tech={tech} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

type TechItem = {
  name: string;
  abbr: string;
  color: string;
  bg: string;
};

function TechBadge({ tech }: { tech: TechItem }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        backgroundColor: "#0D1226",
        border: "1px solid rgba(255,255,255,0.07)",
        borderRadius: "12px",
        padding: "10px 18px",
        transition: "all 0.2s ease",
        cursor: "default",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget;
        el.style.borderColor = `${tech.color}40`;
        el.style.backgroundColor = "#111B35";
        el.style.transform = "translateY(-2px)";
        el.style.boxShadow = `0 4px 20px ${tech.color}15`;
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget;
        el.style.borderColor = "rgba(255,255,255,0.07)";
        el.style.backgroundColor = "#0D1226";
        el.style.transform = "translateY(0)";
        el.style.boxShadow = "none";
      }}
    >
      {/* Icon circle */}
      <div
        style={{
          width: "36px",
          height: "36px",
          borderRadius: "8px",
          backgroundColor: tech.bg,
          border: `1px solid ${tech.color}25`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "11px",
          fontWeight: 700,
          color: tech.color,
          flexShrink: 0,
        }}
      >
        {tech.abbr}
      </div>
      <span
        style={{
          color: "#CBD5E1",
          fontSize: "14px",
          fontWeight: 500,
          whiteSpace: "nowrap",
        }}
      >
        {tech.name}
      </span>
    </div>
  );
}
