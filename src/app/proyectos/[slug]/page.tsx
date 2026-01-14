import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/navbar/navbar";
import { projects } from "@/data/projects";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const mainImage = project.imageLarge ?? project.image;

  return (
    <main className="bg-black text-white font-sans min-h-screen">
      <Navbar />

      <section className="max-w-3xl mx-auto px-4 sm:px-6 pt-40 pb-12">
        <Link
          href="/#projects"
          className="text-sky-500 hover:underline text-sm sm:text-base"
        >
          Volver a proyectos
        </Link>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-4 mb-4 text-sky-400">
          {project.name}
        </h1>

        <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-8">
          {project.description}
        </p>

        <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg">
          <Image
            src={mainImage}
            alt={project.name}
            width={1200}
            height={700}
            className="w-full h-auto object-cover"
          />
        </div>
      </section>
    </main>
  );
}