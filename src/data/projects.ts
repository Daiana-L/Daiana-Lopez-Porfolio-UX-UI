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
      es: "Diseño que agilizó el desarrollo un 35–40% — Design System y prototipo web y mobile para SaaS gastronómico.",
      en: "Design that sped up development by 35–40% — Design System and web & mobile prototype for a FoodTech SaaS."
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
      es: "El diseño y prototipado en Figma permitió agilizar el desarrollo de interfaces web y mobile en un 35–40%, ya que los desarrolladores contaban con especificaciones claras, componentes definidos y flujos listos para implementar. Además, mejoró la navegación, la claridad en la gestión de productos y la experiencia general de clientes y administradores.",
      en: "The design and prototyping in Figma helped speed up web and mobile interface development by 35–40%, as developers had clear specifications, defined components, and ready-to-implement flows. It also improved navigation, clarity in product management, and the overall experience for both customers and administrators."
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
      es: "Rediseño end-to-end del sitio de Correo Argentino, uno de los servicios postales más usados del país. Identifiqué problemas críticos de usabilidad mediante evaluación heurística, encuestas, entrevistas y tree testing. Sinteticé los hallazgos en una user persona, journey maps y una matriz de necesidades, y definí el MVP con una matriz FVD. El rediseño incluyó wireframes evolutivos, A/B testing de componentes clave y validación con usuarios reales que alcanzaron un 80% de tasa de éxito en las tareas principales.",
      en: "End-to-end redesign of Correo Argentino's website, one of the country's most used postal services. I identified critical usability issues through heuristic evaluation, surveys, interviews, and tree testing. I synthesized findings into a user persona, journey maps, and a needs matrix, then defined the MVP using an FVD matrix. The redesign included evolutionary wireframes, A/B testing of key components, and real user validation achieving an 80% task success rate."
    },
    summary: {
      es: "80% de tasa de éxito en testing — rediseño end-to-end con research, wireframes y validación con usuarios reales.",
      en: "80% task success rate in testing — end-to-end redesign with research, wireframes and real user validation."
    },
    image: "/correo-argentino/slice-01.png",
    youtube: "",
    caseStudySlices: [1, 2, 8, 19, 25, 28, 36, 48, 53, 70, 75, 77, 78, 79, 81].map((n) => `/correo-argentino/slice-${String(n).padStart(2, "0")}.png`),
caseStudyContext: ["Académico", "Individual"],
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
      es: "De cero a presencia digital activa — diseño completo de identidad y catálogo para mi propio emprendimiento.",
      en: "From zero to live digital presence — full identity and catalog design for my own business venture."
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
    slug: "chillalabs-flujo",
    name: "Flujo de compra — ChillaLabs",
    technologies: ["UX Research", "UX/UI Design", "Figma", "Prototyping", "Next.js", "Supabase"],
    description: {
      es: "Cliente real: mi propio emprendimiento. ChillaLabs vendía figuras por WhatsApp e Instagram sin ningún proceso estructurado. Diseñé y desarrollé un flujo de compra end-to-end con 4 pasos claros, 2 métodos de pago (MercadoPago y transferencia bancaria), cálculo de envío por código postal y estados de pedido en tiempo real (Pendiente → Pagado → Enviado). El resultado es una tienda activa con proceso de compra completo y seguimiento de pedidos.",
      en: "Real client: my own business. ChillaLabs used to sell figures through WhatsApp and Instagram with no structured process. I designed and developed an end-to-end purchase flow with 4 clear steps, 2 payment methods (MercadoPago and bank transfer), postal code-based shipping calculation, and real-time order status tracking (Pending → Paid → Shipped). The result is an active store with a complete purchase flow and order tracking."
    },
    summary: {
      es: "De WhatsApp a tienda real — flujo de compra end-to-end con estados de pedido para mi propio emprendimiento.",
      en: "From WhatsApp to real store — end-to-end purchase flow with order tracking for my own business."
    },
    image: "/chillalabs-flujo/slice-04.png",
    youtube: "",
    caseStudySlices: Array.from({ length: 5 }, (_, i) => `/chillalabs-flujo/slice-${String(i + 1).padStart(2, "0")}.png`),
    problema: {
      es: "Los clientes consultaban por Instagram o WhatsApp, sin precio fijo, sin seguimiento y sin forma de pagar online. Cada venta era una conversación distinta y sin estructura, lo que generaba fricción, confusión y pérdida de ventas potenciales.",
      en: "Customers would inquire via Instagram or WhatsApp with no fixed pricing, no tracking, and no way to pay online. Each sale was a separate, unstructured conversation, causing friction, confusion, and lost potential sales."
    },
    decisionesEstrategicas: {
      es: [
        "Diseñé un flujo de 4 pasos: datos del comprador → cálculo de envío → método de pago → confirmación.",
        "Integré MercadoPago y transferencia bancaria como opciones de pago.",
        "Agregué cálculo de envío por código postal con dos couriers (Correo Argentino y Andreani).",
        "Implementé estados de pedido visibles para el comprador: Pendiente, Pagado y Enviado.",
        "Creé un panel de administración para gestionar pedidos y actualizar estados."
      ],
      en: [
        "Designed a 4-step flow: buyer info → shipping calculation → payment method → confirmation.",
        "Integrated MercadoPago and bank transfer as payment options.",
        "Added postal code-based shipping with two couriers (Correo Argentino and Andreani).",
        "Implemented visible order statuses for the buyer: Pending, Paid and Shipped.",
        "Built an admin panel to manage orders and update statuses."
      ]
    },
    impacto: {
      es: "El proceso de venta pasó de ser una conversación informal por redes sociales a un flujo claro, automatizado y profesional. Los clientes ahora pueden comprar de forma independiente, pagar online y hacer seguimiento de su pedido sin necesidad de contactar al vendedor.",
      en: "The sales process went from an informal social media conversation to a clear, automated, and professional flow. Customers can now buy independently, pay online, and track their order without needing to contact the seller."
    },
    caseStudyContext: ["Proyecto Personal", "Negocio"],
    caseStudyTools: ["Figma", "FigJam"],
    caseStudyType: "UX/UI DESIGN · E-COMMERCE",
    caseStudyCategory: "PROYECTO PERSONAL · FLUJO DE COMPRA",
  },
  {
    slug: "studioconnect",
    name: "StudioConnect",
    description: {
      es: "Plataforma web para conectar músicos con estudios de grabación. Rol como Frontend Developer & UX/UI Designer: diseño de interfaces en Figma, formularios de autenticación/registro, integración de geolocalización, desarrollo de páginas clave (reservas, dashboard, perfiles) y manejo de estado global con Zustand.",
      en: "Web platform to connect musicians with recording studios. Role as Frontend Developer & UX/UI Designer: interface design in Figma, authentication/registration forms, geolocation integration, development of key pages (bookings, dashboard, profiles) and global state management with Zustand."
    },
    summary: {
      es: "De estructura indefinida a experiencia clara — UX/UI y frontend para plataforma de reservas musicales.",
      en: "From undefined structure to clear experience — UX/UI and frontend for a music studio booking platform."
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
      es: "Research sin atajos — proceso UX end-to-end con entrevistas, card sorting, Atomic Design y prototipo.",
      en: "Research without shortcuts — end-to-end UX process with interviews, card sorting, Atomic Design and prototype."
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

