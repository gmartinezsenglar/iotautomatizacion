"use client";

import React, { useState } from "react";
import Modal from "./Modal";

const BotonEliminarInvernadero = ({ id_invernadero, onDelete }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDelete = async () => {
    try {
      const res = await fetch("/api/invernaderos", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: id_invernadero }),
      });

      if (res.ok) {
        onDelete(id_invernadero); // Llamamos a la función para actualizar la lista
        setIsModalOpen(false);
      } else {
        console.error("Error al eliminar el invernadero");
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-red-500 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-md shadow-md transition-all duration-200"
      >
        Eliminar Invernadero
      </button>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleDelete}
        message="¿Estás seguro de que quieres eliminar el invernadero?"
      />
    </>
  );
};

export default BotonEliminarInvernadero;
