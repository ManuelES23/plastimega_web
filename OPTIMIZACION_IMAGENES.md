# Guía de Optimización de Imágenes

## 🚀 Implementación Actual

Se ha creado el componente `OptimizedImage.jsx` que incluye:

### ✨ Características

- **Lazy Loading nativo** - Las imágenes se cargan solo cuando están cerca del viewport
- **Skeleton loader** - Placeholder animado mientras carga la imagen
- **Fade-in animation** - Transición suave al cargar
- **Error handling** - Manejo de errores si la imagen falla
- **Priority loading** - Opción para imágenes críticas (above the fold)

### 📝 Uso del Componente

```jsx
import OptimizedImage from "./components/OptimizedImage";

// Uso básico (lazy loading automático)
<OptimizedImage
  src="/img/imagenes/imagen.png"
  alt="Descripción"
  className="w-full h-auto"
/>

// Imagen prioritaria (Hero, above the fold)
<OptimizedImage
  src="/img/imagenes/hero.png"
  alt="Hero"
  priority={true}
  className="w-full"
/>

// Sin skeleton loader
<OptimizedImage
  src="/img/iconos/logo.png"
  alt="Logo"
  skeleton={false}
/>
```

## 🔧 Optimizaciones Recomendadas

### 1. Comprimir Imágenes (IMPORTANTE)

Antes de subir las imágenes al proyecto:

**Herramientas Online:**

- [TinyPNG](https://tinypng.com/) - PNG/JPG (hasta 70% reducción)
- [Squoosh](https://squoosh.app/) - Múltiples formatos
- [ImageOptim](https://imageoptim.com/) - macOS
- [JPEG Optimizer](https://www.jpeg-optimizer.com/)

**Herramientas CLI:**

```bash
# Instalar ImageMagick
npm install -g imagemagick

# Comprimir JPG (calidad 85%)
magick convert imagen.jpg -quality 85 imagen-optimizada.jpg

# Comprimir PNG
magick convert imagen.png -strip -quality 85 imagen-optimizada.png
```

### 2. Convertir a WebP (Formato Moderno)

WebP es 25-35% más liviano que JPG/PNG.

```bash
# Convertir a WebP (calidad 80%)
magick convert imagen.jpg -quality 80 imagen.webp
```

**Picture tag con fallback:**

```jsx
<picture>
  <source srcSet='/img/imagenes/imagen.webp' type='image/webp' />
  <img src='/img/imagenes/imagen.jpg' alt='Descripción' />
</picture>
```

### 3. Tamaños Recomendados

| Tipo de Imagen | Tamaño Máximo | Peso Ideal |
| -------------- | ------------- | ---------- |
| Hero/Banner    | 1920x1080     | < 200KB    |
| Productos      | 800x800       | < 100KB    |
| Iconos         | 256x256       | < 20KB     |
| Logos          | 512x512       | < 50KB     |
| Thumbnails     | 400x400       | < 50KB     |

### 4. Responsive Images

```jsx
<img
  src='/img/small.jpg'
  srcSet='
    /img/small.jpg 400w,
    /img/medium.jpg 800w,
    /img/large.jpg 1200w
  '
  sizes='(max-width: 400px) 400px,
         (max-width: 800px) 800px,
         1200px'
  alt='Responsive'
/>
```

## 📦 Script de Optimización Masiva

Crear archivo `optimize-images.js` en la raíz:

```javascript
const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const inputDir = "./public/img";
const outputDir = "./public/img-optimized";

// Crear carpeta de salida
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Función para optimizar
async function optimizeImage(filePath) {
  const fileName = path.basename(filePath);
  const ext = path.extname(filePath).toLowerCase();

  if ([".jpg", ".jpeg", ".png"].includes(ext)) {
    await sharp(filePath)
      .resize(1920, 1080, { fit: "inside", withoutEnlargement: true })
      .webp({ quality: 80 })
      .toFile(path.join(outputDir, fileName.replace(ext, ".webp")));

    console.log(`✅ Optimizado: ${fileName}`);
  }
}

// Procesar todas las imágenes
function processDirectory(dir) {
  fs.readdirSync(dir).forEach((file) => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDirectory(fullPath);
    } else {
      optimizeImage(fullPath);
    }
  });
}

processDirectory(inputDir);
```

**Instalar y ejecutar:**

```bash
npm install sharp
node optimize-images.js
```

## 🎯 Configuración de Vite para Imágenes

Agregar en `vite.config.js`:

```javascript
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          let extType = assetInfo.name.split(".").at(1);
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            extType = "img";
          }
          return `${extType}/[name]-[hash][extname]`;
        },
      },
    },
  },
  // Optimizar imágenes en build
  assetsInclude: ["**/*.webp", "**/*.avif"],
});
```

## 📊 Checklist de Optimización

- [ ] Comprimir todas las imágenes JPG/PNG (70-85% calidad)
- [ ] Convertir imágenes grandes a WebP
- [ ] Implementar lazy loading en imágenes fuera del viewport
- [ ] Usar `priority={true}` solo para imágenes above-the-fold
- [ ] Agregar atributos width/height para evitar layout shift
- [ ] Usar CDN para servir imágenes (opcional)
- [ ] Implementar responsive images con srcSet
- [ ] Habilitar compresión GZIP/Brotli en servidor

## 🔍 Herramientas de Análisis

- [PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- [WebPageTest](https://www.webpagetest.org/)

## 💡 Consejos Adicionales

1. **Priorizar Above-the-Fold**: Solo el Hero debe cargarse inmediatamente
2. **Iconos SVG**: Convertir iconos PNG a SVG cuando sea posible
3. **Sprites de iconos**: Combinar iconos pequeños en un sprite sheet
4. **Cache HTTP**: Configurar cache headers en el servidor
5. **Preload crítico**: Precargar solo imágenes esenciales

```html
<link rel="preload" as="image" href="/img/hero.webp" />
```

---

**Implementado el 29 de diciembre de 2025**
