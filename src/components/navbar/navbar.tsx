"use client";
import React, { useState } from 'react';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
import Link from "next/link";
import { useLanguage } from '@/contexts/LanguageContext';
import { getTranslation } from '@/translations';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { language } = useLanguage();
  const t = getTranslation('navbar', language);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed w-full bg-gray-900/80 backdrop-blur-md shadow-lg z-50">
      <div className="flex justify-between items-center w-full px-6 py-4 max-w-4xl mx-auto">
        {/* Logo con foto + nombre */}
        <Link
          href="/"
          className="flex items-center gap-6 font-bold md:text-xs text-white hover:text-sky-400 transition"
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
          <li>
            <a href="/#about" className="font-medium text-sm text-[#94A3B8] hover:text-[#07091C] hover:bg-[#1CCDEC] rounded-lg px-4 py-2 transition-all duration-300 ease-in-out">
              {t.about}
            </a>
          </li>
          <li>
            <a href="/#technologies" className="font-medium text-sm text-[#94A3B8] hover:text-[#07091C] hover:bg-[#1CCDEC] rounded-lg px-3 py-2 transition-all duration-300 ease-in-out">
              {t.technologies}
            </a>
          </li>
          <li>
            <a href="/#services" className="font-medium text-sm text-[#94A3B8] hover:text-[#07091C] hover:bg-[#1CCDEC] rounded-lg px-3 py-2 transition-all duration-300 ease-in-out">
              {t.services}
            </a>
          </li>
          <li>
            <a href="/#projects" className="font-medium text-sm text-[#94A3B8] hover:text-[#07091C] hover:bg-[#1CCDEC] rounded-lg px-3 py-2 transition-all duration-300 ease-in-out">
              {t.projects}
            </a>
          </li>
          <li>
            <a href="/#contact" className="font-medium text-sm text-[#94A3B8] hover:text-[#07091C] hover:bg-[#1CCDEC] rounded-lg px-3 py-2 transition-all duration-300 ease-in-out">
              {t.contact}
            </a>
          </li>
        </ul>

        {/* Botón hamburguesa */}
        <div className="md:hidden text-white text-2xl cursor-pointer" onClick={toggleMenu}>
          {isOpen ? <HiOutlineX /> : <HiOutlineMenu />}
        </div>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <ul className="md:hidden bg-gray-900/80 backdrop-blur-md flex flex-col items-center space-y-3 py-4">
          <li>
            <a href="/#about" onClick={toggleMenu} className="font-medium text-sm text-[#94A3B8] hover:text-[#07091C] hover:bg-[#1CCDEC] rounded-lg px-4 py-2 transition-all duration-300 ease-in-out">
              {t.about}
            </a>
          </li>
          <li>
            <a href="/#technologies" onClick={toggleMenu} className="font-medium text-sm text-[#94A3B8] hover:text-[#07091C] hover:bg-[#1CCDEC] rounded-lg px-3 py-2 transition-all duration-300 ease-in-out">
              {t.technologies}
            </a>
          </li>
          <li>
            <a href="/#services" onClick={toggleMenu} className="font-medium text-sm text-[#94A3B8] hover:text-[#07091C] hover:bg-[#1CCDEC] rounded-lg px-3 py-2 transition-all duration-300 ease-in-out">
              {t.services}
            </a>
          </li>
          <li>
            <a href="/#projects" onClick={toggleMenu} className="font-medium text-sm text-[#94A3B8] hover:text-[#07091C] hover:bg-[#1CCDEC] rounded-lg px-3 py-2 transition-all duration-300 ease-in-out">
              {t.projects}
            </a>
          </li>
          <li>
            <a href="/#contact" onClick={toggleMenu} className="font-medium text-sm text-[#94A3B8] hover:text-[#07091C] hover:bg-[#1CCDEC] rounded-lg px-3 py-2 transition-all duration-300 ease-in-out">
              {t.contact}
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
