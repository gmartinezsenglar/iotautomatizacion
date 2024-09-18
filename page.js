import { useState } from 'react';
import Image from 'next/image';
import logo from '@/app/components/image.png';
import axios from 'axios';
import Cookies from 'js-cookie';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Llamada al endpoint de login en el backend
      const response = await axios.post('http://localhost:3000/api/login', {
        Usuario: email,
        Password: password,
      });

      if (response.data.message === 'Inicio de sesion exitoso') {
        console.log('Inicio de sesión exitoso:', response.data.user);

        const token= response.data.token;
        Cookies.set('authToken', token, { expires: 1 });
        window.location.href = '/sistemas/page.js';
        
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      setError('Ocurrió un error: ' + error.message);
    }
  };

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
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Correo</label>
              <input 
                type="email" 
                id="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm" 
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Contraseña</label>
              <input 
                type="password" 
                id="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
