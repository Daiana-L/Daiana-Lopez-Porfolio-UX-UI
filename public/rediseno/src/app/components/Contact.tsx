import { useState } from "react";
import { Send, Linkedin, Clock, Mail, MessageSquare } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({ email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setFormData({ email: "", message: "" });
  };

  return (
    <section
      id="contacto"
      style={{
        background: "linear-gradient(180deg, #07091C 0%, #0B0F28 100%)",
        padding: "100px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background glow */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "600px",
          height: "300px",
          background:
            "radial-gradient(ellipse, rgba(28, 205, 236, 0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px",
          position: "relative",
          zIndex: 1,
        }}
      >
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
              Contacto
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
            ¿Hablamos?
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
            ¿Tenés una consulta o propuesta? Escribime y te respondo lo antes
            posible.
          </p>
        </div>

        {/* Content grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "32px",
            alignItems: "start",
          }}
          className="grid grid-cols-1 md:grid-cols-2"
        >
          {/* Contact form */}
          <div
            style={{
              backgroundColor: "#0D1226",
              border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: "20px",
              padding: "36px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "28px",
              }}
            >
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "10px",
                  backgroundColor: "rgba(28, 205, 236, 0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <MessageSquare size={16} color="#1CCDEC" />
              </div>
              <h3
                style={{
                  color: "#F8FAFC",
                  fontSize: "18px",
                  fontWeight: 600,
                  margin: 0,
                }}
              >
                Enviarme un mensaje
              </h3>
            </div>

            <form
              onSubmit={handleSubmit}
              style={{ display: "flex", flexDirection: "column", gap: "20px" }}
            >
              {/* Email */}
              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <label
                  style={{
                    color: "#94A3B8",
                    fontSize: "13px",
                    fontWeight: 500,
                  }}
                >
                  Email
                </label>
                <input
                  type="email"
                  placeholder="tuemail@gmail.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  style={{
                    backgroundColor: "#111B35",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "10px",
                    padding: "12px 16px",
                    color: "#F8FAFC",
                    fontSize: "14px",
                    outline: "none",
                    transition: "border-color 0.2s ease",
                    width: "100%",
                    boxSizing: "border-box",
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "rgba(28, 205, 236, 0.4)";
                    e.target.style.boxShadow =
                      "0 0 0 3px rgba(28, 205, 236, 0.08)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "rgba(255,255,255,0.08)";
                    e.target.style.boxShadow = "none";
                  }}
                />
              </div>

              {/* Message */}
              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <label
                  style={{
                    color: "#94A3B8",
                    fontSize: "13px",
                    fontWeight: 500,
                  }}
                >
                  Mensaje
                </label>
                <textarea
                  placeholder="Contame en qué puedo ayudarte..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  rows={5}
                  style={{
                    backgroundColor: "#111B35",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "10px",
                    padding: "12px 16px",
                    color: "#F8FAFC",
                    fontSize: "14px",
                    outline: "none",
                    transition: "border-color 0.2s ease",
                    resize: "vertical",
                    width: "100%",
                    boxSizing: "border-box",
                    fontFamily: "inherit",
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "rgba(28, 205, 236, 0.4)";
                    e.target.style.boxShadow =
                      "0 0 0 3px rgba(28, 205, 236, 0.08)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "rgba(255,255,255,0.08)";
                    e.target.style.boxShadow = "none";
                  }}
                />
              </div>

              {/* Footer row */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  gap: "12px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                  <Clock size={12} color="#64748B" />
                  <span style={{ color: "#64748B", fontSize: "12px" }}>
                    Respondo en 1-24hs.
                  </span>
                </div>
                <button
                  type="submit"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "11px 24px",
                    borderRadius: "10px",
                    background: sent
                      ? "linear-gradient(135deg, #22C55E, #16A34A)"
                      : "linear-gradient(135deg, #1CCDEC, #0E9ABB)",
                    color: "#07091C",
                    fontWeight: 700,
                    fontSize: "14px",
                    border: "none",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    boxShadow: "0 4px 16px rgba(28, 205, 236, 0.2)",
                  }}
                >
                  {sent ? "¡Enviado! ✓" : (
                    <>
                      Enviar <Send size={13} />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Right side: info + links */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            {/* Info card */}
            <div
              style={{
                backgroundColor: "#0D1226",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: "20px",
                padding: "32px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "20px",
                }}
              >
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "10px",
                    backgroundColor: "rgba(28, 205, 236, 0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Mail size={16} color="#1CCDEC" />
                </div>
                <h3
                  style={{
                    color: "#F8FAFC",
                    fontSize: "18px",
                    fontWeight: 600,
                    margin: 0,
                  }}
                >
                  También me encontrás en
                </h3>
              </div>
              <p
                style={{
                  color: "#64748B",
                  fontSize: "14px",
                  lineHeight: 1.6,
                  margin: "0 0 24px 0",
                }}
              >
                LinkedIn para oportunidades laborales o networking.
              </p>

              {/* LinkedIn button */}
              <a
                href="#"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  padding: "14px 20px",
                  borderRadius: "12px",
                  backgroundColor: "rgba(10, 102, 194, 0.12)",
                  border: "1px solid rgba(10, 102, 194, 0.25)",
                  textDecoration: "none",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.backgroundColor = "rgba(10, 102, 194, 0.2)";
                  el.style.borderColor = "rgba(10, 102, 194, 0.5)";
                  el.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.backgroundColor = "rgba(10, 102, 194, 0.12)";
                  el.style.borderColor = "rgba(10, 102, 194, 0.25)";
                  el.style.transform = "translateY(0)";
                }}
              >
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "8px",
                    backgroundColor: "#0A66C2",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Linkedin size={18} color="#FFFFFF" />
                </div>
                <div>
                  <div
                    style={{
                      color: "#F8FAFC",
                      fontWeight: 600,
                      fontSize: "14px",
                    }}
                  >
                    Mi LinkedIn
                  </div>
                  <div style={{ color: "#64748B", fontSize: "12px" }}>
                    Daiana Celeste Lopez
                  </div>
                </div>
              </a>
            </div>

            {/* Availability card */}
            <div
              style={{
                backgroundColor: "rgba(28, 205, 236, 0.04)",
                border: "1px solid rgba(28, 205, 236, 0.12)",
                borderRadius: "20px",
                padding: "24px 32px",
                display: "flex",
                alignItems: "center",
                gap: "16px",
              }}
            >
              <div
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  backgroundColor: "#22C55E",
                  boxShadow: "0 0 12px rgba(34, 197, 94, 0.6)",
                  flexShrink: 0,
                  animation: "pulse 2s infinite",
                }}
              />
              <div>
                <div
                  style={{
                    color: "#F8FAFC",
                    fontWeight: 600,
                    fontSize: "14px",
                    marginBottom: "2px",
                  }}
                >
                  Disponible para proyectos
                </div>
                <div style={{ color: "#64748B", fontSize: "13px" }}>
                  Actualmente open to work · Buenos Aires, Argentina
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </section>
  );
}
