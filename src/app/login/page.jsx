import {redirect} from 'next/navigation'
import { getSession } from "@/actions"
import Image from 'next/image';
import LoginForm from '@/components/loginForm'

export default async function Login() {
    const session = await getSession();
    
    if (session.isLoggedIn) {
      redirect("/");

      
    }
    return (
      <div className="min-h-screen grid grid-cols-2">
        <div className="flex items-center justify-center bg-slate-700">
          <Image
            src='/images/tuerca.png'
            alt="Descripción de la imagen"
            height={800}
            width={400}
            className="ml-[-20px]"
          />
        </div>
        <div className="flex items-center justify-center bg-white p-8">
          <div className="w-full max-w-sm">
          <LoginForm></LoginForm>
          </div>
        </div>
      </div>
    );
} 