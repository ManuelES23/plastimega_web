import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductosPage from "./pages/ProductosPage";
import BlogArticuloPage from "./pages/BlogArticuloPage";
import BlogArticuloPerspectivas from "./pages/BlogArticuloPerspectivas";

// Componente para hacer scroll al inicio en cada cambio de ruta
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/productos' element={<ProductosPage />} />
        <Route
          path='/blog/cajas-plastico-cadena-valor-agro'
          element={<BlogArticuloPage />}
        />
        <Route
          path='/blog/perspectivas-produccion-agricola-verano-mexico'
          element={<BlogArticuloPerspectivas />}
        />
      </Routes>
    </>
  );
}

export default App;
