import React, { useState } from "react";
import { motion } from "framer-motion";
import ModalContacto from "./ModalContacto";

const ContactoBanner = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <motion.section
      id='contacto-banner'
      className='relative h-screen w-full overflow-hidden'
      initial={{ opacity: 0, scale: 1.1 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeOut" }}
      style={{
        backgroundImage: 'url("/img/imagenes/imagen 10-03.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay oscuro opcional */}
      <motion.div
        className='absolute inset-0 bg-black opacity-20'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.2 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      ></motion.div>

      {/* Contenido */}
      <div className='relative z-10 h-full flex flex-col items-center justify-center px-4'>
        {/* Texto "HABLEMOS" */}
        <motion.h2
          className='text-4xl md:text-5xl lg:text-6xl font-normal text-white mb-4'
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          HABLEMOS
        </motion.h2>

        {/* Texto "EL DÍA DE HOY" */}
        <motion.h3
          className='text-5xl md:text-6xl lg:text-7xl font-black text-yellow-400 mb-12'
          initial={{ scale: 0.5, opacity: 0, rotateX: -90 }}
          whileInView={{ scale: 1, opacity: 1, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            type: "spring",
            stiffness: 200,
          }}
        >
          EL DÍA DE HOY
        </motion.h3>

        {/* Botón de contacto */}
        <motion.button
          onClick={() => setModalOpen(true)}
          className='bg-yellow-400 text-blue-900 px-12 py-4 rounded-full font-bold text-lg md:text-xl uppercase hover:bg-yellow-500 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-105'
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          whileHover={{ scale: 1.15, rotate: [0, -5, 5, -5, 0] }}
          whileTap={{ scale: 0.95 }}
        >
          CONTÁCTANOS
        </motion.button>

        <ModalContacto isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      </div>
    </motion.section>
  );
};

export default ContactoBanner;
