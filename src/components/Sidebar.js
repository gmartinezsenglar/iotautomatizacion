"use client";

import { useState } from "react";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="relative">
      {/* Sidebar en modo desktop */}
      <div className="hidden lg:flex w-64 bg-gray-800 border-2 border-blue-400 text-white rounded-lg shadow-md p-4 max-h-screen overflow-y-auto">
        <div className="flex flex-col">
          <h2 className="text-lg font-semibold mb-4">Opciones</h2>
          <ul>
            <li className="mb-3">
              <a href="#" className="hover:bg-gray-700 p-2 rounded-md block">
                Perfil
              </a>
            </li>
            <li className="mb-3">
              <a href="#" className="hover:bg-gray-700 p-2 rounded-md block">
                Cambiar Contraseña
              </a>
            </li>
            <li className="mb-3">
              <a href="#" className="hover:bg-gray-700 p-2 rounded-md block">
                Actualizar Datos
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Sidebar en modo móvil */}
      <div className="lg:hidden">
        <button
          onClick={toggleSidebar}
          className="p-2 bg-gray-800 border-2 border-blue-400 text-white rounded-md"
        >
          {isSidebarOpen ? "Cerrar" : "Opciones"}
        </button>

        {isSidebarOpen && (
          <div
            className="absolute top-12 left-0 bg-gray-800 border-2 border-blue-400 text-white w-auto p-4 rounded-lg shadow-lg z-50"
            onClick={closeSidebar}
          >
            <div className="flex flex-col" onClick={(e) => e.stopPropagation()}>
              <ul>
                <li className="mb-3">
                  <a
                    href="#"
                    className="hover:bg-gray-700 p-2 rounded-md block"
                  >
                    Perfil
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    href="#"
                    className="hover:bg-gray-700 p-2 rounded-md block"
                  >
                    Cambiar Contraseña
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    href="#"
                    className="hover:bg-gray-700 p-2 rounded-md block"
                  >
                    Actualizar Datos
                  </a>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
