import Image from "next/image";

import FigmaEmbed from "@/components/FigmaEmbed";

type ProjectPrototype = {
    src: string;
    title?: string;
};

type ProjectResponsiveMediaProps = {
    projectName: string;
    previewImageSrc: string;
    previewImages?: string[];
    previewImageAlt?: string;
    images?: string[];
    prototypes?: ProjectPrototype[];
    prototypesPlacement?: "beforeImages" | "afterImages";
    prototypeNote?: string;
    showPreviewOnDesktop?: boolean;
};

export default function ProjectResponsiveMedia({
    projectName,
    previewImageSrc,
    previewImages,
    previewImageAlt,
    images,
    prototypes,
    prototypesPlacement = "afterImages",
    prototypeNote,
    showPreviewOnDesktop = false,
}: ProjectResponsiveMediaProps) {
    const hasPrototypes = Boolean(prototypes?.length);
    const hasImages = Boolean(images?.length);
    const hasPreviewImages = Boolean(previewImages?.length);

    const previewAlt = previewImageAlt ?? `${projectName} preview`;
    const previewList = previewImages?.length ? previewImages : [previewImageSrc];

    const prototypesBlock = hasPrototypes ? (
        <div className="space-y-10 max-w-2xl mx-auto">
            {prototypes!.map((prototype, index) => (
                <FigmaEmbed
                    key={prototype.src ?? index}
                    title={prototype.title ?? `${projectName} prototipo ${index + 1}`}
                    src={prototype.src}
                    maxWidth="max-w-2xl"
                />
            ))}

            {prototypeNote ? (
                <p className="text-sm text-gray-400 text-center max-w-2xl mx-auto">
                    {prototypeNote}
                </p>
            ) : null}
        </div>
    ) : null;

    const imagesBlock = hasImages ? (
        <div className="space-y-6">
            {images!.map((img, index) => (
                <div
                    key={img ?? index}
                    className="bg-gray-900 rounded-lg overflow-hidden shadow-lg"
                >
                    <Image
                        src={img}
                        alt={`${projectName} ${index + 1}`}
                        width={1200}
                        height={700}
                        className="w-full h-auto object-cover"
                    />
                </div>
            ))}
        </div>
    ) : null;

    // Usar las mismas imágenes de mobile-preview para web también
    const webImagesBlock = hasPreviewImages ? (
        <div className="space-y-6 max-w-3xl mx-auto">
            {previewList.map((src, index) => (
                <div
                    key={src ?? index}
                    className="bg-gray-900 rounded-lg overflow-hidden shadow-lg"
                >
                    <img
                        src={src}
                        alt={`${projectName} ${index + 1}`}
                        className="w-full h-auto object-cover"
                        loading={index === 0 ? "eager" : "lazy"}
                        decoding="async"
                    />
                </div>
            ))}
        </div>
    ) : null;

    return (
        <div className="space-y-10">
            <div
                className={
                    showPreviewOnDesktop
                        ? ""
                        : "md:hidden"
                }
            >
                <div className="space-y-6">
                    {previewList.map((src, index) => (
                        <div
                            key={src ?? index}
                            className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl"
                        >
                            <img
                                src={src}
                                alt={`${previewAlt} ${index + 1}`}
                                className="block w-full h-auto bg-black"
                                loading={index === 0 ? "eager" : "lazy"}
                                decoding="async"
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div className="md:hidden space-y-10">
                {hasImages ? imagesBlock : null}
                {hasPrototypes ? prototypesBlock : null}
            </div>

            <div className="hidden md:block space-y-10">
                {hasPreviewImages ? webImagesBlock : null}
                {hasPrototypes ? prototypesBlock : null}
            </div>
        </div>
    );
}
