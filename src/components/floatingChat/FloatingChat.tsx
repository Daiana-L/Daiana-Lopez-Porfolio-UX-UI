"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { PiChatCircleDotsBold } from "react-icons/pi";
import { FaWhatsapp } from "react-icons/fa";
const Chat = dynamic(() => import("../chat/chat"), { ssr: false });

export default function FloatingChat() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <a
        href="https://wa.me/541126394330"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-24 right-6 z-50 w-16 h-16 bg-green-500 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-green-600 transition cursor-pointer"
        title="Escribime por WhatsApp"
      >
        <FaWhatsapp size={36} />
      </a>
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-sky-400 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-sky-500 transition cursor-pointer"
        title="Abrir chat"
      >
        <PiChatCircleDotsBold size={36} />
      </button>
   {open && (
  <div
    className="
     fixed
      bottom-32 sm:bottom-24    
      left-1/2 -translate-x-1/2
      sm:left-auto sm:right-30 sm:translate-x-0
      z-50
      w-[90vw] sm:w-[500px]
      h-[450px] sm:h-[500px]
    "
  >
    <Chat />
  </div>
)}

    </>
  );
}
