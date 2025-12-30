import React from "react";

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
          <div className='text-center mb-12'>
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight'>
              Conóce <span className='text-blue-900'>nuestras soluciones</span>{" "}
              por categoría
            </h2>
            {/* Línea divisoria */}
            <div className='w-64 h-px bg-blue-900 mx-auto mt-6'></div>
          </div>

          {/* Grid de tarjetas */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16'>
            {/* Tarjeta 1: Cajas de plástico */}
            <div className='bg-white rounded-lg shadow-lg overflow-hidden flex flex-col items-center justify-center py-16 px-8 hover:shadow-xl transition-shadow duration-300 min-h-150'>
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
              <button className='bg-yellow-400 text-gray-800 px-8 py-2 rounded-full font-bold text-sm uppercase hover:bg-yellow-500 transition-all duration-300 shadow-md'>
                ver más
              </button>
            </div>

            {/* Tarjeta 2: Sillas de plástico */}
            <div className='group bg-white rounded-lg shadow-lg overflow-hidden flex flex-col items-center justify-center py-16 px-8 relative hover:shadow-xl transition-all duration-300 min-h-150s hover:bg-blue-900'>
              {/* Imagen de fondo solo visible en hover */}
              <div
                className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300'
                style={{
                  backgroundImage: 'url("/img/imagenes/imagen silla-03.png")',
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              {/* Overlay azul solo visible en hover */}
              <div className='absolute inset-0 bg-blue-900 opacity-0 group-hover:opacity-70 transition-opacity duration-300'></div>

              <div className='relative z-10 flex flex-col items-center'>
                <div className='mb-8'>
                  <img
                    src='/img/iconos/icono silla  7-03.png'
                    alt='Icono silla de plástico'
                    className='w-20 h-20 md:w-24 md:h-24'
                  />
                </div>
                <h3 className='text-2xl font-bold text-gray-800 group-hover:text-white mb-6 transition-colors duration-300'>
                  Sillas de plástico
                </h3>
                <p className='text-gray-600 group-hover:text-white text-center mb-8 text-sm transition-colors duration-300'>
                  Sillas de plástico resistentes, y duraderas.
                </p>
                <button className='bg-yellow-400 text-gray-800 px-8 py-2 rounded-full font-bold text-sm uppercase hover:bg-yellow-500 transition-all duration-300 shadow-md'>
                  ver más
                </button>
              </div>
            </div>

            {/* Tarjeta 3: Tapa de plástico */}
            <div className='bg-white rounded-lg shadow-lg overflow-hidden flex flex-col items-center justify-center py-16 px-8 hover:shadow-xl transition-shadow duration-300 min-h-150'>
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
              <button className='bg-yellow-400 text-gray-800 px-8 py-2 rounded-full font-bold text-sm uppercase hover:bg-yellow-500 transition-all duration-300 shadow-md'>
                ver más
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Productos;
