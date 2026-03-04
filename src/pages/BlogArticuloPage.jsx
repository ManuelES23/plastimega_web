import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SEO from "../components/SEO";

/* ─────────────────────────────────────────────────────────
   Contenido completo del artículo
───────────────────────────────────────────────────────── */
const ARTICULO = {
  titulo: "Importancia de las cajas de plástico en la cadena de valor agro",
  fecha: "Febrero 2026",
  imagen:
    "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=85",
  imagenesAlternativas: [
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=85",
    "https://images.unsplash.com/photo-1553413077-190dd305871c?w=1200&q=85",
  ],
  secciones: [
    {
      subtitulo:
        "El crecimiento del sector agroalimentario mexicano y su impacto global",
      parrafos: [
        "El sector agroalimentario de México ha experimentado un crecimiento significativo en los últimos años, consolidándose como uno de los principales motores de la economía nacional y un componente clave en la balanza comercial del país. Al cierre de 2023, las exportaciones agroalimentarias mexicanas registraron un valor histórico de 51,874 millones de dólares, cifra que representó un crecimiento de 3.9% respecto al año anterior y permitió superar por primera vez la barrera de los 50 mil millones de dólares en ventas al exterior.",
        "Esto reflejó un superávit comercial de 7,576 millones de dólares, la tercera cifra más alta en 31 años. Los principales grupos de exportación fueron las bebidas, hortalizas y frutas frescas, que concentraron el 59% del total. Estas cifras evidencian el dinamismo y la importancia creciente del sector en mercados globales.",
        "Del mismo modo, los datos de consultoras especializadas muestran que las exportaciones estratégicas, como frutas y hortalizas frescas, crecieron 3.5% en 2023, alcanzando 14,692 millones de dólares, con incrementos sostenidos en productos como aguacate, berries, tomate y pepino.",
        "Este contexto de fuerte integración comercial, especialmente con mercados exigentes como Estados Unidos y Canadá, exige soluciones logísticas que permitan garantizar la calidad, inocuidad y eficiencia en la manipulación de productos frescos. Las cajas de plástico son un componente esencial para cumplir con estas exigencias.",
      ],
    },
    {
      subtitulo:
        "Rol estratégico de las cajas de plástico en la cadena de suministro",
      parrafos: [
        "Las cajas de plástico no son simplemente recipientes para transportar frutas y verduras: son un elemento clave que impacta directamente en la calidad final del producto, la eficiencia operativa y la competitividad de toda la cadena agroalimentaria.",
      ],
    },
    {
      subtitulo: "Protección del producto y reducción de pérdidas",
      parrafos: [
        "Uno de los principales retos en la cadena de valor de frutas y verduras frescas es la alta perecibilidad de los productos. Un envase inadecuado o de baja calidad puede incrementar las pérdidas por daños mecánicos, presión o manipulación, lo que se traduce en costos adicionales y menores rendimientos.",
        "Las cajas de plástico ofrecen una protección superior frente a golpes y condiciones ambientales variables, reduciendo las mermas relacionadas con daños físicos y fisiológicos del producto. Su diseño permite ventilación adecuada, lo que ayuda a controlar la temperatura y humedad durante el transporte y almacenamiento, aspectos críticos para mantener las propiedades organolépticas y la frescura de los productos frescos.",
      ],
    },
    {
      subtitulo: "Inocuidad e higiene alimentaria",
      parrafos: [
        "Para farm-to-fork y mercados exportadores con altos estándares sanitarios, la inocuidad alimentaria es un requisito indispensable. Las cajas de plástico son fáciles de lavar, desinfectar y mantener libres de contaminación microbiológica, lo que permite cumplir con normativas de inocuidad exigentes tanto en mercados nacionales como internacionales.",
        "Este atributo es particularmente relevante en productos frescos, donde el contacto con superficies contaminadas puede acelerar deterioros o rechazos en punto de venta.",
      ],
    },
    {
      subtitulo: "Eficiencia logística y operación",
      parrafos: [
        "Las cajas de plástico están diseñadas para facilitar la manipulación eficiente en todas las etapas logísticas: cosecha, almacenamiento, transporte y distribución final. Su ligereza, capacidad para ser apiladas y compatibilidad con sistemas automatizados permiten reducir tiempos de operación, mejorar la utilización de espacio y disminuir costos logísticos asociados a cargas y maniobras.",
        "Además, su uniformidad y estandarización posibilitan la integración en procesos de rastreo con tecnologías como códigos de barras o RFID, incrementando la visibilidad y control de inventarios a lo largo de la cadena.",
      ],
    },
    {
      subtitulo: "Sostenibilidad y reutilización",
      parrafos: [
        "A diferencia de materiales de un solo uso como cartón o madera, las cajas plásticas modernas pueden ser reutilizables y están fabricadas con materiales reciclables, lo que favorece prácticas logísticas más sostenibles. Los sistemas de embalaje reutilizable ayudan a reducir residuos, reducir la huella ambiental y favorecer modelos de economía circular dentro de la cadena de suministro.",
      ],
    },
    {
      subtitulo: "Elección del proveedor: calidad, tiempos y confiabilidad",
      parrafos: [
        "Para compradores profesionales del sector agroalimentario, elegir un proveedor de cajas de plástico adecuado es una decisión estratégica que impacta directamente en el desempeño logístico y en la satisfacción del cliente final.",
        "Los ciclos de producción agrícola, la estacionalidad de cultivos y las fechas de embarque en exportación requieren proveedores que puedan responder con flexibilidad, respetando plazos estrictos y garantizando disponibilidad incluso en temporadas altas. Un proveedor con tiempos de entrega ágiles reduce interrupciones operativas y evita retrasos costosos en la cadena productiva.",
        "La calidad de los materiales plásticos utilizados para fabricar cajas debe cumplir con requisitos específicos de contacto alimentario, resistencia y certificaciones de inocuidad. Materiales de alta calidad aseguran que las cajas mantengan su integridad física, eviten migración de sustancias y cumplan con normativas tanto nacionales como internacionales.",
        "Los compradores profesionales buscan soluciones que se adapten a sus necesidades particulares de producto, logística y manejo. Un proveedor que ofrece asistencia técnica, opciones de diseño personalizado y asesoría en selección de materiales agrega valor al servicio, permitiendo optimizar procesos logísticos y reducir pérdidas.",
      ],
    },
    {
      subtitulo: null,
      parrafos: [
        "La cadena de valor agroalimentaria mexicana enfrenta retos y oportunidades derivados de su crecimiento exportador y de la exigencia de mercados globales. En este contexto, las cajas de plástico desempeñan un rol fundamental para proteger la calidad de frutas y verduras frescas, reducir mermas, garantizar inocuidad alimentaria y mejorar la eficiencia logística.",
        "Para los compradores profesionales, seleccionar un proveedor confiable con tiempos de respuesta rápidos, materiales inocuos y soluciones logísticas adaptadas es una inversión clave que agrega valor al negocio y fortalece la competitividad en mercados domésticos e internacionales.",
      ],
    },
  ],
};

/* ─────────────────────────────────────────────────────────
   Schema.org para el artículo (SEO avanzado)
───────────────────────────────────────────────────────── */
const articuloSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: ARTICULO.titulo,
  description:
    "El sector agroalimentario mexicano superó los $51,874 millones de dólares en exportaciones en 2023. Descubre el rol estratégico de las cajas de plástico en esta cadena de valor.",
  image: ARTICULO.imagen,
  author: {
    "@type": "Organization",
    name: "Plastimega",
    url: "https://plastimega.mx",
  },
  publisher: {
    "@type": "Organization",
    name: "Plastimega",
    logo: {
      "@type": "ImageObject",
      url: "https://plastimega.mx/img/iconos/Logo plastimega-03.png",
    },
  },
  datePublished: "2026-02-25",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id":
      "https://plastimega.mx/blog/cajas-plastico-cadena-valor-agro",
  },
};

/* ─────────────────────────────────────────────────────────
   Página
───────────────────────────────────────────────────────── */
const BlogArticuloPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Importancia de las cajas de plástico en la cadena de valor agro | Plastimega"
        description="El sector agroalimentario mexicano superó los $51,874 millones de dólares en exportaciones en 2023. Conoce el rol estratégico de las cajas de plástico en protección, inocuidad y eficiencia logística."
        keywords="cajas de plástico agro, cadena de valor agroalimentaria, logística frutas verduras, embalaje agrícola México, inocuidad alimentaria, Plastimega"
        canonicalUrl="https://plastimega.mx/blog/cajas-plastico-cadena-valor-agro"
        ogImage={ARTICULO.imagen}
        ogType="article"
        schemaData={articuloSchema}
      />

      {/* ── Hero con imagen de fondo + Navbar integrado ── */}
      <div className="relative h-[55vh] min-h-95 overflow-hidden">
        <img
          src={ARTICULO.imagen}
          alt={ARTICULO.titulo}
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-linear-to-b from-[#1B2E6B]/60 via-[#1B2E6B]/50 to-[#1B2E6B]/90" />

        {/* Navbar integrado sobre la imagen */}
        <div className="absolute top-0 left-0 w-full z-10">
          <Navbar />
        </div>

        <div className="absolute inset-0 flex flex-col justify-end pb-10 px-4">
          <div className="max-w-4xl mx-auto w-full">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-white/70 text-sm mb-4">
              <Link to="/" className="hover:text-white transition-colors">
                Inicio
              </Link>
              <span>/</span>
              <Link
                to="/#blog"
                className="hover:text-white transition-colors"
              >
                Blog
              </Link>
              <span>/</span>
              <span className="text-white/90 line-clamp-1">
                Cajas de plástico en la cadena de valor agro
              </span>
            </nav>

            <motion.h1
              className="text-white text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              {ARTICULO.titulo}
            </motion.h1>

            <motion.p
              className="text-white/70 text-sm mt-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Plastimega &nbsp;·&nbsp; {ARTICULO.fecha}
            </motion.p>
          </div>
        </div>
      </div>

      {/* ── Contenido del artículo ── */}
      <main className="max-w-4xl mx-auto px-4 md:px-8 py-14 md:py-20">
        {ARTICULO.secciones.map((seccion, i) => (
          <motion.div
            key={i}
            className="mb-8"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: i * 0.05 }}
          >
            {seccion.subtitulo && (
              <h2 className="text-[#1B2E6B] text-xl md:text-2xl font-bold mb-3 mt-2 leading-snug border-l-4 border-yellow-400 pl-4">
                {seccion.subtitulo}
              </h2>
            )}
            {seccion.parrafos.map((parrafo, j) => (
              <p
                key={j}
                className="text-gray-700 text-base md:text-lg leading-relaxed mb-3"
              >
                {parrafo}
              </p>
            ))}
          </motion.div>
        ))}

        {/* ── CTA ── */}
        <motion.div
          className="mt-14 rounded-2xl bg-[#1B2E6B] p-8 md:p-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-white text-2xl md:text-3xl font-bold mb-3">
            ¿Buscas cajas de plástico para tu operación agro?
          </h3>
          <p className="text-white/80 text-base mb-7 max-w-xl mx-auto">
            En Plastimega contamos con el catálogo más amplio de cajas y
            embalaje plástico con entrega rápida en todo México.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/productos"
              className="bg-yellow-400 hover:bg-yellow-300 text-[#1B2E6B] font-bold
                         px-8 py-3 rounded-full transition-colors text-sm"
            >
              Ver catálogo de productos
            </Link>
            <Link
              to="/#contacto"
              className="border-2 border-white text-white hover:bg-white hover:text-[#1B2E6B]
                         font-semibold px-8 py-3 rounded-full transition-colors text-sm"
            >
              Cotizar ahora
            </Link>
          </div>
        </motion.div>

        {/* ── Volver al blog ── */}
        <div className="mt-10 text-center">
          <Link
            to="/#blog"
            className="inline-flex items-center gap-2 text-[#1B2E6B] font-semibold
                       hover:underline text-sm"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
            Volver al blog
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogArticuloPage;
