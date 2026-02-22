import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Sobre mí", href: "#sobre-mi" },
    { label: "Proyectos", href: "#proyectos" },
    { label: "Tecnologías", href: "#tecnologias" },
    { label: "Contacto", href: "#contacto" },
  ];

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "all 0.3s ease",
        backgroundColor: scrolled
          ? "rgba(7, 9, 28, 0.92)"
          : "rgba(7, 9, 28, 0.6)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: scrolled
          ? "1px solid rgba(28, 205, 236, 0.12)"
          : "1px solid transparent",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px",
          height: "64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <a
          href="#"
          style={{
            color: "#F8FAFC",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <span
            style={{
              width: "32px",
              height: "32px",
              borderRadius: "8px",
              background: "linear-gradient(135deg, #1CCDEC, #0E9ABB)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "14px",
              fontWeight: 700,
              color: "#07091C",
              flexShrink: 0,
            }}
          >
            D
          </span>
          <span style={{ fontWeight: 600, fontSize: "15px", color: "#F8FAFC" }}>
            Daiana Celeste Lopez
          </span>
        </a>

        {/* Desktop Nav */}
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
          className="hidden md:flex"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                color: "#94A3B8",
                textDecoration: "none",
                padding: "6px 14px",
                borderRadius: "8px",
                fontSize: "14px",
                fontWeight: 500,
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.color = "#1CCDEC";
                (e.target as HTMLElement).style.backgroundColor =
                  "rgba(28, 205, 236, 0.08)";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.color = "#94A3B8";
                (e.target as HTMLElement).style.backgroundColor = "transparent";
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            style={{
              marginLeft: "8px",
              padding: "8px 20px",
              borderRadius: "8px",
              background: "linear-gradient(135deg, #1CCDEC, #0E9ABB)",
              color: "#07091C",
              fontWeight: 600,
              fontSize: "14px",
              textDecoration: "none",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLElement).style.opacity = "0.9";
              (e.target as HTMLElement).style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLElement).style.opacity = "1";
              (e.target as HTMLElement).style.transform = "translateY(0)";
            }}
          >
            Hablemos
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: "none",
            border: "none",
            color: "#F8FAFC",
            cursor: "pointer",
            padding: "4px",
          }}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="md:hidden"
          style={{
            backgroundColor: "rgba(7, 9, 28, 0.98)",
            borderTop: "1px solid rgba(28, 205, 236, 0.1)",
            padding: "12px 24px 20px",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: "block",
                color: "#94A3B8",
                textDecoration: "none",
                padding: "12px 0",
                fontSize: "15px",
                borderBottom: "1px solid rgba(255,255,255,0.05)",
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
