// src/app/components/UserTable.js
import React from "react";

const users = [
  { id: 1, name: "John Doe", username: "john.doe", role: "Usuario" },
  { id: 2, name: "Jane Smith", username: "jane.smith", role: "Administrador" },
  { id: 3, name: "Mike Johnson", username: "mike.johnson", role: "Usuario" },
];

const UserTable = () => {
  return (
    <div className="p-6 bg-white shadow-md rounded-md">
      {/* Encabezado y botón para agregar usuario */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold hidden md:block">Usuarios</h1>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 flex items-center">
          <img src="/images/create.png" alt="Agregar" className="w-5 h-5" />
        </button>
      </div>
      {/* Tabla */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="border px-4 py-2 text-left hidden sm:table-cell">
                Avatar
              </th>
              <th className="border px-4 py-2 text-left">Nombre</th>
              <th className="border px-4 py-2 text-left">Usuario</th>
              <th className="border px-4 py-2 text-left hidden sm:table-cell">
                Rol
              </th>
              <th className="border px-4 py-2 text-left">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr
                key={user.id}
                className="border-b border-gray-200 even:bg-slate-50 text-sm"
              >
                <td className="border px-4 py-2 hidden sm:table-cell">
                  <img
                    src="/images/usuario.png"
                    alt="avatar"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                </td>
                <td className="border px-4 py-2">{user.name}</td>
                <td className="border px-4 py-2">{user.username}</td>{" "}
                {/* Username siempre visible */}
                <td className="border px-4 py-2 hidden sm:table-cell">
                  {user.role}
                </td>
                <td className="border px-4 py-2 flex space-x-2">
                  <img
                    src="/images/informacion.png"
                    alt="Ver"
                    className="w-6 h-6 cursor-pointer hover:opacity-75"
                    title="Ver"
                  />
                  <img
                    src="/images/editar.png"
                    alt="Editar"
                    className="w-6 h-6 cursor-pointer hover:opacity-75"
                    title="Editar"
                  />
                  <img
                    src="/images/basura.png"
                    alt="Eliminar"
                    className="w-6 h-6 cursor-pointer hover:opacity-75"
                    title="Eliminar"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserTable;
