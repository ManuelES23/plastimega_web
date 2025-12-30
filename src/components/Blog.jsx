import React from "react";

const Blog = () => {
  const articulos = [
    {
      id: 1,
      titulo: "SOLUCIONES PARA SUMINISTRO AGRO.",
      descripcion:
        "La industria agroalimentaria es una de las más dinámicas, por ello, te brindamos un servicio integral para que tu operación no se detenga.",
      imagen: "/img/blog/blog-1.jpg",
    },
    {
      id: 2,
      titulo: "PLASTIMEGA LANZA NUEVA PÁGINA WEB.",
      descripcion:
        "La industria agroalimentaria es una de las más dinámicas, por ello, te brindamos un servicio integral para que tu operación no se detenga.",
      imagen: "/img/blog/blog-2.jpg",
    },
    {
      id: 3,
      titulo: "NUEVOS PRODUCTOS POR ANUNCIARSE.",
      descripcion:
        "La industria agroalimentaria es una de las más dinámicas, por ello, te brindamos un servicio integral para que tu operación no se detenga.",
      imagen: "/img/blog/blog-3.jpg",
    },
  ];

  return (
    <section
      id='blog'
      className='relative h-screen w-full overflow-hidden bg-gray-100'
    >
      {/* Contenedor principal */}
      <div className='relative z-10 h-full flex items-center justify-center px-4 md:px-8 lg:px-16 xl:px-24 py-12'>
        <div className='max-w-7xl mx-auto w-full'>
          {/* Título */}
          <div className='mb-16'>
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-normal text-gray-800 leading-tight mb-6'>
              Necesitas{" "}
              <span className='font-bold text-blue-900'>estar al día</span>
              <br />
              sobre lo que sucede{" "}
              <span className='font-bold text-blue-900'>en la industria</span>
            </h2>
            {/* Línea divisoria */}
            <div className='w-96 h-px bg-gray-400'></div>
          </div>

          {/* Grid de artículos */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {articulos.map((articulo) => (
              <div
                key={articulo.id}
                className='bg-white rounded-t-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300'
              >
                {/* Imagen */}
                <div className='relative h-56 overflow-hidden rounded-t-3xl'>
                  <img
                    src={articulo.imagen}
                    alt={articulo.titulo}
                    className='w-full h-full object-cover'
                  />
                </div>

                {/* Contenido azul */}
                <div className='bg-blue-900 p-8 min-h-[300px] flex flex-col'>
                  {/* Título */}
                  <h3 className='text-yellow-400 text-xl font-bold mb-6 uppercase'>
                    {articulo.titulo}
                  </h3>

                  {/* Descripción */}
                  <p className='text-white text-sm leading-relaxed'>
                    {articulo.descripcion}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
