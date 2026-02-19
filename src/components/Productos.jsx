import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Productos = () => {
  return (
    <section
      id='productos'
      className='relative h-screen w-full overflow-hidden bg-gray-100'
    >
      {/* Contenedor principal */}
      <div className='relative z-10 h-full flex items-center justify-center px-4 md:px-8 lg:px-16 xl:px-24 py-12'>
        <div className='max-w-7xl mx-auto w-full'>
          {/* Título */}
          <motion.div
            className='text-center mb-12'
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <motion.h2
              className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight'
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Conóce <span className='text-blue-900'>nuestras soluciones</span>{" "}
              por categoría
            </motion.h2>
            {/* Línea divisoria */}
            <motion.div
              className='w-64 h-px bg-blue-900 mx-auto mt-6'
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            ></motion.div>
          </motion.div>

          {/* Grid de tarjetas */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16'>
            {/* Tarjeta 1: Cajas de plástico */}
            <motion.div
              className='bg-white rounded-lg shadow-lg overflow-hidden flex flex-col items-center justify-center py-16 px-8 hover:shadow-xl transition-shadow duration-300 min-h-150'
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileHover={{ y: -10, scale: 1.05 }}
            >
              <div className='mb-8'>
                <img
                  src='/img/iconos/icono 6-03.png'
                  alt='Icono caja de plástico'
                  className='w-20 h-20 md:w-24 md:h-24'
                />
              </div>
              <h3 className='text-2xl font-bold text-gray-800 mb-6'>
                Cajas de plástico
              </h3>
              <p className='text-gray-600 text-center mb-8 text-sm'>
                Diseñadas para la operación más exigente.
              </p>
              <Link to='/productos'>
                <motion.button
                  className='bg-yellow-400 text-gray-800 px-8 py-2 rounded-full font-bold text-sm uppercase hover:bg-yellow-500 transition-all duration-300 shadow-md'
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  ver más
                </motion.button>
              </Link>
            </motion.div>

            {/* Tarjeta 2: Sillas de plástico */}
            <motion.div
              className='bg-white rounded-lg shadow-lg overflow-hidden flex flex-col items-center justify-center py-16 px-8 hover:shadow-xl transition-shadow duration-300 min-h-150'
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ y: -10, scale: 1.05 }}
            >
              <div className='mb-8'>
                <img
                  src='/img/iconos/icono silla  7-03.png'
                  alt='Icono silla de plástico'
                  className='w-20 h-20 md:w-24 md:h-24'
                />
              </div>
              <h3 className='text-2xl font-bold text-gray-800 mb-6'>
                Sillas de plástico
              </h3>
              <p className='text-gray-600 text-center mb-8 text-sm'>
                Sillas de plástico resistentes, y duraderas.
              </p>
              <Link to='/productos'>
                <motion.button
                  className='bg-yellow-400 text-gray-800 px-8 py-2 rounded-full font-bold text-sm uppercase hover:bg-yellow-500 transition-all duration-300 shadow-md'
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  ver más
                </motion.button>
              </Link>
            </motion.div>

            {/* Tarjeta 3: Tapa de plástico */}
            <motion.div
              className='bg-white rounded-lg shadow-lg overflow-hidden flex flex-col items-center justify-center py-16 px-8 hover:shadow-xl transition-shadow duration-300 min-h-150'
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
              whileHover={{ y: -10, scale: 1.05 }}
            >
              <div className='mb-8'>
                <img
                  src='/img/iconos/icono tapa  8-03.png'
                  alt='Icono tapa de plástico'
                  className='w-20 h-20 md:w-24 md:h-24'
                />
              </div>
              <h3 className='text-2xl font-bold text-gray-800 mb-6'>
                Tapa de plástico
              </h3>
              <p className='text-gray-600 text-center mb-8 text-sm'>
                Un buen producto merece estar bien protegido.
              </p>
              <Link to='/productos'>
                <motion.button
                  className='bg-yellow-400 text-gray-800 px-8 py-2 rounded-full font-bold text-sm uppercase hover:bg-yellow-500 transition-all duration-300 shadow-md'
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  ver más
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Productos;
