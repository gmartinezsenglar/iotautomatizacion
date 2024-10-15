import React from "react";

const Estadisticas = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4">
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="promedio">
          PROMEDIO
        </label>
        <input
          id="promedio"
          type="text"
          className="border border-gray-300 px-2 py-1 w-full rounded-lg shadow-sm"
          readOnly
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="maximo">
          MÁXIMO
        </label>
        <input
          id="maximo"
          type="text"
          className="border border-gray-300 px-2 py-1 w-full rounded-lg shadow-sm"
          readOnly
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="minimo">
          MÍNIMO
        </label>
        <input
          id="minimo"
          type="text"
          className="border border-gray-300 px-2 py-1 w-full rounded-lg shadow-sm"
          readOnly
        />
      </div>
    </div>
  );
};

export default Estadisticas;
