"use client";
import React, { useState, useEffect } from "react";
import LineChart from "@/components/GraficoLineas";
import Estadisticas from "@/components/Estadisticas"; // Componente de estadísticas
import DatePicker from "react-datepicker"; // Importar DatePicker
import "react-datepicker/dist/react-datepicker.css"; // Importar estilos de DatePicker
import { obtenerDatosSimulados, calcular_estadisticas } from "@/recibir_datos";

const sensorLabels = {
  temperatura: "Temperatura",
  eco2: "CO2 (ppm)",
  humedad: "Humedad (%)",
  tierra: "Humedad del Suelo (%)",
  luminosidad: "Luminosidad (lux)",
};

const sensorData = {
  temperatura: {
    labels: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
    datasets: [
      {
        label: "Temperatura (°C)",
        data: [22, 23, 25, 20, 19, 18, 21, 23, 24, 26, 27, 25],
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        tension: 0.4,
        fill: true,
      },
    ],
  },
  eco2: {
    labels: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
    datasets: [
      {
        label: "CO2 (ppm)",
        data: [400, 420, 450, 500, 470, 480, 460, 430, 410, 420, 430, 440],
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        tension: 0.4,
        fill: true,
      },
    ],
  },
  humedad: {
    labels: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
    datasets: [
      {
        label: "Humedad (%)",
        data: [65, 70, 75, 80, 85, 90, 95, 90, 85, 80, 75, 70],
        borderColor: "rgba(54, 162, 235, 1)",
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        tension: 0.4,
        fill: true,
      },
    ],
  },
  tierra: {
    labels: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
    datasets: [
      {
        label: "Humedad del Suelo (%)",
        data: [40, 42, 45, 47, 49, 50, 52, 54, 55, 56, 57, 58],
        borderColor: "rgba(153, 102, 255, 1)",
        backgroundColor: "rgba(153, 102, 255, 0.2)",
        tension: 0.4,
        fill: true,
      },
    ],
  },
  luminosidad: {
    labels: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
    datasets: [
      {
        label: "Luminosidad (lux)",
        data: [100, 120, 150, 200, 250, 220, 180, 160, 140, 130, 110, 100],
        borderColor: "rgba(255, 206, 86, 1)",
        backgroundColor: "rgba(255, 206, 86, 0.2)",
        tension: 0.4,
        fill: true,
      },
    ],
  },
};

const GraficosPage = () => {
  const [selectedSensor, setSelectedSensor] = useState("temperatura");
  const [selectedDate, setSelectedDate] = useState(new Date()); // Estado para la fecha seleccionada
  const [datosSimulados, setDatosSimulados] = useState([]);
  const [estadisticas, setEstadisticas] = useState({}); 

  useEffect(() => {
    const fetchData = async () => {
      const datos = await obtenerDatosSimulados();
      setDatosSimulados(datos);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const filteredData = datosSimulados.filter(dato => dato.tipo === selectedSensor);
    const stats = calcular_estadisticas(filteredData);
    setEstadisticas(stats[selectedSensor] || {}); 
  }, [datosSimulados, selectedSensor]); 

  const sensorLabel = sensorLabels[selectedSensor];

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          font: {
            size: 14,
          },
        },
      },
      title: {
        display: true,
        text: `Gráfico de ${sensorLabel} Mensual`,
        font: {
          size: 20,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: sensorLabel,
        },
      },
      x: {
        title: {
          display: true,
          text: "Meses",
        },
      },
    },
  };

  return (
    <main className="container mx-auto mt-8 px-4">
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
            href="./graficos"
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

      <h1 className="text-2xl font-bold mb-4 text-center">GRÁFICOS</h1>
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
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-5000"
              />
            </div>
          </div>

          <h2 className="text-xl font-bold mb-4">
            Gráfico - {sensorLabel}
          </h2>
          <LineChart data={sensorData[selectedSensor]} options={chartOptions} />
        </div>

        {/* Panel de estadísticas */}
        <div className="mb-4 bg-white shadow-lg rounded-lg p-4">
          <Estadisticas datos={estadisticas} />
        </div>
      </div>
    </main>
  );
};

export default GraficosPage;