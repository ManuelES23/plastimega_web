import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const TopTen = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const productos = [
    {
      id: 1,
      nombre: "",
      imagen: "/img/imagenes/imagen 4 -03.png",
      capacidad: "10kg",
      colores: "Amarillo / Rojo / Gris / Verde / Naranja / Azul / Negra",
    },
    {
      id: 2,
      nombre: "",
      imagen: "/img/imagenes/imagen 5 -03.png",
      capacidad: "16kg",
      colores: "Verde / Gris / Negro / Rojo",
    },
    {
      id: 3,
      nombre: "",
      imagen: "/img/imagenes/producto-3.jpg",
      capacidad: "20kg",
      colores: "Negro / Azul / Gris",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % productos.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + productos.length) % productos.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <motion.section
      id='topten'
      className='relative h-screen w-full overflow-hidden bg-blue-900'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className='grid grid-cols-1 lg:grid-cols-2 h-full'>
        {/* Lado izquierdo - Contenido */}
        <motion.div
          className='relative h-full w-full bg-blue-900 flex items-center justify-center px-8 md:px-12 lg:px-16 py-8'
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className='space-y-8'>
            {/* Título */}
            <motion.h2
              className='text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight'
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Los <span className='font-extrabold'>productos preferidos</span>
              <br />
              por nuestros clientes
            </motion.h2>

            {/* Línea divisoria */}
            <motion.div
              className='w-full max-w-md h-px bg-blue-700'
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            ></motion.div>

            {/* Características con checkmarks */}
            <motion.div
              className='space-y-6'
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              {/* Siempre disponibles */}
              <motion.div
                className='flex items-start gap-4'
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                <div className='shrink-0 mt-1'>
                  <svg
                    className='w-6 h-6 text-yellow-400'
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
                  <h3 className='font-bold text-white text-lg'>
                    Siempre disponibles
                  </h3>
                  <p className='text-blue-200 text-sm'>
                    Siempre tenemos un inventario disponible en nuestros
                    productos top ten.
                  </p>
                </div>
              </motion.div>

              {/* Entrega rápida */}
              <motion.div
                className='flex items-start gap-4'
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1.0 }}
              >
                <div className='shrink-0 mt-1'>
                  <svg
                    className='w-6 h-6 text-yellow-400'
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
                  <h3 className='font-bold text-white text-lg'>
                    Entrega rápida y cobertura nacional
                  </h3>
                  <p className='text-blue-200 text-sm'>
                    Gracias a su alta demanda, podemos poner el producto donde
                    sea, cuando sea.
                  </p>
                </div>
              </motion.div>

              {/* Programas comerciales */}
              <motion.div
                className='flex items-start gap-4'
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1.1 }}
              >
                <div className='shrink-0 mt-1'>
                  <svg
                    className='w-6 h-6 text-yellow-400'
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
                  <h3 className='font-bold text-white text-lg'>
                    Programas comerciales especiales
                  </h3>
                  <p className='text-blue-200 text-sm'>
                    En nuestros productos top ten podemos brindar condiciones
                    especiales en abse a volúmen.
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Botón */}
            <motion.div
              className='pt-4'
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              <Link to='/productos'>
                <motion.button
                  className='bg-yellow-400 text-blue-900 px-10 py-3 rounded-full font-bold text-base uppercase hover:bg-yellow-500 transition-all duration-300 shadow-lg'
                  whileHover={{ scale: 1.1, rotate: [0, -3, 3, 0] }}
                  whileTap={{ scale: 0.95 }}
                >
                  ver más
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Lado derecho - Carrusel */}
        <motion.div
          className='relative h-full w-full bg-blue-800 flex items-center justify-center overflow-hidden'
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          {/* Contenedor del carrusel */}
          <div className='relative w-full h-full flex items-center justify-center px-16'>
            {/* Producto actual */}
            <motion.div
              key={currentSlide}
              className='relative z-10 flex flex-col items-center justify-center'
              initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              exit={{ opacity: 0, scale: 0.8, rotateY: -90 }}
              transition={{ duration: 0.6 }}
            >
              {/* Imagen del producto */}
              <div className='relative mb-8'>
                <img
                  src={productos[currentSlide].imagen}
                  alt={productos[currentSlide].nombre}
                  className='w-full max-w-xl h-auto object-contain rounded-lg shadow-lg'
                />
              </div>

              {/* Información del producto */}
              <div className='text-center space-y-2'>
                <p className='text-white text-xl font-bold'>
                  Capacidad: {productos[currentSlide].capacidad}
                </p>
                <p className='text-blue-200 text-sm'>
                  {productos[currentSlide].colores}
                </p>
              </div>
            </motion.div>

            {/* Flecha izquierda */}
            <motion.button
              onClick={prevSlide}
              className='absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-yellow-400 hover:bg-yellow-500 text-blue-900 p-3 rounded-full transition-all duration-300 shadow-lg'
              aria-label='Anterior'
              whileHover={{ scale: 1.2, x: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg
                className='w-8 h-8'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={3}
                  d='M15 19l-7-7 7-7'
                />
              </svg>
            </motion.button>

            {/* Flecha derecha */}
            <motion.button
              onClick={nextSlide}
              className='absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-yellow-400 hover:bg-yellow-500 text-blue-900 p-3 rounded-full transition-all duration-300 shadow-lg'
              aria-label='Siguiente'
              whileHover={{ scale: 1.2, x: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg
                className='w-8 h-8'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={3}
                  d='M9 5l7 7-7 7'
                />
              </svg>
            </motion.button>

            {/* Indicadores (dots) */}
            <div className='absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20'>
              {productos.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index
                      ? "bg-yellow-400 w-8"
                      : "bg-blue-400 hover:bg-blue-300"
                  }`}
                  aria-label={`Ir a slide ${index + 1}`}
                  whileHover={{ scale: 1.3 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default TopTen;
