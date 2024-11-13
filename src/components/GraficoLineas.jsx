// src/components/GraficoLineas.jsx
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

const LineChart = ({ data, options }) => {
  return (
    <div className="bg-gray-100 border-2 border-gray-300 shadow-xl rounded-lg p-6 max-w-4xl mx-auto mt-10">
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
