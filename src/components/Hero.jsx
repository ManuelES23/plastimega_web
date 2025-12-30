import React, { useState } from "react";

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div
      className='relative h-screen flex flex-col overflow-hidden'
      style={{
        backgroundImage: "url(/img/imagenes/imagen-hero.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Background Overlay */}
      <div className='absolute inset-0 bg-black opacity-50'></div>

      {/* Integrated Navbar */}
      <nav className='relative z-50 w-full'>
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

            {/* Desktop Menu */}
            <div className='hidden md:block'>
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
                <a
                  href='#produtos'
                  className='text-white hover:text-blue-300 px-3 py-2 text-md font-medium transition-colors duration-300 uppercase'
                >
                  PRODUCTOS
                </a>
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

            {/* Mobile menu button */}
            <div className='md:hidden'>
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

        {/* Mobile Menu */}
        <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
          <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
            <a
              href='#home'
              className='text-white hover:text-blue-300 block px-3 py-2 text-base font-medium transition-colors duration-300 uppercase'
              onClick={() => setIsMenuOpen(false)}
            >
              HOME
            </a>
            <a
              href='#plastimega'
              className='text-white hover:text-blue-300 block px-3 py-2 text-base font-medium transition-colors duration-300 uppercase'
              onClick={() => setIsMenuOpen(false)}
            >
              PLASTIMEGA
            </a>
            <a
              href='#produtos'
              className='text-white hover:text-blue-300 block px-3 py-2 text-base font-medium transition-colors duration-300 uppercase'
              onClick={() => setIsMenuOpen(false)}
            >
              PRODUTOS
            </a>
            <a
              href='#topten'
              className='text-white hover:text-blue-300 block px-3 py-2 text-base font-medium transition-colors duration-300 uppercase'
              onClick={() => setIsMenuOpen(false)}
            >
              TOPTEN
            </a>
            <a
              href='#servicios'
              className='text-white hover:text-blue-300 block px-3 py-2 text-base font-medium transition-colors duration-300 uppercase'
              onClick={() => setIsMenuOpen(false)}
            >
              SERVICIOS
            </a>
            <a
              href='#testimonios'
              className='text-white hover:text-blue-300 block px-3 py-2 text-base font-medium transition-colors duration-300 uppercase'
              onClick={() => setIsMenuOpen(false)}
            >
              TESTIMONIOS
            </a>
            <a
              href='#blog'
              className='text-white hover:text-blue-300 block px-3 py-2 text-base font-medium transition-colors duration-300 uppercase'
              onClick={() => setIsMenuOpen(false)}
            >
              BLOG
            </a>
            <a
              href='#contacto'
              className='text-white hover:text-blue-300 block px-3 py-2 text-base font-medium transition-colors duration-300 uppercase'
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
          <img
            src='/img/textos-graficos/texto-hero.png'
            className='hero-text-image h-auto'
            style={{
              width: "min(46.9vw, 900px)",
              maxWidth: "100%",
            }}
            alt='Tu producto está seguro, tu negocio también'
          />

          {/* Contact Button */}
          <a
            href='#contacto'
            className='hero-button bg-blue-900 text-yellow-400 px-8 py-2.5 rounded-full font-bold text-lg uppercase hover:bg-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105'
            style={{
              marginTop: "min(-15.6vw, -200px)",
              marginLeft: "min(18.2vw, 350px)",
            }}
          >
            Contáctanos
          </a>
        </div>

        {/* Right Side - Person Image with Badge */}
        <div
          className='absolute right-0 bottom-0 top-7 flex items-end justify-end h-full px-4'
          style={{
            transform: "translateX(min(-6.25vw, -120px))",
          }}
        >
          <img
            src='/img/imagenes/persona 1-03.png'
            alt='Persona con productos'
            className='hero-person-image object-contain object-bottom'
            style={{
              height: "min(97.2vh, 1050px)",
              maxWidth: "100%",
            }}
          />

          {/* Badge/Sello - Positioned absolutely on the person */}
          <div
            className='absolute hero-badge-container'
            style={{ top: "40px", right: "10px" }}
          >
            <img
              src='/img/iconos/sello 1 -03.png'
              alt='Cajas a prueba de todo'
              className='hero-badge object-contain animate-pulse'
              style={{
                width: "min(26vw, 500px)",
                height: "min(26vw, 500px)",
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
    </div>
  );
};

export default Hero;
