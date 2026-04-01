# Plastimega Web - Guía para Agentes de IA

## 🏗️ Arquitectura del Proyecto

Este es un **sitio web multi-página** para Plastimega, distribuidor de productos plásticos, construido con React + Vite + Tailwind CSS v4 + Framer Motion + React Router. **Hospedado en Netlify**.

### Estructura de Componentes

- **App.jsx**: Componente de rutas principal usando React Router
- **Páginas** en `src/pages/`:
  - `HomePage.jsx` - Página principal con secciones ancladas (`#home`, `#plastimega`, `#produtos`, `#topten`, `#servicios`, `#testimonios`, `#blog`, `#contacto`)
  - `ProductosPage.jsx` - Catálogo completo de productos con filtros por categoría
  - `BlogArticuloPage.jsx` - Artículo de blog: Cajas plástico cadena valor agro
  - `BlogArticuloPerspectivas.jsx` - Artículo de blog: Perspectivas producción agrícola
- **Componentes principales** en `src/components/`: Hero, Navbar, Plastimega, Productos, TopTen, Servicios, Testimonios, Blog, ContactoBanner, ContactoForm, ModalContacto, Footer, SEO
- **Componentes utilitarios**: `OptimizedImage.jsx` para carga optimizada de imágenes con lazy loading y skeleton loaders
- **Hook personalizado**: `useScrollAnimation.js` para animaciones de scroll con Intersection Observer

### Stack Tecnológico

- **React 19.2** (sin TypeScript)
- **Vite 7.2** como bundler
- **React Router DOM 7** para navegación entre páginas
- **Tailwind CSS 4.1** (usando `@tailwindcss/vite`)
- **Framer Motion 12.23** para animaciones avanzadas
- **ESLint 9** con configuración flat config
- **Netlify** como plataforma de hosting y CDN

## 🎨 Patrones de Animación (Framer Motion)

**Preferencia absoluta**: Usar Framer Motion para TODAS las animaciones, no Intersection Observer básico.

### Patrón Estándar de Entrada

```jsx
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
>
```

### Tipos de Animación por Componente

- **Plastimega**: Slide lateral (x: -100), fade + desplazamiento, líneas con scale, tarjetas escalonadas
- **Productos**: Escala (scale: 0.8 → 1), rotación 3D en tarjetas (`rotateY`, `rotateX`)
- **TopTen**: Carrusel con rotación 3D (`rotateY: 90`), transiciones con spring animation
- **ContactoBanner**: Zoom suave (scale: 1.1 → 1), rotación 3D en títulos (`rotateX: -90`)

### Delays Escalonados (Stagger)

```jsx
delay: 0.2; // Primer elemento
delay: 0.4; // Segundo elemento
delay: 0.6; // Tercer elemento
```

### Transiciones con Spring

```jsx
transition={{ type: "spring", stiffness: 100 }}
```

Ver documentación completa en [ANIMACIONES_FRAMER_MOTION.md](ANIMACIONES_FRAMER_MOTION.md).

## 🖼️ Gestión de Imágenes

**SIEMPRE usar `OptimizedImage` en lugar de `<img>`** para todas las imágenes, excepto logos pequeños.

```jsx
import OptimizedImage from "./components/OptimizedImage";

// Imagen estándar con lazy loading
<OptimizedImage src="/img/imagenes/producto.png" alt="Producto" className="w-full" />

// Imagen prioritaria (Hero, above the fold)
<OptimizedImage src="/img/imagenes/hero.png" alt="Hero" priority={true} />
```

**Estructura de directorios de imágenes**:

- `public/img/iconos/` - Iconos y elementos pequeños
- `public/img/imagenes/` - Fotografías de productos y banners
- `public/img/textos-graficos/` - Gráficos y elementos de texto

Ver [OPTIMIZACION_IMAGENES.md](OPTIMIZACION_IMAGENES.md) para tamaños y formatos recomendados.

## 🎯 Navegación y Rutas

### Sistema de Rutas

- **React Router DOM** configurado en `main.jsx` con `<BrowserRouter>`
- **Rutas disponibles**:
  - `/` - Página principal (HomePage)
  - `/productos` - Catálogo de productos (ProductosPage)
  - `/blog/cajas-plastico-cadena-valor-agro` - Artículo blog agro
  - `/blog/perspectivas-produccion-agricola-verano-mexico` - Artículo blog perspectivas
- **Navegación programática**: Usar `<Link>` de react-router-dom, NO usar `<a href>`

### Patrón de Navegación

```jsx
import { Link } from "react-router-dom";

// Navegación entre páginas
<Link to="/productos">Ver productos</Link>

// Navegación a sección con anchor (misma página)
<Link to="/#contacto">Contacto</Link>
```

### Scroll Suave

- **Scroll suave**: Configurado globalmente en `index.css` con `scroll-behavior: smooth`
- **Secciones ancladas**: En HomePage, cada sección tiene un `id` correspondiente a los enlaces del navbar
- **Navbar**: Enlaces funcionales en desktop y móvil, con cierre automático del menú móvil al seleccionar

## ⚙️ Workflows de Desarrollo

### Comandos Principales

```bash
npm run dev      # Servidor de desarrollo (Vite HMR)
npm run build    # Build de producción
npm run preview  # Preview del build
npm run lint     # Ejecutar ESLint
```

### Configuración de Tailwind

`<a href>` para navegación interna - usar `<Link to>` de react-router-dom

- **NO** usar
- **Tailwind CSS v4** se importa directamente en `index.css` con `@import "tailwindcss";`
- **NO hay archivo tailwind.config.js** - la configuración está en `vite.config.js`
- Clases personalizadas en `index.css`: `.animate-blob`, custom scrollbar, etc.

### ESLint

- Configuración moderna con **flat config** (`eslint.config.js`)
- Ignora variables no usadas que empiecen con mayúscula: `varsIgnorePattern: '^[A-Z_]'`
- Extensiones configuradas: react-hooks, react-refresh

## 📐 Diseño y Responsive

- **Resoluciones objetivo**: 1920x1080 (desktop) y 1366x768 (laptop)
- **Móvil first**: Grid layouts con breakpoints de Tailwind (`lg:grid-cols-2`)
- **Altura completa**: Muchas secciones usan `h-screen` para ocupar toda la pantalla

## 🚫 Anti-Patrones a Evitar

- **NO** usar Intersection Observer directamente - usar Framer Motion `whileInView`
- **NO** crear `tailwind.config.js` - Tailwind v4 se configura diferente
- **NO** usar `<img>` directamente - siempre usar `OptimizedImage`
- **NO** olvidar el atributo `viewport={{ once: true }}` en animaciones de Framer Motion (para evitar re-animaciones)
- **NO** asumir TypeScript - este proyecto usa JavaScript puro (.jsx)
- **NO** usar `<a href>` para navegación interna - usar `<Link to>` de react-router-dom

## 🌐 Hosting en Netlify

### Configuración de Despliegue

- **Plataforma**: Netlify (CDN global)
- **Build command**: `npm run build`
- **Publish directory**: `dist`
- **Archivo de configuración**: `netlify.toml` en la raíz del proyecto

### Archivos de Netlify

- **`netlify.toml`**: Configuración principal (build, headers de seguridad, caché, redirects)
- **`public/_redirects`**: Regla SPA para React Router (fallback a `index.html`)
- **`public/_headers`**: Headers HTTP personalizados para seguridad y caché

### Headers de Seguridad Configurados

- `X-Frame-Options: DENY` - Prevenir clickjacking
- `X-Content-Type-Options: nosniff` - Prevenir MIME sniffing
- `X-XSS-Protection: 1; mode=block` - Protección XSS
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy` - Restricción de APIs del navegador
- `Content-Security-Policy` - Política de seguridad de contenido

### Caché Optimizado

- Assets estáticos (`/assets/*`): Cache inmutable (1 año) - Vite genera hashes en nombres
- Imágenes (`/img/*`): Cache de 30 días con revalidación
- HTML: Sin caché (siempre fresco)

### Reglas Importantes

- **NO** modificar `_redirects` sin entender las implicaciones en React Router
- **NO** olvidar actualizar `sitemap.xml` al agregar nuevas rutas
- Al agregar una nueva página, verificar que el `netlify.toml` no bloquee la ruta

## 📁 Archivos de Documentación

Este proyecto mantiene documentación técnica en la raíz:

- **ANIMACIONES_FRAMER_MOTION.md**: Catálogo completo de animaciones implementadas
- **ANIMACIONES.md**: Guía de navegación y sistema de scroll
- **OPTIMIZACION_IMAGENES.md**: Estrategias de optimización de imágenes

Al modificar patrones de animación o imágenes, actualizar la documentación correspondiente.
