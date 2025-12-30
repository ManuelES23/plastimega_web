import React, { useState } from "react";
import { motion } from "framer-motion";

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

  return (
    <div className='relative' style={style}>
      {/* Skeleton/Placeholder mientras carga */}
      {!isLoaded && skeleton && !hasError && (
        <div
          className={`absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse ${className}`}
          style={style}
        />
      )}

      {/* Imagen con fade-in al cargar */}
      <motion.img
        src={src}
        alt={alt}
        className={className}
        style={style}
        loading={priority ? "eager" : loading}
        onLoad={() => setIsLoaded(true)}
        onError={() => {
          setHasError(true);
          setIsLoaded(true);
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        {...props}
      />

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
