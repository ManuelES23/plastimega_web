import React from "react";
import Hero from "./components/Hero";
import Plastimega from "./components/Plastimega";
import Productos from "./components/Productos";
import TopTen from "./components/TopTen";
import Servicios from "./components/Servicios";
import Testimonios from "./components/Testimonios";
import Blog from "./components/Blog";
import ContactoBanner from "./components/ContactoBanner";
import Footer from "./components/Footer";

function App() {
  return (
    <div className='min-h-screen'>
      <main>
        <section id='home'>
          <Hero />
        </section>

        <Plastimega />

        <Productos />

        <TopTen />

        <Servicios />

        <Testimonios />

        <Blog />

        <ContactoBanner />
      </main>

      <Footer />
    </div>
  );
}

export default App;
