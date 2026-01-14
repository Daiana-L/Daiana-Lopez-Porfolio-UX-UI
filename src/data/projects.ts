export type Project = {
  slug: string;
  name: string;
  description: string;
  image: string;
  imageLarge?: string;
  youtube: string;
};

export const projects: Project[] = [
  {
    slug: "studioconnect",
    name: "StudioConnect",
    description: "Plataforma web colaborativa para artistas y estudios. Frontend Developer & UX/UI Designer",
    image: "/Proyect-portadas/StudioConenct-portada.png",
    imageLarge: "/Proyects-UX-UI/Studioconnect-Proyect.png",
    youtube: "https://www.youtube.com/watch?v=tRjDscwI334",
  },
  {
    slug: "TaskApp",
    name: "TaskApp",
    description: "App de gestion de tareas grupales, Proyecto para la Diplomatura en UX/UI en la UTN.BA",
    image: "/Proyect-portadas/TaskApp-portada.png",
    imageLarge: "/Proyects-UX-UI/Task-App.png",
    youtube: "https://www.youtube.com/watch?v=6ZB_oYsGi3s",
  },
  {
    slug: "DonMorfi",
    name: "DonMorfi",
    description: "DonMorfi — Pasantía | Frontend Developer & UX/UI Designer (SaaS de e-commerce gastronómico tipo marketplace)",
    image: "/Proyect-portadas/donMorfi-portada.png",
    imageLarge: "/Proyects-UX-UI/DonMorfi.png",
    youtube: "https://www.youtube.com/watch?v=XJMVlnWBzQQ",
  },
];
