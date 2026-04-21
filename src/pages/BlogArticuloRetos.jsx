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
  titulo:
    "Los retos de mercado para la temporada agrícola de hortalizas primavera-verano 2026: volumen, demanda y exportación",
  fecha: "Abril 2026",
  imagen:
    "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1200&q=80",
  secciones: [
    {
      subtitulo: null,
      parrafos: [
        "El ciclo agrícola Primavera-Verano (P-V) 2026 se presenta como un periodo de grandes definiciones para el sector hortofrutícola mexicano. Tras un 2025 marcado por la reconfiguración de las cadenas de suministro, este año la competitividad no se mide solo en toneladas por hectárea, sino en la eficiencia logística y la resiliencia operativa.",
        "En Plastimega, analizamos a fondo los factores críticos que determinarán el éxito de los productores de hortalizas en este semestre.",
      ],
    },
    {
      subtitulo: "1. Volumen de Producción: Entre la Tecnificación y el Clima",
      parrafos: [
        "Para este 2026, se proyecta que la producción de hortalizas en México mantenga un crecimiento inercial, especialmente en cultivos como el tomate, chile verde, cebolla y pepino. Sin embargo, el volumen está condicionado por dos factores:",
      ],
      lista: [
        {
          label: "Optimización Hídrica",
          texto:
            "Ante la variabilidad climática, los productores han migrado masivamente hacia la agricultura protegida (invernaderos y malla sombra). Esto genera picos de producción más concentrados que requieren una gestión de envases inmediata y masiva.",
        },
        {
          label: "Densidad de Cosecha",
          texto:
            "El reto no es solo cosechar más, sino evitar la pérdida post-cosecha que, históricamente, puede alcanzar hasta el 25-30% del volumen total si no se cuenta con el embalaje adecuado.",
        },
      ],
    },
    {
      subtitulo: "El rol de la caja de plástico",
      parrafos: [
        "En un escenario de alta densidad, la resistencia mecánica de la caja es vital. Las soluciones de Plastimega están diseñadas para soportar la carga hidrostática de las hortalizas frescas, evitando que las capas inferiores se dañen por el peso durante el estibado en campo.",
      ],
    },
    {
      subtitulo: "2. Demanda y Mercado Interno: El Consumidor Consciente",
      parrafos: [
        "El mercado nacional en 2026 muestra una tendencia clara: la demanda de productos con certificaciones de inocuidad. El consumidor en centros de abasto y supermercados ya no solo busca precio, sino frescura visual y sanidad.",
      ],
      lista: [
        {
          label: "Segmentación de Mercado",
          texto:
            'Existe una demanda creciente por hortalizas "Premium" o seleccionadas. Esto obliga al productor a clasificar desde el campo.',
        },
        {
          label: "Sostenibilidad Operativa",
          texto:
            "Las empresas minoristas (retailers) están penalizando el uso de empaques de un solo uso o materiales que generan residuos difíciles de gestionar. Aquí, la economía circular de nuestras cajas de plástico reutilizables ofrece una ventaja competitiva y una reducción de costos a largo plazo.",
        },
      ],
    },
    {
      subtitulo: "3. Exportación 2026: Superando las Barreras No Arancelarias",
      parrafos: [
        "Exportar a Estados Unidos y Canadá en 2026 requiere navegar un entorno regulatorio más estricto, bajo el amparo del T-MEC y las nuevas disposiciones de la FDA.",
      ],
    },
    {
      subtitulo: "Retos Logísticos en la Frontera",
      parrafos: [],
      listaOrdenada: [
        {
          label: "Trazabilidad Digital",
          texto:
            "Las cajas ya no son solo contenedores; son puntos de datos. Nuestras cajas permiten la integración de etiquetas inteligentes y códigos QR para el rastreo desde el surco hasta el anaquel.",
        },
        {
          label: "Inocuidad Estricta (FSMA)",
          texto:
            "Las inspecciones en frontera se han intensificado. Las cajas de madera, por su porosidad, son hoy un riesgo de contaminación microbiológica. El plástico virgen de alta densidad es la norma de oro para evitar rechazos fitosanitarios.",
        },
        {
          label: "Tipo de Cambio y Costos de Flete",
          texto:
            "Con un peso mexicano que busca estabilidad frente al dólar, el margen de utilidad se protege reduciendo el peso muerto en los camiones. Nuestras cajas ligeras pero ultra-resistentes permiten maximizar la carga útil del transporte.",
        },
      ],
    },
    {
      subtitulo: "Conclusión: Preparados para la Cosecha",
      parrafos: [
        "El ciclo primavera-verano 2026 premiará a los productores que prioricen la integridad de su producto. En un mercado de alta demanda pero de exigencia técnica rigurosa, Plastimega se consolida como el socio estratégico que garantiza que el esfuerzo de todo un ciclo de cultivo se traduzca en una venta exitosa.",
        "Optimiza tu cosecha hoy. Protege tu exportación mañana.",
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
    "Análisis de los retos de mercado para la temporada agrícola de hortalizas primavera-verano 2026: volumen de producción, demanda interna y exportación.",
  image:
    "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1200&q=80",
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
  datePublished: "2026-04-21",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id":
      "https://plastimega.mx/blog/retos-mercado-temporada-agricola-primavera-verano-2026",
  },
};

/* ─────────────────────────────────────────────────────────
   Página
───────────────────────────────────────────────────────── */
const BlogArticuloRetos = () => {
  return (
    <div className='min-h-screen bg-white'>
      <SEO
        title='Retos de mercado para la temporada agrícola P-V 2026 | Plastimega'
        description='Análisis de los retos de mercado para la temporada de hortalizas primavera-verano 2026: volumen de producción, demanda del consumidor y exportación bajo T-MEC.'
        keywords='temporada agrícola primavera verano 2026, hortalizas México exportación, cajas plástico cosecha, T-MEC exportación hortalizas, FSMA inocuidad, Plastimega'
        canonicalUrl='https://plastimega.mx/blog/retos-mercado-temporada-agricola-primavera-verano-2026'
        ogImage='https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1200&q=80'
        ogType='article'
        schemaData={articuloSchema}
      />

      {/* ── Hero con imagen de fondo + Navbar integrado ── */}
      <div className='relative min-h-130 md:h-[55vh] md:min-h-100 overflow-hidden'>
        <img
          src={ARTICULO.imagen}
          alt={ARTICULO.titulo}
          className='w-full h-full object-cover'
          loading='eager'
        />
        <div className='absolute inset-0 bg-linear-to-b from-[#1B2E6B]/60 via-[#1B2E6B]/50 to-[#1B2E6B]/90' />

        {/* Navbar integrado sobre la imagen */}
        <div className='absolute top-0 left-0 w-full z-10'>
          <Navbar />
        </div>

        <div className='absolute inset-0 flex flex-col justify-end pb-10 px-4'>
          <div className='max-w-4xl mx-auto w-full'>
            {/* Breadcrumb */}
            <nav className='flex items-center gap-2 text-white/70 text-sm mb-4'>
              <Link to='/' className='hover:text-white transition-colors'>
                Inicio
              </Link>
              <span>/</span>
              <Link to='/#blog' className='hover:text-white transition-colors'>
                Blog
              </Link>
              <span>/</span>
              <span className='text-white/90 line-clamp-1'>
                Retos de mercado temporada agrícola P-V 2026
              </span>
            </nav>

            <motion.h1
              className='text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight'
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              {ARTICULO.titulo}
            </motion.h1>

            <motion.p
              className='text-white/70 text-sm mt-3'
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
      <main className='max-w-4xl mx-auto px-4 md:px-8 py-14 md:py-20'>
        {ARTICULO.secciones.map((seccion, i) => (
          <motion.div
            key={i}
            className='mb-10'
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: i * 0.05 }}
          >
            {seccion.subtitulo && (
              <h2 className='text-[#1B2E6B] text-xl md:text-2xl font-bold mb-3 mt-2 leading-snug border-l-4 border-yellow-400 pl-4'>
                {seccion.subtitulo}
              </h2>
            )}
            {seccion.parrafos.map((parrafo, j) => (
              <p
                key={j}
                className='text-gray-700 text-base md:text-lg leading-relaxed mb-3'
              >
                {parrafo}
              </p>
            ))}
            {seccion.lista && (
              <ul className='mt-3 space-y-4'>
                {seccion.lista.map((item, k) => (
                  <li key={k} className='flex gap-3'>
                    <span className='shrink-0 w-2 h-2 rounded-full bg-yellow-400 mt-2' />
                    <p className='text-gray-700 text-base md:text-lg leading-relaxed'>
                      <span className='font-semibold text-[#1B2E6B]'>
                        {item.label}:{" "}
                      </span>
                      {item.texto}
                    </p>
                  </li>
                ))}
              </ul>
            )}
            {seccion.listaOrdenada && (
              <ol className='mt-3 space-y-4 list-none'>
                {seccion.listaOrdenada.map((item, k) => (
                  <li key={k} className='flex gap-4'>
                    <span className='shrink-0 w-7 h-7 rounded-full bg-[#1B2E6B] text-white text-sm font-bold flex items-center justify-center'>
                      {k + 1}
                    </span>
                    <p className='text-gray-700 text-base md:text-lg leading-relaxed'>
                      <span className='font-semibold text-[#1B2E6B]'>
                        {item.label}:{" "}
                      </span>
                      {item.texto}
                    </p>
                  </li>
                ))}
              </ol>
            )}
          </motion.div>
        ))}

        {/* ── CTA ── */}
        <motion.div
          className='mt-14 rounded-2xl bg-[#1B2E6B] p-8 md:p-10 text-center'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className='text-white text-2xl md:text-3xl font-bold mb-3'>
            ¿Listo para optimizar tu logística agrícola?
          </h3>
          <p className='text-white/80 text-base mb-7 max-w-xl mx-auto'>
            En Plastimega contamos con el catálogo más amplio de cajas y
            embalaje plástico con entrega rápida en todo México.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link
              to='/productos'
              className='bg-yellow-400 hover:bg-yellow-300 text-[#1B2E6B] font-bold
                         px-8 py-3 rounded-full transition-colors text-sm'
            >
              Ver catálogo de productos
            </Link>
            <Link
              to='/#contacto'
              className='border-2 border-white text-white hover:bg-white hover:text-[#1B2E6B]
                         font-semibold px-8 py-3 rounded-full transition-colors text-sm'
            >
              Cotizar ahora
            </Link>
          </div>
        </motion.div>

        {/* ── Volver al blog ── */}
        <div className='mt-10 text-center'>
          <Link
            to='/#blog'
            className='inline-flex items-center gap-2 text-[#1B2E6B] font-semibold
                       hover:underline text-sm'
          >
            <svg
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2.2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='w-4 h-4'
            >
              <polyline points='15 18 9 12 15 6' />
            </svg>
            Volver al blog
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogArticuloRetos;
