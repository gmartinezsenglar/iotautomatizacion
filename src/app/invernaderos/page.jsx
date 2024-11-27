"use client";
import React, { useEffect, useState } from "react";
import BotonEliminar from "@/components/BotonEliminarInvernadero";

const Invernaderos = () => {
  const [invernaderos, setInvernaderos] = useState([]);

  useEffect(() => {
    const fetchInvernaderos = async () => {
      try {
        const res = await fetch('/api/invernaderos');
        if (res.ok) {
          const data = await res.json();
          setInvernaderos(data);
        } else {
          console.error('Error al obtener los invernaderos');
        }
      } catch (error) {
        console.error('Error en la solicitud:', error);
      } 
    };

    fetchInvernaderos();
  }, []);

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="grid grid-cols-4 grid-rows-5 gap-4">
        <div className="col-span-4 row-span-2 bg-blue-500 text-white text-center flex items-center justify-center text-2xl font-bold">
          Invernaderos Disponibles
        </div>
        {invernaderos.length > 0 ? (
          invernaderos.map((invernadero) => (
            <div
              key={invernadero.id} 
              className="row-span-3 row-start-3 bg-white shadow-md rounded-lg flex flex-col items-center justify-center p-4"
            >
              <img
                src="/images/greenhouse.png"
                alt={`Invernadero ${invernadero.nombre}`}
                className="w-24 h-24 rounded-full mb-4"
              />
              <h3 className="text-lg font-semibold">Nombre de Invernadero: {invernadero.nombre}</h3>
              <h3 className = "text-lg font-semibold">Usuario: {invernadero.Usuario}</h3>
              <div>
                <BotonEliminar/>
              </div>
            </div>
          ))
        ) : (
          <div>No hay invernaderos disponibles.</div>
        )}
      </div>
    </div>
  );
};

export default Invernaderos;
