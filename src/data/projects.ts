export type Project = {
  slug: string;
  name: string;
  description: string;
  summary: string;
  image: string;
  technologies: string[];
  mobilePreviewImage?: string;
  mobilePreviewImages?: string[];
  imagesLarge?: string[];
  youtube: string;
  prototypes?: Array<{
    src: string;
    title?: string;
  }>;
  prototypesPlacement?: "beforeImages" | "afterImages";
  prototypeNote?: string;
};

export const projects: Project[] = [
  {
    slug: "studioconnect",
    name: "StudioConnect",
    description:
      "Plataforma web para conectar músicos con estudios de grabación. Rol como Frontend Developer & UX/UI Designer: diseño de interfaces en Figma, formularios de autenticación/registro, integración de geolocalización, desarrollo de páginas clave (reservas, dashboard, perfiles) y manejo de estado global con Zustand.",
    summary:
      "Plataforma web para conectar músicos con estudios de grabación. UX/UI + Frontend.",
    image: "/Proyects-UX-UI/S1.png",
    technologies: ["UX Research", "Figma", "React", "Next.js", "Tailwind CSS", "Zustand"],
    mobilePreviewImage: "/mobile-preview/HOME-studioconnect.png",
    mobilePreviewImages: [
      "/mobile-preview/HOME-studioconnect.png",
      "/mobile-preview/studioconnet-studio.png",
    ],
    youtube: "https://www.youtube.com/watch?v=tRjDscwI334",
    prototypes: [
      {
        title: "Prototipo web",
        src: "https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/proto/RA3gqGTOmEkDLCWFsisvIB/studioConnect?node-id=14-25&t=4VzV52HoYFagGyyt-0&scaling=scale-down-width&content-scaling=fixed&page-id=14%3A24&starting-point-node-id=14%3A25",
      },
      {
        title: "Prototipo web",
        src: "https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/proto/RA3gqGTOmEkDLCWFsisvIB/studioConnect?node-id=1-4334&t=TvM42Bt0CnMfttio-0&scaling=scale-down-width&content-scaling=fixed&page-id=1%3A4333&starting-point-node-id=1%3A4334",
      },
    ],
    prototypesPlacement: "beforeImages",
    imagesLarge: [
      "/Proyects-UX-UI/S1.png",
      "/Proyects-UX-UI/studioconnect-dashboard.png",
      "/Proyects-UX-UI/studioconnect-studio-detail.png",
    ],
  },
  {
    slug: "DonMorfi",
    name: "DonMorfi",
    technologies: ["UX/UI Design", "Figma", "Prototyping", "User Testing"],
    description:
      "DonMorfi — Pasantía | UX/UI Designer SaaS de e-commerce gastronómico tipo marketplace. Diseñé la experiencia web y el prototipo mobile en Figma, trabajando con un Design System basado en Atomic Design para asegurar consistencia, escalabilidad y un handoff eficiente a desarrollo. Por acuerdos de confidencialidad, se muestran únicamente vistas representativas del proyecto",
    summary:
      "SaaS gastronómico tipo marketplace. Diseño UX/UI web + prototipo mobile en Figma.",
    image: "/Proyects-UX-UI/prototypo-mobile-portada.png",
    mobilePreviewImage: "/mobile-preview/HOME-donmorfi.png",
    mobilePreviewImages: [
      "/mobile-preview/HOME-donmorfi.png",
      "/mobile-preview/prototypo-mobile-donmorfi.png",
      "/mobile-preview/business-1-donmorfi.png",
    ],
    imagesLarge: [
      "/Proyects-UX-UI/prototypo-mobile-portada.png",
      "/mobile-preview/HOME-donmorfi.png",
      "/mobile-preview/prototypo-mobile-donmorfi.png",
    ],
    youtube: "https://www.youtube.com/watch?v=XJMVlnWBzQQ",
    prototypes: [
      {
        title: "Prototipo web",
        src: "https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/proto/zM0KQFssP27RVr1M5qzrPG/DonMorfi-web?node-id=127-3097&t=HxDyV3D4QiGbrlQ9-0&scaling=scale-down-width&content-scaling=fixed&page-id=59%3A41&starting-point-node-id=127%3A3097",
      },
      {
        title: "Prototipo mobile",
        src: "https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/proto/zM0KQFssP27RVr1M5qzrPG/DonMorfi-web?node-id=1-168&t=HxDyV3D4QiGbrlQ9-0&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A168",
      },
      {
        title: "Flow adicional",
        src: "https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/proto/zM0KQFssP27RVr1M5qzrPG/DonMorfi-web?node-id=127-4504&t=HxDyV3D4QiGbrlQ9-0&scaling=scale-down-width&content-scaling=fixed&page-id=127%3A4503&starting-point-node-id=127%3A4504",
      },
    ],
    prototypeNote:
      "Nota: Esta es una muestra representativa del diseño. El prototipo completo no se incluye por motivos de confidencialidad.",
  },
  {
    slug: "TaskApp",
    name: "TaskApp",
    technologies: ["UX Research", "User Interviews", "Figma", "Atomic Design", "Prototyping"],
    description:
      "Aplicación nativa para la gestión de tareas colaborativas. Incluye investigación UX (desk research, entrevistas, benchmarking, mapas de afinidad y empatía, proto-personas, cardsorting), definición de MVP, user flows y diseño UI con Atomic Design y prototipos interactivos",
    summary:
      "App nativa para gestión de tareas colaborativas con investigación UX y prototipos interactivos.",
    image: "/Proyect-portadas/TaskApp-portada.png",
    imagesLarge: [
      "/Proyects-UX-UI/Task-App.png",
    ],
    youtube: "https://www.youtube.com/watch?v=6ZB_oYsGi3s",
  },
];

