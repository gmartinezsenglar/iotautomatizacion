"use client";
import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Registrar los componentes de Chart.js que utilizaremos
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = () => {
  // Datos de ejemplo para el gráfico de líneas
  const data = {
    labels: [
      "Ene",
      "Feb",
      "Mar",
      "Abr",
      "May",
      "Jun",
      "Jul",
      "Ago",
      "Sep",
      "Oct",
      "Nov",
      "Dic",
    ], // Ejemplo de meses
    datasets: [
      {
        label: "Temperatura (°C)",
        data: [22, 23, 25, 20, 19, 18, 21, 23, 24, 26, 27, 25], // Ejemplo de datos para el gráfico
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        tension: 0.4, // Curvatura de la línea
        fill: true, // Relleno bajo la línea
        pointRadius: 5,
        pointBackgroundColor: "rgba(75, 192, 192, 1)",
        pointBorderColor: "#fff",
        pointHoverRadius: 8,
        pointHoverBackgroundColor: "#ff6384",
        pointHoverBorderColor: "rgba(220,220,220,1)",
      },
    ],
  };

  // Opciones de estilo para el gráfico
  const options = {
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
        text: "Gráfico de Temperatura Mensual",
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
          text: "Temperatura (°C)",
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
    <div className="bg-gray-100 border-2 border-gray-300 shadow-xl rounded-lg p-6 max-w-4xl mx-auto mt-10">
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
