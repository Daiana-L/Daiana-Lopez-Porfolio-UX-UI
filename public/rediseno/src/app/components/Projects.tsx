import { ExternalLink, Figma, Smartphone, Monitor } from "lucide-react";

const studioImg =
  "https://images.unsplash.com/photo-1720962158812-d16549f1e5a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMHN0dWRpbyUyMHdlYiUyMHBsYXRmb3JtJTIwZGFyayUyMFVJfGVufDF8fHx8MTc3MTcyMjQ1Nnww&ixlib=rb-4.1.0&q=80&w=1080";
const donmorfiImg =
  "https://images.unsplash.com/photo-1760888549280-4aef010720bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwZGVsaXZlcnklMjBtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzcxNzIyNDU3fDA&ixlib=rb-4.1.0&q=80&w=1080";
const taskappImg =
  "https://images.unsplash.com/photo-1676276374782-39159bc5e7b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YXNrJTIwbWFuYWdlbWVudCUyMHByb2R1Y3Rpdml0eSUyMGFwcCUyMFVJJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc3MTcyMjQ1N3ww&ixlib=rb-4.1.0&q=80&w=1080";

const projects = [
  {
    id: 1,
    title: "StudioConnect",
    subtitle: "Plataforma web",
    description:
      "Plataforma web para conectar músicos con estudios de grabación. UX/UI completo con flujos de búsqueda, reserva y perfil de usuarios.",
    image: studioImg,
    tags: ["UX Research", "Figma", "Web Design", "Prototyping"],
    icon: <Monitor size={14} />,
    type: "Web Platform",
    accentColor: "#1CCDEC",
  },
  {
    id: 2,
    title: "DonMorfi",
    subtitle: "SaaS gastronómico",
    description:
      "SaaS gastronómico tipo marketplace. Diseño UX/UI web + prototipo mobile en Figma con componentes reutilizables y Atomic Design.",
    image: donmorfiImg,
    tags: ["Atomic Design", "Figma", "Mobile", "Marketplace"],
    icon: <Smartphone size={14} />,
    type: "Mobile + Web",
    accentColor: "#F97316",
  },
  {
    id: 3,
    title: "TaskApp",
    subtitle: "App nativa",
    description:
      "App nativa para gestión de tareas colaborativas con investigación UX y prototipo interactivo de alta fidelidad en Figma.",
    image: taskappImg,
    tags: ["UX Research", "Figma", "iOS Design", "Hi-Fi Prototype"],
    icon: <Figma size={14} />,
    type: "Native App",
    accentColor: "#A855F7",
  },
];

export function Projects() {
  return (
    <section
      id="proyectos"
      style={{
        background: "linear-gradient(180deg, #07091C 0%, #0A0D22 100%)",
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
              Portfolio
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
            Proyectos{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #1CCDEC, #0E9ABB)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              UX/UI Designer
            </span>
          </h2>
          <p
            style={{
              color: "#64748B",
              fontSize: "16px",
              maxWidth: "480px",
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            Casos de estudio reales que combinan investigación, diseño y
            prototipos interactivos.
          </p>
        </div>

        {/* Project cards grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "28px",
          }}
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  return (
    <div
      style={{
        backgroundColor: "#0D1226",
        border: "1px solid rgba(255,255,255,0.06)",
        borderRadius: "16px",
        overflow: "hidden",
        transition: "all 0.3s ease",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget;
        el.style.transform = "translateY(-6px)";
        el.style.borderColor = `rgba(28, 205, 236, 0.25)`;
        el.style.boxShadow = `0 20px 60px rgba(28, 205, 236, 0.1), 0 8px 32px rgba(0,0,0,0.4)`;
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget;
        el.style.transform = "translateY(0)";
        el.style.borderColor = "rgba(255,255,255,0.06)";
        el.style.boxShadow = "none";
      }}
    >
      {/* Image */}
      <div
        style={{
          position: "relative",
          height: "200px",
          overflow: "hidden",
          backgroundColor: "#111B35",
        }}
      >
        <img
          src={project.image}
          alt={project.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.4s ease",
          }}
          onMouseEnter={(e) => {
            (e.target as HTMLElement).style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            (e.target as HTMLElement).style.transform = "scale(1)";
          }}
        />
        {/* Gradient overlay */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "60%",
            background: "linear-gradient(to top, #0D1226, transparent)",
          }}
        />
        {/* Type badge */}
        <div
          style={{
            position: "absolute",
            top: "12px",
            left: "12px",
            display: "flex",
            alignItems: "center",
            gap: "5px",
            backgroundColor: "rgba(7, 9, 28, 0.7)",
            backdropFilter: "blur(8px)",
            border: "1px solid rgba(28, 205, 236, 0.2)",
            borderRadius: "20px",
            padding: "4px 10px",
          }}
        >
          <span style={{ color: "#1CCDEC" }}>{project.icon}</span>
          <span
            style={{ color: "#94A3B8", fontSize: "11px", fontWeight: 500 }}
          >
            {project.type}
          </span>
        </div>
      </div>

      {/* Content */}
      <div
        style={{
          padding: "24px",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          flex: 1,
        }}
      >
        <div>
          <h3
            style={{
              color: "#F8FAFC",
              fontSize: "20px",
              fontWeight: 700,
              margin: "0 0 4px 0",
            }}
          >
            {project.title}
          </h3>
          <span
            style={{
              color: "#1CCDEC",
              fontSize: "12px",
              fontWeight: 500,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
            }}
          >
            {project.subtitle}
          </span>
        </div>

        <p
          style={{
            color: "#64748B",
            fontSize: "14px",
            lineHeight: 1.65,
            margin: 0,
            flex: 1,
          }}
        >
          {project.description}
        </p>

        {/* Tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
          {project.tags.map((tag) => (
            <span
              key={tag}
              style={{
                backgroundColor: "rgba(28, 205, 236, 0.08)",
                border: "1px solid rgba(28, 205, 236, 0.15)",
                color: "#1CCDEC",
                fontSize: "11px",
                fontWeight: 500,
                padding: "3px 10px",
                borderRadius: "20px",
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "11px 20px",
            borderRadius: "10px",
            background: "linear-gradient(135deg, #1CCDEC, #0E9ABB)",
            color: "#07091C",
            fontWeight: 700,
            fontSize: "14px",
            textDecoration: "none",
            textAlign: "center",
            justifyContent: "center",
            transition: "all 0.2s ease",
            boxShadow: "0 4px 16px rgba(28, 205, 236, 0.2)",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.boxShadow =
              "0 6px 24px rgba(28, 205, 236, 0.4)";
            (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.boxShadow =
              "0 4px 16px rgba(28, 205, 236, 0.2)";
            (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
          }}
        >
          Ver proyecto
          <ExternalLink size={13} />
        </a>
      </div>
    </div>
  );
}
