"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

const content = {
  es: {
    eyebrow: "SOBRE MÍ",
    title: "Hola, soy Daiana",
    paragraphs: [
      "Soy de Buenos Aires y me considero una persona creativa, siempre buscando construir cosas que no solo se vean bien, sino que realmente funcionen.",
      "Además de mi camino como frontend, tengo un emprendimiento de figuras impresas en 3D, pintadas a mano. Ese proyecto no solo me permitió desarrollar una mirada estética más detallista, sino también entender de primera mano lo que implica construir y hacer crecer un negocio real.",
      "En el proceso de formarme como desarrolladora, descubrí el mundo del UX/UI y conecté completamente con esa disciplina. Me interesa diseñar experiencias que no solo sean visualmente atractivas, sino que ayuden tanto a los usuarios a resolver sus necesidades como a los negocios a crecer y funcionar mejor.",
      "A la hora de diseñar, disfruto pensar cada detalle: desde la lógica de uso hasta la estética final. Me motiva crear productos que tengan sentido, que estén bien pensados y que generen impacto real.",
    ],
    tags: ["Buenos Aires", "Open to work", "UX/UI + Frontend", "Emprendedora"],
  },
  en: {
    eyebrow: "ABOUT ME",
    title: "Hi, I'm Daiana",
    paragraphs: [
      "I'm from Buenos Aires and I consider myself a creative person, always looking to build things that not only look good but really work.",
      "In addition to my path as a frontend developer, I have a hand-painted 3D printed figures business. That project not only allowed me to develop a more detailed aesthetic eye, but also understand firsthand what it means to build and grow a real business.",
      "While training as a developer, I discovered the world of UX/UI and connected completely with that discipline. I'm interested in designing experiences that are not only visually attractive, but that help users solve their needs and businesses grow and function better.",
      "When designing, I enjoy thinking through every detail: from the logic of use to the final aesthetic. I'm motivated to create products that make sense, are well thought out, and generate real impact.",
    ],
    tags: ["Buenos Aires", "Open to work", "UX/UI + Frontend", "Entrepreneur"],
  },
};

export default function AboutMe() {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <section id="about" className="w-full pt-6 pb-12 px-4 sm:px-6 scroll-mt-16 md:scroll-mt-24">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <span className="text-xs font-semibold tracking-[0.18em] uppercase text-sky-400">
            {t.eyebrow}
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-50 mt-2">
            {t.title}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Párrafos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            {t.paragraphs.map((p, i) => (
              <p key={i} className="text-slate-400 text-sm leading-relaxed">
                {p}
              </p>
            ))}
          </motion.div>

          {/* Foto + Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            {/* Foto */}
            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-lg">
              <Image
                src="/foto-dai.jpg"
                alt="Daiana Lopez con figura impresa en 3D"
                width={500}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Decorative block */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col gap-3">
              <p className="text-slate-500 text-xs uppercase tracking-widest font-semibold mb-1">
                En pocas palabras
              </p>
              <div className="flex flex-wrap gap-2">
                {t.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs font-medium px-3 py-1.5 rounded-full bg-sky-400/10 text-sky-400 border border-sky-400/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-2 pt-4 border-t border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-slate-400 text-xs">
                    Disponible · Buenos Aires, Argentina
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
