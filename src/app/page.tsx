"use client";
import Navbar from "@/components/navbar/navbar";
import Hero from "@/components/hero/hero";
import Proyects from "@/components/proyects/proyects";
import TechCarousel from "@/components/home/TechCarousel";
import Contact from "@/components/contact/contact";
import FloatingChat from "@/components/floatingChat/FloatingChat";

export default function Home() {
  return (
    <main className="bg-black text-white font-sans scroll-smooth">
      {/* Navbar */}
        <Navbar/>

      {/* Hero */}
          <Hero/>

      {/* Proyectos */}
          <Proyects/>

      {/* Tecnologías */}
          <TechCarousel />

      {/* Contacto */}
          <Contact/>
          
       {/* Chat */}
      <FloatingChat/>
    </main>
  );
};