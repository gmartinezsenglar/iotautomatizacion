"use client";
import React, { useState } from "react";
import DatePicker from "react-datepicker"; // Importar DatePicker
import "react-datepicker/dist/react-datepicker.css"; // Importar estilos de DatePicker
import Estadisticas from "@/components/Estadisticas"; // Asegúrate de que la ruta sea correcta

const sensorLabels = {
  temperatura: "Temperatura",
  eco2: "CO2 (ppm)",
  humedad: "Humedad (%)",
  tierra: "Humedad del Suelo (%)",
  luminosidad: "Luminosidad (lux)",
};

const DatosDia = () => {
  const [selectedSensor, setSelectedSensor] = useState("temperatura");
  const [selectedDate, setSelectedDate] = useState(new Date()); // Estado para la fecha seleccionada
  const sensorLabel = sensorLabels[selectedSensor];

  return (
    <main className="container mx-auto mt-8 px-4">
      {/* Barra de navegación estilizada */}
      <nav className="shadow-md rounded-lg mb-8 bg-white">
        <ul className="flex flex-wrap justify-center md:justify-around space-y-2 md:space-y-0 py-4">
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
              href="#"
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

      {/* Contenedor principal de la tabla y panel de información */}
      <h1 className="text-2xl font-bold mb-4 text-center">DATOS DEL DIA</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Panel de selección de sensor y fecha */}
        <div className="mb-4 md:col-span-2 bg-white shadow-lg rounded-lg p-4">
          <div className="flex justify-between items-center mb-4">
            {/* Dropdown de selección de sensor */}
            <div className="flex flex-col w-1/2">
              <label htmlFor="sensor" className="text-lg font-bold mb-2">
                Tipo de Sensor:
              </label>
              <select
                id="sensor"
                value={selectedSensor}
                onChange={(e) => setSelectedSensor(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="temperatura">Sensor de Temperatura</option>
                <option value="eco2">Sensor de CO2</option>
                <option value="humedad">Sensor de Humedad</option>
                <option value="tierra">Sensor de Humedad del Suelo</option>
                <option value="luminosidad">Sensor de Luminosidad</option>
              </select>
            </div>

            {/* Selector de fecha */}
            <div className="flex flex-col w-1/2 ml-4">
              <label className="block text-lg font-bold mb-2" htmlFor="fecha">
                Selecciona la Fecha:
              </label>
              <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)} 
                dateFormat="yyyy/MM/dd"
                maxDate={new Date()}
                className="border border-gray-300 px-4 py-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <h2 className="text-xl font-bold mb-4">
            Datos del Día - {sensorLabel}
          </h2>
          <table className="border-collapse w-full">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2 text-left">HORA</th>
                <th className="border border-gray-300 px-4 py-2 text-left">{sensorLabel}</th>
              </tr>
            </thead>
            <tbody>
              {/* Aquí no hay datos que mostrar, la tabla está vacía */}
            </tbody>
          </table>
        </div>

        {/* Componente de Estadísticas a la derecha */}
          <Estadisticas />
      </div>
    </main>
  );
};

export default DatosDia;
