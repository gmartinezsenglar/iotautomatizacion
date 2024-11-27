"use client";
import React, { useEffect, useState } from "react";
import BotonEliminarInvernadero from "@/components/BotonEliminarInvernadero";
import ModalInvernadero from "@/components/ModalInvernadero";

const Invernaderos = () => {
  const [invernaderos, setInvernaderos] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchInvernaderos = async () => {
      try {
        const res = await fetch("/api/invernaderos");
        if (res.ok) {
          const data = await res.json();
          setInvernaderos(data);
        } else {
          console.error("Error al obtener los invernaderos");
        }
      } catch (error) {
        console.error("Error en la solicitud:", error);
      }
    };

    fetchInvernaderos();
  }, []);

  const handleAddInvernadero = async (nuevoInvernadero) => {
    try {
      const res = await fetch("/api/invernaderos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(nuevoInvernadero),
      });

      if (res.ok) {
        const addedInvernadero = await res.json();
        setInvernaderos((prev) => [...prev, addedInvernadero]);
        setIsModalOpen(false);
      } else {
        console.error("Error al añadir el invernadero");
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
    }
  };

  const handleDeleteInvernadero = (id) => {
    setInvernaderos((prev) => prev.filter((inv) => inv.id_invernadero !== id));
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-4 bg-blue-500 text-white text-center flex items-center justify-center text-2xl font-bold">
          Invernaderos Disponibles
        </div>
        {invernaderos.length > 0 ? (
          invernaderos.map((invernadero) => (
            <div
              key={invernadero.id_invernadero}
              onClick={() => (window.location.href = "/sensores/monitoreo")}
              className="bg-white shadow-md rounded-lg flex flex-col items-center justify-center p-4"
            >
              <img
                src="/images/greenhouse.png"
                alt={`Invernadero ${invernadero.nombre}`}
                className="w-24 h-24 rounded-full mb-4"
              />
              <h3 className="text-lg font-semibold">
                Nombre de Invernadero: {invernadero.nombre}
              </h3>
              <h3 className="text-lg font-semibold">
                Usuario: {invernadero.Usuario}
              </h3>
              <div>
                <BotonEliminarInvernadero
                  id_invernadero={invernadero.id_invernadero}
                  onDelete={handleDeleteInvernadero}
                />
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-4 text-center">
            No hay invernaderos disponibles.
          </div>
        )}
      </div>
      <div className="mt-8 flex justify-center">
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
        >
          Añadir invernadero
        </button>
      </div>
      {isModalOpen && (
        <ModalInvernadero
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleAddInvernadero}
        />
      )}
    </div>
  );
};

export default Invernaderos;
