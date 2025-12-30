import React from "react";
import { motion } from "framer-motion";

const Plastimega = () => {
  return (
    <>
      <section
        id='plastimega'
        className='relative h-screen w-full overflow-hidden bg-gray-100'
      >
        {/* Contenedor principal */}
        <div className='relative z-10 h-full flex items-center justify-center px-4 md:px-8 lg:px-16 xl:px-24 py-8 md:py-0'>
          <div className='max-w-7xl mx-auto w-full'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center'>
              {/* Lado izquierdo - Contenido de texto */}
              <motion.div
                className='space-y-4 md:space-y-6 lg:space-y-8'
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                {/* Título principal */}
                <motion.h2
                  className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800 leading-tight'
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Somos tu{" "}
                  <span className='text-blue-900'>
                    mejor aliado en soluciones
                  </span>{" "}
                  de empaque y embalaje de plástico.
                </motion.h2>

                {/* Línea divisoria */}
                <motion.div
                  className='w-full h-px bg-gray-300'
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                ></motion.div>

                {/* Descripción */}
                <motion.div
                  className='space-y-2 md:space-y-3 lg:space-y-4 text-gray-700 text-sm md:text-base'
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <p className='leading-relaxed text-justify'>
                    Plastimega es un distribuidor líder en plásticos,
                    desechables, cajas para el agro y productos de empaque.
                  </p>

                  <p className='leading-relaxed text-justify'>
                    Servimos a negocios, mayoristas, empresas agrícolas,
                    restaurantes y distribuidores.
                  </p>

                  <p className='leading-relaxed text-justify'>
                    Nuestro enfoque es simple:{" "}
                    <span className='font-bold'>
                      gran variedad, entregas rápidas y precios competitivos.
                    </span>
                  </p>
                </motion.div>

                {/* Lista de características con checkmarks */}
                <motion.div
                  className='space-y-2 md:space-y-3 lg:space-y-4'
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: 0.7,
                    staggerChildren: 0.1,
                  }}
                >
                  {/* Proceso productivo efectivo */}
                  <motion.div
                    className='flex items-start gap-2 md:gap-3 lg:gap-4'
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                  >
                    <div className='shrink-0 w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 bg-blue-600 rounded-full flex items-center justify-center'>
                      <svg
                        className='w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 text-white'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                      >
                        <path
                          fillRule='evenodd'
                          d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                          clipRule='evenodd'
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className='font-bold text-gray-800 text-sm md:text-base'>
                        Proceso productivo efectivo
                      </h3>
                      <p className='text-gray-600 text-xs md:text-sm'>
                        Contamos con alta capacidad productiva, diseñada para
                        altos volúmenes.
                      </p>
                    </div>
                  </motion.div>

                  {/* Costos eficientes */}
                  <motion.div
                    className='flex items-start gap-2 md:gap-3 lg:gap-4'
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                  >
                    <div className='shrink-0 w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 bg-blue-600 rounded-full flex items-center justify-center'>
                      <svg
                        className='w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 text-white'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                      >
                        <path
                          fillRule='evenodd'
                          d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                          clipRule='evenodd'
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className='font-bold text-gray-800 text-sm md:text-base'>
                        Costos eficientes
                      </h3>
                      <p className='text-gray-600 text-xs md:text-sm'>
                        Que nos permiten sen altamente competitivos frente a
                        otras opciones.
                      </p>
                    </div>
                  </motion.div>

                  {/* Certificaciones */}
                  <motion.div
                    className='flex items-start gap-2 md:gap-3 lg:gap-4'
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 1.0 }}
                  >
                    <div className='shrink-0 w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 bg-blue-600 rounded-full flex items-center justify-center'>
                      <svg
                        className='w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 text-white'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                      >
                        <path
                          fillRule='evenodd'
                          d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                          clipRule='evenodd'
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className='font-bold text-gray-800 text-sm md:text-base'>
                        Certificaciones
                      </h3>
                      <p className='text-gray-600 text-xs md:text-sm'>
                        Estamos certificados en ISO-9001, prueba de nuestro
                        compromiso con la calidad
                      </p>
                    </div>
                  </motion.div>

                  {/* Respaldo */}
                  <motion.div
                    className='flex items-start gap-2 md:gap-3 lg:gap-4'
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 1.1 }}
                  >
                    <div className='shrink-0 w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 bg-blue-600 rounded-full flex items-center justify-center'>
                      <svg
                        className='w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 text-white'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                      >
                        <path
                          fillRule='evenodd'
                          d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                          clipRule='evenodd'
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className='font-bold text-gray-800 text-sm md:text-base'>
                        Respaldo
                      </h3>
                      <p className='text-gray-600 text-xs md:text-sm'>
                        Pertenecemos a un sólido grupo empresarial.
                      </p>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Botón de contacto */}
                <motion.div
                  className='pt-2 md:pt-3 lg:pt-4'
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                >
                  <motion.a
                    href='#contacto'
                    className='inline-block bg-blue-900 text-yellow-400 px-6 py-2 md:px-8 md:py-2.5 lg:px-10 lg:py-3 rounded-full font-bold text-sm md:text-base uppercase hover:bg-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105'
                    whileHover={{ scale: 1.1, rotate: [0, -2, 2, -2, 0] }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Contáctanos
                  </motion.a>
                </motion.div>
              </motion.div>

              {/* Lado derecho - Imagen */}
              <motion.div
                className='flex items-center justify-center'
                initial={{ opacity: 0, x: 100, rotateY: 20 }}
                whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
              >
                <div
                  className='relative w-full h-full min-h-150 rounded-2xl overflow-hidden'
                  style={{
                    backgroundImage: 'url("/img/imagenes/imagen 2-03.png")',
                    backgroundSize: "cover",
                    backgroundPosition: "center calc(100% + 55px)",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <img
                    src='/img/imagenes/persona 2-03.png'
                    alt='Agricultor con productos en caja plástica'
                    className='relative z-10 mt-10 w-full h-auto object-contain'
                    style={{
                      transform: "translateX(73px)",
                    }}
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección complementaria - Solución completa */}
      <section className='relative h-screen w-full overflow-hidden bg-white'>
        <div className='grid grid-cols-1 lg:grid-cols-2 h-full'>
          {/* Lado izquierdo - Imagen */}
          <motion.div
            className='relative h-full w-full overflow-hidden'
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <img
              src='/img/imagenes/imagen 3-03.png'
              alt='Persona con fresas en contenedor plástico'
              className='w-full h-full object-cover'
            />
          </motion.div>

          {/* Lado derecho - Contenido */}
          <motion.div
            className='relative h-full w-full bg-blue-900 flex items-center justify-center px-8 md:px-12 lg:px-16 py-8'
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <div className='space-y-6 md:space-y-8'>
              {/* Título */}
              <motion.h2
                className='text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight'
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Te brindamos{" "}
                <span className='text-yellow-400'>la solución completa</span> en
                productos de plástico.
              </motion.h2>

              {/* Línea divisoria */}
              <motion.div
                className='w-full h-px bg-blue-700'
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
              ></motion.div>

              {/* Características con iconos */}
              <motion.div
                className='space-y-5 md:space-y-6'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                {/* Variedad inmensa de productos */}
                <motion.div
                  className='flex items-start gap-4'
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                >
                  <div className='shrink-0'>
                    <img
                      src='/img/iconos/icono 1-03.png'
                      alt='Icono variedad de productos'
                      className='w-12 h-12 md:w-14 md:h-14'
                    />
                  </div>
                  <div>
                    <h3 className='font-bold text-white text-base md:text-lg'>
                      Variedad inmensa de productos
                    </h3>
                    <p className='text-blue-200 text-sm md:text-base'>
                      Desde sillas hasta cajas industriales.
                    </p>
                  </div>
                </motion.div>

                {/* Precios mayoreo y menudeo */}
                <motion.div
                  className='flex items-start gap-4'
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 1.0 }}
                >
                  <div className='shrink-0'>
                    <img
                      src='/img/iconos/icono 2-03.png'
                      alt='Icono precios'
                      className='w-12 h-12 md:w-14 md:h-14'
                    />
                  </div>
                  <div>
                    <h3 className='font-bold text-white text-base md:text-lg'>
                      Precios mayoreo y menudeo
                    </h3>
                    <p className='text-blue-200 text-sm md:text-base'>
                      Ajustes según volumen y tipo de cliente.
                    </p>
                  </div>
                </motion.div>

                {/* Entrega rápida y cobertura nacional */}
                <motion.div
                  className='flex items-start gap-4'
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 1.1 }}
                >
                  <div className='shrink-0'>
                    <img
                      src='/img/iconos/icono 3-03.png'
                      alt='Icono entrega'
                      className='w-12 h-12 md:w-14 md:h-14'
                    />
                  </div>
                  <div>
                    <h3 className='font-bold text-white text-base md:text-lg'>
                      Entrega rápida y cobertura nacional
                    </h3>
                    <p className='text-blue-200 text-sm md:text-base'>
                      Logística optimizada.
                    </p>
                  </div>
                </motion.div>

                {/* Atención personalizada */}
                <motion.div
                  className='flex items-start gap-4'
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                >
                  <div className='shrink-0'>
                    <img
                      src='/img/iconos/icono 4-03.png'
                      alt='Icono atención 24h'
                      className='w-12 h-12 md:w-14 md:h-14'
                    />
                  </div>
                  <div>
                    <h3 className='font-bold text-white text-base md:text-lg'>
                      Atención personalizada
                    </h3>
                    <p className='text-blue-200 text-sm md:text-base'>
                      Te ayudamos a encontrar exactamente lo que necesitas.
                    </p>
                  </div>
                </motion.div>

                {/* Amplia Experiencia */}
                <motion.div
                  className='flex items-start gap-4'
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 1.3 }}
                >
                  <div className='shrink-0'>
                    <img
                      src='/img/iconos/icono 5-03.png'
                      alt='Icono experiencia'
                      className='w-12 h-12 md:w-14 md:h-14'
                    />
                  </div>
                  <div>
                    <h3 className='font-bold text-white text-base md:text-lg'>
                      Amplia Experiencia
                    </h3>
                    <p className='text-blue-200 text-sm md:text-base'>
                      Más de 20 años innovando en la industria.
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Plastimega;
