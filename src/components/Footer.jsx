import React from "react";

const Footer = () => {
  return (
    <footer className='bg-blue-900 text-white py-4'>
      <div className='max-w-7xl mx-auto px-8'>
        {/* Logo fuera del grid */}
        <img
          src='/img/iconos/logo plastimega blanco -03.png'
          alt='Plastimega Logo'
          className='h-40 mb-2'
        />

        {/* Grid de 3 columnas x 2 filas */}
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-x-12 gap-y-5'>
          {/* FILA 1 - Columna 1: Dirección Puebla */}
          <div>
            <h3 className='font-semibold mb-2'>Dirección Sucursal Puebla :</h3>
            <p className='text-sm leading-relaxed'>
              PLÁSTICOS MEXICANOS GAITÁN S.A. DE C.V.
              <br />
              Calle Esmeralda S/N Miguel Negrete, Cuapiaxtla
              <br />
              de Madero, Puebla.
            </p>
          </div>

          {/* FILA 1 - Columna 2: Dirección Veracruz */}
          <div>
            <h3 className='font-semibold mb-2'>
              Dirección Sucursal Veracruz :
            </h3>
            <p className='text-sm leading-relaxed'>
              PLÁSTICOS MEXICANOS GAITÁN S.A. DE C.V.
              <br />
              Boulevard Mtro. Gustavo Alfonso Torres # 280,
              <br />
              En Ciudad, Isla. Veracruz.
            </p>
          </div>

          {/* FILA 1 - Columna 3: Email */}
          <div>
            <h3 className='font-semibold mb-4'>Email:</h3>
            <ul className='space-y-2 text-sm'>
              <li>
                <a
                  href='mailto:rmoral@plastimega.com.mx'
                  className='hover:text-yellow-400 transition-colors'
                >
                  rmoral@plastimega.com.mx -------- Ext. 107
                </a>
              </li>
              <li>
                <a
                  href='mailto:mperez@plastimega.com.mx'
                  className='hover:text-yellow-400 transition-colors'
                >
                  mperez@plastimega.com.mx -------- Ext. 108
                </a>
              </li>
              <li>
                <a
                  href='mailto:ventaspuebla@plastimega.com.mx'
                  className='hover:text-yellow-400 transition-colors'
                >
                  ventaspuebla@plastimega.com.mx . Ext. 113
                </a>
              </li>
            </ul>
          </div>

          {/* FILA 2 - Columna 1: Teléfonos */}
          <div>
            <h3 className='font-semibold mb-2'>Teléfonos:</h3>
            <p className='text-sm'>
              <a
                href='tel:+5212494260904'
                className='hover:text-yellow-400 transition-colors'
              >
                (+52 1)249 426 09 04
              </a>
              {" // "}
              <a
                href='tel:+5212494260747'
                className='hover:text-yellow-400 transition-colors'
              >
                (+52 1)249 426 07 47
              </a>
            </p>
          </div>

          {/* FILA 2 - Columna 2: Website */}
          <div>
            <a
              href='http://plastimega.mx/'
              target='_blank'
              rel='noopener noreferrer'
              className='text-sm hover:text-yellow-400 transition-colors'
            >
              http://plastimega.mx/
            </a>
          </div>

          {/* FILA 2 - Columna 3: Redes Sociales */}
          <div className='flex space-x-4'>
            <a
              href='https://www.facebook.com/plastimega.oficial'
              target='_blank'
              rel='noopener noreferrer'
              className='w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-blue-900 transition-colors'
              aria-label='Facebook'
            >
              <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 24 24'>
                <path d='M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' />
              </svg>
            </a>
            <a
              href='https://www.instagram.com/plastimega.cuapiaxtla.oficial/'
              target='_blank'
              rel='noopener noreferrer'
              className='w-12 h-12 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity'
              style={{
                background:
                  "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
              }}
              aria-label='Instagram'
            >
              <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 24 24'>
                <path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' />
              </svg>
            </a>
            <a
              href='https://www.tiktok.com/@plastimegaoficial'
              target='_blank'
              rel='noopener noreferrer'
              className='w-12 h-12 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors'
              aria-label='TikTok'
            >
              <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 24 24'>
                <path d='M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z' />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
