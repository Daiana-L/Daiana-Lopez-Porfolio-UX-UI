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

    const previewAlt = previewImageAlt ?? `${projectName} preview`;
    const previewList = previewImages?.length ? previewImages : [previewImageSrc];

    const prototypesBlock = hasPrototypes ? (
        <div className="space-y-10">
            {prototypes!.map((prototype, index) => (
                <FigmaEmbed
                    key={prototype.src ?? index}
                    title={prototype.title ?? `${projectName} prototipo ${index + 1}`}
                    src={prototype.src}
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
                            <div className="relative w-full bg-black h-[52vh] min-h-[320px] max-h-[520px]">
                                <Image
                                    src={src}
                                    alt={previewAlt}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 0px"
                                    className="object-contain"
                                    priority={index === 0}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="md:hidden space-y-10">
                {hasPrototypes ? prototypesBlock : null}
                {hasImages ? imagesBlock : null}
            </div>

            <div className="hidden md:block">
                {prototypesPlacement === "beforeImages" ? (
                    <div className="space-y-10">
                        {hasPrototypes ? prototypesBlock : null}
                        {hasImages ? imagesBlock : null}
                    </div>
                ) : (
                    <div className="space-y-10">
                        {hasImages ? imagesBlock : null}
                        {hasPrototypes ? prototypesBlock : null}
                    </div>
                )}
            </div>
        </div>
    );
}
