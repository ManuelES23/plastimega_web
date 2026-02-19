import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    // Target navegadores modernos con mejor soporte de compresion
    target: "es2020",
    // Separar vendor chunks para mejor caché del navegador
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          router: ["react-router-dom"],
          motion: ["framer-motion"],
        },
      },
    },
    // Comprimir más agresivamente en producción
    minify: "esbuild",
    // Generar source maps solo si es necesario
    sourcemap: false,
    // Chunk size warning a 600KB
    chunkSizeWarningLimit: 600,
  },
});
