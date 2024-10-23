"use client";
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

const SensorTable = () => {
  const { data: data, error, mutate, isValidating } = useSWR('/api/monitoreo', fetcher, {
    refreshInterval: 5000,
  });

  const handleActualizar = () => {
    mutate();
  };

  if (error) return <div>Error al cargar los datos.</div>;
  if (!data) return <div>Cargando...</div>;

  return (
    <main className="container mx-auto mt-8 px-4">
      {/* Contenedor principal */}
      {/* Barra de navegación estilizada */}
      <nav className="shadow-md rounded-lg mb-8">
        <ul className="flex flex-wrap justify-center md:justify-around space-y-2 md:space-y-0">
          {/* Lista horizontal de enlaces */}
          <li className="w-full md:w-auto">
            <a
              href="./monitoreo"
              className="relative inline-block w-full md:w-auto px-6 py-3 text-white bg-gradient-to-r from-green-400 to-green-600 rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:scale-105 text-center"
            >
              <span className="absolute top-0 left-0 w-full h-full rounded-lg bg-green-700 opacity-25" />
              <span className="relative">MONITOREO</span>
            </a>
          </li>
          <li className="w-full md:w-auto">
            <a
              href="./control"
              className="relative inline-block w-full md:w-auto px-6 py-3 text-white bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:scale-105 text-center"
            >
              <span className="relative">CONTROL</span>
            </a>
          </li>
          <li className="w-full md:w-auto">
            <a
              href="./dia_datos"
              className="relative inline-block w-full md:w-auto px-6 py-3 text-white bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:scale-105 text-center"
            >
              <span className="relative">DATOS DEL DÍA</span>
            </a>
          </li>
          <li className="w-full md:w-auto">
            <a
              href="./graficos"
              className="relative inline-block w-full md:w-auto px-6 py-3 text-white bg-gradient-to-r from-orange-400 to-orange-600 rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:scale-105 text-center"
            >
              <span className="relative">GRÁFICOS</span>
            </a>
          </li>
          <li className="w-full md:w-auto">
            <a
              href="#"
              className="relative inline-block w-full md:w-auto px-6 py-3 text-white bg-gradient-to-r from-red-400 to-red-600 rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:scale-105 text-center"
            >
              <span className="relative">CAM LIVE</span>
            </a>
          </li>
        </ul>
      </nav>

      {/* Sección de Datos Actuales */}
      <section className="text-center mb-8">
        <h1 className="text-2xl font-bold mb-4">DATOS ACTUALES</h1>
        {/* Contenedor de la tabla */}
        <div className="mx-auto p-6 bg-white shadow-lg rounded-lg overflow-x-auto">
          {/* Tabla de datos */}
          <table className="w-full table-auto text-left border-separate border-spacing-0">
            <thead>
              <tr className="bg-cyan-600 text-white">
                {/* Cabecera de la tabla en celeste */}
                <th className="px-4 py-2 border-b border-gray-300">Parámetro</th>
                <th className="px-4 py-2 border-b border-gray-300">Valor</th>
              </tr>
            </thead>
            <tbody>
              <tr className="odd:bg-cyan-50 even:bg-white hover:bg-cyan-100 transition duration-200">
                <td className="px-4 py-3 border-b border-gray-300 text-cyan-600">
                  TEMPERATURA
                </td>
                <td className="px-4 py-3 border-b border-gray-300 text-cyan-600">
                  {data.temperatura}°C
                </td>
              </tr>
              <tr className="odd:bg-cyan-50 even:bg-white hover:bg-cyan-100 transition duration-200">
                <td className="px-4 py-3 border-b border-gray-300 text-cyan-600">
                  ECO 2
                </td>
                <td className="px-4 py-3 border-b border-gray-300 text-cyan-600">
                  {data.eco2} PPM
                </td>
              </tr>
              <tr className="odd:bg-cyan-50 even:bg-white hover:bg-cyan-100 transition duration-200">
                <td className="px-4 py-3 border-b border-gray-300 text-cyan-600">
                  HUMEDAD AIRE
                </td>
                <td className="px-4 py-3 border-b border-gray-300 text-cyan-600">
                  {data.humedadAire}%
                </td>
              </tr>
              <tr className="odd:bg-cyan-50 even:bg-white hover:bg-cyan-100 transition duration-200">
                <td className="px-4 py-3 border-b border-gray-300 text-cyan-600">
                  HUMEDAD TIERRA
                </td>
                <td className="px-4 py-3 border-b border-gray-300 text-cyan-600">
                  {data.humedadTierra}%
                </td>
              </tr>
              <tr className="odd:bg-cyan-50 even:bg-white hover:bg-cyan-100 transition duration-200">
                <td className="px-4 py-3 border-b border-gray-300 text-cyan-600">
                  LUMINOSIDAD
                </td>
                <td className="px-4 py-3 border-b border-gray-300 text-cyan-600">
                  {data.luz} Lux
                </td>
              </tr>
            </tbody>
          </table>
          <hr className="my-4 border-t border-cyan-300" />
        </div>
      </section>

      {/* Botón de actualizar datos */}
      <div className="text-center mt-8">
        <button
          onClick={handleActualizar}
          className="px-6 py-2 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition duration-300"
          disabled={isValidating} /* Deshabilitar botón mientras se actualiza */
        >
          {isValidating ? 'Actualizando...' : 'ACTUALIZAR DATOS'}
        </button>
      </div>
    </main>
  );
};

export default SensorTable;