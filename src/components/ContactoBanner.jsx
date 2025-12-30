import React from "react";

const ContactoBanner = () => {
  return (
    <section
      id='contacto-banner'
      className='relative h-screen w-full overflow-hidden'
      style={{
        backgroundImage: 'url("/img/imagenes/imagen 10-03.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay oscuro opcional */}
      <div className='absolute inset-0 bg-black opacity-20'></div>

      {/* Contenido */}
      <div className='relative z-10 h-full flex flex-col items-center justify-center px-4'>
        {/* Texto "HABLEMOS" */}
        <h2 className='text-4xl md:text-5xl lg:text-6xl font-normal text-white mb-4'>
          HABLEMOS
        </h2>

        {/* Texto "EL DÍA DE HOY" */}
        <h3 className='text-5xl md:text-6xl lg:text-7xl font-black text-yellow-400 mb-12'>
          EL DÍA DE HOY
        </h3>

        {/* Botón de contacto */}
        <a
          href='#contacto'
          className='bg-yellow-400 text-blue-900 px-12 py-4 rounded-full font-bold text-lg md:text-xl uppercase hover:bg-yellow-500 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-105'
        >
          CONTÁCTANOS
        </a>
      </div>
    </section>
  );
};

export default ContactoBanner;
