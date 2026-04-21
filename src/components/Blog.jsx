import React, { useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import useEmblaCarousel from "embla-carousel-react";
import OptimizedImage from "./OptimizedImage";

/* -------------------------------------------------
   Datos por defecto
   (sobreescribibles via props articulos=[...])
------------------------------------------------- */
const ARTICULOS_DEFAULT = [
  {
    id: 6,
    titulo:
      "RETOS DE MERCADO PARA LA TEMPORADA AGRÍCOLA DE HORTALIZAS PRIMAVERA-VERANO 2026",
    descripcion:
      "Análisis de los factores críticos del ciclo P-V 2026: volumen de producción, demanda del consumidor consciente y los retos de exportación bajo T-MEC y normativas FSMA.",
    imagen:
      "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=600&q=80",
    link: "/blog/retos-mercado-temporada-agricola-primavera-verano-2026",
    slug: "retos-mercado-temporada-agricola-primavera-verano-2026",
    fecha: "Abril 2026",
    contenidoCompleto: null,
  },
  {
    id: 5,
    titulo: "PERSPECTIVAS DE LA PRODUCCIÓN AGRÍCOLA PARA EL VERANO EN MÉXICO",
    descripcion:
      "Análisis del volumen productivo, exportaciones y condiciones de mercado para el verano agrícola en México frente al desempeño del año anterior.",
    imagen: "/img/blog/df31165b-29e2-4dcc-b8cb-819842045e9b.jpg",
    link: "/blog/perspectivas-produccion-agricola-verano-mexico",
    slug: "perspectivas-produccion-agricola-verano-mexico",
    fecha: "Marzo 2026",
    contenidoCompleto: null,
  },
  {
    id: 4,
    titulo: "IMPORTANCIA DE LAS CAJAS DE PLÁSTICO EN LA CADENA DE VALOR AGRO",
    descripcion:
      "El sector agroalimentario mexicano superó los $51,874 millones de dólares en exportaciones en 2023. Descubre el rol estratégico de las cajas de plástico en esta cadena de valor.",
    imagen:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80",
    link: "/blog/cajas-plastico-cadena-valor-agro",
    slug: "cajas-plastico-cadena-valor-agro",
    contenidoCompleto: {
      titulo: "Importancia de las cajas de plástico en la cadena de valor agro",
      secciones: [
        {
          subtitulo:
            "El crecimiento del sector agroalimentario mexicano y su impacto global",
          parrafos: [
            "El sector agroalimentario de México ha experimentado un crecimiento significativo en los últimos años, consolidándose como uno de los principales motores de la economía nacional. Al cierre de 2023, las exportaciones agroalimentarias registraron un valor histórico de 51,874 millones de dólares, cifra que representó un crecimiento de 3.9% respecto al año anterior.",
            "Esto reflejó un superávit comercial de 7,576 millones de dólares, la tercera cifra más alta en 31 años. Los principales grupos de exportación fueron bebidas, hortalizas y frutas frescas, que concentraron el 59% del total.",
            "Las exportaciones estratégicas como frutas y hortalizas frescas crecieron 3.5% en 2023, alcanzando 14,692 millones de dólares, con incrementos en aguacate, berries, tomate y pepino.",
            "Este contexto exige soluciones logísticas que garanticen calidad, inocuidad y eficiencia en la manipulación de productos frescos. Las cajas de plástico son un componente esencial para cumplir con estas exigencias.",
          ],
        },
        {
          subtitulo:
            "Rol estratégico de las cajas de plástico en la cadena de suministro",
          parrafos: [
            "Las cajas de plástico no son simplemente recipientes: son un elemento clave que impacta directamente en la calidad final del producto, la eficiencia operativa y la competitividad de toda la cadena agroalimentaria.",
          ],
        },
        {
          subtitulo: "Protección del producto y reducción de pérdidas",
          parrafos: [
            "Las cajas de plástico ofrecen protección superior frente a golpes y condiciones ambientales variables, reduciendo mermas por daños físicos. Su diseño permite ventilación adecuada, controlando temperatura y humedad durante transporte y almacenamiento.",
          ],
        },
        {
          subtitulo: "Inocuidad e higiene alimentaria",
          parrafos: [
            "Las cajas de plástico son fáciles de lavar y desinfectar, lo que permite cumplir con normativas de inocuidad exigentes en mercados nacionales e internacionales.",
          ],
        },
        {
          subtitulo: "Eficiencia logística y operación",
          parrafos: [
            "Su ligereza y compatibilidad con sistemas automatizados permiten reducir tiempos de operación y costos logísticos. Su estandarización posibilita integración con tecnologías de rastreo como códigos de barras o RFID.",
          ],
        },
        {
          subtitulo: "Sostenibilidad y reutilización",
          parrafos: [
            "A diferencia de materiales de un solo uso, las cajas plásticas modernas son reutilizables y fabricadas con materiales reciclables, favoreciendo prácticas logísticas más sostenibles y modelos de economía circular.",
          ],
        },
        {
          subtitulo: "Elección del proveedor: calidad, tiempos y confiabilidad",
          parrafos: [
            "Elegir un proveedor de cajas de plástico adecuado es una decisión estratégica. La estacionalidad agrícola y las fechas de embarque requieren proveedores ágiles que garanticen disponibilidad en temporadas altas.",
            "Un proveedor confiable con materiales inocuos, soporte técnico y opciones de personalización agrega valor al negocio y fortalece la competitividad en mercados domésticos e internacionales.",
          ],
        },
      ],
    },
  },
  {
    id: 1,
    titulo: "SOLUCIONES PARA SUMINISTRO AGRO.",
    descripcion:
      "La industria agroalimentaria es una de las más dinámicas, por ello, te brindamos un servicio integral para que tu operación no se detenga.",
    imagen: "/img/imagenes/imagen 1-05.webp",
    link: null,
    contenidoCompleto: null,
  },
  {
    id: 2,
    titulo: "PLASTIMEGA LANZA NUEVA PÁGINA WEB.",
    descripcion:
      "La industria agroalimentaria es una de las más dinámicas, por ello, te brindamos un servicio integral para que tu operación no se detenga.",
    imagen: "/img/imagenes/imagen 2-05.webp",
    link: null,
    contenidoCompleto: null,
  },
  {
    id: 3,
    titulo: "NUEVOS PRODUCTOS POR ANUNCIARSE.",
    descripcion:
      "La industria agroalimentaria es una de las más dinámicas, por ello, te brindamos un servicio integral para que tu operación no se detenga.",
    imagen: "/img/imagenes/imagen 3-05.webp",
    link: null,
    contenidoCompleto: null,
  },
];

/* -------------------------------------------------
   Boton de navegacion
------------------------------------------------- */
const NavBtn = ({ onClick, disabled, ariaLabel, children }) => (
  <motion.button
    onClick={onClick}
    disabled={disabled}
    aria-label={ariaLabel}
    whileHover={!disabled ? { scale: 1.08 } : {}}
    whileTap={!disabled ? { scale: 0.94 } : {}}
    className='flex items-center justify-center w-11 h-11 rounded-full
               border-2 border-blue-900 text-blue-900 bg-white shadow-sm
               transition-colors duration-200 hover:bg-blue-900 hover:text-white
               disabled:opacity-30 disabled:cursor-not-allowed
               disabled:hover:bg-white disabled:hover:text-blue-900'
  >
    {children}
  </motion.button>
);

const ChevronLeft = () => (
  <svg
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2.2'
    strokeLinecap='round'
    strokeLinejoin='round'
    className='w-5 h-5'
  >
    <polyline points='15 18 9 12 15 6' />
  </svg>
);

const ChevronRight = () => (
  <svg
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2.2'
    strokeLinecap='round'
    strokeLinejoin='round'
    className='w-5 h-5'
  >
    <polyline points='9 18 15 12 9 6' />
  </svg>
);

/* -------------------------------------------------
   Tarjeta individual con efecto overlap en imagen
------------------------------------------------- */
const ArticuloCard = ({ articulo, onLeer, isDragging }) => {
  const tieneAccion = Boolean(articulo.slug || articulo.contenidoCompleto);
  const esExternal = articulo.imagen.startsWith("http");
  const navigate = useNavigate();

  const handleClick = () => {
    if (isDragging.current) return;
    if (articulo.slug) {
      navigate(`/blog/${articulo.slug}`);
    } else if (articulo.contenidoCompleto) {
      onLeer(articulo);
    }
  };

  return (
    <div className='h-full pt-5 pb-1'>
      <div
        onClick={tieneAccion ? handleClick : undefined}
        className={[
          "relative flex flex-col h-full rounded-2xl overflow-visible shadow-lg",
          "transition-shadow duration-300",
          tieneAccion ? "cursor-pointer hover:shadow-2xl" : "hover:shadow-xl",
        ].join(" ")}
      >
        {/* Imagen: sobresale 20px sobre el borde superior de la tarjeta */}
        <div className='relative z-10 -top-5 mx-5 h-55 shrink-0 rounded-xl overflow-hidden shadow-md'>
          {esExternal ? (
            <img
              src={articulo.imagen}
              alt={articulo.titulo}
              className='w-full h-full object-cover transition-transform duration-500 hover:scale-105'
              loading='lazy'
            />
          ) : (
            <OptimizedImage
              src={articulo.imagen}
              alt={articulo.titulo}
              className='w-full h-full object-cover transition-transform duration-500 hover:scale-105'
            />
          )}
        </div>

        {/* Cuerpo azul oscuro */}
        <div className='bg-[#1B2E6B] flex flex-col flex-1 px-7 pb-8 pt-2 rounded-2xl -mt-5'>
          <h3 className='text-[#F5A623] text-[15px] font-bold mb-3 uppercase leading-snug'>
            {articulo.titulo}
          </h3>
          <p className='text-white/90 text-sm leading-relaxed flex-1'>
            {articulo.descripcion}
          </p>
          {tieneAccion && (
            <motion.span
              whileHover={{ x: 4 }}
              className='inline-block mt-5 self-start text-[#F5A623] text-sm
                         font-semibold border border-[#F5A623]/60 rounded-full
                         px-4 py-1.5 select-none'
            >
              {articulo.slug ? "Ver artículo →" : "Leer artículo completo →"}
            </motion.span>
          )}
        </div>
      </div>
    </div>
  );
};

/* -------------------------------------------------
   Modal de articulo completo
------------------------------------------------- */
const ArticuloModal = ({ articulo, onCerrar }) => {
  if (!articulo) return null;
  const c = articulo.contenidoCompleto;
  const esExternal = articulo.imagen.startsWith("http");

  return (
    <motion.div
      className='fixed inset-0 z-100 flex items-center justify-center p-4'
      style={{ backgroundColor: "rgba(0,0,0,0.65)" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onCerrar}
    >
      <motion.article
        className='bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl'
        initial={{ scale: 0.88, opacity: 0, y: 36 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.88, opacity: 0, y: 36 }}
        transition={{ type: "spring", stiffness: 320, damping: 28 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Imagen cabecera */}
        <div className='relative h-64 md:h-72 overflow-hidden rounded-t-2xl'>
          {esExternal ? (
            <img
              src={articulo.imagen}
              alt={c.titulo}
              className='w-full h-full object-cover'
            />
          ) : (
            <OptimizedImage
              src={articulo.imagen}
              alt={c.titulo}
              className='w-full h-full object-cover'
              priority
            />
          )}
          <div className='absolute inset-0 bg-linear-to-t from-[#1B2E6B]/90 via-[#1B2E6B]/30 to-transparent' />
          <h2 className='absolute bottom-5 left-6 right-14 text-white text-xl md:text-2xl font-bold leading-snug'>
            {c.titulo}
          </h2>
        </div>

        {/* Boton cerrar */}
        <button
          onClick={onCerrar}
          aria-label='Cerrar artículo'
          className='absolute top-4 right-4 bg-white/90 hover:bg-white text-gray-700
                     text-xl font-bold rounded-full w-9 h-9 flex items-center
                     justify-center shadow transition-colors'
        >
          ×
        </button>

        {/* Contenido */}
        <div className='p-7 md:p-10 space-y-5'>
          {c.secciones.map((s, i) => (
            <div key={i}>
              {s.subtitulo && (
                <h3 className='text-[#1B2E6B] text-base md:text-lg font-bold mb-2 mt-5 first:mt-0'>
                  {s.subtitulo}
                </h3>
              )}
              {s.parrafos.map((p, j) => (
                <p
                  key={j}
                  className='text-gray-700 text-sm md:text-base leading-relaxed mb-2'
                >
                  {p}
                </p>
              ))}
            </div>
          ))}
          <div className='pt-4 text-center'>
            <button
              onClick={onCerrar}
              className='bg-[#1B2E6B] hover:bg-blue-800 text-white font-semibold
                         px-8 py-3 rounded-full transition-colors text-sm'
            >
              Cerrar artículo
            </button>
          </div>
        </div>
      </motion.article>
    </motion.div>
  );
};

/* -------------------------------------------------
   Componente principal Blog
   Props:
     articulos — array { id, titulo, descripcion, imagen, link?, contenidoCompleto? }
------------------------------------------------- */
const Blog = ({ articulos = ARTICULOS_DEFAULT }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    containScroll: "trimSnaps",
    dragFree: false,
  });

  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);
  const [modalArticulo, setModalArticulo] = useState(null);
  const isDragging = useRef(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanPrev(emblaApi.canScrollPrev());
    setCanNext(emblaApi.canScrollNext());
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  const onInit = useCallback(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect();
  }, [emblaApi, onSelect]);

  React.useEffect(() => {
    if (!emblaApi) return;
    onInit();
    emblaApi.on("init", onInit);
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onInit);
    emblaApi.on("pointerDown", () => { isDragging.current = false; });
    emblaApi.on("scroll", () => { isDragging.current = true; });
    emblaApi.on("pointerUp", () => {
      setTimeout(() => { isDragging.current = false; }, 200);
    });
    return () => {
      emblaApi.off("init", onInit);
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onInit);
    };
  }, [emblaApi, onInit, onSelect]);

  const abrirModal = (art) => {
    setModalArticulo(art);
    document.body.style.overflow = "hidden";
  };

  const cerrarModal = () => {
    setModalArticulo(null);
    document.body.style.overflow = "";
  };

  return (
    <>
      <motion.section
        id='blog'
        className='relative w-full bg-[#F5F5F7] py-16 md:py-20'
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className='max-w-7xl mx-auto px-4 md:px-8 lg:px-16 xl:px-24'>
          {/* Encabezado */}
          <motion.div
            className='mb-10'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-normal text-gray-700 leading-tight mb-5'>
              Necesitas{" "}
              <span className='font-bold text-[#1B2E6B]'>estar al día</span>
              <br />
              sobre lo que sucede{" "}
              <span className='font-bold text-[#1B2E6B]'>en la industria</span>
            </h2>
            <div className='w-80 h-px bg-gray-300' />
          </motion.div>

          {/* Carrusel Embla */}
          <div className='overflow-hidden' ref={emblaRef} style={{ touchAction: 'pan-y pinch-zoom' }}>
            <div className='flex'>
              {articulos.map((art) => (
                <div
                  key={art.id}
                  className='embla-slide min-w-0 px-3'
                >
                  <ArticuloCard articulo={art} onLeer={abrirModal} isDragging={isDragging} />
                </div>
              ))}
            </div>
          </div>

          {/* Controles: dots izquierda / flechas derecha */}
          <div className='flex items-center justify-between mt-5 px-1'>
            <div className='flex gap-2'>
              {scrollSnaps.map((_, i) => (
                <button
                  key={i}
                  onClick={() => emblaApi?.scrollTo(i)}
                  aria-label={`Ir a posición ${i + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    i === selectedIndex
                      ? "w-7 bg-[#1B2E6B]"
                      : "w-2.5 bg-gray-400 hover:bg-gray-500"
                  }`}
                />
              ))}
            </div>
            <div className='flex gap-3'>
              <NavBtn
                onClick={() => emblaApi?.scrollPrev()}
                disabled={!canPrev}
                ariaLabel='Artículo anterior'
              >
                <ChevronLeft />
              </NavBtn>
              <NavBtn
                onClick={() => emblaApi?.scrollNext()}
                disabled={!canNext}
                ariaLabel='Artículo siguiente'
              >
                <ChevronRight />
              </NavBtn>
            </div>
          </div>
        </div>
      </motion.section>

      <AnimatePresence>
        {modalArticulo && (
          <ArticuloModal articulo={modalArticulo} onCerrar={cerrarModal} />
        )}
      </AnimatePresence>
    </>
  );
};

export default Blog;
