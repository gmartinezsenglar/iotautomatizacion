export default function Login() {
    return (
      <main className="min-h-screen flex items-center justify-center bg-emerald-400">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-96 w-full">
          <h1 className="text-2xl font-bold text-center mb-6 text-gray-900 shadow-md">INGRESAR</h1>
          <form>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2 shadow-md">
                Correo
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="ejemplo@gmail.com"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700 font-semibold mb-2 shadow-md">
                Contraseña
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Introduce tu contraseña"
                required
              />
            </div>
            <button 
              type="submit"
              className="w-full bg-blue-500 text-white  hover:bg-blue-600 shadow-md "
            >
              INICIAR SESIÓN
            </button>
          </form>
        </div>
      </main>
    );
  }
  