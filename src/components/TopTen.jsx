import React, { useState } from "react";

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
    <section
      id='topten'
      className='relative h-screen w-full overflow-hidden bg-blue-900'
    >
      <div className='grid grid-cols-1 lg:grid-cols-2 h-full'>
        {/* Lado izquierdo - Contenido */}
        <div className='relative h-full w-full bg-blue-900 flex items-center justify-center px-8 md:px-12 lg:px-16 py-8'>
          <div className='space-y-8'>
            {/* Título */}
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight'>
              Los <span className='font-extrabold'>productos preferidos</span>
              <br />
              por nuestros clientes
            </h2>

            {/* Línea divisoria */}
            <div className='w-full max-w-md h-px bg-blue-700'></div>

            {/* Características con checkmarks */}
            <div className='space-y-6'>
              {/* Siempre disponibles */}
              <div className='flex items-start gap-4'>
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
              </div>

              {/* Entrega rápida */}
              <div className='flex items-start gap-4'>
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
              </div>

              {/* Programas comerciales */}
              <div className='flex items-start gap-4'>
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
              </div>
            </div>

            {/* Botón */}
            <div className='pt-4'>
              <button className='bg-yellow-400 text-blue-900 px-10 py-3 rounded-full font-bold text-base uppercase hover:bg-yellow-500 transition-all duration-300 shadow-lg'>
                ver más
              </button>
            </div>
          </div>
        </div>

        {/* Lado derecho - Carrusel */}
        <div className='relative h-full w-full bg-blue-800 flex items-center justify-center overflow-hidden'>
          {/* Contenedor del carrusel */}
          <div className='relative w-full h-full flex items-center justify-center px-16'>
            {/* Producto actual */}
            <div className='relative z-10 flex flex-col items-center justify-center'>
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
            </div>

            {/* Flecha izquierda */}
            <button
              onClick={prevSlide}
              className='absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-yellow-400 hover:bg-yellow-500 text-blue-900 p-3 rounded-full transition-all duration-300 shadow-lg'
              aria-label='Anterior'
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
            </button>

            {/* Flecha derecha */}
            <button
              onClick={nextSlide}
              className='absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-yellow-400 hover:bg-yellow-500 text-blue-900 p-3 rounded-full transition-all duration-300 shadow-lg'
              aria-label='Siguiente'
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
            </button>

            {/* Indicadores (dots) */}
            <div className='absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20'>
              {productos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index
                      ? "bg-yellow-400 w-8"
                      : "bg-blue-400 hover:bg-blue-300"
                  }`}
                  aria-label={`Ir a slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopTen;
