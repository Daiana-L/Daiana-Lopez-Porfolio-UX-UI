import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/navbar/navbar";
import { projects } from "@/data/projects";
import ProjectResponsiveMedia from "@/components/projects/ProjectResponsiveMedia";

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

    const previewImageSrc = project.mobilePreviewImage ?? project.image;
    const previewImages = project.mobilePreviewImages?.length
        ? project.mobilePreviewImages
        : [previewImageSrc];

    return (
        <main className="bg-black text-white font-sans min-h-screen">
            <Navbar />

            <section className="max-w-3xl mx-auto px-5 sm:px-6 md:pt-30 pt-20 pb-12">
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

                <ProjectResponsiveMedia
                    projectName={project.name}
                    previewImageSrc={previewImageSrc}
                    previewImages={previewImages}
                    previewImageAlt={`${project.name} preview`}
                    images={project.imagesLarge}
                    prototypes={project.prototypes}
                    prototypesPlacement={project.prototypesPlacement}
                    prototypeNote={project.prototypeNote}
                />
            </section>
        </main>
    );
}
