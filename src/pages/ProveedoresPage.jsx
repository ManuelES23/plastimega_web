import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProveedoresSection from "../components/ProveedoresSection";
import SEO from "../components/SEO";

const ProveedoresPage = () => {
  const proveedoresSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Proveedores - Plastimega",
    description:
      "¿Quieres ser proveedor de Plastimega? Conoce cómo unirte a nuestra red de aliados estratégicos en distribución de productos plásticos en México.",
    url: "https://plastimega.com/proveedores",
  };

  return (
    <div className='min-h-screen'>
      <SEO
        title='¿Quieres ser proveedor? | Plastimega'
        description='Únete a la red de proveedores de Plastimega. Buscamos aliados estratégicos en productos plásticos, materia prima, bienes e insumos. Contáctanos.'
        keywords='proveedor Plastimega, proveedor plásticos México, aliado estratégico plásticos, materia prima plásticos, distribuidor plásticos'
        canonicalUrl='https://plastimega.com/proveedores'
        schemaData={proveedoresSchema}
      />

      {/* Hero Section con Navbar integrado */}
      <motion.section
        className='relative pt-0 pb-16 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-blue-900 to-blue-800'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Navbar />

        <div className='max-w-7xl mx-auto text-center pt-24'>
          <motion.h1
            className='text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6'
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            ¿Quieres ser <span className='text-yellow-400'>proveedor</span>?
          </motion.h1>
          <motion.p
            className='text-xl text-blue-100 max-w-3xl mx-auto'
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Únete a nuestra red de aliados estratégicos
          </motion.p>

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
            <span className='text-white'>Proveedores</span>
          </motion.div>
        </div>
      </motion.section>

      <main>
        <ProveedoresSection />
      </main>
      <Footer />
    </div>
  );
};

export default ProveedoresPage;
