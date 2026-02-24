"use client";

import { motion } from "framer-motion";
import { useLanguage } from '@/contexts/LanguageContext';
import { getTranslation } from '@/translations';

type Service = {
    titleKey: string;
    descriptionKey: string;
    icon: React.ReactNode;
};

export default function Services() {
    const { language } = useLanguage();
    const t = getTranslation('services', language);

    const services: Service[] = [
        {
            titleKey: 'uxui.title',
            descriptionKey: 'uxui.description',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
            ),
        },
        {
            titleKey: 'webDesign.title',
            descriptionKey: 'webDesign.description',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
            ),
        },
        {
            titleKey: 'appDesign.title',
            descriptionKey: 'appDesign.description',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
            ),
        },
        {
            titleKey: 'redesign.title',
            descriptionKey: 'redesign.description',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
            ),
        }
    ];

    const getServiceText = (service: Service, key: 'title' | 'description') => {
        const keys = key === 'title' ? service.titleKey : service.descriptionKey;
        const keysArray = keys.split('.');
        let value: any = t;
        for (const k of keysArray) {
            value = value[k];
        }
        return value;
    };

    return (
        <section id="services" className="py-16 scroll-mt-16 md:scroll-mt-24 px-4 sm:px-6">
            <div className="max-w-3xl mx-auto">
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

                {/* Grid de servicios */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.titleKey}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative"
                        >
                            <div className="relative h-full bg-gray-900/50 border border-gray-800/50 rounded-2xl p-4 transition-all duration-300 hover:bg-gray-900/70 hover:border-gray-700/50 hover:shadow-lg hover:shadow-cyan-500/10">
                                {/* Fondo decorativo unificado */}
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                
                                {/* Contenido */}
                                <div className="relative z-10">
                                    {/* Icono */}
                                    <div className="w-10 h-10 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                                        <span className="text-cyan-400">{service.icon}</span>
                                    </div>

                                    {/* Título */}
                                    <h3 className="text-white font-semibold text-base mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                                        {getServiceText(service, 'title')}
                                    </h3>

                                    {/* Descripción */}
                                    <p className="text-gray-400 text-xs leading-tight">
                                        {getServiceText(service, 'description')}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
