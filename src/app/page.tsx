"use client";
import Navbar from "@/components/navbar/navbar";
import Hero from "@/components/hero/hero";
import Proyects from "@/components/proyects/proyects";
import TechCarousel from "@/components/home/TechCarousel";
import Contact from "@/components/contact/contact";
import FloatingChat from "@/components/floatingChat/FloatingChat";
import Footer from "@/components/footer/footer";

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-[#07091C] to-[#0B0F28] text-white font-sans scroll-smooth">
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
          
       {/* Footer */}
       <Footer/>
          
       {/* Chat */}
      <FloatingChat/>
    </main>
  );
};