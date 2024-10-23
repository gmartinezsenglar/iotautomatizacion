"use client";

import { useState } from "react";
import { mutate } from "swr";

const ControlTable = () => {
  const [luz, setLight] = useState(50);
  const [fan1, setFan1] = useState(50);
  const [fan2, setFan2] = useState(50);

  const sendDataToAPI = async (device, value) => {
    try {
      const response = await fetch('/api/monitoreo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ device, value }),
      });

      if (response.ok) {
        mutate('/api/monitoreo');
      } else {
        throw new Error('Error al enviar datos a la API');
      }
    } catch (error) {
      console.error('Error enviando datos a la API:', error);
    }
  };

  // Manejar cambios
  const handleLightChange = (e) => {
    const newValue = parseInt(e.target.value);
    setLight(newValue);
    sendDataToAPI('luz', newValue);
  };

  const handleFan1Change = (e) => {
    const newValue = parseInt(e.target.value);
    setFan1(newValue);
    sendDataToAPI('fan1', newValue);
  };

  const handleFan2Change = (e) => {
    const newValue = parseInt(e.target.value);
    setFan2(newValue);
    sendDataToAPI('fan2', newValue);
  };

  // Cambiar el valor
  const increase = (setter, value) => {
    if (value < 100) setter(value + 10);
  };
  const decrease = (setter, value) => {
    if (value > 0) setter(value - 10);
  };

  return (
    <main className="container mx-auto mt-8 px-4">
      {/* Barra de navegación estilizada */}
      <nav className="shadow-md rounded-lg mb-8">
        <ul className="flex flex-wrap justify-center md:justify-around space-y-2 md:space-y-0">
          <li className="w-full md:w-auto">
            <a
              href="./monitoreo"
              className="relative inline-block w-full md:w-auto px-6 py-3 text-white bg-gradient-to-r from-green-400 to-green-600 rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:scale-105 text-center"
            >
              <span className="absolute top-0 left-0 w-full h-full rounded-lg bg-green-700 opacity-25" />
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

        {/* Panel de control */}
        <div className="mx-auto p-6 bg-white shadow-lg rounded-lg overflow-auto max-h-96">
          <div className="flex flex-col items-center space-y-6">
            {/* Control de luz/calor */}
            <div className="flex items-center justify-center space-x-4">
              <span className="text-lg">LUZ</span>
              <button
                onClick={() => decrease(setLight, luz)}
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full"
              >
                -
              </button>
              <input
                aria-label="Luz"
                type="range"
                min="0"
                max="100"
                value={luz}
                onChange={handleLightChange}
                className="w-64 h-6 bg-gray-200 rounded-full"
              />
              <button
                onClick={() => increase(setLight, luz)}
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full"
              >
                +
              </button>
            </div>

            {/* Control del ventilador 1 */}
            <div className="flex items-center justify-center space-x-4">
              <span className="text-lg">VENTILADOR 1</span>
              <button
                onClick={() => decrease(setFan1, fan1)}
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full"
              >
                -
              </button>
              <input
                aria-label="Ventilador 1"
                type="range"
                min="0"
                max="100"
                value={fan1}
                onChange={handleFan1Change}
                className="w-64 h-6 bg-gray-200 rounded-full"
              />
              <button
                onClick={() => increase(setFan1, fan1)}
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full"
              >
                +
              </button>
            </div>

            {/* Control del ventilador 2 */}
            <div className="flex items-center justify-center space-x-4">
              <span className="text-lg">VENTILADOR 2</span>
              <button
                onClick={() => decrease(setFan2, fan2)}
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full"
              >
                -
              </button>
              <input
                aria-label="Ventilador 2"
                type="range"
                min="0"
                max="100"
                value={fan2}
                onChange={handleFan2Change}
                className="w-64 h-6 bg-gray-200 rounded-full"
              />
              <button
                onClick={() => increase(setFan2, fan2)}
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full"
              >
                +
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ControlTable;