'use client';

import { useRouter } from 'next/navigation';

export default function Logout() {
  const router = useRouter();
  const logout = async () => {
    try {
      const respuesta = await fetch('/api/logout', {
        method: 'POST',
      });

      if (respuesta.ok) {
        if (respuesta.redirected) {
          router.push('/login');
        }
      } else {
        const errorData = await respuesta.json();
        console.error('Error al cerrar sesión:', errorData.error || respuesta.statusText);
      }
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };

  return (
    <div>
      <button 
        type="button" 
        onClick={logout}
        className="bg-gray-400 hover:bg-gray-500 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out"
      >
        Cerrar sesión
      </button>
    </div>
  );
}
