export type Project = {
  slug: string;
  name: string;
  description: string;
  image: string;
  imagesLarge?: string[];
  youtube: string;
  figmaEmbed?: string;
};

export const projects: Project[] = [
  {
    slug: "studioconnect",
    name: "StudioConnect",
    description:
      "Plataforma web para conectar músicos con estudios de grabación. Rol como Frontend Developer & UX/UI Designer: diseño de interfaces en Figma, formularios de autenticación/registro, integración de geolocalización, desarrollo de páginas clave (reservas, dashboard, perfiles) y manejo de estado global con Zustand.",
    image: "/Proyect-portadas/StudioConenct-portada.png",
    imagesLarge: [
      "/Proyects-UX-UI/Studioconnect-Proyect.png",
    ],
    youtube: "https://www.youtube.com/watch?v=tRjDscwI334",
  },
    {
    slug: "DonMorfi",
    name: "DonMorfi",
    description:
      "DonMorfi — Pasantía | UX/UI Designer SaaS de e-commerce gastronómico tipo marketplace. Diseñé la experiencia web y el prototipo mobile en Figma, trabajando con un Design System basado en Atomic Design para asegurar consistencia, escalabilidad y un handoff eficiente a desarrollo. Por acuerdos de confidencialidad, se muestran únicamente vistas representativas del proyecto",
    image: "/Proyects-UX-UI/prototypo-mobile-portada.png",
    imagesLarge: [
    ],
    youtube: "https://www.youtube.com/watch?v=XJMVlnWBzQQ",
      figmaEmbed:
    "https://embed.figma.com/design/zM0KQFssP27RVr1M5qzrPG/DonMorfi-web?node-id=0-1&embed-host=share",
  },
  {
    slug: "TaskApp",
    name: "TaskApp",
    description:
      "Aplicación nativa para la gestión de tareas colaborativas. Incluye investigación UX (desk research, entrevistas, benchmarking, mapas de afinidad y empatía, proto-personas, cardsorting), definición de MVP, user flows y diseño UI con Atomic Design y prototipos interactivos",
    image: "/Proyect-portadas/TaskApp-portada.png",
    imagesLarge: [
      "/Proyects-UX-UI/Task-App.png",
    ],
    youtube: "https://www.youtube.com/watch?v=6ZB_oYsGi3s",
  },
];

