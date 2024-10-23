import React from "react";

const Estadisticas = ({ datos }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4">
      <h3 className="text-gray-700 font-bold mb-2">ESTADÍSTICAS</h3>
      <div>
        <label className="block text-gray-700 font-bold mb-2" htmlFor="promedio">
          PROMEDIO
        </label>
        <input
          id="promedio"
          type="text"
          className="border border-gray-300 px-2 py-1 w-full rounded-lg shadow-sm"
          value={datos.promedio ? datos.promedio.toFixed(2) : "N/A"}
          readOnly
        />
      </div>

      <div>
        <label className="block text-gray-700 font-bold mb-2" htmlFor="maximo">
          MÁXIMO
        </label>
        <input
          id="maximo"
          type="text"
          className="border border-gray-300 px-2 py-1 w-full rounded-lg shadow-sm"
          value={datos.maximo !== undefined ? datos.maximo : "N/A"}
          readOnly
        />
      </div>

      <div>
        <label className="block text-gray-700 font-bold mb-2" htmlFor="minimo">
          MÍNIMO
        </label>
        <input
          id="minimo"
          type="text"
          className="border border-gray-300 px-2 py-1 w-full rounded-lg shadow-sm"
          value={datos.minimo !== undefined ? datos.minimo : "N/A"}
          readOnly
        />
      </div>
    </div>
  );
};

export default Estadisticas;
