import React from "react";
import Hero from "../components/Hero";
import Plastimega from "../components/Plastimega";
import Productos from "../components/Productos";
import TopTen from "../components/TopTen";
import Servicios from "../components/Servicios";
import Testimonios from "../components/Testimonios";
import Blog from "../components/Blog";
import ContactoBanner from "../components/ContactoBanner";
import Footer from "../components/Footer";
import SEO from "../components/SEO";

const HomePage = () => {
  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Plastimega - Inicio",
    description:
      "Distribuidor líder de productos plásticos en México. Cajas, sillas, tapas, embalaje y desechables de alta calidad.",
    url: "https://plastimega.com/",
    mainEntity: {
      "@type": "Organization",
      name: "Plastimega",
      description: "Distribuidor de productos plásticos industriales",
    },
  };

  return (
    <div className='min-h-screen'>
      <SEO
        title='Plastimega | Distribuidor de Productos Plásticos en México'
        description='Plastimega es líder en distribución de productos plásticos: cajas, sillas, tapas, embalaje y desechables. Soluciones industriales de alta calidad para tu negocio en México.'
        keywords='productos plásticos, cajas de plástico, sillas de plástico, tapas plásticas, embalaje, desechables, distribuidor plásticos México, Plastimega'
        canonicalUrl='https://plastimega.com/'
        schemaData={homeSchema}
      />
      <main>
        <section id='home'>
          <Hero />
        </section>

        <section id='plastimega'>
          <Plastimega />
        </section>

        <section id='produtos'>
          <Productos />
        </section>

        <section id='topten'>
          <TopTen />
        </section>

        <section id='servicios'>
          <Servicios />
        </section>

        <section id='testimonios'>
          <Testimonios />
        </section>

        <section id='blog'>
          <Blog />
        </section>

        <section id='contacto'>
          <ContactoBanner />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
