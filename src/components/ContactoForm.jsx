import React, { useState } from "react";

const ContactoForm = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    empresa: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    console.log("Formulario enviado:", formData);
  };

  return (
    <section
      id='contacto'
      className='relative min-h-screen w-full overflow-hidden bg-gray-100'
    >
      {/* Contenedor principal */}
      <div className='relative z-10 min-h-screen flex items-center justify-center px-4 md:px-8 lg:px-16 xl:px-24 py-12'>
        <div className='max-w-4xl mx-auto w-full'>
          {/* Título */}
          <div className='text-center mb-12'>
            <h2 className='text-4xl lg:text-5xl font-bold text-gray-800 mb-4'>
              Contáctanos
            </h2>
            <p className='text-gray-600 text-lg'>
              Estamos aquí para ayudarte. Completa el formulario y nos pondremos
              en contacto contigo.
            </p>
          </div>

          {/* Formulario */}
          <form
            onSubmit={handleSubmit}
            className='bg-white rounded-lg shadow-lg p-8 md:p-12'
          >
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-6'>
              {/* Nombre */}
              <div>
                <label
                  htmlFor='nombre'
                  className='block text-gray-700 font-bold mb-2'
                >
                  Nombre *
                </label>
                <input
                  type='text'
                  id='nombre'
                  name='nombre'
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900'
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor='email'
                  className='block text-gray-700 font-bold mb-2'
                >
                  Email *
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900'
                />
              </div>

              {/* Teléfono */}
              <div>
                <label
                  htmlFor='telefono'
                  className='block text-gray-700 font-bold mb-2'
                >
                  Teléfono
                </label>
                <input
                  type='tel'
                  id='telefono'
                  name='telefono'
                  value={formData.telefono}
                  onChange={handleChange}
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900'
                />
              </div>

              {/* Empresa */}
              <div>
                <label
                  htmlFor='empresa'
                  className='block text-gray-700 font-bold mb-2'
                >
                  Empresa
                </label>
                <input
                  type='text'
                  id='empresa'
                  name='empresa'
                  value={formData.empresa}
                  onChange={handleChange}
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900'
                />
              </div>
            </div>

            {/* Mensaje */}
            <div className='mb-6'>
              <label
                htmlFor='mensaje'
                className='block text-gray-700 font-bold mb-2'
              >
                Mensaje *
              </label>
              <textarea
                id='mensaje'
                name='mensaje'
                value={formData.mensaje}
                onChange={handleChange}
                required
                rows='6'
                className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900'
              ></textarea>
            </div>

            {/* Botón de envío */}
            <div className='text-center'>
              <button
                type='submit'
                className='bg-blue-900 text-yellow-400 px-12 py-4 rounded-full font-bold text-lg uppercase hover:bg-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105'
              >
                Enviar Mensaje
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactoForm;
