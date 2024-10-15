"use client";
import React, { useState} from 'react';

const control = () => {
  const [luz, setLuz] = useState(50);
  const [ventilador1, setVentilador1] = useState(50);
  const [ventilador2, setVentilador2] = useState(50);

  const cambioSlider = (dispositivo, setValue) => (e) => {
    const value = Number(e.target.value); 
    setValue(value);              
    console.log(`Dispositivo: ${dispositivo}, valor: ${value}`);         
  };


  return (
    <main className="container mx-auto mt-8 px-4">
    {/* Contenedor principal */}
    {/* Barra de navegación estilizada */}
    <nav className="shadow-md rounded-lg mb-8">
      <ul className="flex flex-wrap justify-center md:justify-around space-y-2 md:space-y-0">
        {/* Lista horizontal de enlaces */}
        <li className="w-full md:w-auto">
          <a
            href="./monitoreo"
            className="relative inline-block w-full md:w-auto px-6 py-3 text-white bg-gradient-to-r from-green-400 to-green-600 rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:scale-105 text-center"
          >
            <span className="relative">MONITOREO</span>
          </a>
        </li>
        <li className="w-full md:w-auto">
          <a
            href="./control"
            className="relative inline-block w-full md:w-auto px-6 py-3 text-white bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:scale-105 text-center"
          >
            <span className="relative">CONTROL</span>
          </a>
        </li>
        <li className="w-full md:w-auto">
          <a
            href="./dia_datos"
            className="relative inline-block w-full md:w-auto px-6 py-3 text-white bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:scale-105 text-center"
          >
            <span className="relative">DATOS DEL DÍA</span>
          </a>
        </li>
        <li className="w-full md:w-auto">
          <a
            href="#"
            className="relative inline-block w-full md:w-auto px-6 py-3 text-white bg-gradient-to-r from-orange-400 to-orange-600 rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:scale-105 text-center"
          >
            <span className="relative">GRÁFICOS</span>
          </a>
        </li>
        <li className="w-full md:w-auto">
          <a
            href="#"
            className="relative inline-block w-full md:w-auto px-6 py-3 text-white bg-gradient-to-r from-red-400 to-red-600 rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:scale-105 text-center"
          >
            <span className="relative">CAM LIVE</span>
          </a>
        </li>
      </ul>
    </nav>
      {/* Sección de control */}
      <section className="text-center mb-8">
        <h1 className="text-2xl font-bold mb-4">CONTROL DE DISPOSITIVOS</h1>
        <div className="mx-auto p-6 bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="flex flex-col items-center space-y-6">
            {/* Control de luz/calor */}
            <div className="flex items-center space-x-4">
              <span className="text-lg">LUZ/CALOR</span>
              <input
                type="range"
                min="0"
                max="100"
                value={luz}
                onChange={cambioSlider('luz', setLuz)}
                className="w-64 h-6 bg-gray-200 rounded-full"
              />
            </div>

            {/* Control del ventilador 1 */}
            <div className="flex items-center space-x-4">
              <span className="text-lg">VENTILADOR 1</span>
              <input
                type="range"
                min="0"
                max="100"
                value={ventilador1}
                onChange={cambioSlider('ventilador1', setVentilador1)}
                className="w-64 h-6 bg-gray-200 rounded-full"
              />
            </div>

            {/* Control del ventilador 2 */}
            <div className="flex items-center space-x-4">
              <span className="text-lg">VENTILADOR 2</span>
              <input
                type="range"
                min="0"
                max="100"
                value={ventilador2}
                onChange={cambioSlider('ventilador2', setVentilador2)}
                className="w-64 h-6 bg-gray-200 rounded-full"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default control;
