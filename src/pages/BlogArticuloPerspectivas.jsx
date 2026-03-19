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
    "Perspectivas de la producción agrícola para el verano en México: volumen, mercado y exportación",
  fecha: "Marzo 2026",
  imagen: "/img/blog/df31165b-29e2-4dcc-b8cb-819842045e9b.jpg",
  secciones: [
    {
      subtitulo: null,
      parrafos: [
        "El verano representa uno de los momentos más dinámicos del calendario agrícola en México. Durante este periodo convergen el inicio de múltiples cosechas hortofrutícolas, la consolidación de programas de exportación hacia Norteamérica y el incremento del consumo nacional. Sin embargo, el panorama para el verano reciente muestra señales mixtas: crecimiento moderado en producción, presión en precios internacionales y ajustes en la demanda global.",
        "A continuación se analiza el escenario esperado para la producción agrícola en México, considerando volumen productivo, dinámica de exportación y condiciones del mercado frente al desempeño del año anterior.",
      ],
    },
    {
      subtitulo: "Panorama general del sector agrícola en México",
      parrafos: [
        "Las proyecciones del sector agroalimentario indican que la producción total en México podría alcanzar 288.5 millones de toneladas en 2026, lo que representaría un crecimiento aproximado de 2.4% en volumen respecto a 2025. En términos de valor económico, el sector alcanzaría cerca de 1.96 billones de pesos, con un crecimiento cercano al 2.8% anual.",
        "Este crecimiento, aunque moderado, refleja la resiliencia del sector agrícola mexicano frente a factores estructurales como: volatilidad de precios internacionales, variaciones climáticas, fluctuaciones cambiarias y tensiones comerciales con Estados Unidos.",
        "Durante 2025 se observó además un repunte en el volumen físico del sector primario, con incrementos en cultivos clave como papa, zanahoria, limón, naranja y papaya, lo que ayudó a fortalecer el abasto interno y el dinamismo productivo.",
      ],
    },
    {
      subtitulo: "Producción agrícola de verano: cultivos estratégicos",
      parrafos: [
        "La temporada de verano en México concentra principalmente la producción de: mango, berries (fresa, frambuesa, arándano), aguacate, tomate y hortalizas de exportación, maíz del ciclo primavera-verano, sandía, melón y papaya.",
        "Estos cultivos tienen una importancia estratégica porque combinan alto consumo interno y fuerte vocación exportadora, especialmente hacia Estados Unidos y Canadá.",
        "Entre estos productos, el mango ha mostrado un comportamiento particularmente favorable en el inicio de 2026. En el comercio exterior mexicano registró un crecimiento de más del 100% en volumen exportado y 56% en valor, lo que refleja una demanda sólida en mercados internacionales.",
        "Por otro lado, productos emblemáticos como el aguacate mantienen una demanda estructural elevada en Estados Unidos. En eventos de alto consumo como el Super Bowl, México ha llegado a exportar 127 mil toneladas, con incrementos anuales cercanos al 11%.",
      ],
    },
    {
      subtitulo: "Exportaciones agrícolas: crecimiento con presión en precios",
      parrafos: [
        "México se ha consolidado como uno de los principales exportadores de frutas y hortalizas del mundo. Sin embargo, el inicio de 2026 mostró señales de ajuste en el comercio exterior.",
        "Durante enero de 2026, el volumen exportado de frutas y hortalizas fue de 874.7 mil toneladas, una caída de 3.1% respecto a 2025, mientras que el valor total exportado disminuyó 23.4%.",
        "Esta diferencia entre volumen y valor revela una tendencia relevante para el sector: más producto en el mercado pero con precios internacionales más bajos. Un ejemplo claro es el aguacate: volumen exportado +29.5%, valor comercial −35%, precio promedio con caída cercana al 50%. Esto sugiere un escenario de sobreoferta relativa o ajuste en la demanda internacional, particularmente en mercados sensibles al precio como Estados Unidos.",
      ],
    },
    {
      subtitulo: "Tipo de cambio y competitividad",
      parrafos: [
        "La apreciación del peso frente al dólar durante algunos periodos de 2025 y 2026 ha reducido la competitividad de las exportaciones mexicanas, ya que disminuye los ingresos en pesos para los productores.",
        "Para cultivos altamente dependientes de exportación —como tomate, berries y aguacate— este factor puede impactar directamente en los márgenes.",
      ],
    },
    {
      subtitulo: "Comercio internacional más lento",
      parrafos: [
        "Las proyecciones globales indican que el crecimiento del comercio internacional agrícola será moderado en 2026, con recuperación gradual tras desaceleraciones recientes en algunas regiones.",
        "Esto implica que la expansión de exportaciones dependerá más de la competitividad individual de cada producto que de un crecimiento general del comercio mundial.",
      ],
    },
    {
      subtitulo: "Dependencia estructural del mercado estadounidense",
      parrafos: [
        "Estados Unidos continúa siendo el principal destino de las exportaciones agrícolas mexicanas. En el caso del tomate, por ejemplo, cerca del 66% del consumo estadounidense depende del producto mexicano, lo que representa aproximadamente 4.3 mil millones de libras al año.",
        "Esto confirma que, incluso frente a disputas comerciales o aranceles, la demanda estructural del mercado estadounidense seguirá sosteniendo gran parte de la producción hortícola mexicana.",
      ],
    },
    {
      subtitulo: "Comparación con el año anterior",
      parrafos: [
        "Comparado con 2025, el escenario agrícola para el verano actual presenta tres diferencias clave. En primer lugar, mayor volumen productivo: el sector agrícola continúa expandiéndose ligeramente en volumen, impulsado por mejoras tecnológicas, ampliación de superficies y eficiencia productiva.",
        "En segundo lugar, menor crecimiento en valor: aunque la producción aumenta, el valor comercial de algunos productos ha disminuido debido a presión en precios internacionales, apreciación del peso y mayor competencia global.",
        "En tercer lugar, mayor volatilidad en exportaciones: el comercio agrícola muestra fluctuaciones mensuales más marcadas, reflejando cambios en inventarios, clima y demanda.",
      ],
    },
    {
      subtitulo:
        "Conclusión: un verano con crecimiento moderado y ajustes de mercado",
      parrafos: [
        "Las perspectivas para la producción agrícola en México durante el verano son positivas en términos de volumen, pero más retadoras en rentabilidad.",
        "El país mantiene ventajas estructurales claras: clima diverso que permite producción casi todo el año, cercanía logística con el mercado estadounidense, y liderazgo global en productos hortofrutícolas.",
        "Sin embargo, los productores enfrentarán un entorno donde la eficiencia operativa, la planeación comercial y la diferenciación de producto serán cada vez más determinantes para sostener márgenes.",
        "En términos generales, el verano agrícola mexicano se perfila como una temporada de oferta sólida y demanda estable, pero con mercados más sensibles al precio que en ciclos anteriores.",
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
    "Análisis del escenario esperado para la producción agrícola en México durante el verano: volumen productivo, exportaciones, precios y comparación con 2025.",
  image:
    "https://plastimega.mx/img/blog/df31165b-29e2-4dcc-b8cb-819842045e9b.jpg",
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
  datePublished: "2026-03-19",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id":
      "https://plastimega.mx/blog/perspectivas-produccion-agricola-verano-mexico",
  },
};

/* ─────────────────────────────────────────────────────────
   Página
───────────────────────────────────────────────────────── */
const BlogArticuloPerspectivas = () => {
  return (
    <div className='min-h-screen bg-white'>
      <SEO
        title='Perspectivas de la producción agrícola para el verano en México | Plastimega'
        description='Análisis del escenario para la producción agrícola en México durante el verano: volumen, exportaciones, precios y factores clave frente al año anterior.'
        keywords='producción agrícola México verano, exportaciones hortofrutícolas, aguacate exportación, mango México 2026, mercado agrícola verano, Plastimega'
        canonicalUrl='https://plastimega.mx/blog/perspectivas-produccion-agricola-verano-mexico'
        ogImage='https://plastimega.mx/img/blog/df31165b-29e2-4dcc-b8cb-819842045e9b.jpg'
        ogType='article'
        schemaData={articuloSchema}
      />

      {/* ── Hero con imagen de fondo + Navbar integrado ── */}
      <div className='relative h-[55vh] min-h-95 overflow-hidden'>
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
                Perspectivas producción agrícola verano México
              </span>
            </nav>

            <motion.h1
              className='text-white text-3xl md:text-4xl lg:text-5xl font-bold leading-tight'
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
            className='mb-8'
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

export default BlogArticuloPerspectivas;
