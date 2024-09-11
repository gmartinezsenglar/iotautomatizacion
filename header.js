import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="container mx-auto flex justify-between items-center">
        <div className="header-text">
          <img
            src="/images/logo2.png"
            alt="Logo"
            className="inline-block h-12 mr-6"
          />
        </div>
        <nav className="space-x-8">
          <a href="#" className="header-link">
            INICIO
          </a>
          <Link href= "/contact">TESTTESTTEST</Link>
          <a href="#" className="header-link">
            INFORMACIÓN
          </a>
          <a href="#" className="header-link">
            CONTACTANOS
          </a>
        </nav>
        <input
          type="text"
          placeholder="Buscar"
          className="px-4 py-2 rounded-full focus:outline-none"
        />
      </div>
    </header>
  );
}
