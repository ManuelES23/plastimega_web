import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className='fixed top-0 w-full z-50 bg-white bg-opacity-10 backdrop-blur-md border-b border-white border-opacity-20'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          {/* Logo */}
          <div className='shrink-0'>
            <img
              src='/img/iconos/Logo plastimega-03.png'
              alt='Plastimega Logo'
              className='h-8 w-auto'
            />
          </div>

          {/* Desktop Menu */}
          <div className='hidden md:block'>
            <div className='ml-10 flex items-baseline space-x-8'>
              <a
                href='#home'
                className='text-white hover:text-blue-300 px-3 py-2 text-sm font-medium transition-colors duration-300 uppercase'
              >
                HOME
              </a>
              <a
                href='#plastimega'
                className='text-white hover:text-blue-300 px-3 py-2 text-sm font-medium transition-colors duration-300 uppercase'
              >
                PLASTIMEGA
              </a>
              <a
                href='#produtos'
                className='text-white hover:text-blue-300 px-3 py-2 text-sm font-medium transition-colors duration-300 uppercase'
              >
                PRODUTOS
              </a>
              <a
                href='#topten'
                className='text-white hover:text-blue-300 px-3 py-2 text-sm font-medium transition-colors duration-300 uppercase'
              >
                TOPTEN
              </a>
              <a
                href='#servicios'
                className='text-white hover:text-blue-300 px-3 py-2 text-sm font-medium transition-colors duration-300 uppercase'
              >
                SERVICIOS
              </a>
              <a
                href='#testimonios'
                className='text-white hover:text-blue-300 px-3 py-2 text-sm font-medium transition-colors duration-300 uppercase'
              >
                TESTIMONIOS
              </a>
              <a
                href='#blog'
                className='text-white hover:text-blue-300 px-3 py-2 text-sm font-medium transition-colors duration-300 uppercase'
              >
                BLOG
              </a>
              <a
                href='#contacto'
                className='text-white hover:text-blue-300 px-3 py-2 text-sm font-medium transition-colors duration-300 uppercase'
              >
                CONTACTO
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className='md:hidden'>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className='bg-white bg-opacity-10 inline-flex items-center justify-center p-2 rounded-md text-white hover:text-blue-300 hover:bg-white hover:bg-opacity-20 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500'
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
        <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white bg-opacity-10 backdrop-blur-md'>
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
  );
};

export default Navbar;
