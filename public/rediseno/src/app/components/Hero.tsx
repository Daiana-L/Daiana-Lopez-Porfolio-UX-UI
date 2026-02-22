import { MapPin, Download, ArrowRight } from "lucide-react";
import profileImg from "figma:asset/eb13ddd4da485c79ff8c90da75121500700b1852.png";

const profileImgSrc = typeof profileImg === "string" ? profileImg : profileImg.src;

export function Hero() {
  return (
    <section
      id="sobre-mi"
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #07091C 0%, #0B0F28 50%, #07091C 100%)",
        display: "flex",
        alignItems: "center",
        paddingTop: "80px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background grid pattern */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(28, 205, 236, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(28, 205, 236, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          pointerEvents: "none",
        }}
      />

      {/* Glow blobs */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          right: "5%",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(28, 205, 236, 0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          left: "5%",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(14, 154, 187, 0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "60px 24px",
          width: "100%",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto",
            gap: "64px",
            alignItems: "center",
          }}
          className="flex flex-col-reverse md:grid"
        >
          {/* Text content */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {/* Label */}
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div
                style={{
                  width: "32px",
                  height: "2px",
                  background: "#1CCDEC",
                  borderRadius: "2px",
                }}
              />
              <span
                style={{
                  color: "#1CCDEC",
                  fontSize: "13px",
                  fontWeight: 600,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                }}
              >
                Bienvenida a mi portfolio profesional
              </span>
            </div>

            {/* Name + Title */}
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <h1
                style={{
                  fontSize: "clamp(38px, 5vw, 62px)",
                  fontWeight: 700,
                  lineHeight: 1.1,
                  color: "#F8FAFC",
                  margin: 0,
                }}
              >
                Daiana Lopez,
                <br />
                <span
                  style={{
                    background: "linear-gradient(135deg, #1CCDEC 0%, #0E9ABB 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  UX/UI Designer
                </span>
              </h1>
            </div>

            {/* Bio */}
            <p
              style={{
                color: "#94A3B8",
                fontSize: "16px",
                lineHeight: 1.7,
                maxWidth: "520px",
                margin: 0,
              }}
            >
              Enfocada en la creación de interfaces funcionales, accesibles y centradas en el usuario. He realizado diversos diseños en Figma, trabajando con componentes reutilizables, Atomic Design y prototipos interactivos.
            </p>

            {/* Location + Personal note */}
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <MapPin size={14} color="#1CCDEC" />
                <span style={{ color: "#64748B", fontSize: "14px" }}>
                  Buenos Aires, Argentina
                </span>
              </div>
              <p style={{ color: "#64748B", fontSize: "14px", margin: 0 }}>
                Para conocerme más personalmente, podés usar mi{" "}
                <span style={{ color: "#1CCDEC", textDecoration: "underline", cursor: "pointer" }}>
                  chat de IA personalizado
                </span>
              </p>
            </div>

            {/* CTA Buttons */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginTop: "8px" }}>
              <a
                href="#"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "13px 28px",
                  borderRadius: "10px",
                  background: "linear-gradient(135deg, #1CCDEC, #0E9ABB)",
                  color: "#07091C",
                  fontWeight: 700,
                  fontSize: "15px",
                  textDecoration: "none",
                  transition: "all 0.2s ease",
                  boxShadow: "0 4px 24px rgba(28, 205, 236, 0.3)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    "0 8px 32px rgba(28, 205, 236, 0.45)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    "0 4px 24px rgba(28, 205, 236, 0.3)";
                }}
              >
                <Download size={16} />
                Descargar CV
              </a>
              <a
                href="#proyectos"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "13px 28px",
                  borderRadius: "10px",
                  border: "1.5px solid rgba(28, 205, 236, 0.35)",
                  color: "#1CCDEC",
                  fontWeight: 600,
                  fontSize: "15px",
                  textDecoration: "none",
                  transition: "all 0.2s ease",
                  backgroundColor: "rgba(28, 205, 236, 0.05)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor =
                    "rgba(28, 205, 236, 0.12)";
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "rgba(28, 205, 236, 0.6)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor =
                    "rgba(28, 205, 236, 0.05)";
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "rgba(28, 205, 236, 0.35)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                }}
              >
                Ver proyectos
                <ArrowRight size={16} />
              </a>
            </div>

            {/* Stats */}
            <div
              style={{
                display: "flex",
                gap: "32px",
                paddingTop: "24px",
                borderTop: "1px solid rgba(255,255,255,0.06)",
                marginTop: "8px",
              }}
            >
              {[
                { num: "3+", label: "Proyectos" },
                { num: "5+", label: "Herramientas" },
                { num: "1", label: "Año de exp." },
              ].map((stat) => (
                <div key={stat.label} style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                  <span
                    style={{
                      fontSize: "22px",
                      fontWeight: 700,
                      color: "#1CCDEC",
                    }}
                  >
                    {stat.num}
                  </span>
                  <span style={{ color: "#64748B", fontSize: "12px" }}>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Photo */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexShrink: 0,
            }}
          >
            <div style={{ position: "relative" }}>
              {/* Glow ring */}
              <div
                style={{
                  position: "absolute",
                  inset: "-16px",
                  borderRadius: "50%",
                  background:
                    "radial-gradient(circle, rgba(28, 205, 236, 0.18) 0%, transparent 70%)",
                  pointerEvents: "none",
                }}
              />
              {/* Animated border */}
              <div
                style={{
                  position: "absolute",
                  inset: "-3px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #1CCDEC, transparent, #0E9ABB)",
                  padding: "3px",
                  pointerEvents: "none",
                }}
              />
              {/* Photo container */}
              <div
                style={{
                  width: "260px",
                  height: "260px",
                  borderRadius: "50%",
                  overflow: "hidden",
                  position: "relative",
                  border: "3px solid rgba(7,9,28,0.8)",
                  boxShadow:
                    "0 20px 60px rgba(28, 205, 236, 0.2), 0 8px 32px rgba(0,0,0,0.5)",
                }}
                className="w-40 h-40 md:w-64 md:h-64"
              >
                <img
                  src={profileImgSrc}
                  alt="Daiana Celeste Lopez"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "top center",
                  }}
                />
              </div>

              {/* Badge: Open to work */}
              <div
                style={{
                  position: "absolute",
                  bottom: "8px",
                  right: "-16px",
                  backgroundColor: "#0D1226",
                  border: "1px solid rgba(28, 205, 236, 0.3)",
                  borderRadius: "40px",
                  padding: "6px 14px",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
                }}
              >
                <div
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    backgroundColor: "#22C55E",
                    animation: "pulse 2s infinite",
                    flexShrink: 0,
                  }}
                />
                <span style={{ color: "#F8FAFC", fontSize: "12px", fontWeight: 600, whiteSpace: "nowrap" }}>
                  Open to work
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: "32px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "6px",
          opacity: 0.5,
        }}
        className="hidden md:flex"
      >
        <div
          style={{
            width: "22px",
            height: "36px",
            border: "2px solid rgba(28, 205, 236, 0.4)",
            borderRadius: "11px",
            display: "flex",
            justifyContent: "center",
            paddingTop: "6px",
          }}
        >
          <div
            style={{
              width: "4px",
              height: "8px",
              backgroundColor: "#1CCDEC",
              borderRadius: "2px",
              animation: "scrollDown 1.5s ease-in-out infinite",
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes scrollDown {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(10px); opacity: 0; }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </section>
  );
}
