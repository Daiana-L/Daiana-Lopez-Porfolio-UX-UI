"use client";

import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/navbar/navbar";
import { projects } from "@/data/projects";
import ProjectResponsiveMedia from "@/components/projects/ProjectResponsiveMedia";
import { PiGlobeBold, PiDeviceMobileBold, PiPaletteBold } from "react-icons/pi";
import { useLanguage } from '@/contexts/LanguageContext';
import { getTranslation } from '@/translations';

export default function ProjectPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const [slug, setSlug] = React.useState<string>('');
    const [isLoading, setIsLoading] = React.useState(true);
    const { language } = useLanguage();
    const t = getTranslation('projectDetails', language);

    React.useEffect(() => {
        const getSlug = async () => {
            const resolvedParams = await params;
            setSlug(resolvedParams.slug);
            setIsLoading(false);
        };
        getSlug();
    }, [params]);

    const project = projects.find((p) => p.slug === slug);

    if (isLoading) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center">
                <div className="text-white">Loading...</div>
            </div>
        );
    }

    if (!project || !slug) {
        notFound();
    }

    // Helper function to safely get translated content
    const getTranslatedContent = (content: { es: string; en: string } | undefined): string => {
        if (!content) return '';
        return (content as any)[language] || content.es;
    };

    const previewImageSrc = project.mobilePreviewImage ?? project.image;
    const previewImages = project.mobilePreviewImages?.length
        ? project.mobilePreviewImages
        : [previewImageSrc];

    // Determinar el tipo de proyecto basado en el contenido
    const getProjectType = () => {
        if (project.name.toLowerCase().includes('donmorfi')) return t.projectTypes.donmorfi;
        if (project.name.toLowerCase().includes('studio')) return t.projectTypes.studio;
        if (project.name.toLowerCase().includes('task')) return t.projectTypes.task;
        return t.projectTypes.default;
    };

    const getProjectCategory = () => {
        if (project.name.toLowerCase().includes('donmorfi')) return t.projectCategories.donmorfi;
        if (project.name.toLowerCase().includes('studio')) return t.projectCategories.studio;
        if (project.name.toLowerCase().includes('task')) return t.projectCategories.task;
        return t.projectCategories.default;
    };

    return (
        <main className="bg-black text-white font-sans min-h-screen">
            <Navbar />

            <div className="max-w-sm md:max-w-2xl lg:max-w-3xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pt-22 pb-16">
                {/* Back Navigation */}
                <Link
                    href="/#projects"
                    className="text-sky-500 hover:text-sky-400 text-xs sm:text-sm transition-colors inline-flex items-center gap-2 mb-5 sm:mb-2"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    {t.backToProjects}
                </Link>

                {/* Project Header */}
                <div className="mb-3">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-1">
                        <h1 className="text-base sm:text-lg md:text-xl font-bold text-white">
                            {project.name}
                        </h1>
                        <div className="flex flex-col sm:items-end gap-1">
                            <span className="text-sky-400 text-[10px] font-semibold tracking-wide uppercase">
                                {getProjectType()}
                            </span>
                            <span className="text-gray-400 text-[8px] font-medium tracking-wide uppercase">
                                {getProjectCategory()}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Project Details Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-4">
                    {/* ROL */}
                    <div className="bg-gray-900/50 border border-gray-800/50 rounded-xl p-2">
                        <h3 className="text-gray-400 text-[8px] font-semibold uppercase tracking-wider mb-1">{t.role}</h3>
                        <div className="flex flex-wrap gap-2">
                            <span className="bg-sky-500/20 text-sky-400 text-[8px] font-medium px-1.5 py-0.5 rounded-lg border border-sky-500/30">
                                {t.uxuiDesigner}
                            </span>
                            {project.technologies.includes('React') && (
                                <span className="bg-sky-500/20 text-sky-400 text-[8px] font-medium px-1.5 py-0.5 rounded-lg border border-sky-500/30">
                                    {t.frontend}
                                </span>
                            )}
                        </div>
                    </div>

                    {/* CONTEXTO */}
                    <div className="bg-gray-900/50 border border-gray-800/50 rounded-xl p-2">
                        <h3 className="text-gray-400 text-[8px] font-semibold uppercase tracking-wider mb-1">{t.context}</h3>
                        <div className="flex flex-wrap gap-2">
                            {project.technologies.includes('Figma') && (
                                <span className="bg-purple-500/20 text-purple-400 text-[8px] font-medium px-1.5 py-0.5 rounded-lg border border-purple-500/30">
                                    Figma
                                </span>
                            )}
                            {project.technologies.includes('Atomic Design') && (
                                <span className="bg-purple-500/20 text-purple-400 text-[8px] font-medium px-1.5 py-0.5 rounded-lg border border-purple-500/30">
                                    Atomic Design
                                </span>
                            )}
                        </div>
                    </div>

                    {/* HERRAMIENTAS */}
                    <div className="bg-gray-900/50 border border-gray-800/50 rounded-xl p-1">
                        <h3 className="text-gray-400 text-[8px] font-semibold uppercase tracking-wider mb-0.5">{t.tools}</h3>
                        <div className="flex flex-wrap gap-1">
                            {project.technologies.slice(0, 2).map((tech, index) => (
                                <span key={index} className="bg-gray-800 text-gray-300 text-[8px] font-medium px-1 py-0.5 rounded-lg border border-gray-700">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* TIPO */}
                    <div className="bg-gray-900/50 border border-gray-800/50 rounded-xl p-1">
                        <h3 className="text-gray-400 text-[8px] font-semibold uppercase tracking-wider mb-0.5">{t.type}</h3>
                        <div className="flex flex-wrap gap-1">
                            {project.mobilePreviewImages && (
                                <span className="bg-green-500/20 text-green-400 text-[8px] font-medium px-1 py-0.5 rounded-lg border border-green-500/30">
                                    {t.mobile}
                                </span>
                            )}
                            {project.prototypes && project.prototypes.length > 0 && (
                                <span className="bg-green-500/20 text-green-400 text-[8px] font-medium px-1 py-0.5 rounded-lg border border-green-500/30">
                                    {t.prototype}
                                </span>
                            )}
                        </div>
                    </div>
                </div>

                {/* Overview Section */}
                <div className="mb-2">
                    <h2 className="text-sm sm:text-base font-bold text-white mb-0.5 flex items-center gap-1">
                        <span className="w-0.5 h-3 bg-sky-400 rounded-full"></span>
                        {t.overview}
                    </h2>
                    <p className="text-gray-300 text-xs sm:text-xs leading-relaxed max-w-4xl">
                        {getTranslatedContent(project.description)}
                    </p>
                </div>

                {/* Strategic Narrative Sections */}
                {project.problema && (
                    <div className="mb-2">
                        <h2 className="text-sm sm:text-base font-bold text-white mb-0.5 flex items-center gap-1">
                            <span className="w-0.5 h-3 bg-orange-400 rounded-full"></span>
                            {t.problem}
                        </h2>
                        <p className="text-gray-300 text-xs sm:text-xs leading-relaxed max-w-4xl">
                            {getTranslatedContent(project.problema)}
                        </p>
                    </div>
                )}

                {project.insights && (
                    <div className="mb-2">
                        <h2 className="text-sm sm:text-base font-bold text-white mb-0.5 flex items-center gap-1">
                            <span className="w-0.5 h-3 bg-yellow-400 rounded-full"></span>
                            Insights
                        </h2>
                        <div className="text-gray-300 text-xs sm:text-xs leading-relaxed max-w-4xl whitespace-pre-line">
                            {getTranslatedContent(project.insights)}
                        </div>
                    </div>
                )}

                {project.investigacion && (
                    <div className="mb-2">
                        <h2 className="text-sm sm:text-base font-bold text-white mb-0.5 flex items-center gap-1">
                            <span className="w-0.5 h-3 bg-yellow-400 rounded-full"></span>
                            {project.insightsClave && (project.insightsClave as any).length > 0 && (
                                <ul className="text-gray-300 text-xs sm:text-xs leading-relaxed max-w-4xl space-y-1">
                                    {project.insightsClave[language as keyof typeof project.insightsClave]?.map((insight, index) => (
                                        <li key={index} className="flex items-start gap-2">
                                            <span className="text-yellow-400 mt-1">•</span>
                                            <span>{insight}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </h2>
                    </div>
                )}

                {project.decisionesEstrategicas && (project.decisionesEstrategicas as any).length > 0 && (
                    <div className="mb-2">
                        <h2 className="text-sm sm:text-base font-bold text-white mb-0.5 flex items-center gap-1">
                            <span className="w-0.5 h-3 bg-green-400 rounded-full"></span>
                            {t.strategicDecisions}
                        </h2>
                        <ul className="text-gray-300 text-xs sm:text-xs leading-relaxed max-w-4xl space-y-1">
                            {(project.decisionesEstrategicas as any)?.[language]?.map((decision: string, index: number) => (
                                <li key={index} className="flex items-start gap-2">
                                    <span className="text-green-400 mt-1">•</span>
                                    <span>{decision}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {project.decisionesDeDiseño && (project.decisionesDeDiseño as any).length > 0 && (
                    <div className="mb-2">
                        <h2 className="text-sm sm:text-base font-bold text-white mb-0.5 flex items-center gap-1">
                            <span className="w-0.5 h-3 bg-green-400 rounded-full"></span>
                            {t.designDecisions}
                        </h2>
                        <ul className="text-gray-300 text-xs sm:text-xs leading-relaxed max-w-4xl space-y-1">
                            {(project.decisionesDeDiseño as any)?.[language]?.map((decision: string, index: number) => (
                                <li key={index} className="flex items-start gap-2">
                                    <span className="text-green-400 mt-1">•</span>
                                    <span>{decision}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {project.impacto && (
                    <div className="mb-2">
                        <h2 className="text-sm sm:text-base font-bold text-white mb-0.5 flex items-center gap-1">
                            <span className="w-0.5 h-3 bg-blue-400 rounded-full"></span>
                            {t.impact}
                        </h2>
                        <p className="text-gray-300 text-xs sm:text-xs leading-relaxed max-w-4xl">
                            {getTranslatedContent(project.impacto)}
                        </p>
                    </div>
                )}

                {project.resultado && (
                    <div className="mb-2">
                        <h2 className="text-sm sm:text-base font-bold text-white mb-0.5 flex items-center gap-1">
                            <span className="w-0.5 h-3 bg-blue-400 rounded-full"></span>
                            {t.result}
                        </h2>
                        <p className="text-gray-300 text-xs sm:text-xs leading-relaxed max-w-4xl">
                            {getTranslatedContent(project.resultado)}
                        </p>
                    </div>
                )}

                {project.aprendizajes && (
                    <div className="mb-2">
                        <h2 className="text-sm sm:text-base font-bold text-white mb-0.5 flex items-center gap-1">
                            <span className="w-0.5 h-3 bg-pink-400 rounded-full"></span>
                            {t.learnings}
                        </h2>
                        <p className="text-gray-300 text-xs sm:text-xs leading-relaxed max-w-4xl">
                            {getTranslatedContent(project.aprendizajes)}
                        </p>
                    </div>
                )}

                {/* Feature Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-1 mb-2">
                    {/* Marketplace Web Card */}
                    <div className="bg-gray-900/50 border border-gray-800/50 rounded-xl p-2 hover:border-sky-500/50 transition-colors">
                        <div className="flex items-center gap-1 mb-0.5">
                            <div className="w-5 h-5 bg-sky-500/20 rounded-lg flex items-center justify-center">
                                <PiGlobeBold size={10} className="text-sky-400" />
                            </div>
                            <h3 className="text-white font-semibold text-xs">{t.marketplaceWeb}</h3>
                        </div>
                        <p className="text-gray-400 text-xs leading-relaxed">
                            {t.marketplaceWebDesc}
                        </p>
                    </div>~

                    {/* Prototipo Mobile Card */}
                    <div className="bg-gray-900/50 border border-gray-800/50 rounded-xl p-2 hover:border-sky-500/50 transition-colors">
                        <div className="flex items-center gap-1 mb-0.5">
                            <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                                <PiDeviceMobileBold size={10} className="text-purple-400" />
                            </div>
                            <h3 className="text-white font-semibold text-xs">{t.mobilePrototype}</h3>
                        </div>
                        <p className="text-gray-400 text-xs leading-relaxed">
                            {t.mobilePrototypeDesc}
                        </p>
                    </div>

                    {/* Design System Card */}
                    <div className="bg-gray-900/50 border border-gray-800/50 rounded-xl p-2 hover:border-sky-500/50 transition-colors">
                        <div className="flex items-center gap-1 mb-0.5">
                            <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                                <PiPaletteBold size={10} className="text-green-400" />
                            </div>
                            <h3 className="text-white font-semibold text-xs">{t.designSystem}</h3>
                        </div>
                        <p className="text-gray-400 text-xs leading-relaxed">
                            {t.designSystemDesc}
                        </p>
                    </div>
                </div>

                {/* Confidentiality Notice */}
                {project.prototypeNote && (
                    <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-2 mb-4">
                        <div className="flex items-start gap-2">
                            <svg className="w-3 h-3 text-yellow-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                            <div>
                                <h3 className="text-yellow-400 font-semibold mb-0.5 text-xs">{t.confidentialityNote}</h3>
                                <p className="text-yellow-200/80 text-xs">
                                    {getTranslatedContent(project.prototypeNote)}
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                {/* Project Media */}
                <ProjectResponsiveMedia
                    projectName={project.name}
                    previewImageSrc={previewImageSrc}
                    previewImages={previewImages}
                    previewImageAlt={`${project.name} preview`}
                    images={project.imagesLarge}
                    prototypes={project.prototypes}
                    prototypesPlacement={project.prototypesPlacement}
                    prototypeNote={getTranslatedContent(project.prototypeNote)}
                />
            </div>
        </main>
    );
}
