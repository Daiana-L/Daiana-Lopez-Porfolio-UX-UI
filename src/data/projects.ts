export type Project = {
  slug: string;
  name: string;
  description: {
    es: string;
    en: string;
  };
  summary: {
    es: string;
    en: string;
  };
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
  prototypeNote?: {
    es: string;
    en: string;
  };
  contexto?: string;
  problema?: {
    es: string;
    en: string;
  };
  insights?: {
    es: string;
    en: string;
  };
  decisionesEstrategicas?: {
    es: string[];
    en: string[];
  };
  impacto?: {
    es: string;
    en: string;
  };
  resultado?: {
    es: string;
    en: string;
  };
  investigacion?: {
    es: string;
    en: string;
  };
  insightsClave?: {
    es: string[];
    en: string[];
  };
  decisionesDeDiseño?: {
    es: string[];
    en: string[];
  };
  aprendizajes?: {
    es: string;
    en: string;
  };
  caseStudySlices?: string[];
  caseStudyNote?: string;
  caseStudyContext?: string[];
  caseStudyTools?: string[];
  caseStudyType?: string;
  caseStudyCategory?: string;
};

export const projects: Project[] = [
  {
    slug: "DonMorfi",
    name: "DonMorfi",
    technologies: ["UX/UI Design", "Figma", "Prototyping", "User Testing"],
    description: {
      es: "DonMorfi — Pasantía | UX/UI Designer SaaS de e-commerce gastronómico tipo marketplace. Diseñé la experiencia web y el prototipo mobile en Figma, trabajando con un Design System basado en Atomic Design para asegurar consistencia, escalabilidad y un handoff eficiente a desarrollo. Por acuerdos de confidencialidad, se muestran únicamente vistas representativas del proyecto",
      en: "DonMorfi — Internship | UX/UI Designer FoodTech SaaS marketplace. I designed the web experience and mobile prototype in Figma, working with an Atomic Design-based Design System to ensure consistency, scalability, and efficient handoff to development. Due to confidentiality agreements, only representative views of the project are shown."
    },
    summary: {
      es: "SaaS gastronómico tipo marketplace. Diseño UX/UI web + prototipo mobile en Figma.",
      en: "FoodTech SaaS marketplace. UX/UI web design + mobile prototype in Figma."
    },
    image: "/Proyects-UX-UI/prototypo-mobile-portada.png",
    mobilePreviewImage: "/mobile-preview/HOME-donmorfi.png",
    mobilePreviewImages: [
      "/mobile-preview/prototypo-mobile-donmorfi.png",
      "/mobile-preview/HOME-donmorfi.png",
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
    prototypeNote: {
      es: "Nota: Esta es una muestra representativa del diseño. El prototipo completo no se incluye por motivos de confidencialidad.",
      en: "Note: This is a representative sample of the design. The complete prototype is not included for confidentiality reasons."
    },
    contexto: undefined,
    problema: {
      es: "Los usuarios necesitaban una experiencia clara y eficiente tanto para realizar pedidos como para gestionar productos, pero los flujos presentaban fricción y falta de jerarquía visual.",
      en: "Users needed a clear and efficient experience for both placing orders and managing products, but the flows presented friction and lack of visual hierarchy."
    },
    decisionesEstrategicas: {
      es: [
        "Reorganicé la jerarquía visual priorizando acciones principales.",
        "Simplifiqué los flujos de pedido reduciendo pasos innecesarios.",
        "Diseñé un sistema de componentes reutilizables basado en Atomic Design.",
        "Mejoré la claridad del dashboard administrativo para facilitar la gestión diaria."
      ],
      en: [
        "Reorganized visual hierarchy prioritizing main actions.",
        "Simplified order flows reducing unnecessary steps.",
        "Designed a reusable component system based on Atomic Design.",
        "Improved clarity of administrative dashboard to facilitate daily management."
      ]
    },
    impacto: {
      es: "El rediseño permitió una navegación más intuitiva, mayor claridad en la gestión de productos y una experiencia más fluida tanto para clientes como para administradores.",
      en: "The redesign enabled more intuitive navigation, greater clarity in product management and a smoother experience for both customers and administrators."
    },
    aprendizajes: {
      es: "Trabajar en un producto real durante 6 meses me permitió comprender la importancia de diseñar considerando limitaciones técnicas, tiempos de desarrollo y coherencia entre diseño e implementación.",
      en: "Working on a real product for 6 months allowed me to understand the importance of designing considering technical limitations, development times, and coherence between design and implementation."
    }
  },
  {
    slug: "correo-argentino",
    name: "Rediseño UX/UI — Correo Argentino",
    technologies: ["UX Research", "Heuristic Evaluation", "Journey Map", "Tree Testing", "A/B Testing", "FVD Matrix", "Lean UX", "Figma", "Design System", "Prototyping"],
    description: {
      es: "Rediseño end-to-end del sitio de Correo Argentino, uno de los servicios postales más usados del país. Identifiqué problemas críticos de usabilidad mediante evaluación heurística, encuestas, entrevistas y tree testing. Sinteticé los hallazgos en una user persona, journey maps y una matriz de necesidades, y definí el MVP con una matriz FVD. El rediseño incluyó wireframes evolutivos, A/B testing de componentes clave y validación con usuarios reales que alcanzaron un 80% de tasa de éxito en las tareas principales. El prototipo de alta fidelidad está actualmente en desarrollo.",
      en: "End-to-end redesign of Correo Argentino's website, one of the country's most used postal services. I identified critical usability issues through heuristic evaluation, surveys, interviews, and tree testing. I synthesized findings into a user persona, journey maps, and a needs matrix, then defined the MVP using an FVD matrix. The redesign included evolutionary wireframes, A/B testing of key components, and real user validation achieving an 80% task success rate. The high-fidelity prototype is currently in development."
    },
    summary: {
      es: "Rediseño UX/UI end-to-end con research, validación con usuarios y 80% de tasa de éxito en testing.",
      en: "End-to-end UX/UI redesign with research, user validation and 80% task success rate in testing."
    },
    image: "/correo-argentino/slice-01.png",
    youtube: "",
    caseStudySlices: [1, 2, 8, 19, 25, 28, 36, 48, 53, 70, 75, 77, 78, 79, 81].map((n) => `/correo-argentino/slice-${String(n).padStart(2, "0")}.png`),
    caseStudyNote: "El prototipo de alta fidelidad se encuentra actualmente en desarrollo.",
    caseStudyContext: ["Académico", "Grupal"],
    caseStudyTools: ["Figma", "Google Forms", "Maze"],
    caseStudyType: "REDISEÑO UX/UI · END-TO-END",
    caseStudyCategory: "PROYECTO ACADÉMICO · UX RESEARCH + UI DESIGN",
  },
  {
    slug: "chillalabs",
    name: "ChillaLabs",
    technologies: ["UX Research", "Figma", "UX/UI Design", "Prototyping"],
    description: {
      es: "Cliente real: mi propio emprendimiento. ChillaLabs es mi negocio de figuras 3D pintadas a mano, y yo fui tanto la diseñadora como la cliente. Identifiqué una necesidad concreta — no tener presencia digital — y diseñé la solución completa: identidad visual, catálogo de productos y experiencia de contacto. El resultado está en uso real y activo.",
      en: "Real client: my own business. ChillaLabs is my hand-painted 3D figures venture, and I was both the designer and the client. I identified a concrete need — no digital presence — and designed the complete solution: visual identity, product catalog and contact experience. The result is live and actively in use."
    },
    summary: {
      es: "Diseño UX/UI para negocio real propio — identidad, catálogo y experiencia de contacto en producción.",
      en: "UX/UI design for my own real business — identity, catalog and contact experience in production."
    },
    image: "/chillalabs/slice-01.png",
    youtube: "",
    caseStudySlices: Array.from({ length: 5 }, (_, i) => `/chillalabs/slice-${String(i + 1).padStart(2, "0")}.png`),
    problema: {
      es: "ChillaLabs no contaba con un catálogo digital donde los clientes pudieran ver los productos disponibles. Las consultas se gestionaban de forma informal por redes sociales, sin información clara sobre precios, stock ni variantes. Esto generaba fricción en el proceso de compra y dificultaba el crecimiento del negocio.",
      en: "ChillaLabs had no digital catalog where clients could browse available products. Inquiries were handled informally through social media, with no clear information on pricing, stock or variants. This created friction in the buying process and hindered business growth."
    },
    impacto: {
      es: "El diseño permitió centralizar el catálogo de productos en un solo lugar accesible, mejorar la comunicación con los clientes y darle al emprendimiento una imagen profesional y coherente. Esto facilitó el proceso de venta y aumentó la confianza de los compradores.",
      en: "The design made it possible to centralize the product catalog in one accessible place, improve communication with clients and give the venture a professional and coherent image. This streamlined the sales process and increased buyer confidence."
    },
    caseStudyContext: ["Proyecto Personal", "Negocio"],
    caseStudyTools: ["Figma", "React", "Next.js", "Tailwind CSS"],
    caseStudyType: "DISEÑO UX/UI · END-TO-END",
    caseStudyCategory: "PROYECTO PERSONAL · UX RESEARCH + UI DESIGN",
  },
  {
    slug: "studioconnect",
    name: "StudioConnect",
    description: {
      es: "Plataforma web para conectar músicos con estudios de grabación. Rol como Frontend Developer & UX/UI Designer: diseño de interfaces en Figma, formularios de autenticación/registro, integración de geolocalización, desarrollo de páginas clave (reservas, dashboard, perfiles) y manejo de estado global con Zustand.",
      en: "Web platform to connect musicians with recording studios. Role as Frontend Developer & UX/UI Designer: interface design in Figma, authentication/registration forms, geolocation integration, development of key pages (bookings, dashboard, profiles) and global state management with Zustand."
    },
    summary: {
      es: "Plataforma web para conectar músicos con estudios de grabación. UX/UI + Frontend.",
      en: "Web platform to connect musicians with recording studios. UX/UI + Frontend."
    },
    image: "/Proyects-UX-UI/S1.png",
    technologies: ["UX Research", "Figma", "React", "Next.js", "Tailwind CSS", "Zustand"],
    mobilePreviewImage: "/mobile-preview/HOME-studioconnect.png",
    mobilePreviewImages: [
      "/mobile-preview/studioconnet-studio.png",
      "/mobile-preview/HOME-studioconnect.png",
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
    contexto: undefined,
    problema: {
      es: "Los usuarios necesitaban un proceso de reserva claro y confiable, pero la estructura inicial carecía de una arquitectura bien definida y jerarquía visual consistente.",
      en: "Users needed a clear and reliable booking process, but the initial structure lacked well-defined architecture and consistent visual hierarchy."
    },
    insights: {
      es: "La información clave no estaba priorizada.\nEl flujo de reserva generaba dudas en pasos intermedios.\nLa navegación no guiaba correctamente la acción principal.",
      en: "Key information was not prioritized.\nThe booking flow generated doubts in intermediate steps.\nNavigation did not correctly guide the main action."
    },
    decisionesEstrategicas: {
      es: [
        "Rediseñé el flujo de autenticación y reserva para hacerlo más directo.",
        "Mejoré la jerarquía visual destacando acciones primarias.",
        "Implementé consistencia en componentes para reforzar identidad y claridad."
      ],
      en: [
        "Redesigned authentication and booking flow to make it more direct.",
        "Improved visual hierarchy highlighting primary actions.",
        "Implemented consistency in components to reinforce identity and clarity."
      ]
    },
    resultado: {
      es: "El proyecto evolucionó hacia una experiencia más estructurada y clara, enfocada en reducir fricción y facilitar la conversión.",
      en: "The project evolved towards a more structured and clear experience, focused on reducing friction and facilitating conversion."
    }
  },
  {
    slug: "TaskApp",
    name: "TaskApp",
    technologies: ["UX Research", "User Interviews", "Figma", "Atomic Design", "Prototyping"],
    description: {
      es: "Proceso UX completo desde cero, sin atajos. Este proyecto académico priorizó la metodología por encima del resultado visual: desk research, entrevistas con usuarios reales, benchmarking, mapas de afinidad y empatía, proto-personas, card sorting, definición de MVP, user flows y diseño UI con Atomic Design. Es el proyecto donde más profundicé en investigación y donde aprendí a tomar decisiones de diseño basadas en evidencia.",
      en: "Complete UX process from scratch, no shortcuts. This academic project prioritized methodology over visual output: desk research, real user interviews, benchmarking, affinity and empathy maps, proto-personas, card sorting, MVP definition, user flows and UI design with Atomic Design. It is the project where I went deepest into research and learned to make evidence-based design decisions."
    },
    summary: {
      es: "Proceso UX completo — research, síntesis, arquitectura de información y prototipo interactivo.",
      en: "Full UX process — research, synthesis, information architecture and interactive prototype."
    },
    image: "/Proyect-portadas/TaskApp-portada.png",
    mobilePreviewImages: [
      "/Proyects-UX-UI/Task-App.png"
    ],
    youtube: "https://www.youtube.com/watch?v=6ZB_oYsGi3s",
    contexto: undefined,
    investigacion: {
      es: "Incluyó entrevistas, benchmarking, mapas de afinidad, proto-personas y card sorting para comprender necesidades reales de usuarios.",
      en: "Included interviews, benchmarking, affinity maps, proto-personas and card sorting to understand real user needs."
    },
    insightsClave: {
      es: [
        "Los usuarios priorizan simplicidad sobre funciones complejas.",
        "La organización visual impacta directamente en la percepción de productividad.",
        "Las tareas colaborativas requieren claridad en estados y responsabilidades."
      ],
      en: [
        "Users prioritize simplicity over complex functions.",
        "Visual organization directly impacts productivity perception.",
        "Collaborative tasks require clarity in states and responsibilities."
      ]
    },
    decisionesDeDiseño: {
      es: [
        "Definí un MVP enfocado en funciones esenciales.",
        "Diseñé arquitectura de información clara basada en card sorting.",
        "Apliqué Atomic Design para mantener consistencia visual."
      ],
      en: [
        "Defined an MVP focused on essential functions.",
        "Designed clear information architecture based on card sorting.",
        "Applied Atomic Design to maintain visual consistency."
      ]
    },
    aprendizajes: {
      es: "Este proyecto reforzó la importancia de validar hipótesis antes de diseñar y estructurar decisiones en base a evidencia.",
      en: "This project reinforced the importance of validating hypotheses before designing and structuring decisions based on evidence."
    }
  },
];

