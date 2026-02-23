"use client";

import { useState } from "react";

type FigmaEmbedProps = {
    src: string;
    title: string;
    className?: string;
    maxWidth?: string;
};

export default function FigmaEmbed({ src, title, className, maxWidth }: FigmaEmbedProps) {
    const [loaded, setLoaded] = useState(false);

    return (
        <div className={`${maxWidth || ""} mx-auto`}>
            <div
                className={`relative w-full rounded-2xl overflow-hidden shadow-2xl bg-gray-900 aspect-video ${className ?? ""}`}
            >
                {!loaded ? (
                    <div className="absolute inset-0 bg-gray-800 animate-pulse" />
                ) : null}

                <iframe
                    title={title}
                    src={src}
                    className={`absolute inset-0 w-full h-full border-0 transition-opacity duration-300 ${
                        loaded ? "opacity-100" : "opacity-0"
                    }`}
                    onLoad={() => setLoaded(true)}
                    allowFullScreen
                />
            </div>
        </div>
    );
}
