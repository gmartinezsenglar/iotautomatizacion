"use client";

import { login } from '@/actions';
import { useFormState } from 'react-dom';
import Image from 'next/image';

const LoginForm = () => {
  const [state, formAction] = useFormState(login, undefined);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="space-y-4 transform -translate-y-12"> 
        <Image
          src="/images/logo2.png"
          width={250}
          height={250}
          alt="Logo"
          className="mx-auto" 
        />
        <form action={formAction} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Correo</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              required 
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm" 
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Contraseña</label>
            <input 
              type="password" 
              id="password" 
              name="password" 
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
          {state?.error && <p>{state.error}</p>}
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
