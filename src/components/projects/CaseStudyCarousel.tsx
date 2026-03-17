"use client";

import React, { useState, useCallback } from "react";

interface CaseStudyCarouselProps {
  slices: string[];
  note?: string;
}

export default function CaseStudyCarousel({ slices, note }: CaseStudyCarouselProps) {
  const [current, setCurrent] = useState(0);

  const prev = useCallback(() => setCurrent((i) => (i === 0 ? slices.length - 1 : i - 1)), [slices.length]);
  const next = useCallback(() => setCurrent((i) => (i === slices.length - 1 ? 0 : i + 1)), [slices.length]);

  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prev, next]);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6">
      {/* Image */}
      <div className="relative w-full rounded-xl overflow-hidden bg-gray-900">
        <img
          src={slices[current]}
          alt={`Slide ${current + 1}`}
          className="w-full block"
          loading="eager"
        />

        {/* Prev button */}
        <button
          onClick={prev}
          className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-black/60 hover:bg-black/80 text-white rounded-full flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Anterior"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Next button */}
        <button
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-black/60 hover:bg-black/80 text-white rounded-full flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Siguiente"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Counter */}
        <div className="absolute bottom-3 right-3 bg-black/60 text-white text-xs font-medium px-2.5 py-1 rounded-full">
          {current + 1} / {slices.length}
        </div>
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-1.5 mt-4 flex-wrap">
        {slices.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`rounded-full transition-all duration-200 cursor-pointer ${
              i === current
                ? "w-4 h-2 bg-sky-400"
                : "w-2 h-2 bg-gray-600 hover:bg-gray-400"
            }`}
            aria-label={`Ir a slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Note */}
      {note && (
        <div className="mt-6 bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4 flex items-start gap-3">
          <svg className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <p className="text-yellow-200/90 text-sm">{note}</p>
        </div>
      )}
    </div>
  );
}
