import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "emailjs-com";
import { PiGithubLogoBold, PiLinkedinLogoBold } from 'react-icons/pi';
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
      <section id="contact" className="py-8 sm:py-10 bg-gray-900 scroll-mt-24 px-4 sm:px-6">
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-2xl sm:text-2xl md:text-3xl font-bold mb-2 text-sky-500 text-center">
            Contáctame
          </h2>

          <p className="text-center text-gray-300 text-sm sm:text-base mb-8 sm:mb-10">
            ¿Tenés una consulta o propuesta? Escribime y te respondo lo antes posible.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Formulario */}
            <form
              onSubmit={sendEmail}
              className="lg:col-span-2 bg-gray-800/60 border border-gray-700/60 backdrop-blur rounded-xl shadow-lg p-6 sm:p-8 flex flex-col gap-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-gray-200 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="tuemail@gmail.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="p-3 rounded-lg bg-gray-900/60 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-sky-500/60 focus:border-sky-500 w-full"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-gray-200 mb-2">
                    Mensaje
                  </label>
                  <textarea
                    name="message"
                    placeholder="Contame en qué puedo ayudarte..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="p-3 rounded-lg bg-gray-900/60 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-sky-500/60 focus:border-sky-500 w-full resize-none"
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
                <p className="text-xs sm:text-sm text-gray-400">
                  Respondo en 1-24hs.
                </p>

                <button
                  type="submit"
                  disabled={sending}
                  className={`bg-sky-600 hover:bg-sky-700 text-white font-semibold py-3 px-6 rounded-lg transition w-full sm:w-auto cursor-pointer ${sending ? "opacity-50 cursor-not-allowed" : ""}`}
                >
                  {sending ? "Enviando..." : "Enviar"}
                </button>
              </div>
            </form>

            {/* Tarjeta */}
            <div className="bg-gray-800/60 border border-gray-700/60 backdrop-blur rounded-xl shadow-lg p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex justify-center mb-4">
                  <Image
                    src="/avatars/happy.png"
                    alt="Happy icon"
                    width={180}
                    height={180}
                    className="rounded-full"
                  />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  También me encontrás en
                </h3>
                <p className="text-gray-300 text-sm sm:text-base mb-6">
                  LinkedIn para oportunidades laborales o networking.
                </p>
              </div>

              <a
                href="https://www.linkedin.com/in/daiana-celeste-lopez/"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full inline-flex items-center justify-center gap-3 p-4 bg-gray-900/60 border border-gray-700 rounded-lg hover:border-sky-500/60 hover:bg-gray-900 transition"
              >
                <PiLinkedinLogoBold size={28} className="text-white group-hover:text-sky-400 transition" />
                <span className="font-semibold text-white group-hover:text-sky-400 transition">
                  Mi LinkedIn
                </span>
              </a>
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
