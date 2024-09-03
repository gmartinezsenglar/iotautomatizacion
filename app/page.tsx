import Link from 'next/link';

export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-2">Bienvenido a la Página de Inicio (Home)</h1>
      <Link href="/login" className="text-white hover:text-blue-500">Ir a la página de inicio de sesión
      </Link>
      <section className="mt-4">
        <h2 className="text-2xl font-semibold">Sobre Nosotros</h2>
        <p>
          Sistemas Automatizados
        </p>
      </section>
    </main>
  );
};



