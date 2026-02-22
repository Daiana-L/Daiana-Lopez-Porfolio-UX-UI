import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800/50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo y nombre */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-cyan-400 rounded-lg flex items-center justify-center">
              <span className="text-black font-bold text-sm">DL</span>
            </div>
            <span className="text-white font-semibold text-sm">Daiana Lopez</span>
          </div>

          {/* Navegación */}
          <nav className="flex items-center gap-8">
            <Link 
              href="/#projects" 
              className="text-gray-400 hover:text-white transition-colors duration-200 text-sm font-medium"
            >
              Proyectos
            </Link>
            <Link 
              href="/#tech" 
              className="text-gray-400 hover:text-white transition-colors duration-200 text-sm font-medium"
            >
              Stack
            </Link>
            <Link 
              href="/#contact" 
              className="text-gray-400 hover:text-white transition-colors duration-200 text-sm font-medium"
            >
              Contacto
            </Link>
          </nav>

          {/* Copyright */}
          <div className="text-gray-500 text-sm">
            © 2026 Daiana Lopez. Todos los derechos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
}
