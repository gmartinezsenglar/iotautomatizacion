import Image from 'next/image';
import logo from '@/app/components/image.png';
export default function Login() {
  return (
    <div className="min-h-screen grid grid-cols-2">
      <div className="flex items-center justify-center bg-slate-700">
        <Image
          src={logo}
          alt="Descripción de la imagen"
          width={400}
          className="ml-[-20px]"
        />
      </div>
      <div className="flex items-center justify-center bg-white p-8">
        <div className="w-full max-w-sm">
          <h2 className="text-2xl font-bold mb-6 text-center">INGRESA</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Correo</label>
              <input 
                type="email" 
                id="email" 
                required 
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm" 
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Contraseña</label>
              <input 
                type="password" 
                id="password" 
                required 
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm" 
              />
            </div>
            <button 
              type="submit" 
              className="w-full bg-emerald-600 text-white py-2 px-4 rounded-md hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
            >
              INICIAR SESION
            </button>
          </form>
        </div>
      </div>

      </div>
  );
}
