import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className='top-0 w-full z-50 bg-transparent'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-10 md:h-16'>
          {/* Logo */}
          <div className='shrink-0 overflow-hidden max-w-[140px] md:max-w-none -ml-1 md:-ml-16 lg:-ml-24'>
            <img
              src='/img/iconos/Logo plastimega-03.png'
              alt='Plastimega Logo'
              className='h-14 md:h-48 lg:h-64 w-auto object-contain object-left'
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
