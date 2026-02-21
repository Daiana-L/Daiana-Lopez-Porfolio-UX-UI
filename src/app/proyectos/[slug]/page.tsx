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

    const mainImage = project.imagesLarge ?? project.image;

    return (
        <main className="bg-black text-white font-sans min-h-screen">
            <Navbar />

            <section className="max-w-3xl mx-auto px-4 sm:px-6 pt-30 pb-12">
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

                {project.imagesLarge?.map((img, index) => (
                    <div
                        key={index}
                        className="bg-gray-900 rounded-lg overflow-hidden shadow-lg mb-6"
                    >
                        <Image
                            src={img}
                            alt={`${project.name} ${index + 1}`}
                            width={1200}
                            height={700}
                            className="w-full h-auto object-cover"
                        />
                    </div>
                ))}
                {/* PROTOTIPO INTERACTIVO */}
                <div className="mt-10">
                    <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl bg-gray-900 aspect-video">
                        <iframe
                            src="https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/proto/zM0KQFssP27RVr1M5qzrPG/DonMorfi-web?node-id=127-3097&t=HxDyV3D4QiGbrlQ9-0&scaling=scale-down-width&content-scaling=fixed&page-id=59%3A41&starting-point-node-id=127%3A3097"
                             className="absolute top-0 left-0 w-full h-full border-0"
                            allowFullScreen
                        />
                    </div>
                </div>
                   <div className="mt-10">
                    <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl bg-gray-900 aspect-video">
                        <iframe
                            src="https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/proto/zM0KQFssP27RVr1M5qzrPG/DonMorfi-web?node-id=1-168&t=HxDyV3D4QiGbrlQ9-0&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A168"
                            className="absolute top-0 left-0 w-full h-full border-0"
                            allowFullScreen
                        />
                    </div>
                </div>
                  <div className="mt-10">
                    <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl bg-gray-900 aspect-video">
                        <iframe
                            src="https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/proto/zM0KQFssP27RVr1M5qzrPG/DonMorfi-web?node-id=127-4504&t=HxDyV3D4QiGbrlQ9-0&scaling=scale-down-width&content-scaling=fixed&page-id=127%3A4503&starting-point-node-id=127%3A4504"
                            className="absolute top-0 left-0 w-full h-full border-0"
                            allowFullScreen
                        />
                    </div>
                </div>
                <p className="text-sm text-gray-400 text-center mb-6 mt-5 max-w-2xl mx-auto">
                    Nota: Esta es una muestra representativa del diseño. El
                    prototipo completo no se incluye por motivos de
                    confidencialidad.
                </p>
            </section>
        </main>
    );
}
