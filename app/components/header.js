import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gray-400 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="header-text">
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
            <Link href="/" className="header-link">
            INICIO
          </Link>
          <Link href="/informacion" className="header-link">
            INFORMACIÓN
          </Link>
          <Link href="/login" className="header-link">
            INICIA SESION
          </Link>
        </nav>
        <input
          type="text"
          placeholder="Buscar"
          className="px-4 py-2 rounded-full focus:outline-none text-black"
        />
      </div>
    </header>
  );
}

