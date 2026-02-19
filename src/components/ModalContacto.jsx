import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const DESTINATARIO = "ventaspuebla@plastimega.com.mx";

const ModalContacto = ({ isOpen, onClose, mensajeInicial = "" }) => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    empresa: "",
    mensaje: mensajeInicial,
  });
  const [enviado, setEnviado] = useState(false);

  // Sincronizar mensaje inicial cuando cambie (p.ej. al abrir con un producto diferente)
  useEffect(() => {
    if (isOpen) {
      setFormData((prev) => ({ ...prev, mensaje: mensajeInicial }));
    }
  }, [isOpen, mensajeInicial]);

  // Cerrar con tecla Escape
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  // Bloquear scroll del body cuando el modal está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const asunto = encodeURIComponent(
      `Contacto desde plastimega.com - ${formData.nombre}${formData.empresa ? ` (${formData.empresa})` : ""}`,
    );

    const cuerpo = encodeURIComponent(
      `Nombre: ${formData.nombre}\n` +
        `Correo: ${formData.email}\n` +
        `Teléfono: ${formData.telefono || "No proporcionado"}\n` +
        `Empresa: ${formData.empresa || "No proporcionada"}\n\n` +
        `Mensaje:\n${formData.mensaje}`,
    );

    window.location.href = `mailto:${DESTINATARIO}?subject=${asunto}&body=${cuerpo}`;

    setEnviado(true);
    setTimeout(() => {
      setEnviado(false);
      setFormData({
        nombre: "",
        email: "",
        telefono: "",
        empresa: "",
        mensaje: "",
      });
      onClose();
    }, 2500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className='fixed inset-0 z-9998 bg-black/60 backdrop-blur-sm'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className='fixed inset-0 z-9999 flex items-center justify-center p-4'
            initial={{ opacity: 0, scale: 0.85, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 40 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <div
              className='relative bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto'
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className='bg-blue-900 rounded-t-2xl px-8 py-6 flex items-center justify-between'>
                <div>
                  <h2 className='text-2xl font-bold text-white'>Contáctanos</h2>
                  <p className='text-blue-200 text-sm mt-1'>
                    Completa el formulario y te responderemos pronto
                  </p>
                </div>
                <motion.button
                  onClick={onClose}
                  className='text-blue-200 hover:text-white transition-colors duration-200 p-1'
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label='Cerrar'
                >
                  <svg
                    className='w-6 h-6'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M6 18L18 6M6 6l12 12'
                    />
                  </svg>
                </motion.button>
              </div>

              {/* Body */}
              <div className='px-8 py-6'>
                <AnimatePresence mode='wait'>
                  {enviado ? (
                    <motion.div
                      key='exito'
                      className='flex flex-col items-center justify-center py-10 text-center'
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      <div className='w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4'>
                        <svg
                          className='w-8 h-8 text-green-600'
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2.5}
                            d='M5 13l4 4L19 7'
                          />
                        </svg>
                      </div>
                      <h3 className='text-xl font-bold text-gray-800 mb-2'>
                        ¡Listo!
                      </h3>
                      <p className='text-gray-500 text-sm'>
                        Se abrirá tu cliente de correo con el mensaje preparado.
                        <br />
                        ¡Gracias por contactarnos!
                      </p>
                    </motion.div>
                  ) : (
                    <motion.form
                      key='formulario'
                      onSubmit={handleSubmit}
                      className='space-y-4'
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      {/* Nombre y Email */}
                      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                        <div>
                          <label className='block text-gray-700 font-semibold text-sm mb-1'>
                            Nombre <span className='text-red-500'>*</span>
                          </label>
                          <input
                            type='text'
                            name='nombre'
                            value={formData.nombre}
                            onChange={handleChange}
                            required
                            placeholder='Tu nombre'
                            className='w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-900 transition'
                          />
                        </div>
                        <div>
                          <label className='block text-gray-700 font-semibold text-sm mb-1'>
                            Email <span className='text-red-500'>*</span>
                          </label>
                          <input
                            type='email'
                            name='email'
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder='tu@correo.com'
                            className='w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-900 transition'
                          />
                        </div>
                      </div>

                      {/* Teléfono y Empresa */}
                      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                        <div>
                          <label className='block text-gray-700 font-semibold text-sm mb-1'>
                            Teléfono
                          </label>
                          <input
                            type='tel'
                            name='telefono'
                            value={formData.telefono}
                            onChange={handleChange}
                            placeholder='(000) 000-0000'
                            className='w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-900 transition'
                          />
                        </div>
                        <div>
                          <label className='block text-gray-700 font-semibold text-sm mb-1'>
                            Empresa
                          </label>
                          <input
                            type='text'
                            name='empresa'
                            value={formData.empresa}
                            onChange={handleChange}
                            placeholder='Tu empresa'
                            className='w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-900 transition'
                          />
                        </div>
                      </div>

                      {/* Mensaje */}
                      <div>
                        <label className='block text-gray-700 font-semibold text-sm mb-1'>
                          Mensaje <span className='text-red-500'>*</span>
                        </label>
                        <textarea
                          name='mensaje'
                          value={formData.mensaje}
                          onChange={handleChange}
                          required
                          rows={4}
                          placeholder='Escribe tu mensaje aquí...'
                          className='w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-900 transition resize-none'
                        ></textarea>
                      </div>

                      {/* Botón enviar */}
                      <motion.button
                        type='submit'
                        className='w-full bg-yellow-400 text-blue-900 py-3 rounded-full font-bold text-base uppercase hover:bg-yellow-500 transition-all duration-300 shadow-md'
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        Enviar mensaje
                      </motion.button>

                      <p className='text-center text-xs text-gray-400 pt-1'>
                        Se abrirá tu cliente de correo con el mensaje listo para
                        enviar.
                      </p>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ModalContacto;
