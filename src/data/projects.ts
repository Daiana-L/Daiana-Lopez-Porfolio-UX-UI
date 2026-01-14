export type Project = {
  slug: string;
  name: string;
  description: string;
  image: string;
  imagesLarge?: string[];
  youtube: string;
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
  {
    slug: "DonMorfi",
    name: "DonMorfi",
    description:
      "DonMorfi — Pasantía | Frontend Developer & UX/UI Designer (SaaS de e-commerce gastronómico tipo marketplace). Proyecto UX/UI real en desarrollo; por confidencialidad no se muestran pantallas finales",
    image: "/Proyect-portadas/donMorfi-portada.png",
    imagesLarge: [
      "/Proyects-UX-UI/Home.png",
      "/Proyects-UX-UI/Branding-DonMorfi.png",
      "/Proyects-UX-UI/mobileApp.png"
    ],
    youtube: "https://www.youtube.com/watch?v=XJMVlnWBzQQ",
  },
];

