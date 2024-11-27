"use client";
import React, { useState } from "react";

const ModalInvernadero = ({ onClose, onSubmit }) => {
  const [nombre, setNombre] = useState("");
  const [usuario, setUsuario] = useState("");
  const [usuarioError, setUsuarioError] = useState(""); // Estado para el mensaje de error

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!usuarioError && nombre && usuario) {
      onSubmit({ nombre, Usuario: usuario });
    }
  };

  const validateUsuario = async () => {
    if (!usuario) {
      setUsuarioError("El campo de usuario es obligatorio.");
      return;
    }

    try {
      const res = await fetch(`/api/users/${usuario}`);
      if (!res.ok) {
        setUsuarioError("El usuario no existe.");
      } else {
        setUsuarioError(""); // Limpia el error si el usuario existe
      }
    } catch (error) {
      console.error("Error al validar el usuario:", error);
      setUsuarioError("Hubo un problema al validar el usuario.");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-75">
      <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold text-gray-800 mb-4">
          Añadir nuevo invernadero
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="nombre"
              className="block text-sm font-medium text-gray-700"
            >
              Nombre del invernadero
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500"
              placeholder="Escribe el nombre"
              required
            />
          </div>
          <div>
            <label
              htmlFor="usuario"
              className="block text-sm font-medium text-gray-700"
            >
              Usuario
            </label>
            <input
              type="text"
              id="usuario"
              name="usuario"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              onBlur={validateUsuario} // Validar al perder el foco
              className={`mt-1 block w-full border ${
                usuarioError ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm py-2 px-3 focus:outline-none ${
                usuarioError
                  ? "focus:ring-red-500 focus:border-red-500"
                  : "focus:ring-green-500 focus:border-green-500"
              }`}
              placeholder="Escribe el nombre del usuario"
              required
            />
            {usuarioError && (
              <p className="text-red-500 text-sm mt-1">{usuarioError}</p>
            )}
          </div>
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
              disabled={!!usuarioError} // Deshabilitar si hay un error
            >
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalInvernadero;
