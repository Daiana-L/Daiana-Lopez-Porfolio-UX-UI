"use client";
import React, { useState, useEffect } from 'react';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
import Link from "next/link";
import { useLanguage } from '@/contexts/LanguageContext';
import { getTranslation } from '@/translations';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { language } = useLanguage();
  const t = getTranslation('navbar', language);

  // Bloquear scroll del body cuando el sidebar está abierto
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const links = [
    { href: '/#about',        label: t.about },
    { href: '/#tech',         label: t.technologies },
    { href: '/#projects',     label: t.projects },
    { href: '/#education',    label: t.education },
    { href: '/#testimonials', label: t.testimonials },
    { href: '/#contact',      label: t.contact },
  ];

  return (
    <>
      <nav className="fixed w-full bg-gray-900/80 backdrop-blur-md shadow-lg z-50">
        <div className="flex justify-between items-center w-full px-6 py-4 max-w-4xl mx-auto">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 font-bold text-sm text-white hover:text-sky-400 transition"
          >
            <img
              src="/foto-logo.png"
              alt="Daiana Celeste Lopez"
              className="w-10 h-10 rounded-full object-cover"
            />
            Daiana Celeste Lopez
          </Link>

          {/* Menu Desktop */}
          <ul className="hidden md:flex space-x-3 font-medium">
            {links.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className="font-medium text-sm text-[#94A3B8] hover:text-[#07091C] hover:bg-[#1CCDEC] rounded-lg px-3 py-2 transition-all duration-300 ease-in-out"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* Botón hamburguesa */}
          <button
            className="md:hidden text-white text-2xl cursor-pointer p-1"
            onClick={() => setIsOpen(true)}
            aria-label="Abrir menú"
          >
            <HiOutlineMenu />
          </button>
        </div>
      </nav>

      {/* ── SIDEBAR MOBILE ── */}

      {/* Overlay */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 z-[60] bg-black/40 transition-opacity duration-300 md:hidden ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* Panel */}
      <aside
        className={`fixed top-0 right-0 h-full w-72 z-[70] flex flex-col
          bg-[#07091C] border-l border-white/10
          transition-transform duration-300 ease-in-out md:hidden
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Cabecera del sidebar */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
          <div className="flex items-center gap-3">
            <img
              src="/foto-logo.png"
              alt="Daiana"
              className="w-9 h-9 rounded-full object-cover border border-sky-400/30"
            />
            <div>
              <p className="text-slate-50 font-semibold text-sm leading-tight">Daiana Lopez</p>
              <p className="text-sky-400 text-xs">UX/UI Designer</p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Cerrar menú"
            className="text-slate-400 hover:text-slate-50 transition text-xl p-1"
          >
            <HiOutlineX />
          </button>
        </div>

        {/* Links */}
        <nav className="flex flex-col gap-1 px-4 py-6 flex-1">
          {links.map(({ href, label }, i) => (
            <a
              key={href}
              href={href}
              onClick={() => setIsOpen(false)}
              style={{ transitionDelay: isOpen ? `${i * 40}ms` : '0ms' }}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium
                text-slate-300 hover:text-sky-400 hover:bg-sky-400/10
                transition-all duration-200
                ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400/50 flex-shrink-0" />
              {label}
            </a>
          ))}
        </nav>

        {/* Footer del sidebar */}
        <div className="px-6 py-5 border-t border-white/10">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-slate-500 text-xs">Disponible · Buenos Aires</span>
          </span>
        </div>
      </aside>
    </>
  );
}

export default Navbar;
