import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "emailjs-com";
import { PiGithubLogoBold, PiLinkedinLogoBold, PiEnvelopeBold, PiLinkBold, PiCalendarBold, PiPaperPlaneRightBold } from 'react-icons/pi';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";

function Contact() {
  const [formData, setFormData] = useState({ email: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          user_email: formData.email,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(
        () => {
          setSending(false);
          setFormData({ email: "", message: "" });
          toast.success("¡Mensaje enviado!");
        },
        (error) => {
          setSending(false);
          console.error("Error al enviar el mensaje:", error);
          toast.error("Error al enviar el mensaje");
        }
      );
  };

  return (
    <div>
      <section id="contact" className="pt-2 sm:pt-4 pb-10 scroll-mt-16 md:scroll-mt-24 px-4 sm:px-6">
        <motion.div
          className="max-w-3xl mx-auto flex flex-col items-center text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Eyebrow con líneas decorativas */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-cyan-400"></div>
            <span className="text-cyan-400 text-[8px] font-semibold tracking-[0.3em] uppercase">
              CONTACTO
            </span>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-cyan-400"></div>
          </div>

          {/* Título principal */}
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-white text-center leading-tight">
            Conectemos
          </h2>

          {/* Descripción */}
          <p className="text-gray-400 text-sm text-center max-w-3xl mx-auto mb-16 leading-relaxed">
            ¿Tenés un proyecto en mente? Escribime y creemos algo increíble juntos.
          </p>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-5xl mx-auto">
            {/* Message Form */}
            <div className="bg-gray-900/50 border border-white/10 backdrop-blur rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-cyan-400/20 rounded-lg flex items-center justify-center">
                  <PiEnvelopeBold size={16} className="text-cyan-400" />
                </div>
                <h3 className="text-white font-semibold text-lg">Enviarme un mensaje</h3>
              </div>

              <form onSubmit={sendEmail} className="flex flex-col gap-3">
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="tuemail@gmail.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-2.5 rounded-lg bg-gray-800/50 text-white border border-transparent focus:border-cyan-400/50 focus:bg-gray-800/70 transition text-sm"
                  />
                </div>

                <div>
                  <textarea
                    name="message"
                    placeholder="Dejame tu mensaje..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={3}
                    className="w-full p-2.5 rounded-lg bg-gray-800/50 text-white border border-transparent focus:border-cyan-400/50 focus:bg-gray-800/70 transition resize-none text-sm"
                  />
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-12">
                  <p className="text-gray-400 text-xs">Respondo en 1-24hs.</p>
                  <button
                    type="submit"
                    disabled={sending}
                    className={`bg-cyan-400 hover:bg-cyan-300 text-black font-semibold py-2.5 px-5 rounded-xl transition w-full sm:w-auto cursor-pointer flex items-center justify-center gap-2 text-sm ${sending ? "opacity-50 cursor-not-allowed" : ""}`}
                  >
                    {sending ? "Enviando..." : (
                      <>
                        Enviar
                        <PiPaperPlaneRightBold size={16} />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>

            {/* Social & Availability */}
            <div className="space-y-4">
              {/* Social Media */}
              <div className="bg-gray-900/50 border border-white/10 backdrop-blur rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-cyan-400/20 rounded-lg flex items-center justify-center">
                    <PiLinkBold size={16} className="text-cyan-400" />
                  </div>
                  <h3 className="text-white font-semibold text-lg">También me encontrás en</h3>
                </div>

                <p className="text-gray-400 text-xs mb-4">
                  LinkedIn para oportunidades laborales o networking.
                </p>

                <a
                  href="https://www.linkedin.com/in/daiana-celeste-lopez/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-gray-800/50 border border-white/10 rounded-xl hover:border-cyan-400/50 hover:bg-gray-800/70 transition"
                >
                  <div className="w-10 h-10 bg-cyan-400/20 rounded-full flex items-center justify-center shrink-0">
                    <PiLinkedinLogoBold size={20} className="text-cyan-400" />
                  </div>
                  <div className="flex-1">
                    <p className="text-white font-medium text-sm">Mi LinkedIn</p>
                    <p className="text-gray-400 text-xs">Daiana Celeste Lopez</p>
                  </div>
                </a>
              </div>

              {/* Availability */}
              <div className="bg-gray-900/50 border border-white/10 backdrop-blur rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-cyan-400/20 rounded-lg flex items-center justify-center">
                    <PiCalendarBold size={16} className="text-cyan-400" />
                  </div>
                  <h3 className="text-white font-semibold text-lg">Disponible para proyectos</h3>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse flex-shrink-0 mb-4 ml-3"></div>
                  <p className="text-gray-300 text-sm">Actualmente open to work · Buenos Aires, Argentina</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Toast Container */}
        <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
      </section>
    </div>
  );
}

export default Contact;
