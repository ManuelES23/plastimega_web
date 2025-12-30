# Animaciones Avanzadas con Framer Motion

## 📚 Librería Utilizada

**Framer Motion** - La librería de animaciones más potente y profesional para React.

## ✨ Características Implementadas

### 1. **Animaciones de Entrada (whileInView)**

- Detecta cuando un elemento entra al viewport
- Ejecuta animaciones suaves solo una vez (`viewport: { once: true }`)
- Soporte para umbrales personalizados (`amount: 0.3`)

### 2. **Animaciones de Interacción**

- `whileHover`: Efectos al pasar el mouse
- `whileTap`: Feedback táctil al hacer clic
- Rotaciones, escalados y movimientos suaves

### 3. **Animaciones 3D**

- `rotateX`, `rotateY`: Rotaciones en 3D
- `perspective`: Profundidad visual
- Transformaciones complejas con GPU

### 4. **Transiciones con Spring**

- Física realista con `type: "spring"`
- Control de rigidez (`stiffness`)
- Rebote natural en animaciones

### 5. **Stagger Animations**

- Animaciones escalonadas en listas
- Delays incrementales para cada elemento
- Efecto de cascada profesional

## 🎨 Tipos de Animaciones por Componente

### **Plastimega**

```jsx
- Slide lateral (x: -100 → 0)
- Fade in con desplazamiento (opacity + y)
- Línea divisoria con scale
- Tarjetas con entrada escalonada
- Botón con rotación en hover
- Imagen con rotación 3D (rotateY: 20)
```

### **Productos**

```jsx
- Título con escala (scale: 0.8 → 1)
- Línea divisoria animada (scaleX)
- Tarjetas con rotación 3D en entrada
- Hover con elevación y escala
- Rotación sutil en hover (rotate: [0, -2, 2, 0])
```

### **TopTen**

```jsx
- Slide completo desde la izquierda
- Animación de línea horizontal
- Elementos con entrada desde la izquierda (x: -50)
- Carrusel con rotación 3D (rotateY: 90)
- Transiciones animadas entre slides
- Botones de navegación con efecto hover
- Indicadores con escala en hover
```

### **ContactoBanner**

```jsx
- Zoom suave en entrada (scale: 1.1 → 1)
- Texto desde arriba (y: -50)
- Título principal con rotación 3D (rotateX: -90)
- Spring animation en texto destacado
- Botón con rotación en hover
- Efecto de rebote al hacer clic
```

## 🔧 Configuraciones Clave

### Delays Escalonados

```jsx
delay: 0.2; // Primer elemento
delay: 0.4; // Segundo elemento
delay: 0.6; // Tercer elemento
```

### Duración de Animaciones

```jsx
duration: 0.6; // Rápida
duration: 0.8; // Media
duration: 1.0; // Lenta
```

### Tipos de Easing

```jsx
ease: "easeOut"; // Suave al final
ease: "easeInOut"; // Suave en ambos extremos
type: "spring"; // Física realista
```

## 📦 Componentes Modificados

1. ✅ **Plastimega.jsx** - Animaciones laterales y 3D
2. ✅ **Productos.jsx** - Tarjetas con rotación 3D
3. ✅ **TopTen.jsx** - Carrusel 3D con transiciones
4. ✅ **Servicios.jsx** - Fade in suave
5. ✅ **Testimonios.jsx** - AnimatePresence para carrusel
6. ✅ **Blog.jsx** - Escala con fade
7. ✅ **ContactoBanner.jsx** - Zoom y spring animations

## 🎯 Efectos Avanzados Implementados

### **Rotaciones Complejas**

```jsx
rotate: [0, -2, 2, -2, 0]  // Oscilación
rotateX: -90 → 0           // Flip horizontal
rotateY: 90 → 0            // Flip vertical
```

### **Escalados Dinámicos**

```jsx
scale: 0.8 → 1             // Zoom in
scale: 1 → 1.1             // Zoom out en hover
```

### **Movimientos Multi-Eje**

```jsx
{ x: -100, opacity: 0 } → { x: 0, opacity: 1 }
{ y: 50, scale: 0.8 } → { y: 0, scale: 1 }
```

## 💡 Ventajas vs Animaciones CSS

- ✅ **JavaScript API intuitiva** - Más fácil de mantener
- ✅ **Animaciones basadas en física** - Movimientos naturales
- ✅ **Viewport detection** - Animaciones al scroll automáticas
- ✅ **Gestos táctiles** - whileTap, whileDrag
- ✅ **Animaciones 3D complejas** - Sin CSS tedioso
- ✅ **Performance optimizado** - GPU acceleration
- ✅ **Variants y orchestration** - Control total de secuencias

## 🚀 Performance

- Todas las animaciones usan `transform` y `opacity`
- GPU acceleration activada automáticamente
- `viewport: { once: true }` evita re-animaciones
- Lazy loading de animaciones al scroll
- Sin layout shifts (CLS optimizado)

## 📖 Recursos Adicionales

- [Framer Motion Docs](https://www.framer.com/motion/)
- [Examples Gallery](https://www.framer.com/motion/examples/)
- [Animation Controls](https://www.framer.com/motion/animation/)

---

**Implementado el 29 de diciembre de 2025**
