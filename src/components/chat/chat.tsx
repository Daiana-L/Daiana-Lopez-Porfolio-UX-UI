"use client";

import React, { useState, useRef, useEffect } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";

const DeepChat = dynamic(
  () => import("deep-chat-react").then((mod) => mod.DeepChat),
  { ssr: false }
);

export default function Chat() {
  const [avatar, setAvatar] = useState("/avatars/neutral.png");
  const [avatarKey, setAvatarKey] = useState(0);
  const [userMessageCount, setUserMessageCount] = useState(0);
  const chatElementRef = useRef<any>(null);

  const handleMessage = (msg: any) => {
    const text = msg.text?.toLowerCase().trim() || "";
    if (!text) return;
    const saludos = [
      "hola",
      "holaa",
      "holis",
      "buenas",
      "buenas!",
      "buenas tardes",
      "buenos dias",
      "hey",
      "qué tal",
      "que tal",
      "como estás",
      "como va",
      "como andas",
      "todo bien",
    ];
    const esSoloSaludo = saludos.some((s) => text === s || text.includes(s));

    if (esSoloSaludo && chatElementRef.current?.addMessage) {
      chatElementRef.current.addMessage({
        text: "¡Qué bueno verte por acá! ¿Querés que te cuente un poco sobre mí o mis proyectos?",
        sender: "ai",
      });
      return;
    }
    setUserMessageCount((prev) => prev + 1);
    let nuevoAvatarPath = "/avatars/neutral.png";
    if (["feliz", "😊", "genial", "encantado", "contenta", "maravilloso"].some((k) => text.includes(k)))
      nuevoAvatarPath = "/avatars/happy.png";
    else if (["🤔", "pensando", "hmm", "reflexionando", "buscando"].some((k) => text.includes(k)))
      nuevoAvatarPath = "/avatars/thinking.png";
    else if (["wow", "😮", "sorpresa", "increíble", "asombroso"].some((k) => text.includes(k)))
      nuevoAvatarPath = "/avatars/surprised.png";

    setTimeout(() => {
      setAvatar(nuevoAvatarPath);
      setAvatarKey((prev) => prev + 1);
    }, 100);
    if (userMessageCount + 1 >= 10) {
      setTimeout(() => {
        if (chatElementRef.current?.addMessage) {
          chatElementRef.current.addMessage({
            text: "¡Fue muy divertido hablar contigo! Ahora debo irme. ¡Hasta la próxima!",
            sender: "ai",
          });
        }
      }, 500);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (chatElementRef.current?.setPlaceholderText) {
        chatElementRef.current.setPlaceholderText("Chatea conmigo!");
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="
        w-[90vw] sm:w-[500px] 
        h-[450px] sm:h-[500px]      
        mx-auto mt-4 sm:mt-8
        bg-sky-700 rounded-2xl shadow-lg 
        p-4 flex flex-col md:flex-row
      "
    >
      {/* Avatar */}
      <div className="flex-shrink-0 mb-3 md:mb-0 md:mr-6 flex justify-center items-start relative w-24 h-32 sm:w-48 sm:h-60">
        <Image
          key={avatarKey}
          src={avatar}
          alt="Daiana"
          fill
          priority
          className="object-cover shadow-md transition-opacity duration-300 rounded-lg"
        />
      </div>

      {/* Chat */}
      <div className="flex flex-grow h-full overflow-hidden">
        <DeepChat
          ref={chatElementRef}
          onMessage={handleMessage}
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "1rem",
          }}
          textInput={{
            placeholder: { text: "Chatea conmigo!" },
          }}
          introMessage={{
            text: "¡Bienvenido a mi portfolio!",
          }}
          directConnection={{
            cohere: {
              key: process.env.NEXT_PUBLIC_COHERE_API_KEY,
              chat: {
                model: "command-a-03-2025",
                temperature: 0.7,
                preamble: `
Eres Daiana, desarrolladora frontend junior de Buenos Aires que actualmente sigue estudiando programación y practicando proyectos personales.
Te formaste en Henry como Full Stack y realizaste varios cursos y certificados online de programación. 
Disfrutas trabajando en proyectos personales y prácticos de frontend con React, Next.js y Tailwind. 
Cuando alguien te pregunta dónde estudiaste, siempre mencionas Henry y tus cursos de programación. 
No inventes estudios que no hiciste.
Te encantan las hamburguesas 🍔, jugar videojuegos 🎮, escuchar metal, dibujar y el diseño, y tenés 5 gatos 🐱 
Tu comida favorita son los ñoquis y tu color favorito es azul turquesa. 

Te formaste en Henry como Full Stack, pero elegiste especializarte en Frontend. 
Stack tecnológico:
- Frontend: React, Next.js, Vite, Tailwind CSS, Flowbite
- Backend: Node.js, PostgreSQL, Firebase
- Estado & Autenticación: Zustand, Context API, JWT
- Herramientas: Git, GitHub, Vercel, Figma
- Lenguajes: JavaScript, TypeScript

Proyectos destacados:
- StudioConnect: Plataforma para conectar músicos con estudios de grabación. Rol: Frontend Developer.
- Hysteria3D Shop: E-commerce de productos 3D con React, Next.js y TypeScript.
- Aurora Studio: App web de gestión de turnos con Node.js y PostgreSQL.

Este chat es parte de tu portfolio y fue muy divertido e interesante desarrollarlo. 
A veces la gente te llama “Dai” de forma más cercana.

Tu estilo: cercano, alegre y con humor, breve (1–3 frases), coherente según la conversación. 
No repitas toda la información cada vez; agrega detalles solo si la pregunta lo requiere. 
experiencia en Diseño UX/UI, enfocada en la creación de
interfaces funcionales, accesibles y centradas en el usuario. He realizado diversos diseños en Figma, trabajando con
componentes reutilizables, Atomic Design y prototipos interactivos. Además, me desempeñé como UX/UI Designer en
un producto SaaS, donde estuve a cargo del diseño integral de las interfaces, colaborando en la definición de flujos,
consistencia visual y experiencia de usuario
Si alguien te pregunta tu nombre, decí que eres Daiana.
                `,
              } as any,
            },
          } as any}
        />
      </div>
    </div>
  );
}
