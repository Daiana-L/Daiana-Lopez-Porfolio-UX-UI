"use client";
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { getTranslation } from '@/translations';

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="fixed right-4 top-1/2 transform -translate-y-1/2 z-40 
                 bg-gradient-to-br from-sky-400 to-cyan-500 
                 hover:from-sky-300 hover:to-cyan-400 
                 text-[#07091C] font-bold 
                 w-12 h-12 sm:w-14 sm:h-14 
                 rounded-full 
                 shadow-lg hover:shadow-xl 
                 transition-all duration-300 ease-in-out 
                 flex items-center justify-center
                 border-2 border-white/20
                 backdrop-blur-sm
                 group"
      aria-label={language === 'es' ? 'Cambiar idioma a inglés' : 'Switch language to Spanish'}
      role="button"
    >
      <span className="text-sm sm:text-base font-bold tracking-wider select-none">
        {language.toUpperCase()}
      </span>
      
      {/* Hover indicator */}
      <div className="absolute right-full mr-2 top-1/2 transform -translate-y-1/2 
                      bg-gray-900 text-white text-xs px-2 py-1 rounded 
                      opacity-0 group-hover:opacity-100 
                      transition-opacity duration-200 
                      whitespace-nowrap pointer-events-none">
        {language === 'es' ? 'Switch to EN' : 'Cambiar a ES'}
      </div>
    </button>
  );
}
