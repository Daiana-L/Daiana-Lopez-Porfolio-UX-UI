import React from 'react'
import Image from "next/image";
import { motion } from "framer-motion";
import { PiMapPinLine } from 'react-icons/pi';

function Hero() {
  return (
    <div>
{/* Hero */}
<section
  id="about"
  className="w-full flex items-center justify-center px-4 sm:px-6
             pt-20 sm:pt-20 md:pt-20
             min-h-[60vh] md:min-h-[40vh]"
>
  <motion.div
    className="flex flex-col md:flex-row items-center gap-8 md:gap-10
               transform md:scale-[0.75] md:origin-center"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    {/* Foto */}
    <div className="md:w-1/3 flex justify-center">
      <Image
        src="/foto-profesional2.jpg"
        alt="Daiana Celeste Lopez"
        width={450}
        height={550}
        className="rounded-xl shadow-lg object-cover w-[200px] sm:w-[250px] md:w-[450px] h-auto"
      />
    </div>

    {/* Info */}
    <div className="text-center md:text-left max-w-md sm:max-w-xl md:max-w-2xl mx-auto flex flex-col items-center md:items-start">
      <div className="flex flex-col items-center justify-center gap-2 mb-2 md:flex-row md:items-center md:justify-start md:gap-3">
        <span className="w-10 h-0.5 bg-sky-400 rounded md:w-8" />
        <span className="text-base sm:text-lg block text-sky-400 font-semibold tracking-[0.12em] uppercase">
          Bienvenidos a mi porfolio profesional!
        </span>
      </div>

        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold mt-1 mb-3 text-slate-50">
        Daiana Lopez, UX/UI Designer
      </h1>

      <p className="text-sm sm:text-base md:text-xl mb-3 text-slate-400 leading-relaxed">
        Enfocada en la creación de interfaces funcionales, accesibles y centradas
        en el usuario. He realizado diversos diseños en Figma, trabajando con
        componentes reutilizables, Atomic Design y prototipos interactivos.
      </p>

      <p className="font-medium flex items-center justify-center md:justify-start gap-2 text-slate-500 mb-2">
        <PiMapPinLine size={18} className="text-sky-400" />
        <span>Buenos Aires, Argentina</span>
      </p>

      <p className="mb-10 text-slate-500 text-sm sm:text-base text-center md:text-left">
        Para conocerme mas personalmente puede usar mi{" "}
        <a
          href="#"
          className="text-sky-400 hover:text-sky-300 underline underline-offset-4"
        >
          chat de IA personalizado
        </a>
        !
      </p>

      <div className="flex flex-col sm:flex-row gap-3 sm:items-center mb-8 w-full justify-center md:justify-start">
        <a
          href="/Daiana-L-CV-UX-UI.pdf"
          download
          className="inline-flex items-center justify-center gap-2 sm:text-xl bg-gradient-to-br from-sky-400 to-cyan-500 text-[#07091C] font-semibold px-8 sm:px-6 py-4 rounded-lg hover:from-sky-300 hover:to-cyan-400 transition shadow-[0_10px_30px_rgba(56,189,248,0.18)] w-full sm:w-auto"
        >
          Descargar CV
        </a>

        <a
          href="/#projects"
          className="inline-flex items-center justify-center gap-2 sm:text-xl bg-transparent text-slate-50 font-semibold px-8 sm:px-6 py-4 rounded-lg border border-sky-400/30 hover:border-sky-400/60 hover:bg-sky-400/10 transition w-full sm:w-auto"
        >
          Ver proyectos
          <span aria-hidden className="text-sky-300">→</span>
        </a>
      </div>

   
    </div>
  </motion.div>
</section>
</div>
  )
};

export default Hero;
