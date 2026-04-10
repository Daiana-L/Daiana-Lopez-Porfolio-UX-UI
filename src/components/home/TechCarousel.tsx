"use client";

import Image from "next/image";
import { animate, motion, useMotionValue } from "framer-motion";
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { useLanguage } from '@/contexts/LanguageContext';
import { getTranslation } from '@/translations';

type TechItem = {
    name: string;
    logoSrc?: string;
};

type TechCarouselProps = {
    title?: string;
    items?: TechItem[];
};

const techColors: { [key: string]: { bg: string; text: string } } = {
    React: { bg: "bg-cyan-900/50", text: "text-cyan-400" },
    HTML: { bg: "bg-orange-900/50", text: "text-orange-400" },
    CSS: { bg: "bg-blue-900/50", text: "text-blue-400" },
    JavaScript: { bg: "bg-yellow-900/50", text: "text-yellow-400" },
    "Next.js": { bg: "bg-gray-800/50", text: "text-gray-300" },
    "Tailwind CSS": { bg: "bg-cyan-900/50", text: "text-cyan-400" },
    Figma: { bg: "bg-purple-900/50", text: "text-purple-400" },
    "Adobe (Photoshop)": { bg: "bg-blue-900/50", text: "text-blue-400" },
    Webflow: { bg: "bg-pink-900/50", text: "text-pink-400" },
    "Claude Code": { bg: "bg-orange-900/50", text: "text-orange-300" },
};

export default function TechCarousel({
    title,
    items,
}: TechCarouselProps) {
    const { language } = useLanguage();
    const t = getTranslation('technologies', language);
    
    const defaultItems = useMemo<TechItem[]>(
        () => [
            { name: "Figma" },
            { name: "React" },
            { name: "HTML" },
            { name: "CSS" },
            { name: "JavaScript" },
            { name: "Next.js" },
            { name: "Tailwind CSS" },
            { name: "Figma make" },
            { name: "Wireframe" },
            { name: "Adobe" },
            { name: "Claude Code" },
        ],
        []
    );

    const techItems = items?.length ? items : defaultItems;

    const loopItems = useMemo(() => [...techItems, ...techItems], [techItems]);
    const trackRef = useRef<HTMLDivElement | null>(null);
    const x = useMotionValue(0);
    const [halfWidth, setHalfWidth] = useState(0);
    const [speedPxPerSecond, setSpeedPxPerSecond] = useState(60);

    useEffect(() => {
        const updateSpeed = () => {
            setSpeedPxPerSecond(window.innerWidth < 640 ? 90 : 60);
        };

        updateSpeed();
        window.addEventListener("resize", updateSpeed);
        return () => window.removeEventListener("resize", updateSpeed);
    }, []);

    useLayoutEffect(() => {
        const el = trackRef.current;
        if (!el) return;

        const measure = () => {
            const full = el.scrollWidth;
            setHalfWidth(Math.floor(full / 2));
        };

        measure();

        const ro = new ResizeObserver(() => measure());
        ro.observe(el);
        return () => ro.disconnect();
    }, [loopItems]);

    useEffect(() => {
        if (!halfWidth) return;

        x.set(0);
        const durationSeconds = halfWidth / speedPxPerSecond;
        const controls = animate(x, [0, -halfWidth], {
            ease: "linear",
            duration: durationSeconds,
            repeat: Infinity,
            repeatType: "loop",
        });

        return () => controls.stop();
    }, [halfWidth, speedPxPerSecond, x]);

    return (
        <section id="tech" className="pt-2 sm:pt-4 pb-10 scroll-mt-16 md:scroll-mt-24 px-4 sm:px-6">
            <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
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

                {/* Carousel Container */}
                <div className="relative w-full overflow-hidden">
                    <motion.div
                        ref={trackRef}
                        className="flex gap-4 whitespace-nowrap will-change-transform"
                        style={{ x }}
                    >
                        {loopItems.map((tech, index) => {
                            const colors = techColors[tech.name] || { bg: "bg-gray-800/50", text: "text-gray-300" };
                            return (
                                <div
                                    key={`${tech.name}-${index}`}
                                    className="shrink-0 w-[180px] sm:w-[200px] md:w-[220px] bg-gray-900/50 border border-gray-800/50 rounded-2xl p-3 transition duration-300 hover:bg-gray-900/70 hover:border-gray-700/50"
                                >
                                    <div className="flex items-center gap-2.5">
                                        {/* Icon */}
                                        <div className={`h-10 w-10 rounded-xl ${colors.bg} border border-gray-700/50 flex items-center justify-center flex-shrink-0`}>
                                            <span className={`${colors.text} font-bold text-xs`}>
                                                {tech.name.slice(0, 2).toUpperCase()}
                                            </span>
                                        </div>
                                        
                                        {/* Text */}
                                        <p className="text-gray-300 text-sm font-medium leading-tight">
                                            {tech.name}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
