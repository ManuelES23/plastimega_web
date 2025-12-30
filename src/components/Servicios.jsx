import React from "react";
import { motion } from "framer-motion";

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
    <motion.section
      id='servicios'
      className='relative min-h-screen w-full overflow-hidden bg-white servicios-section'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div
        className='servicios-grid grid h-full'
        style={{ gridTemplateColumns: "1fr 4fr" }}
      >
        {/* Lado izquierdo - 1/4 parte dividida en 4 filas */}
        <div className='grid grid-rows-4 h-full servicios-sidebar'>
          {/* Primera fila - Barra azul */}
          <div className='bg-blue-900'></div>

          {/* 3 filas blancas */}
          <div className='bg-white'></div>
          <div className='bg-white'></div>
          <div className='bg-white'></div>
        </div>

        {/* Lado derecho - 3/4 partes con contenido gris */}
        <div className='relative h-full w-full bg-gray-600 flex flex-col px-4 md:px-6 lg:px-8 py-12 servicios-content'>
          {/* Título de la sección */}
          <div className='mb-8 servicios-header'>
            <h2 className='text-3xl md:text-4xl font-normal text-white leading-tight mb-4'>
              Servicios y soluciones{" "}
              <span className='font-bold'>a tu medida</span>
            </h2>
            {/* Línea divisoria */}
            <div className='servicios-line w-72 h-px bg-white opacity-60'></div>
          </div>

          {/* Lista de servicios con imágenes */}
          <div className='flex-1 flex flex-col justify-start space-y-8 pt-4 servicios-list'>
            {servicios.map((servicio) => (
              <div
                key={servicio.id}
                className='servicio-item flex gap-8 items-center'
              >
                {/* Imagen del servicio */}
                <div className='servicio-image w-175 h-60 shrink-0 overflow-hidden rounded-lg -ml-50'>
                  <img
                    src={servicio.imagen}
                    alt={servicio.titulo}
                    className='w-full h-full object-cover'
                  />
                </div>

                {/* Contenido de texto */}
                <div className='servicio-text flex-1 space-y-2'>
                  {/* Número */}
                  <h3 className='servicio-numero text-6xl font-bold text-white mb-1'>
                    {servicio.numero}
                  </h3>
                  {/* Título */}
                  <h4 className='servicio-titulo text-2xl font-bold text-white uppercase tracking-wide mb-2'>
                    {servicio.titulo}
                  </h4>
                  {/* Descripción */}
                  <p className='servicio-descripcion text-white text-lg leading-relaxed text-justify'>
                    {servicio.descripcion}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Estilos responsivos para móvil */}
      <style jsx>{`
        /* Mobile - Portrait (≤480px) */
        @media (max-width: 480px) {
          .servicios-section {
            min-height: auto !important;
            height: auto !important;
          }

          .servicios-grid {
            grid-template-columns: 1fr !important;
          }

          .servicios-sidebar {
            display: none !important;
          }

          .servicios-content {
            padding: 2rem 1rem !important;
          }

          .servicios-header h2 {
            font-size: 1.5rem !important;
            text-align: center;
            margin-bottom: 1rem !important;
          }

          .servicios-line {
            width: 100% !important;
            max-width: 200px;
            margin: 0 auto !important;
          }

          .servicios-list {
            space-y: 2rem !important;
            padding-top: 1.5rem !important;
          }

          .servicio-item {
            flex-direction: column !important;
            gap: 1rem !important;
            align-items: flex-start !important;
          }

          .servicio-image {
            width: 100% !important;
            height: 200px !important;
            margin-left: 0 !important;
          }

          .servicio-text {
            width: 100%;
          }

          .servicio-numero {
            font-size: 2.5rem !important;
          }

          .servicio-titulo {
            font-size: 1.125rem !important;
            margin-bottom: 0.5rem !important;
          }

          .servicio-descripcion {
            font-size: 0.875rem !important;
            text-align: left !important;
          }
        }

        /* Mobile - Landscape (481px - 767px) */
        @media (min-width: 481px) and (max-width: 767px) {
          .servicios-section {
            min-height: auto !important;
            height: auto !important;
          }

          .servicios-grid {
            grid-template-columns: 60px 1fr !important;
          }

          .servicios-content {
            padding: 2.5rem 1.5rem !important;
          }

          .servicios-header h2 {
            font-size: 1.75rem !important;
          }

          .servicios-line {
            width: 100% !important;
            max-width: 250px;
          }

          .servicio-item {
            flex-direction: column !important;
            gap: 1.5rem !important;
            align-items: flex-start !important;
          }

          .servicio-image {
            width: 100% !important;
            height: 250px !important;
            margin-left: 0 !important;
          }

          .servicio-numero {
            font-size: 3rem !important;
          }

          .servicio-titulo {
            font-size: 1.25rem !important;
          }

          .servicio-descripcion {
            font-size: 0.9375rem !important;
            text-align: left !important;
          }
        }

        /* Tablet - Portrait (768px - 1024px) */
        @media (min-width: 768px) and (max-width: 1024px) {
          .servicios-section {
            min-height: auto !important;
            height: auto !important;
          }

          .servicios-grid {
            grid-template-columns: 80px 1fr !important;
          }

          .servicios-content {
            padding: 3rem 2rem !important;
          }

          .servicio-item {
            gap: 1.5rem !important;
          }

          .servicio-image {
            width: 200px !important;
            height: 180px !important;
            margin-left: 0 !important;
          }

          .servicio-numero {
            font-size: 3.5rem !important;
          }

          .servicio-titulo {
            font-size: 1.5rem !important;
          }

          .servicio-descripcion {
            font-size: 1rem !important;
          }
        }
      `}</style>
    </motion.section>
  );
};

export default Servicios;
