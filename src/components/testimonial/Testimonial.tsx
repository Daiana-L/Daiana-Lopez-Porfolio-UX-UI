"use client";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const content = {
  es: {
    eyebrow: "TESTIMONIOS",
    title: "Lo que dicen de mi trabajo",
    quote:
      "Durante los 6 meses que Daiana formó parte del equipo de DonMorfi, demostró ser una profesional comprometida, con una mirada genuina hacia el usuario y mucha predisposición. Se adaptó rápidamente a la dinámica de una startup, entendiendo bien los tiempos y las limitaciones propias del contexto. Su aporte en el área de diseño y experiencia de usuario fue significativo: mejoró flujos, elevó la consistencia visual del producto y siempre aportó desde un lugar constructivo. Fue una suma real para el equipo.",
    name: "Mario Sanchez",
    role: "Fundador · DonMorfi",
    context: "Pasantía · 6 meses",
  },
  en: {
    eyebrow: "TESTIMONIALS",
    title: "What people say about my work",
    quote:
      "During the 6 months Daiana was part of the DonMorfi team, she proved to be a committed professional with a genuine user-centered mindset and a great attitude. She quickly adapted to the dynamics of a startup, understanding the timelines and constraints that come with that context. Her contribution to the design and user experience area was significant: she improved flows, elevated the visual consistency of the product, and always brought a constructive perspective. She was a real asset to the team.",
    name: "Mario Sanchez",
    role: "Founder · DonMorfi",
    context: "Internship · 6 months",
  },
};

export default function Testimonial() {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <section id="testimonials" className="w-full py-8 px-4 sm:px-6">
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

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true }}
          className="relative bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8"
        >
          {/* Comillas decorativas */}
          <span
            aria-hidden
            className="absolute top-4 left-6 text-4xl text-sky-400/30 font-serif leading-none select-none"
          >
            "
          </span>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed italic pt-3">
            {t.quote}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-sky-400 to-cyan-500 flex items-center justify-center flex-shrink-0">
              <span className="text-[#07091C] font-bold text-sm">MS</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-slate-50 font-semibold text-sm">{t.name}</p>
              <p className="text-slate-400 text-xs">{t.role}</p>
            </div>
            <span className="text-xs font-medium px-3 py-1 rounded-full bg-sky-400/10 text-sky-400 border border-sky-400/20 whitespace-nowrap">
              {t.context}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
