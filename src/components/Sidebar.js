"use client"; // Asegúrate de colocar esta línea al inicio del archivo

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
      <div className="hidden lg:flex w-64 bg-gray-800 border-2 border-blue-400 text-white rounded-lg shadow-md p-4 h-auto">
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
      {/*modo movil */}
      <div className="lg:hidden">
        <button
          onClick={toggleSidebar}
          className="p-2 bg-gray-800 border-2 border-blue-400 text-white"
        >
          {isSidebarOpen ? (
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>

        {isSidebarOpen && (
          <div
            className="absolute top-0 left-0 bg-gray-800 border-2 border-blue-400 text-white w-64 p-4 shadow-md rounded-lg h-auto z-50"
            onClick={closeSidebar}
          >
            <div className="flex flex-col" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={closeSidebar}
                className="text-white text-xl absolute top-4 right-4"
              >
                &times;
              </button>

              <h2 className="text-lg font-semibold mb-4">Opciones</h2>
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
