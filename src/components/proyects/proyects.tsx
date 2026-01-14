import React from 'react'
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { projects } from "@/data/projects";

function Proyects() {
  return (
    <div>
     <section id="projects" className="pt-6 pb-10 bg-black scroll-mt-24 px-4 sm:px-6">
  <motion.div
    className="max-w-6xl mx-auto flex flex-col items-center text-center"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <h2 className="text-2xl sm:text-2xl md:text-3xl font-bold mb-10 text-sky-600">
      Proyectos UX/UI Designer
    </h2>

    {/* Grid responsive */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 w-full">
      {projects.map((project, index) => (
        <motion.div
          key={index}
          className="bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition overflow-hidden flex flex-col"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <Image
            src={project.image}
            alt={project.name}
            width={600}
            height={300}
            className="w-full h-48 sm:h-56 md:h-54 object-cover"
          />
          <div className="p-4 sm:p-6 text-left flex flex-col flex-grow">
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 text-sky-400">
              {project.name}
            </h3>
            <p className="mb-4 text-gray-300 text-sm sm:text-base flex-grow">
              {project.description}
            </p>
            <Link
              href={`/proyectos/${project.slug}`}
              className="inline-flex items-center justify-center bg-sky-600 hover:bg-sky-700 text-white font-semibold py-2 px-4 rounded-lg transition text-sm sm:text-base w-fit mb-3"
            >
              Ver proyecto
            </Link>
          </div>
        </motion.div>
      ))}
    </div>
  </motion.div>
</section>

    </div>
  )
}

export default Proyects;
