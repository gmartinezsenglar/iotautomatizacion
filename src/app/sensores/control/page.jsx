import { getSession } from "@/actions"; // Importa la función para obtener la sesión del usuario
import { redirect } from "next/navigation"; // Importa la función para redirigir a otra página

// Componente principal de la página de control
export default async function control() {
  const session = await getSession(); // Obtiene la sesión actual del usuario

  // Verifica si el usuario está autenticado
  if (!session.isLoggedIn) {
    redirect("/login"); // Redirige a la página de inicio de sesión si no está autenticado
  }

  return (
    <main className="container mx-auto mt-8"> {/* Contenedor principal */}
      
      {/* Barra de navegación estilizada */}
      <nav className="shadow-md rounded-lg mb-8"> 
        <ul className="flex justify-around"> {/* Lista horizontal de enlaces */}
          <li>
            <a
              href="./monitoreo"
              className="relative inline-block px-6 py-3 text-white bg-gradient-to-r from-green-400 to-green-600 rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:scale-105"
              style={{
                backgroundImage: "linear-gradient(to right, #3cb371, #2e8b57)", // Estilo de fondo para el botón
              }}
            >
              <span className="absolute top-0 left-0 w-full h-full rounded-lg bg-green-700 opacity-25" />
              <span className="relative">MONITOREO</span> {/* Texto del botón */}
            </a>
          </li>
          {/* Más botones de navegación con estilos similares */}
          <li>
            <a
              href="./monitoreo"
              className="relative inline-block px-6 py-3 text-white bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:scale-105"
              style={{
                backgroundImage: "linear-gradient(to right, #4682b4, #1e90ff)", // Estilo de fondo
              }}
            >
              <span className="absolute top-0 left-0 w-full h-full rounded-lg bg-blue-700 opacity-25" />
              <span className="relative">CONTROL</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="relative inline-block px-6 py-3 text-white bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:scale-105"
              style={{
                backgroundImage: "linear-gradient(to right, #f0e68c, #ffd700)", // Estilo de fondo
              }}
            >
              <span className="absolute top-0 left-0 w-full h-full rounded-lg bg-yellow-700 opacity-25" />
              <span className="relative">DATOS DEL DÍA</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="relative inline-block px-6 py-3 text-white bg-gradient-to-r from-orange-400 to-orange-600 rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:scale-105"
              style={{
                backgroundImage: "linear-gradient(to right, #ff8c00, #ff4500)", // Estilo de fondo
              }}
            >
              <span className="absolute top-0 left-0 w-full h-full rounded-lg bg-orange-700 opacity-25" />
              <span className="relative">GRÁFICOS</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="relative inline-block px-6 py-3 text-white bg-gradient-to-r from-red-400 to-red-600 rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:scale-105"
              style={{
                backgroundImage: "linear-gradient(to right, #ff6347, #b22222)", // Estilo de fondo
              }}
            >
              <span className="absolute top-0 left-0 w-full h-full rounded-lg bg-red-700 opacity-25" />
              <span className="relative">CAM LIVE</span>
            </a>
          </li>
        </ul>
      </nav>

      {/* Sección de control */}
      <section className="text-center mb-8">
        <h1 className="text-2xl font-bold mb-4">CONTROL DE DISPOSITIVOS</h1> {/* Título de la sección */}

        <div className="mx-auto p-6 bg-white shadow-lg rounded-lg overflow-hidden"> {/* Contenedor del panel de control */}
          {/* Panel de control con sliders y botones */}
          <div className="flex flex-col items-center space-y-6">

            {/* Ajuste general */}
            <div className="flex items-center space-x-2">
              <span className="text-lg font-medium">AJUSTAR</span>
              <div className="w-16 h-8 bg-gray-300 rounded-full relative shadow-inner">
                <span className="absolute w-8 h-8 bg-gray-700 rounded-full left-0 top-0 transition-all duration-300" /> {/* Botón de interruptor */}
              </div>
            </div>

            {/* Control de luz/calor */}
            <div className="flex items-center space-x-4">
              <span className="text-lg">LUZ/CALOR</span>
              <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full">-</button>
              <input type="range" min="0" max="100" className="w-64 h-6 bg-gray-200 rounded-full" />
              <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full">+</button>
            </div>

            {/* Control del ventilador 1 */}
            <div className="flex items-center space-x-4">
              <span className="text-lg">VENTILADOR 1</span>
              <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full">-</button>
              <input type="range" min="0" max="100" className="w-64 h-6 bg-gray-200 rounded-full" />
              <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full">+</button>
            </div>

            {/* Control del ventilador 2 */}
            <div className="flex items-center space-x-4">
              <span className="text-lg">VENTILADOR 2</span>
              <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full">-</button>
              <input type="range" min="0" max="100" className="w-64 h-6 bg-gray-200 rounded-full" />
              <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full">+</button>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
