import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone } from "lucide-react";
import OptimizedImage from "./OptimizedImage";

const ProveedoresSection = ({
  productosImage = "/img/imagenes/proveedores-handshake.webp",
}) => {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    telefono: "",
    asunto: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const destinatario = "plastimegacompras@outlook.com.mx";
    const asunto = encodeURIComponent(
      formData.asunto || "Contacto de proveedor - Plastimega",
    );
    const cuerpo = encodeURIComponent(
      `Nombre: ${formData.nombre}\n` +
        `Correo: ${formData.correo}\n` +
        `Teléfono: ${formData.telefono || "No proporcionado"}\n` +
        `Asunto: ${formData.asunto || "Sin asunto"}\n\n` +
        `Mensaje:\n${formData.mensaje}`,
    );
    window.location.href = `mailto:${destinatario}?subject=${asunto}&body=${cuerpo}`;
  };

  return (
    <>
      {/* ─── BLOQUE 1: PROPUESTA DE VALOR ─── */}
      <section className='relative w-full overflow-hidden bg-gray-100'>
        <div className='relative z-10 flex items-center justify-center px-4 md:px-8 lg:px-16 xl:px-24 py-12'>
          <div className='max-w-7xl mx-auto w-full'>
            {/* Título de sección */}
            <motion.h2
              className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800 text-center mb-12 leading-tight'
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              ¿Quieres ser <span className='text-blue-900'>proveedor</span>?
            </motion.h2>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center'>
              {/* Lado izquierdo - Tarjeta con texto */}
              <motion.div
                className='bg-white rounded-lg shadow-lg p-8 md:p-12'
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <p className='text-gray-700 text-sm md:text-base leading-relaxed text-justify mb-6'>
                  En Plastimega estamos en constante búsqueda de aliados
                  estratégicos que comparten nuestro compromiso con la calidad,
                  la eficiencia y la innovación.
                </p>
                <motion.div
                  className='w-full h-px bg-gray-300'
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                />
                <p className='text-gray-700 text-sm md:text-base leading-relaxed text-justify mt-6'>
                  Si ofreces productos o servicios que puedan integrarse a
                  nuestra cadena de valor, nos encantaría conocerte.
                </p>
              </motion.div>

              {/* Lado derecho - Imagen */}
              <motion.div
                className='rounded-lg overflow-hidden shadow-lg'
                initial={{ opacity: 0, x: 100, rotateY: 20 }}
                whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              >
                <OptimizedImage
                  src={productosImage}
                  alt='Productos Plastimega para proveedores'
                  className='w-full h-64 md:h-80 lg:h-96 object-cover'
                />
              </motion.div>
            </div>

            {/* Botón CTA centrado */}
            <motion.div
              className='text-center mt-12'
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.a
                href='#contacto-proveedores'
                className='inline-block bg-blue-900 text-yellow-400 px-12 py-4 rounded-full font-bold text-lg uppercase hover:bg-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl'
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                Contáctanos
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── BLOQUE 2: FORMULARIO + DATOS DE CONTACTO ─── */}
      <section
        id='contacto-proveedores'
        className='relative w-full overflow-hidden'
      >
        <div className='grid grid-cols-1 lg:grid-cols-2'>
          {/* Columna izquierda — Formulario */}
          <motion.div
            className='bg-blue-900 px-4 md:px-8 lg:px-16 py-12'
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className='max-w-xl mx-auto'>
              <h3 className='text-2xl md:text-3xl font-bold text-white uppercase mb-8 tracking-wide'>
                Envíanos un mensaje
              </h3>

              <form onSubmit={handleSubmit} className='space-y-5'>
                {/* Nombre */}
                <div>
                  <label
                    htmlFor='prov-nombre'
                    className='block text-blue-200 font-bold mb-2 text-sm'
                  >
                    Nombre <span className='text-red-500'>*</span>
                  </label>
                  <input
                    type='text'
                    id='prov-nombre'
                    name='nombre'
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-white text-gray-800'
                  />
                </div>

                {/* Correo Electrónico */}
                <div>
                  <label
                    htmlFor='prov-correo'
                    className='block text-blue-200 font-bold mb-2 text-sm'
                  >
                    Correo Electrónico <span className='text-red-500'>*</span>
                  </label>
                  <input
                    type='email'
                    id='prov-correo'
                    name='correo'
                    value={formData.correo}
                    onChange={handleChange}
                    required
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-white text-gray-800'
                  />
                </div>

                {/* Teléfono y Asunto en la misma fila */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                  <div>
                    <label
                      htmlFor='prov-telefono'
                      className='block text-blue-200 font-bold mb-2 text-sm'
                    >
                      Teléfono
                    </label>
                    <input
                      type='tel'
                      id='prov-telefono'
                      name='telefono'
                      value={formData.telefono}
                      onChange={handleChange}
                      className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-white text-gray-800'
                    />
                  </div>
                  <div>
                    <label
                      htmlFor='prov-asunto'
                      className='block text-blue-200 font-bold mb-2 text-sm'
                    >
                      Asunto
                    </label>
                    <input
                      type='text'
                      id='prov-asunto'
                      name='asunto'
                      value={formData.asunto}
                      onChange={handleChange}
                      className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-white text-gray-800'
                    />
                  </div>
                </div>

                {/* Mensaje */}
                <div>
                  <label
                    htmlFor='prov-mensaje'
                    className='block text-blue-200 font-bold mb-2 text-sm'
                  >
                    Mensaje <span className='text-red-500'>*</span>
                  </label>
                  <textarea
                    id='prov-mensaje'
                    name='mensaje'
                    value={formData.mensaje}
                    onChange={handleChange}
                    required
                    rows='5'
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-white text-gray-800 resize-none'
                  />
                </div>

                {/* Botón Enviar */}
                <div className='text-center pt-2'>
                  <motion.button
                    type='submit'
                    className='bg-yellow-400 text-blue-900 px-12 py-4 rounded-full font-bold text-lg uppercase hover:bg-yellow-500 transition-all duration-300 shadow-lg hover:shadow-xl'
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Enviar
                  </motion.button>
                </div>
              </form>
            </div>
          </motion.div>

          {/* Columna derecha — Datos de contacto */}
          <motion.div
            className='bg-gray-100 px-4 md:px-8 lg:px-16 py-12'
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <div className='max-w-xl mx-auto'>
              <h3 className='text-2xl md:text-3xl font-bold text-gray-800 mb-8 leading-tight'>
                Ponte en contacto{" "}
                <span className='text-blue-900'>con nosotros</span>
              </h3>

              <div className='space-y-8'>
                {/* Sucursal Puebla */}
                <motion.div
                  className='flex gap-4'
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <div className='flex-shrink-0 w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center'>
                    <MapPin className='w-5 h-5 text-yellow-400' />
                  </div>
                  <div>
                    <h4 className='font-bold text-gray-800 mb-1'>
                      Sucursal Puebla
                    </h4>
                    <a
                      href='https://www.google.com/maps/search/?api=1&query=Calle+Esmeralda+S%2FN+Miguel+Negrete%2C+Cuapiaxtla+de+Madero%2C+Puebla'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-gray-600 text-sm leading-relaxed hover:text-blue-900 transition-colors'
                    >
                      Calle Esmeralda S/N Miguel Negrete, Cuapiaxtla de Madero,
                      Puebla.
                    </a>
                  </div>
                </motion.div>

                {/* Sucursal Veracruz */}
                <motion.div
                  className='flex gap-4'
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <div className='flex-shrink-0 w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center'>
                    <MapPin className='w-5 h-5 text-yellow-400' />
                  </div>
                  <div>
                    <h4 className='font-bold text-gray-800 mb-1'>
                      Sucursal Veracruz
                    </h4>
                    <a
                      href='https://www.google.com/maps/search/?api=1&query=Blvd.+Gustavo+Alfonso+Torres+%23280%2C+Ciudad+Isla%2C+Veracruz'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-gray-600 text-sm leading-relaxed hover:text-blue-900 transition-colors'
                    >
                      Blvd. Gustavo Alfonso Torres #280, Ciudad Isla, Veracruz.
                    </a>
                  </div>
                </motion.div>

                {/* Emails */}
                <motion.div
                  className='flex gap-4'
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <div className='flex-shrink-0 w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center'>
                    <Mail className='w-5 h-5 text-yellow-400' />
                  </div>
                  <div>
                    <h4 className='font-bold text-gray-800 mb-1'>Email</h4>
                    <p className='text-gray-600 text-sm leading-relaxed'>
                      <a
                        href='mailto:plastimegacompras@outlook.com.mx'
                        className='hover:text-blue-900 transition-colors'
                      >
                        plastimegacompras@outlook.com.mx
                      </a>{" "}
                      Ext.112
                    </p>
                    <p className='text-gray-600 text-sm leading-relaxed'>
                      <a
                        href='mailto:kgonzales@plastimega.com.mx'
                        className='hover:text-blue-900 transition-colors'
                      >
                        kgonzales@plastimega.com.mx
                      </a>{" "}
                      Ext.114
                    </p>
                  </div>
                </motion.div>

                {/* Teléfonos */}
                <motion.div
                  className='flex gap-4'
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <div className='flex-shrink-0 w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center'>
                    <Phone className='w-5 h-5 text-yellow-400' />
                  </div>
                  <div>
                    <h4 className='font-bold text-gray-800 mb-1'>Teléfonos</h4>
                    <p className='text-gray-600 text-sm leading-relaxed'>
                      <a
                        href='tel:+5212494260129'
                        className='hover:text-blue-900 transition-colors'
                      >
                        (+52 1) 249 426 01 29
                      </a>{" "}
                      /{" "}
                      <a
                        href='tel:+5212494260904'
                        className='hover:text-blue-900 transition-colors'
                      >
                        (+52 1) 249 426 0904
                      </a>{" "}
                      Ext. 112 y 114
                    </p>
                    <div className='mt-3 space-y-1'>
                      <p className='text-gray-600 text-sm'>
                        <span className='font-bold text-gray-800'>
                          Materia Prima:
                        </span>{" "}
                        <a
                          href='tel:+522225646752'
                          className='hover:text-blue-900 transition-colors'
                        >
                          2225646752
                        </a>
                      </p>
                      <p className='text-gray-600 text-sm'>
                        <span className='font-bold text-gray-800'>
                          Bienes e insumos:
                        </span>{" "}
                        <a
                          href='tel:+522225646781'
                          className='hover:text-blue-900 transition-colors'
                        >
                          2225646781
                        </a>
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ProveedoresSection;
