import React, { useState } from "react";

const Testimonios = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonios = [
    {
      id: 1,
      logo: "/img/logos/logo-cliente-1.png",
      testimonio:
        "Plastimega nos ha proporcionado soluciones de embalaje de alta calidad que han mejorado significativamente nuestra eficiencia operativa. Su servicio al cliente es excepcional.",
      avatar: "/img/avatars/avatar-1.jpg",
      nombre: "Juan Pérez",
      cargo: "Gerente de Operaciones",
    },
    {
      id: 2,
      logo: "/img/logos/logo-cliente-2.png",
      testimonio:
        "La variedad de productos y la rapidez en las entregas hacen de Plastimega nuestro proveedor preferido. Siempre cumplen con nuestras expectativas.",
      avatar: "/img/avatars/avatar-2.jpg",
      nombre: "María González",
      cargo: "Directora de Logística",
    },
    {
      id: 3,
      logo: "/img/logos/logo-cliente-3.png",
      testimonio:
        "Excelente calidad en todos sus productos. Hemos trabajado con ellos durante años y siempre mantienen los más altos estándares de calidad.",
      avatar: "/img/avatars/avatar-3.jpg",
      nombre: "Carlos Ramírez",
      cargo: "Gerente de Compras",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonios.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonios.length) % testimonios.length
    );
  };

  return (
    <section
      id='testimonios'
      className='relative h-screen w-full overflow-hidden bg-gray-100'
    >
      {/* Contenedor principal */}
      <div className='relative z-10 h-full flex items-center justify-center px-4 md:px-8 lg:px-16 xl:px-24 py-12'>
        <div className='max-w-7xl mx-auto w-full'>
          {/* Título */}
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-normal text-gray-800 leading-tight mb-6'>
              Los{" "}
              <span className='font-bold text-blue-900'>resultados hablan</span>{" "}
              por sí mismos
            </h2>
            {/* Línea divisoria */}
            <div className='w-96 h-px bg-blue-900 mx-auto'></div>
          </div>

          {/* Carrusel de testimonios */}
          <div className='relative'>
            {/* Contenedor de tarjetas */}
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
              {testimonios.map((testimonio, index) => (
                <div
                  key={testimonio.id}
                  className='bg-white rounded-lg shadow-lg p-8 flex flex-col items-center text-center min-h-[400px]'
                >
                  {/* Logo de la empresa */}
                  <div className='mb-6 h-16 flex items-center justify-center'>
                    <img
                      src={testimonio.logo}
                      alt='Logo empresa'
                      className='max-h-12 max-w-full object-contain'
                    />
                  </div>

                  {/* Testimonio */}
                  <p className='text-gray-700 text-sm md:text-base leading-relaxed mb-8 flex-1'>
                    "{testimonio.testimonio}"
                  </p>

                  {/* Autor */}
                  <div className='flex flex-col items-center'>
                    {/* Avatar */}
                    <div className='w-16 h-16 rounded-full overflow-hidden mb-3'>
                      <img
                        src={testimonio.avatar}
                        alt={testimonio.nombre}
                        className='w-full h-full object-cover'
                      />
                    </div>
                    {/* Nombre y cargo */}
                    <h4 className='text-gray-900 font-bold text-sm uppercase'>
                      {testimonio.nombre}
                    </h4>
                    <p className='text-gray-600 text-xs'>{testimonio.cargo}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Flecha izquierda */}
            <button
              onClick={prevSlide}
              className='absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 text-gray-600 hover:text-blue-900 transition-colors duration-300'
              aria-label='Anterior'
            >
              <svg
                className='w-12 h-12'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M15 19l-7-7 7-7'
                />
              </svg>
            </button>

            {/* Flecha derecha */}
            <button
              onClick={nextSlide}
              className='absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 text-gray-600 hover:text-blue-900 transition-colors duration-300'
              aria-label='Siguiente'
            >
              <svg
                className='w-12 h-12'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M9 5l7 7-7 7'
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonios;
