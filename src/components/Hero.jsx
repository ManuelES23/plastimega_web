import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ModalContacto from "./ModalContacto";

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div
      className='relative h-screen flex flex-col overflow-hidden'
      style={{
        backgroundImage: "url(/img/imagenes/imagen-hero.webp)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Background Overlay */}
      <div className='absolute inset-0 bg-black opacity-50'></div>

      {/* Integrated Navbar */}
      <nav className='relative z-50 w-full bg-transparent'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between items-center h-16'>
            {/* Logo */}
            <div className='shrink-0 -ml-30'>
              <img
                src='/img/iconos/Logo plastimega-03.png'
                alt='Plastimega Logo'
                className='h-60 w-auto'
              />
            </div>

            {/* Desktop Menu - Solo visible en pantallas grandes */}
            <div className='hidden lg:block'>
              <div className='ml-10 flex items-baseline space-x-8'>
                <a
                  href='#home'
                  className='text-white hover:text-blue-300 px-3 py-2 text-md font-medium transition-colors duration-300 uppercase'
                >
                  HOME
                </a>
                <a
                  href='#plastimega'
                  className='text-white hover:text-blue-300 px-3 py-2 text-md font-medium transition-colors duration-300 uppercase'
                >
                  PLASTIMEGA
                </a>
                <Link
                  to='/productos'
                  className='text-white hover:text-blue-300 px-3 py-2 text-md font-medium transition-colors duration-300 uppercase'
                >
                  PRODUCTOS
                </Link>
                <a
                  href='#topten'
                  className='text-white hover:text-blue-300 px-3 py-2 text-md font-medium transition-colors duration-300 uppercase'
                >
                  TOP TEN
                </a>
                <a
                  href='#servicios'
                  className='text-white hover:text-blue-300 px-3 py-2 text-md font-medium transition-colors duration-300 uppercase'
                >
                  SERVICIOS
                </a>
                <a
                  href='#testimonios'
                  className='text-white hover:text-blue-300 px-3 py-2 text-md font-medium transition-colors duration-300 uppercase'
                >
                  TESTIMONIOS
                </a>
                <a
                  href='#blog'
                  className='text-white hover:text-blue-300 px-3 py-2 text-md font-medium transition-colors duration-300 uppercase'
                >
                  BLOG
                </a>
                <a
                  href='#contacto'
                  className='text-white hover:text-blue-300 px-3 py-2 text-md font-medium transition-colors duration-300 uppercase'
                >
                  CONTACTO
                </a>
              </div>
            </div>

            {/* Mobile & Tablet menu button */}
            <div className='lg:hidden'>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className='inline-flex items-center justify-center p-2 rounded-md text-white hover:text-blue-300 hover:bg-white hover:bg-opacity-10 focus:outline-none transition-colors duration-300'
              >
                <svg
                  className={`${isMenuOpen ? "hidden" : "block"} h-6 w-6`}
                  stroke='currentColor'
                  fill='none'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                </svg>
                <svg
                  className={`${isMenuOpen ? "block" : "hidden"} h-6 w-6`}
                  stroke='currentColor'
                  fill='none'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile & Tablet Menu - Dropdown absoluto */}
        <div
          className={`lg:hidden absolute top-full left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.95)",
            backdropFilter: "blur(10px)",
          }}
        >
          <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3 shadow-lg'>
            <a
              href='#home'
              className='text-white hover:text-blue-300 hover:bg-white hover:bg-opacity-10 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 uppercase'
              onClick={() => setIsMenuOpen(false)}
            >
              HOME
            </a>
            <a
              href='#plastimega'
              className='text-white hover:text-blue-300 hover:bg-white hover:bg-opacity-10 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 uppercase'
              onClick={() => setIsMenuOpen(false)}
            >
              PLASTIMEGA
            </a>
            <Link
              to='/productos'
              className='text-white hover:text-blue-300 hover:bg-white hover:bg-opacity-10 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 uppercase'
              onClick={() => setIsMenuOpen(false)}
            >
              PRODUCTOS
            </Link>
            <a
              href='#topten'
              className='text-white hover:text-blue-300 hover:bg-white hover:bg-opacity-10 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 uppercase'
              onClick={() => setIsMenuOpen(false)}
            >
              TOPTEN
            </a>
            <a
              href='#servicios'
              className='text-white hover:text-blue-300 hover:bg-white hover:bg-opacity-10 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 uppercase'
              onClick={() => setIsMenuOpen(false)}
            >
              SERVICIOS
            </a>
            <a
              href='#testimonios'
              className='text-white hover:text-blue-300 hover:bg-white hover:bg-opacity-10 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 uppercase'
              onClick={() => setIsMenuOpen(false)}
            >
              TESTIMONIOS
            </a>
            <a
              href='#blog'
              className='text-white hover:text-blue-300 hover:bg-white hover:bg-opacity-10 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 uppercase'
              onClick={() => setIsMenuOpen(false)}
            >
              BLOG
            </a>
            <a
              href='#contacto'
              className='text-white hover:text-blue-300 hover:bg-white hover:bg-opacity-10 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 uppercase'
              onClick={() => setIsMenuOpen(false)}
            >
              CONTACTO
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className='relative z-10 flex-1 w-full overflow-hidden'>
        {/* Left Side - Text and Button */}
        <div
          className='absolute left-0 bottom-70 flex flex-col items-start justify-end space-y-4 pb-8 px-4 texto-container'
          style={{
            transform: "translateX(min(8.3vw, 160px))",
          }}
        >
          <motion.img
            src='/img/textos-graficos/texto-hero.png'
            className='hero-text-image h-auto'
            style={{
              width: "min(46.9vw, 900px)",
              maxWidth: "100%",
            }}
            alt='Tu producto está seguro, tu negocio también'
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />

          {/* Contact Button */}
          <motion.button
            onClick={() => setModalOpen(true)}
            className='hero-button bg-blue-900 text-yellow-400 px-8 py-2.5 rounded-full font-bold text-lg uppercase hover:bg-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105'
            style={{
              marginTop: "min(-15.6vw, -200px)",
              marginLeft: "min(18.2vw, 350px)",
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Contáctanos
          </motion.button>
        </div>

        {/* Right Side - Person Image with Badge */}
        <div
          className='absolute right-0 bottom-0 top-7 flex items-end justify-end h-full px-4'
          style={{
            transform: "translateX(min(-6.25vw, -120px))",
          }}
        >
          <motion.img
            src='/img/imagenes/persona 1-03.png'
            alt='Persona con productos'
            className='hero-person-image object-contain object-bottom'
            style={{
              height: "min(97.2vh, 1050px)",
              maxWidth: "100%",
            }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />

          {/* Badge/Sello - Positioned absolutely on the person */}
          <div
            className='absolute hero-badge-container'
            style={{ top: "40px", right: "10px" }}
          >
            <motion.img
              src='/img/iconos/sello 1 -03.png'
              alt='Cajas a prueba de todo'
              className='hero-badge object-contain animate-pulse'
              style={{
                width: "min(26vw, 500px)",
                height: "min(26vw, 500px)",
              }}
              initial={{ opacity: 0, scale: 0.5, rotate: -90 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.7,
                type: "spring",
                stiffness: 150,
              }}
            />
          </div>
        </div>
      </div>

      {/* Estilos específicos para 1366x768 */}
      <style jsx>{`
        @media (min-width: 1360px) and (max-width: 1370px) and (min-height: 760px) and (max-height: 775px) {
          .hero-text-image {
            width: 700px !important;
          }

          .texto-container {
            transform: translateY(130px) !important;
            margin-left: 130px !important;
          }

          .hero-person-image {
            height: 680px !important;
          }

          .hero-badge {
            width: 350px !important;
            height: 350px !important;
          }

          .hero-badge-container {
            top: 20px !important;
            right: 8px !important;
          }

          .hero-button {
            margin-top: -220px !important;
            margin-left: 220px !important;
            font-size: 1.5rem !important;
            padding: 0.5rem 2rem !important;
          }
        }
      `}</style>

      {/* Estilos para Mobile y Tablet */}
      <style jsx>{`
        /* Mobile - Portrait (320px - 480px) */
        @media (max-width: 480px) {
          /* Logo más pequeño en móvil */
          nav img[alt="Plastimega Logo"] {
            height: 80px !important;
            width: auto !important;
          }

          .texto-container {
            position: relative !important;
            transform: none !important;
            bottom: auto !important;
            left: 0 !important;
            padding: 1rem !important;
            margin-top: 2rem !important;
          }

          .hero-text-image {
            width: 90vw !important;
            max-width: 500px !important;
          }

          .hero-button {
            margin-top: 0rem !important;
            margin-left: 5rem !important;
            font-size: 0.75rem !important;
            padding: 0.5rem 1.5rem !important;
            width: 100% !important;
            max-width: 200px !important;
            text-align: center !important;
          }

          /* Ocultar imagen de persona en móvil pequeño */
          .hero-person-image {
            display: none !important;
          }

          /* Ocultar badge en móvil */
          .hero-badge-container {
            display: none !important;
          }

          /* Ajustar contenedor hero */
          .relative.z-10.flex-1 {
            display: flex !important;
            flex-direction: column !important;
            justify-content: center !important;
            align-items: center !important;
            padding: 2rem 1rem !important;
          }
        }

        /* Mobile - Landscape (481px - 767px) */
        @media (min-width: 481px) and (max-width: 767px) {
          /* Logo en landscape */
          nav img[alt="Plastimega Logo"] {
            height: 100px !important;
            width: auto !important;
          }

          .texto-container {
            position: relative !important;
            transform: none !important;
            bottom: auto !important;
            padding: 1.5rem !important;
            margin-top: 3rem !important;
          }

          .hero-text-image {
            width: 70vw !important;
            max-width: 400px !important;
          }

          .hero-button {
            margin-top: 1.5rem !important;
            margin-left: 0 !important;
            font-size: 0.875rem !important;
            padding: 0.625rem 2rem !important;
          }

          .hero-person-image {
            height: 40vh !important;
            max-height: 350px !important;
            opacity: 0.3 !important;
          }

          .hero-badge {
            width: 100px !important;
            height: 100px !important;
          }

          .hero-badge-container {
            top: 5px !important;
            right: 5px !important;
          }
        }

        /* Tablet - Portrait (768px - 1024px) */
        @media (min-width: 768px) and (max-width: 1024px) {
          /* Logo en tablet portrait */
          nav img[alt="Plastimega Logo"] {
            height: 350px !important;
            width: auto !important;
          }

          .texto-container {
            transform: translateX(3vw) translateY(15vh) !important;
            bottom: 35vh !important;
          }

          .hero-text-image {
            width: 90vw !important;
            max-width: 800px !important;
          }

          .hero-button {
            margin-top: -20vw !important;
            margin-left: 28vw !important;
            font-size: 2rem !important;
            padding: 0.625rem 2rem !important;
          }

          .hero-person-image {
            height: 70vh !important;
            max-height: 800px !important;
            margin-right: 40px !important;
            display: none !important;
          }

          .hero-badge {
            width: 160px !important;
            height: 160px !important;
            display: none !important;
          }

          .hero-badge-container {
            top: 12px !important;
            right: 8px !important;
          }
        }

        /* Tablet - Landscape (1025px - 1366px) */
        @media (min-width: 1025px) and (max-width: 1366px) {
          /* Logo en tablet landscape */
          nav img[alt="Plastimega Logo"] {
            height: 160px !important;
            width: auto !important;
          }

          .texto-container {
            transform: translateX(6vw) translateY(-10vh) !important;
            bottom: 40vh !important;
          }

          .hero-text-image {
            width: 52vw !important;
            max-width: 700px !important;
          }

          .hero-button {
            margin-top: -12vw !important;
            margin-left: 15vw !important;
            font-size: 1rem !important;
            padding: 0.75rem 2.5rem !important;
          }

          .hero-person-image {
            height: 82vh !important;
            max-height: 850px !important;
          }

          .hero-badge {
            width: 240px !important;
            height: 240px !important;
          }

          .hero-badge-container {
            top: 18px !important;
            right: 12px !important;
          }
        }
      `}</style>

      <ModalContacto isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
};

export default Hero;
