import React from 'react'
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { projects } from "@/data/projects";
import { useLanguage } from '@/contexts/LanguageContext';
import { getTranslation } from '@/translations';

function Proyects() {
  const { language } = useLanguage();
  const t = getTranslation('projects', language);

  // Helper function to safely get translated content
  const getTranslatedContent = (content: { es: string; en: string } | undefined): string => {
    if (!content) return '';
    return (content as any)[language] || content.es;
  };

  return (
    <div>
     <section id="projects" className="pt-2 sm:pt-4 pb-10 scroll-mt-16 md:scroll-mt-24 px-4 sm:px-6">
  <motion.div
    className="max-w-3xl mx-auto flex flex-col items-center text-center"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    {/* Eyebrow con líneas decorativas */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="w-12 h-px bg-gradient-to-r from-transparent to-cyan-400"></div>
          <span className="text-cyan-400 text-[8px] font-semibold tracking-[0.3em] uppercase">
            {t.eyebrow}
          </span>
          <div className="w-12 h-px bg-gradient-to-l from-transparent to-cyan-400"></div>
        </div>

        {/* Título principal */}
        <h2 className="text-xl sm:text-2xl md:text-2xl font-bold mb-6 text-white text-center leading-tight">
          {t.title}
        </h2>

        {/* Descripción */}
        <p className="text-gray-400 text-sm text-center max-w-3xl mx-auto mb-16 leading-relaxed">
          {t.description}
        </p>

    {/* Grid responsive */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 w-full">
      {projects.map((project, index) => (
        <motion.div
          key={index}
          className="bg-gray-900 border border-gray-800/50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col group"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          {/* Imagen con overlay premium */}
          <div className="relative h-32 sm:h-32 md:h-28 overflow-hidden">
            <Image
              src={project.image}
              alt={project.name}
              width={600}
              height={400}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            {/* Overlay sutil siempre visible + hover effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Badges superiores */}
            <div className="absolute top-3 left-3 flex gap-2">
              <span className="bg-white/95 backdrop-blur-sm text-gray-800 text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm">
                UX/UI
              </span>
              <span className="bg-sky-500/90 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm">
                {t.caseStudy}
              </span>
            </div>
          </div>
          
          {/* Contenido altura fija con justify-between */}
          <div className="p-3 text-left flex flex-col flex-grow justify-between">

            {/* Sección superior: título + descripción */}
            <div>
              <h3 className="text-sm sm:text-base font-bold text-white mb-1 leading-tight overflow-hidden [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2]">
                {project.name}
              </h3>
              <div className="w-10 h-0.5 bg-gradient-to-r from-sky-400 to-cyan-400 rounded-full mb-1.5" />
              <p className="text-gray-300 text-xs leading-relaxed overflow-hidden [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2]">
                {getTranslatedContent(project.summary)}
              </p>
            </div>

            {/* Sección inferior: chips + botón */}
            <div className="flex flex-col gap-2">
              <div className="flex flex-wrap gap-1">
                {project.technologies.slice(0, 2).map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="inline-flex items-center px-1.5 py-0.5 bg-gray-800/50 hover:bg-gray-800/70 text-gray-300 text-[10px] font-medium rounded-full transition-colors duration-200 border border-gray-700/50"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 2 && (
                  <span className="inline-flex items-center px-1.5 py-0.5 bg-gray-800/50 text-gray-400 text-[10px] font-medium rounded-full border border-gray-700/50">
                    +{project.technologies.length - 2}
                  </span>
                )}
              </div>
              <Link
                href={`/proyectos/${project.slug}`}
                className="inline-flex items-center justify-center bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-600 hover:to-cyan-600 text-white font-semibold py-1.5 px-4 rounded-xl transition-all duration-300 text-xs w-fit shadow-lg hover:shadow-xl hover:shadow-sky-500/25 group"
              >
                <span>{t.viewProject}</span>
                <svg className="w-3 h-3 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

          </div>
        </motion.div>
      ))}
    </div>
  </motion.div>
</section>

    </div>
  )
}

export default Proyects;
