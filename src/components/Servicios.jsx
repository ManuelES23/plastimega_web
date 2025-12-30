import React from "react";

const Servicios = () => {
  const servicios = [
    {
      id: 1,
      numero: "1.",
      titulo: "PROYECTOS PERSONALIZADOS",
      descripcion:
        "Logramos materializar tus proyectos especiales desde el diseño, planeación, pruebas, fabricación y entrega.",
      imagen: "/img/imagenes/imagen 6-03.png",
    },
    {
      id: 2,
      numero: "2.",
      titulo: "SOLUCIONES PARA SUMINISTRO AGRO",
      descripcion:
        "La industria agroalimentaria es una de las más dinámicas, por ello, te brindamos un servicio integral para que tu operación no se detenga.",
      imagen: "/img/imagenes/imagen 7 png-03.png",
    },
    {
      id: 3,
      numero: "3.",
      titulo: "ENVÍOS PROGRAMADOS",
      descripcion:
        "Vamos más allá de brindarte un producto, nos coordinamos contigo para anticiparnos a tus necesidades para brindarte soluciones a tiempo.",
      imagen: "/img/imagenes/imagen 8-03.png",
    },
  ];

  return (
    <section
      id='servicios'
      className='relative h-screen w-full overflow-hidden bg-white'
    >
      <div className='grid h-full' style={{ gridTemplateColumns: "1fr 4fr" }}>
        {/* Lado izquierdo - 1/4 parte dividida en 4 filas */}
        <div className='grid grid-rows-4 h-full'>
          {/* Primera fila - Barra azul */}
          <div className='bg-blue-900'></div>

          {/* 3 filas blancas */}
          <div className='bg-white'></div>
          <div className='bg-white'></div>
          <div className='bg-white'></div>
        </div>

        {/* Lado derecho - 3/4 partes con contenido gris */}
        <div className='relative h-full w-full bg-gray-600 flex flex-col px-4 md:px-6 lg:px-8 py-12'>
          {/* Título de la sección */}
          <div className='mb-8'>
            <h2 className='text-3xl md:text-4xl font-normal text-white leading-tight mb-4'>
              Servicios y soluciones{" "}
              <span className='font-bold'>a tu medida</span>
            </h2>
            {/* Línea divisoria */}
            <div className='w-72 h-px bg-white opacity-60'></div>
          </div>

          {/* Lista de servicios con imágenes */}
          <div className='flex-1 flex flex-col justify-start space-y-8 pt-4'>
            {servicios.map((servicio) => (
              <div key={servicio.id} className='flex gap-8 items-center'>
                {/* Imagen del servicio */}
                <div className='w-175 h-60 shrink-0 overflow-hidden rounded-lg -ml-50'>
                  <img
                    src={servicio.imagen}
                    alt={servicio.titulo}
                    className='w-full h-full object-cover'
                  />
                </div>

                {/* Contenido de texto */}
                <div className='flex-1 space-y-2'>
                  {/* Número */}
                  <h3 className='text-6xl font-bold text-white mb-1'>
                    {servicio.numero}
                  </h3>
                  {/* Título */}
                  <h4 className='text-2xl font-bold text-white uppercase tracking-wide mb-2'>
                    {servicio.titulo}
                  </h4>
                  {/* Descripción */}
                  <p className='text-white text-lg leading-relaxed text-justify'>
                    {servicio.descripcion}
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

export default Servicios;
