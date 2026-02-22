export function Footer() {
  return (
    <footer
      style={{
        background: "#07091C",
        borderTop: "1px solid rgba(28, 205, 236, 0.08)",
        padding: "32px 24px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "16px",
        }}
      >
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <div
            style={{
              width: "28px",
              height: "28px",
              borderRadius: "7px",
              background: "linear-gradient(135deg, #1CCDEC, #0E9ABB)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "12px",
              fontWeight: 700,
              color: "#07091C",
            }}
          >
            D
          </div>
          <span style={{ color: "#64748B", fontSize: "14px" }}>
            Daiana Celeste Lopez · UX/UI Designer
          </span>
        </div>

        {/* Nav links */}
        <nav style={{ display: "flex", gap: "20px" }}>
          {["Sobre mí", "Proyectos", "Tecnologías", "Contacto"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(" ", "-").replace("í", "i").replace("é", "e")}`}
              style={{
                color: "#64748B",
                textDecoration: "none",
                fontSize: "13px",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.color = "#1CCDEC";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.color = "#64748B";
              }}
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Copyright */}
        <p style={{ color: "#3B4A68", fontSize: "13px", margin: 0 }}>
          © 2025 Daiana Celeste Lopez. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
