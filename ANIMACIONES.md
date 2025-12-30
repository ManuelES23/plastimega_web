# Animaciones y Navegación - Plastimega Web

## ✨ Características Implementadas

### 1. **Animaciones de Entrada**

Todas las secciones principales ahora tienen animaciones suaves de entrada usando Intersection Observer API:

- **Plastimega**: Fade in + Translate Y
- **Productos**: Fade in + Translate Y
- **TopTen**: Fade in + Translate Y
- **Servicios**: Fade in + Translate Y
- **Testimonios**: Fade in + Translate Y
- **Blog**: Fade in + Translate Y
- **ContactoBanner**: Fade in + Scale

### 2. **Navegación Ligada**

El navbar está completamente ligado a las secciones con:

- ✅ Scroll suave entre secciones
- ✅ Enlaces funcionales en desktop y móvil
- ✅ Cierre automático del menú móvil al hacer clic

### 3. **Hook Personalizado**

`useScrollAnimation.js` - Hook reutilizable para animaciones de scroll:

```javascript
const [ref, isVisible] = useScrollAnimation();
```

## 🎯 Secciones con IDs

- `#home` - Hero principal
- `#plastimega` - Información de la empresa
- `#produtos` - Catálogo de productos
- `#topten` - Top 10 productos
- `#servicios` - Servicios ofrecidos
- `#testimonios` - Testimoniales de clientes
- `#blog` - Artículos del blog
- `#contacto` - Banner de contacto

## 🚀 Cómo Funciona

### Scroll Suave

El archivo `index.css` incluye:

```css
html {
  scroll-behavior: smooth;
}
```

### Animaciones

Cada sección detecta cuando entra en el viewport y activa su animación una sola vez:

```jsx
const [ref, isVisible] = useScrollAnimation();

<section
  ref={ref}
  className={`transition-all duration-1000 ${
    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
  }`}
>
```

## 📱 Responsive

- Las animaciones funcionan en todas las resoluciones
- El navbar móvil se cierra automáticamente al seleccionar una opción
- Optimizado para 1920x1080 y 1366x768

## 🎨 Personalización

### Velocidad de Animación

Modificar `duration-1000` en cada componente:

- `duration-500` - Más rápido
- `duration-1500` - Más lento

### Umbral de Detección

En `useScrollAnimation.js`, modificar `threshold`:

```javascript
const [ref, isVisible] = useScrollAnimation(0.1); // 10% visible
```

### Tipo de Animación

Cambiar las clases de Tailwind:

- `translate-x-20` - Desde el lado
- `scale-95` - Efecto de escala
- `rotate-3` - Rotación

## 🔧 Archivos Modificados

1. `src/hooks/useScrollAnimation.js` - ✅ Creado
2. `src/App.jsx` - ✅ IDs agregados
3. `src/index.css` - ✅ Scroll suave
4. `src/components/Plastimega.jsx` - ✅ Animaciones
5. `src/components/Productos.jsx` - ✅ Animaciones
6. `src/components/TopTen.jsx` - ✅ Animaciones
7. `src/components/Servicios.jsx` - ✅ Animaciones
8. `src/components/Testimonios.jsx` - ✅ Animaciones
9. `src/components/Blog.jsx` - ✅ Animaciones
10. `src/components/ContactoBanner.jsx` - ✅ Animaciones

## 💡 Tips

- Las animaciones solo se ejecutan una vez por sección
- El scroll suave funciona con cualquier navegador moderno
- Las transiciones usan hardware acceleration (GPU)
- Optimizado para rendimiento con Intersection Observer
