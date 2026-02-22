import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/navbar/navbar";
import FigmaEmbed from "@/components/FigmaEmbed";
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
    const prototypesPlacement = project.prototypesPlacement ?? "afterImages";
    const prototypesSection = project.prototypes?.length ? (
        <div className="mt-10">
            {project.prototypes.map((prototype, index) => (
                <div key={prototype.src ?? index} className="mt-10">
                    <FigmaEmbed
                        title={
                            prototype.title ??
                            `${project.name} prototipo ${index + 1}`
                        }
                        src={prototype.src}
                    />
                </div>
            ))}

            {project.prototypeNote ? (
                <p className="text-sm text-gray-400 text-center mb-6 mt-5 max-w-2xl mx-auto">
                    {project.prototypeNote}
                </p>
            ) : null}
        </div>
    ) : null;

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

                {prototypesPlacement === "beforeImages" ? (
                    <div className="mb-10">{prototypesSection}</div>
                ) : null}

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
                {prototypesPlacement === "afterImages" ? prototypesSection : null}
            </section>
        </main>
    );
}
