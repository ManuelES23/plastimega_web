import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useSearchParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import OptimizedImage from "../components/OptimizedImage";
import SEO from "../components/SEO";
import ModalContacto from "../components/ModalContacto";

const ProductosPage = () => {
  const [searchParams] = useSearchParams();
  const [categoriaActiva, setCategoriaActiva] = useState(
    searchParams.get("categoria") || "todas",
  );
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);
  const [modalContactoOpen, setModalContactoOpen] = useState(false);
  const [mensajeContacto, setMensajeContacto] = useState("");

  const abrirCotizacion = (producto) => {
    const msg =
      `Hola, me gustaría solicitar una cotización del siguiente producto:\n\n` +
      `Producto: ${producto.nombre}\n` +
      `Categoría: ${producto.categoria}\n` +
      (producto.capacidad ? `Capacidad: ${producto.capacidad}\n` : "") +
      (producto.material ? `Material: ${producto.material}\n` : "") +
      (producto.dimensiones ? `Dimensiones: ${producto.dimensiones}\n` : "") +
      (producto.colores ? `Colores disponibles: ${producto.colores.join(", ")}\n` : "") +
      `\nPor favor indíquenme precio, disponibilidad y condiciones de entrega.\n\nGracias.`;
    setMensajeContacto(msg);
    setProductoSeleccionado(null);
    setModalContactoOpen(true);
  };

  useEffect(() => {
    const cat = searchParams.get("categoria");
    if (cat) setCategoriaActiva(cat);
  }, [searchParams]);

  const productosSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Catálogo de Productos Plásticos - Plastimega",
    description:
      "Explora nuestro catálogo completo de productos plásticos: cajas, sillas, tapas, embalaje y desechables.",
    url: "https://plastimega.com/productos",
    mainEntity: {
      "@type": "ItemList",
      name: "Productos Plásticos",
      description: "Catálogo de productos plásticos de alta calidad",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Cajas de plástico",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Sillas de plástico",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Tapas de plástico",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Embalaje y empaque",
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Desechables",
        },
      ],
    },
  };

  const categorias = [
    { id: "todas", nombre: "Todas las categorías" },
    { id: "cajas", nombre: "Cajas de plástico" },
    { id: "sillas", nombre: "Sillas de plástico" },
    { id: "tapas", nombre: "Tapas de plástico" },
    { id: "embalaje", nombre: "Embalaje y empaque" },
    { id: "desechables", nombre: "Desechables" },
  ];

  const productos = [
    // Sillas de plástico
    {
      id: 1,
      nombre: "Silla Milán",
      categoria: "sillas",
      imagen: "/img/productos/SILLA MILAN-05.png",
      descripcion: "Silla apilable de alta resistencia para uso en hogar",
      colores: ["Blanco", "Negro", "Gris", "Azul"],
      dimensiones: "54 × 42 × 80 cm",
      peso: "2.49 kg",
      capacidad: "120 kg",
      material: "Polipropileno Reciclado",
      uso: "Hogar",
    },
    {
      id: 2,
      nombre: "Silla París",
      categoria: "sillas",
      imagen: "/img/productos/SILLA PARIS NARANJA_ (1).png",
      descripcion: "Diseño moderno y confortable para uso en hogar",
      colores: ["Naranja", "Blanco", "Negro", "Rojo"],
      dimensiones: "56 × 57 × 76 cm",
      peso: "2.54 kg",
      capacidad: "120 kg",
      material: "Polipropileno Reciclado",
      uso: "Hogar",
    },

    // Cajas de plástico
    {
      id: 3,
      nombre: "Caja Cuapiaxtla",
      categoria: "cajas",
      imagen: "/img/productos/CUAPIAXTLA 20KG-04 (1).png",
      descripcion: "Empaque para transportar verduras y vegetales",
      colores: [
        "Amarillo",
        "Rojo",
        "Gris",
        "Verde",
        "Naranja",
        "Azul",
        "Negro",
      ],
      dimensiones: "50 × 34 × 28 cm",
      peso: "1.648 kg",
      capacidad: "20 kg",
      material: "Polietileno de Alta Densidad Reciclado",
      codigo: "PT020",
      clasificacion: "Caja desechable",
      linea: "Línea agrícola",
      resistencia: "Impacto y peso",
      condiciones: "Humedad y refrigeración",
    },
    {
      id: 4,
      nombre: "Caja Huixcolotla",
      categoria: "cajas",
      imagen: "/img/productos/HUIXCOLOTLA 25KG-04.png",
      descripcion: "Empaque para transportar frutas, verduras y vegetales",
      colores: [
        "Amarillo",
        "Rojo",
        "Gris",
        "Verde",
        "Naranja",
        "Azul",
        "Negro",
      ],
      dimensiones: "50 × 35 × 29.5 cm",
      peso: "1.460 kg",
      capacidad: "25 kg",
      material: "Polietileno de Alta Densidad Reciclado",
      codigo: "PT025",
      clasificacion: "Caja desechable",
      linea: "Línea agrícola",
      resistencia: "Impacto y peso",
      condiciones: "Humedad y refrigeración",
    },
    {
      id: 5,
      nombre: "Caja Los Reyes",
      categoria: "cajas",
      imagen: "/img/productos/LOS REYES 23KG-04.png",
      descripcion: "Empaque para transportar verduras y vegetales",
      colores: ["Rojo", "Azul", "Negro", "Verde", "Gris"],
      dimensiones: "50.5 × 34 × 30 cm",
      peso: "0.866 kg",
      capacidad: "23 kg",
      material: "Polipropileno Reciclado",
      codigo: "PT003",
      clasificacion: "Caja desechable",
      linea: "Línea agrícola",
      resistencia: "Impacto y peso",
      condiciones: "Humedad y refrigeración",
    },
    {
      id: 6,
      nombre: "Caja Miguel Negrete 6",
      categoria: "cajas",
      imagen: "/img/productos/MIGUEL NEGRETE 6 comprimida-05.png",
      descripcion: "Empaque para verduras y vegetales",
      colores: ["Gris", "Negro", "Verde"],
      dimensiones: "50 × 30 × 15.5 cm",
      peso: "0.435 kg",
      capacidad: "10 kg",
      material: "Polipropileno Reciclado",
      codigo: "CR10NG5",
      clasificacion: "Caja desechable",
      linea: "Línea agrícola",
      resistencia: "Impacto y peso",
      condiciones: "Humedad y refrigeración",
    },
    {
      id: 7,
      nombre: "Caja Plastimega",
      categoria: "cajas",
      imagen: "/img/productos/plastimega 30kg-04.png",
      descripcion:
        "Empaque para frutas, verduras y vegetales de alta capacidad",
      colores: ["Negro", "Azul", "Gris"],
      dimensiones: "55 × 37.5 × 32.4 cm",
      peso: "2.000 kg",
      capacidad: "30 kg",
      material: "Polietileno de Alta Densidad Reciclado",
      codigo: "CRCMV30",
      clasificacion: "Caja desechable",
      linea: "Línea agrícola",
      resistencia: "Impacto y peso",
      condiciones: "Humedad y refrigeración",
    },
    {
      id: 8,
      nombre: "Caja Puebla 2",
      categoria: "cajas",
      imagen: "/img/productos/PUEBLA2-04.png",
      descripcion: "Ideal para frutas y verduras",
      capacidad: "20 kg",
      colores: ["Verde", "Amarillo", "Rojo"],
      dimensiones: "31 × 51 × 27 cm",
      material: "Polipropileno Reciclado",
      linea: "Línea agrícola",
    },
    {
      id: 9,
      nombre: "Caja Puebla 3",
      categoria: "cajas",
      imagen: "/img/productos/PUEBLA3-04.png",
      descripcion: "Diseño compacto y apilable",
      capacidad: "20 kg",
      colores: ["Azul", "Negro", "Gris"],
      dimensiones: "40 × 60 × 19.5 cm",
      material: "Polipropileno Reciclado",
      linea: "Línea agrícola",
    },
    {
      id: 10,
      nombre: "Caja Puebla 5",
      categoria: "cajas",
      imagen: "/img/productos/PUEBLA5-04.png",
      descripcion: "Resistente para uso rudo",
      capacidad: "20 kg",
      colores: ["Verde", "Negro", "Azul"],
      dimensiones: "31 × 51 × 28 cm",
      material: "Polipropileno Reciclado",
      linea: "Línea agrícola",
    },
    {
      id: 11,
      nombre: "Caja Puebla 6",
      categoria: "cajas",
      imagen: "/img/productos/PUEBLA6-04.png",
      descripcion: "Perfecta para almacenamiento",
      capacidad: "20 kg",
      colores: ["Gris", "Verde", "Negro"],
      dimensiones: "31 × 51 × 27 cm",
      material: "Polipropileno Reciclado",
      linea: "Línea agrícola",
    },
    {
      id: 12,
      nombre: "Caja Tepeaca",
      categoria: "cajas",
      imagen: "/img/productos/TEPEACA 2 25KG-04.png",
      descripcion: "Gran capacidad para productos agrícolas",
      capacidad: "25 kg",
      colores: ["Azul", "Verde", "Amarillo"],
      dimensiones: "40 × 60 × 23.5 cm",
      material: "Polietileno de Alta Densidad Reciclado",
      linea: "Línea agrícola",
    },
    {
      id: 13,
      nombre: "Caja Villa Nueva",
      categoria: "cajas",
      imagen: "/img/productos/VILLA NUEVA-05.png",
      descripcion: "Diseño ergonómico para fácil manejo",
      capacidad: "16 kg",
      colores: ["Negro", "Gris", "Verde"],
      dimensiones: "30 × 50 × 24.5 cm",
      material: "Polipropileno Reciclado",
      linea: "Línea agrícola",
    },

    // Tapas de plástico
    {
      id: 14,
      nombre: "Tapa 10kg y 16kg",
      categoria: "tapas",
      imagen: "/img/productos/TAPA 10KG Y 16KG-05.png",
      descripcion: "Complemento para Caja Miguel Negrete 5 y Villanueva",
      dimensiones: "47.5 × 30 cm",
      peso: "0.041 kg",
      material: "Polipropileno Reciclado",
      compatibilidad: "Cajas 10kg - 16kg",
      colores: ["Transparente", "Negro"],
    },
    {
      id: 15,
      nombre: "Tapa 20kg",
      categoria: "tapas",
      imagen: "/img/productos/TAPA 20KG-05.png",
      descripcion: "Complemento para Caja Puebla 5",
      dimensiones: "48.5 × 28.5 cm",
      peso: "0.040 kg",
      material: "Polipropileno Reciclado",
      codigo: "TENE20",
      compatibilidad: "Cajas 20kg",
      colores: ["Transparente", "Negro", "Azul"],
    },
    {
      id: 16,
      nombre: "Tapa 23kg",
      categoria: "tapas",
      imagen: "/img/productos/TAPA 23KG-05.png",
      descripcion: "Complemento para Caja Los Reyes",
      dimensiones: "47.5 × 33.5 cm",
      peso: "0.045 kg",
      material: "Polipropileno Reciclado",
      codigo: "TENE23",
      compatibilidad: "Cajas 23kg - 25kg",
      colores: ["Negro", "Transparente"],
    },
  ];

  const productosFiltrados =
    categoriaActiva === "todas"
      ? productos
      : productos.filter((p) => p.categoria === categoriaActiva);

  return (
    <div className='min-h-screen bg-gray-100'>
      <SEO
        title='Catálogo de Productos Plásticos | Plastimega México'
        description='Explora nuestro catálogo completo de productos plásticos: cajas industriales, sillas apilables, tapas, embalaje y desechables. Calidad garantizada en México.'
        keywords='catálogo productos plásticos, cajas plástico industrial, sillas plástico apilables, tapas plásticas, embalaje plástico, desechables México, Plastimega productos'
        canonicalUrl='https://plastimega.com/productos'
        schemaData={productosSchema}
      />
      {/* Hero Section con Navbar integrado */}
      <motion.section
        className='relative pt-0 pb-16 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-blue-900 to-blue-800'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Navbar integrado */}
        <Navbar />

        {/* Contenido del Hero */}
        <div className='max-w-7xl mx-auto text-center pt-24'>
          <motion.h1
            className='text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6'
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Nuestro <span className='text-yellow-400'>Catálogo</span> de
            Productos
          </motion.h1>
          <motion.p
            className='text-xl text-blue-100 max-w-3xl mx-auto'
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Encuentra la solución perfecta para tu negocio
          </motion.p>

          {/* Breadcrumb */}
          <motion.div
            className='mt-8 flex items-center justify-center gap-2 text-blue-200'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <Link to='/' className='hover:text-white transition-colors'>
              Inicio
            </Link>
            <span>/</span>
            <span className='text-white'>Productos</span>
          </motion.div>
        </div>
      </motion.section>

      {/* Filtros de categoría */}
      <section className='py-8 px-4 md:px-8 lg:px-16 bg-white shadow-md'>
        <div className='max-w-7xl mx-auto'>
          <div className='flex flex-wrap gap-4 justify-center'>
            {categorias.map((categoria, index) => (
              <motion.button
                key={categoria.id}
                onClick={() => setCategoriaActiva(categoria.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  categoriaActiva === categoria.id
                    ? "bg-blue-900 text-white shadow-lg scale-105"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {categoria.nombre}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid de productos */}
      <section className='py-16 px-4 md:px-8 lg:px-16'>
        <div className='max-w-7xl mx-auto'>
          <motion.div
            className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'
            layout
          >
            {productosFiltrados.map((producto, index) => (
              <motion.div
                key={producto.id}
                className='bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col cursor-pointer'
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -10 }}
                layout
                onClick={() => setProductoSeleccionado(producto)}
              >
                <div className='relative h-72 bg-white flex items-center justify-center p-2'>
                  <OptimizedImage
                    src={producto.imagen}
                    alt={producto.nombre}
                    className='w-full h-full object-contain'
                  />
                </div>

                <div className='p-5 flex-grow flex flex-col'>
                  <h3 className='text-lg font-bold text-gray-800 mb-2'>
                    {producto.nombre}
                  </h3>

                  <p className='text-gray-600 text-sm mb-3 line-clamp-2'>
                    {producto.descripcion}
                  </p>

                  {producto.capacidad && (
                    <span className='inline-block bg-blue-100 text-blue-900 px-3 py-1 rounded-full text-xs font-semibold w-fit mb-3'>
                      Capacidad: {producto.capacidad}
                    </span>
                  )}

                  {producto.compatibilidad && (
                    <span className='inline-block bg-green-100 text-green-900 px-3 py-1 rounded-full text-xs font-semibold w-fit mb-3'>
                      {producto.compatibilidad}
                    </span>
                  )}

                  {producto.colores && (
                    <div className='mb-4'>
                      <div className='flex flex-wrap gap-1'>
                        {producto.colores.slice(0, 4).map((color, idx) => (
                          <span
                            key={idx}
                            className='text-xs bg-gray-100 px-2 py-1 rounded'
                          >
                            {color}
                          </span>
                        ))}
                        {producto.colores.length > 4 && (
                          <span className='text-xs bg-gray-200 px-2 py-1 rounded font-medium'>
                            +{producto.colores.length - 4}
                          </span>
                        )}
                      </div>
                    </div>
                  )}

                  <button className='w-full bg-yellow-400 text-gray-800 py-2 rounded-lg font-bold text-sm uppercase hover:bg-yellow-500 transition-all duration-300 shadow-md mt-auto'>
                    Ver detalles
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {productosFiltrados.length === 0 && (
            <motion.div
              className='text-center py-16'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <p className='text-gray-500 text-xl'>
                No hay productos en esta categoría
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Modal de detalle del producto */}
      <AnimatePresence>
        {productoSeleccionado && (
          <motion.div
            className='fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setProductoSeleccionado(null)}
          >
            <motion.div
              className='bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto'
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header del modal */}
              <div className='relative bg-gradient-to-r from-blue-900 to-blue-800 p-6 rounded-t-2xl'>
                <button
                  className='absolute top-4 right-4 text-white hover:text-yellow-400 transition-colors'
                  onClick={() => setProductoSeleccionado(null)}
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
                      strokeWidth={2}
                      d='M6 18L18 6M6 6l12 12'
                    />
                  </svg>
                </button>
                <h2 className='text-2xl md:text-3xl font-bold text-white pr-10'>
                  {productoSeleccionado.nombre}
                </h2>
                {productoSeleccionado.codigo && (
                  <span className='text-blue-200 text-sm'>
                    Código: {productoSeleccionado.codigo}
                  </span>
                )}
              </div>

              {/* Contenido del modal */}
              <div className='p-6 md:p-8'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                  {/* Imagen */}
                  <div className='bg-gray-50 rounded-xl p-6 flex items-center justify-center'>
                    <OptimizedImage
                      src={productoSeleccionado.imagen}
                      alt={productoSeleccionado.nombre}
                      className='w-full h-96 object-contain'
                    />
                  </div>

                  {/* Información */}
                  <div className='space-y-4'>
                    <p className='text-gray-600'>
                      {productoSeleccionado.descripcion}
                    </p>

                    {/* Especificaciones */}
                    <div className='bg-gray-50 rounded-xl p-4 space-y-3'>
                      <h4 className='font-bold text-gray-800 border-b pb-2'>
                        Especificaciones Técnicas
                      </h4>

                      {productoSeleccionado.dimensiones && (
                        <div className='flex justify-between text-sm'>
                          <span className='text-gray-500'>Dimensiones:</span>
                          <span className='text-gray-800 font-medium'>
                            {productoSeleccionado.dimensiones}
                          </span>
                        </div>
                      )}
                      {productoSeleccionado.peso && (
                        <div className='flex justify-between text-sm'>
                          <span className='text-gray-500'>Peso:</span>
                          <span className='text-gray-800 font-medium'>
                            {productoSeleccionado.peso}
                          </span>
                        </div>
                      )}
                      {productoSeleccionado.capacidad && (
                        <div className='flex justify-between text-sm'>
                          <span className='text-gray-500'>Capacidad:</span>
                          <span className='text-gray-800 font-medium'>
                            {productoSeleccionado.capacidad}
                          </span>
                        </div>
                      )}
                      {productoSeleccionado.material && (
                        <div className='flex justify-between text-sm'>
                          <span className='text-gray-500'>Material:</span>
                          <span className='text-gray-800 font-medium'>
                            {productoSeleccionado.material}
                          </span>
                        </div>
                      )}
                      {productoSeleccionado.resistencia && (
                        <div className='flex justify-between text-sm'>
                          <span className='text-gray-500'>Resistencia:</span>
                          <span className='text-gray-800 font-medium'>
                            {productoSeleccionado.resistencia}
                          </span>
                        </div>
                      )}
                      {productoSeleccionado.condiciones && (
                        <div className='flex justify-between text-sm'>
                          <span className='text-gray-500'>Condiciones:</span>
                          <span className='text-gray-800 font-medium'>
                            {productoSeleccionado.condiciones}
                          </span>
                        </div>
                      )}
                      {productoSeleccionado.compatibilidad && (
                        <div className='flex justify-between text-sm'>
                          <span className='text-gray-500'>Compatible con:</span>
                          <span className='text-gray-800 font-medium'>
                            {productoSeleccionado.compatibilidad}
                          </span>
                        </div>
                      )}
                      {productoSeleccionado.uso && (
                        <div className='flex justify-between text-sm'>
                          <span className='text-gray-500'>Uso:</span>
                          <span className='text-gray-800 font-medium'>
                            {productoSeleccionado.uso}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Tags */}
                    <div className='flex flex-wrap gap-2'>
                      {productoSeleccionado.linea && (
                        <span className='inline-block bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs font-semibold'>
                          {productoSeleccionado.linea}
                        </span>
                      )}
                      {productoSeleccionado.clasificacion && (
                        <span className='inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold'>
                          {productoSeleccionado.clasificacion}
                        </span>
                      )}
                    </div>

                    {/* Colores */}
                    {productoSeleccionado.colores && (
                      <div>
                        <p className='text-sm text-gray-500 mb-2 font-medium'>
                          Colores disponibles:
                        </p>
                        <div className='flex flex-wrap gap-2'>
                          {productoSeleccionado.colores.map((color, idx) => (
                            <span
                              key={idx}
                              className='text-sm bg-gray-100 px-3 py-1 rounded-full'
                            >
                              {color}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Botón de cotización */}
                <div className='mt-8 flex flex-col sm:flex-row gap-4'>
                  <button
                    onClick={() => abrirCotizacion(productoSeleccionado)}
                    className='flex-1 bg-yellow-400 text-gray-800 py-3 rounded-lg font-bold text-center uppercase hover:bg-yellow-500 transition-all duration-300 shadow-md'
                  >
                    Solicitar cotización
                  </button>
                  <button
                    onClick={() => setProductoSeleccionado(null)}
                    className='flex-1 bg-gray-200 text-gray-700 py-3 rounded-lg font-bold text-center uppercase hover:bg-gray-300 transition-all duration-300'
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className='py-16 px-4 md:px-8 lg:px-16 bg-blue-900'>
        <div className='max-w-4xl mx-auto text-center'>
          <motion.h2
            className='text-3xl md:text-4xl font-bold text-white mb-6'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            ¿No encuentras lo que buscas?
          </motion.h2>
          <motion.p
            className='text-blue-100 text-lg mb-8'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Contáctanos y te ayudaremos a encontrar la solución perfecta para tu
            negocio
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <button
              onClick={() => {
                setMensajeContacto("");
                setModalContactoOpen(true);
              }}
              className='inline-block bg-yellow-400 text-blue-900 px-8 py-4 rounded-full font-bold text-lg uppercase hover:bg-yellow-500 transition-all duration-300 shadow-lg'
            >
              Contáctanos
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />

      <ModalContacto
        isOpen={modalContactoOpen}
        onClose={() => setModalContactoOpen(false)}
        mensajeInicial={mensajeContacto}
      />
    </div>
  );
};

export default ProductosPage;
