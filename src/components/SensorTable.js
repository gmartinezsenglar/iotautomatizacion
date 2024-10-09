// components/SensorTable.js
"use client";
import { useState } from "react";

const SensorTable = () => {
  // Mock data
  const [sensorData, setSensorData] = useState({
    temperatura: 30,
    eco2: 700,
    humedadAire: 30,
    humedadTierra: 40,
    luminosidad: 600,
  });

  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md mx-auto">
      <h2 className="text-xl font-bold text-center mb-4">Datos Actuales</h2>
      <table className="min-w-full table-auto border-collapse">
        <tbody>
          <tr>
            <td className="border px-4 py-2 text-left font-medium">
              Temperatura
            </td>
            <td className="border px-4 py-2 text-center">
              {sensorData.temperatura}°C
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2 text-left font-medium">ECO 2</td>
            <td className="border px-4 py-2 text-center">
              {sensorData.eco2} PPM
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2 text-left font-medium">
              Humedad Aire
            </td>
            <td className="border px-4 py-2 text-center">
              {sensorData.humedadAire}%
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2 text-left font-medium">
              Humedad Tierra
            </td>
            <td className="border px-4 py-2 text-center">
              {sensorData.humedadTierra}%
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2 text-left font-medium">
              Luminosidad
            </td>
            <td className="border px-4 py-2 text-center">
              {sensorData.luminosidad} Lux
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SensorTable;
