import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import OptimizedImage from "../components/OptimizedImage";
import SEO from "../components/SEO";

const ProductosPage = () => {
  const [categoriaActiva, setCategoriaActiva] = useState("todas");

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
      descripcion: "Silla apilable de alta resistencia",
      colores: ["Blanco", "Negro", "Gris", "Azul"],
    },
    {
      id: 2,
      nombre: "Silla París Naranja",
      categoria: "sillas",
      imagen: "/img/productos/SILLA PARIS NARANJA_ (1).png",
      descripcion: "Diseño moderno y confortable",
      colores: ["Naranja", "Blanco", "Negro", "Rojo"],
    },

    // Cajas de plástico
    {
      id: 3,
      nombre: "Caja Cuapiaxtla",
      categoria: "cajas",
      imagen: "/img/productos/CUAPIAXTLA 20KG-04 (1).png",
      descripcion: "Caja resistente para agricultura y transporte",
      capacidad: "20kg",
      colores: ["Verde", "Gris", "Negro"],
    },
    {
      id: 4,
      nombre: "Caja Huixcolotla",
      categoria: "cajas",
      imagen: "/img/productos/HUIXCOLOTLA 25KG-04.png",
      descripcion: "Alta capacidad para productos agrícolas",
      capacidad: "25kg",
      colores: ["Amarillo", "Verde", "Azul"],
    },
    {
      id: 5,
      nombre: "Caja Los Reyes",
      categoria: "cajas",
      imagen: "/img/productos/LOS REYES 23KG-04.png",
      descripcion: "Diseño optimizado para transporte",
      capacidad: "23kg",
      colores: ["Rojo", "Azul", "Negro"],
    },
    {
      id: 6,
      nombre: "Caja Miguel Negrete",
      categoria: "cajas",
      imagen: "/img/productos/MIGUEL NEGRETE 6 comprimida-05.png",
      descripcion: "Versatilidad y resistencia en una sola caja",
      capacidad: "Variable",
      colores: ["Gris", "Negro", "Verde"],
    },
    {
      id: 7,
      nombre: "Caja Plastimega 30kg",
      categoria: "cajas",
      imagen: "/img/productos/plastimega 30kg-04.png",
      descripcion: "Máxima capacidad para cargas pesadas",
      capacidad: "30kg",
      colores: ["Negro", "Azul", "Gris"],
    },
    {
      id: 8,
      nombre: "Caja Puebla 2",
      categoria: "cajas",
      imagen: "/img/productos/PUEBLA2-04.png",
      descripcion: "Ideal para frutas y verduras",
      capacidad: "20kg",
      colores: ["Verde", "Amarillo", "Rojo"],
    },
    {
      id: 9,
      nombre: "Caja Puebla 3",
      categoria: "cajas",
      imagen: "/img/productos/PUEBLA3-04.png",
      descripcion: "Diseño compacto y apilable",
      capacidad: "15kg",
      colores: ["Azul", "Negro", "Gris"],
    },
    {
      id: 10,
      nombre: "Caja Puebla 5",
      categoria: "cajas",
      imagen: "/img/productos/PUEBLA5-04.png",
      descripcion: "Resistente para uso rudo",
      capacidad: "18kg",
      colores: ["Verde", "Negro", "Azul"],
    },
    {
      id: 11,
      nombre: "Caja Puebla 6",
      categoria: "cajas",
      imagen: "/img/productos/PUEBLA6-04.png",
      descripcion: "Perfecta para almacenamiento",
      capacidad: "22kg",
      colores: ["Gris", "Verde", "Negro"],
    },
    {
      id: 12,
      nombre: "Caja Tepeaca",
      categoria: "cajas",
      imagen: "/img/productos/TEPEACA 2 25KG-04.png",
      descripcion: "Gran capacidad para productos agrícolas",
      capacidad: "25kg",
      colores: ["Azul", "Verde", "Amarillo"],
    },
    {
      id: 13,
      nombre: "Caja Villa Nueva",
      categoria: "cajas",
      imagen: "/img/productos/VILLA NUEVA-05.png",
      descripcion: "Diseño ergonómico para fácil manejo",
      capacidad: "20kg",
      colores: ["Negro", "Gris", "Verde"],
    },

    // Tapas de plástico
    {
      id: 14,
      nombre: "Tapa 10kg y 16kg",
      categoria: "tapas",
      imagen: "/img/productos/TAPA 10KG Y 16KG-05.png",
      descripcion: "Tapa hermética para cajas pequeñas",
      compatibilidad: "Cajas 10kg - 16kg",
      colores: ["Transparente", "Negro"],
    },
    {
      id: 15,
      nombre: "Tapa 20kg",
      categoria: "tapas",
      imagen: "/img/productos/TAPA 20KG-05.png",
      descripcion: "Protección óptima para cajas medianas",
      compatibilidad: "Cajas 20kg",
      colores: ["Transparente", "Negro", "Azul"],
    },
    {
      id: 16,
      nombre: "Tapa 23kg",
      categoria: "tapas",
      imagen: "/img/productos/TAPA 23KG-05.png",
      descripcion: "Tapa reforzada para máxima protección",
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
                className='bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300'
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                layout
              >
                <div className='relative h-64 bg-white flex items-center justify-center'>
                  <OptimizedImage
                    src={producto.imagen}
                    alt={producto.nombre}
                    className='w-full h-full object-contain p-4'
                  />
                </div>

                <div className='p-6'>
                  <h3 className='text-xl font-bold text-gray-800 mb-2'>
                    {producto.nombre}
                  </h3>
                  <p className='text-gray-600 text-sm mb-4'>
                    {producto.descripcion}
                  </p>

                  {producto.capacidad && (
                    <div className='mb-3'>
                      <span className='inline-block bg-blue-100 text-blue-900 px-3 py-1 rounded-full text-xs font-semibold'>
                        Capacidad: {producto.capacidad}
                      </span>
                    </div>
                  )}

                  {producto.compatibilidad && (
                    <div className='mb-3'>
                      <span className='inline-block bg-green-100 text-green-900 px-3 py-1 rounded-full text-xs font-semibold'>
                        Compatible: {producto.compatibilidad}
                      </span>
                    </div>
                  )}

                  {producto.colores && (
                    <div className='mb-4'>
                      <p className='text-xs text-gray-500 mb-2'>
                        Colores disponibles:
                      </p>
                      <div className='flex flex-wrap gap-1'>
                        {producto.colores.map((color, idx) => (
                          <span
                            key={idx}
                            className='text-xs bg-gray-100 px-2 py-1 rounded'
                          >
                            {color}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <button className='w-full bg-yellow-400 text-gray-800 py-2 rounded-lg font-bold text-sm uppercase hover:bg-yellow-500 transition-all duration-300 shadow-md'>
                    Solicitar cotización
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
            <Link
              to='/#contacto'
              className='inline-block bg-yellow-400 text-blue-900 px-8 py-4 rounded-full font-bold text-lg uppercase hover:bg-yellow-500 transition-all duration-300 shadow-lg'
            >
              Contáctanos
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductosPage;
