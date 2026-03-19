import React, { useState } from "react";
import { motion } from "framer-motion";

// Convierte la ruta de imagen a su versión WebP equivalente
const toWebP = (src) => {
  if (!src) return src;
  return src.replace(/\.(png|jpe?g)$/i, ".webp");
};

const OptimizedImage = ({
  src,
  alt,
  className = "",
  style = {},
  loading = "lazy",
  priority = false,
  skeleton = true,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const webpSrc = toWebP(src);
  // Solo usar source WebP si la imagen es local y tiene una versión webp diferente
  const hasWebpVersion = webpSrc !== src && !src.startsWith("http");
  const fetchPriority = priority ? "high" : "auto";

  return (
    <div className='relative' style={style}>
      {/* Skeleton/Placeholder mientras carga */}
      {!isLoaded && skeleton && !hasError && (
        <div
          className={`absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse ${className}`}
          style={style}
        />
      )}

      {/* Picture con WebP y fallback PNG */}
      <motion.picture
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Fuente WebP solo si existe versión convertida local */}
        {hasWebpVersion && <source srcSet={webpSrc} type='image/webp' />}

        {/* Fallback al original */}
        <img
          src={src}
          alt={alt}
          className={className}
          style={style}
          loading={priority ? "eager" : loading}
          decoding='async'
          fetchPriority={fetchPriority}
          onLoad={() => setIsLoaded(true)}
          onError={() => {
            setHasError(true);
            setIsLoaded(true);
          }}
          {...props}
        />
      </motion.picture>

      {/* Fallback si hay error */}
      {hasError && (
        <div
          className={`flex items-center justify-center bg-gray-200 ${className}`}
          style={style}
        >
          <span className='text-gray-400 text-sm'>Error al cargar imagen</span>
        </div>
      )}
    </div>
  );
};

export default OptimizedImage;
