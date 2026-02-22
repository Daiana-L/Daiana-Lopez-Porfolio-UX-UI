"use client";

import Image from "next/image";
import { animate, motion, useMotionValue } from "framer-motion";
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";

type TechItem = {
    name: string;
    logoSrc?: string;
};

type TechCarouselProps = {
    title?: string;
    items?: TechItem[];
};

export default function TechCarousel({
    title = "Tecnologías",
    items,
}: TechCarouselProps) {
    const defaultItems = useMemo<TechItem[]>(
        () => [
            { name: "Figma" },
            { name: "React" },
            { name: "HTML" },
            { name: "CSS" },
            { name: "JavaScript" },
            { name: "Next.js" },
            { name: "Tailwind CSS" },
            { name: "Adobe (Photoshop)" },
            { name: "Webflow" },
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
        <section id="tech" className="py-10 bg-black px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
                <div className="flex items-center justify-between gap-4 mb-8">
                    <h2 className="text-2xl sm:text-2xl md:text-3xl font-bold text-sky-600">
                        {title}
                    </h2>
                </div>

                <div className="relative w-full overflow-hidden">
                    <motion.div
                        ref={trackRef}
                        className="flex gap-4 whitespace-nowrap will-change-transform"
                        style={{ x }}
                    >
                        {loopItems.map((tech, index) => (
                            <div
                                key={`${tech.name}-${index}`}
                                className="shrink-0 w-[170px] sm:w-[190px] md:w-[210px] bg-gray-900 rounded-2xl p-5 shadow-md border border-gray-800 transition duration-300 hover:shadow-lg hover:scale-[1.02]"
                            >
                                <div className="h-16 w-full flex items-center justify-center">
                                    {tech.logoSrc ? (
                                        <Image
                                            src={tech.logoSrc}
                                            alt={tech.name}
                                            width={56}
                                            height={56}
                                            className="object-contain max-h-14 w-auto"
                                        />
                                    ) : (
                                        <div className="h-14 w-14 rounded-2xl bg-gray-800 border border-gray-700 flex items-center justify-center text-sky-500 font-semibold">
                                            {tech.name.slice(0, 2).toUpperCase()}
                                        </div>
                                    )}
                                </div>

                                <div className="mt-4 text-center">
                                    <p className="text-sm sm:text-base font-semibold text-white">
                                        {tech.name}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
