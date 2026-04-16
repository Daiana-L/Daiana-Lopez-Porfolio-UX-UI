"use client";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const content = {
  es: {
    eyebrow: "EDUCACIÓN",
    title: "Formación",
    items: [
      {
        institution: "Universidad Tecnológica Nacional — UTN Buenos Aires",
        credential: "Diplomatura en UX/UI Design",
        period: "2026",
        status: "completado",
        statusLabel: "Certificado obtenido",
        detail:
          "Diplomatura en UX/UI Design obtenida en la Universidad Tecnológica Nacional — UTN Buenos Aires.",
      },
      {
        institution: "Universidad Tecnológica Nacional — Facultad Regional Buenos Aires",
        credential: "Curso de Diseño UX / UI — Turno Noche",
        period: "Enero 2026",
        status: "completado",
        statusLabel: "Certificado obtenido",
        detail:
          "Modalidad sincrónica · 135 horas · Nota: Bueno. Certificado emitido por la Secretaría de Cultura y Extensión Universitaria de la UTN FRBA, con certificación blockchain.",
      },
      {
        institution: "Henry Bootcamp",
        credential: "Desarrollo Web Full Stack",
        period: "Octubre 2025",
        status: "completado",
        statusLabel: "Certificado obtenido",
        detail:
          "Carrera intensiva de Desarrollo Web Full Stack. Certificado emitido el 01/10/2025.",
      },
    ],
  },
  en: {
    eyebrow: "EDUCATION",
    title: "Education",
    items: [
      {
        institution: "Universidad Tecnológica Nacional — UTN Buenos Aires",
        credential: "Diploma in UX/UI Design",
        period: "2026",
        status: "completado",
        statusLabel: "Certificate obtained",
        detail:
          "UX/UI Design diploma obtained at Universidad Tecnológica Nacional — UTN Buenos Aires.",
      },
      {
        institution: "Universidad Tecnológica Nacional — Facultad Regional Buenos Aires",
        credential: "UX / UI Design Course — Night Shift",
        period: "January 2026",
        status: "completado",
        statusLabel: "Certificate obtained",
        detail:
          "Synchronous modality · 135 hours · Grade: Good. Certificate issued by the Secretariat of Culture and University Extension of UTN FRBA, with blockchain certification.",
      },
      {
        institution: "Henry Bootcamp",
        credential: "Full Stack Web Development",
        period: "October 2025",
        status: "completado",
        statusLabel: "Certificate obtained",
        detail:
          "Intensive Full Stack Web Development career. Certificate issued on 01/10/2025.",
      },
    ],
  },
};

export default function Education() {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <section id="education" className="w-full py-8 px-4 sm:px-6">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="text-xs font-semibold tracking-[0.18em] uppercase text-sky-400">
            {t.eyebrow}
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-50 mt-2">
            {t.title}
          </h2>
        </motion.div>

        <div className="flex flex-col gap-4">
          {t.items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-start gap-4"
            >
              {/* Icono */}
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-sky-400/20 to-cyan-500/20 border border-sky-400/20 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-sky-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.8}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
              </div>

              {/* Info */}
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <h3 className="text-slate-50 font-semibold text-sm">
                    {item.credential}
                  </h3>
                  <span
                    className={`text-xs font-medium px-2 py-0.5 rounded-full border ${
                      item.status === "en curso"
                        ? "bg-amber-400/10 text-amber-400 border-amber-400/20"
                        : "bg-emerald-400/10 text-emerald-400 border-emerald-400/20"
                    }`}
                  >
                    {item.statusLabel}
                  </span>
                </div>
                <p className="text-sky-400 text-xs font-medium mb-1">
                  {item.institution}
                </p>
                <p className="text-slate-500 text-xs mb-2">{item.period}</p>
                <p className="text-slate-400 text-xs leading-relaxed">
                  {item.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
