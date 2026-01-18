import React from "react";
import Hero from "../components/Hero";
import Plastimega from "../components/Plastimega";
import Productos from "../components/Productos";
import TopTen from "../components/TopTen";
import Servicios from "../components/Servicios";
import Testimonios from "../components/Testimonios";
import Blog from "../components/Blog";
import ContactoBanner from "../components/ContactoBanner";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div className='min-h-screen'>
      <main>
        <section id='home'>
          <Hero />
        </section>

        <section id='plastimega'>
          <Plastimega />
        </section>

        <section id='produtos'>
          <Productos />
        </section>

        <section id='topten'>
          <TopTen />
        </section>

        <section id='servicios'>
          <Servicios />
        </section>

        <section id='testimonios'>
          <Testimonios />
        </section>

        <section id='blog'>
          <Blog />
        </section>

        <section id='contacto'>
          <ContactoBanner />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
