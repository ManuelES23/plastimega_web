import { useEffect } from "react";

const SEO = ({
  title = "Plastimega | Distribuidor de Productos Plásticos en México",
  description = "Plastimega es líder en distribución de productos plásticos: cajas, sillas, tapas, embalaje y desechables. Soluciones industriales de alta calidad para tu negocio en México.",
  keywords = "productos plásticos, cajas de plástico, sillas de plástico, tapas plásticas, embalaje, desechables, distribuidor plásticos México, Plastimega",
  canonicalUrl = "https://plastimega.com/",
  ogImage = "https://plastimega.com/img/imagenes/og-image.jpg",
  ogType = "website",
  schemaData = null,
}) => {
  useEffect(() => {
    // Actualizar título
    document.title = title;

    // Actualizar meta tags
    const updateMeta = (name, content, isProperty = false) => {
      const attribute = isProperty ? "property" : "name";
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      if (element) {
        element.setAttribute("content", content);
      } else {
        element = document.createElement("meta");
        element.setAttribute(attribute, name);
        element.setAttribute("content", content);
        document.head.appendChild(element);
      }
    };

    // Meta tags básicos
    updateMeta("description", description);
    updateMeta("keywords", keywords);

    // Open Graph
    updateMeta("og:title", title, true);
    updateMeta("og:description", description, true);
    updateMeta("og:url", canonicalUrl, true);
    updateMeta("og:image", ogImage, true);
    updateMeta("og:type", ogType, true);

    // Twitter
    updateMeta("twitter:title", title);
    updateMeta("twitter:description", description);
    updateMeta("twitter:url", canonicalUrl);
    updateMeta("twitter:image", ogImage);

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute("href", canonicalUrl);
    } else {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      canonical.setAttribute("href", canonicalUrl);
      document.head.appendChild(canonical);
    }

    // Schema.org JSON-LD dinámico
    if (schemaData) {
      // Eliminar schema anterior si existe
      const existingSchema = document.querySelector(
        'script[data-schema="dynamic"]',
      );
      if (existingSchema) {
        existingSchema.remove();
      }

      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-schema", "dynamic");
      script.textContent = JSON.stringify(schemaData);
      document.head.appendChild(script);
    }
  }, [title, description, keywords, canonicalUrl, ogImage, ogType, schemaData]);

  return null;
};

export default SEO;
