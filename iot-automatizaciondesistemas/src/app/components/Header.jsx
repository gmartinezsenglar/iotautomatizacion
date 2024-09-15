import Link from 'next/link';
import Image from 'next/image';
import '../styles/globals.css'
//import logo from './logo.png'

export default function Header() {
    return (
      <header className="bg-gray-400 text-zinc-200 py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="header-text pl-10">
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="Logo"
                width={150}
                height={48}
                className="inline-block h-12 mr-6"
              />
            </Link>
          </div>
            <nav className="space-x-8">
              <Link href="/" className="header-link transition ease-in-out hover:text-gray-600 hover:duration-300">
              INICIO
            </Link>
            <Link href="/informacion" className="header-link transition ease-in-out hover:text-gray-600 hover:duration-300">
              INFORMACIÓN
            </Link>
            <Link href="/login" className="header-link transition ease-in-out hover:text-gray-600 hover:duration-300">
              INICIA SESION
            </Link>
          </nav>
          <div className='pr-10'>
            <input
              type="text"
              placeholder="Buscar"
              className="px-4 py-2 rounded-full focus:outline-none text-zinc-800"
            />
          </div>
        </div>
      </header>
    )
}