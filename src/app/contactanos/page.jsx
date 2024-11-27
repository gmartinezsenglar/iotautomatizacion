import '@/app/styles/globals.css'
import { getSession } from "@/actions";
import { redirect } from "next/navigation";

export default async function ContactPage() {
  const session = await getSession();

  if (!session.isLoggedIn) {
    redirect("/login");
  }

  return (
    <main className="container mx-auto mt-8 px-4 sm:px-6 lg:px-8">
      {/* Título con fondo celeste */}
      <div
        className="py-8 px-4 rounded-lg shadow-lg text-center"
        style={{
          background: "linear-gradient(to right, #009CCF, #60D7F9)",
          color: "#FFFFFF",
        }}
      >
        <h1 className="text-2xl sm:text-4xl font-bold tracking-wide">
          CONTÁCTANOS
        </h1>
      </div>

      {/* Formulario de contacto */}
      <div className="max-w-lg mx-auto p-6 sm:p-8 bg-gray-100 shadow-md rounded-lg mt-8">
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Escribe tu nombre"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Escribe tu correo"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Escribe tu mensaje"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-950 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Enviar
          </button>
        </form>
      </div>
      <div className="text-center mt-12">
        <h2 className="text-lg sm:text-xl font-bold text-blue-950 mb-4">
          ¡También puedes encontrarnos en nuestras redes sociales!
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          <a
            href="https://www.instagram.com/empresa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-pink-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 sm:h-10 sm:w-10"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M7.75 2h8.5C19.1 2 22 4.9 22 8.25v8.5C22 19.1 19.1 22 16.25 22h-8.5C4.9 22 2 19.1 2 16.25v-8.5C2 4.9 4.9 2 7.75 2zm10.4 2h-8.3c-2.5 0-4.2 1.7-4.2 4.2v8.3c0 2.5 1.7 4.2 4.2 4.2h8.3c2.5 0 4.2-1.7 4.2-4.2v-8.3c0-2.5-1.7-4.2-4.2-4.2zm-6.7 3.5c2.5 0 4.5 2 4.5 4.5s-2 4.5-4.5 4.5-4.5-2-4.5-4.5 2-4.5 4.5-4.5zm6 1.6c0 .5-.4 1-.9 1-.5 0-.9-.4-.9-1 0-.5.4-1 .9-1 .5 0 .9.4.9 1zm-6 1c-2 0-3.5 1.5-3.5 3.5s1.5 3.5 3.5 3.5 3.5-1.5 3.5-3.5-1.5-3.5-3.5-3.5z" />
            </svg>
          </a>
          <a
            href="https://www.facebook.com/empresa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-blue-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 sm:h-10 sm:w-10"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M9.6 8.5H8.4V10h1.2v9.1H12V10h1.7l.3-1.5H12V7.6c0-.3.2-.5.6-.5h1.1V5H12.3c-1.5 0-2.7 1-2.7 2.7v1z" />
            </svg>
          </a>
          <a
            href="https://www.twitter.com/empresa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-blue-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 sm:h-10 sm:w-10"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M22.5 5.8c-.8.3-1.6.5-2.5.6.9-.6 1.5-1.5 1.9-2.6-.8.5-1.7.8-2.6 1C18.5 4 17.3 3.5 16 3.5c-2.4 0-4.4 2-4.4 4.4 0 .3 0 .6.1.9-3.7-.2-7-2-9.2-4.7-.4.7-.6 1.4-.6 2.3 0 1.6.8 3 2 3.9-.7 0-1.5-.2-2-.5v.1c0 2.3 1.7 4.2 4 4.7-.4.1-.9.2-1.4.2-.3 0-.7 0-1-.1.7 2.2 2.7 3.7 5 3.8-1.9 1.5-4.3 2.4-6.9 2.4-.4 0-.8 0-1.2-.1 2.5 1.7 5.6 2.7 8.9 2.7 10.7 0 16.5-8.9 16.5-16.5 0-.2 0-.4 0-.6 1.1-.8 1.9-1.8 2.6-2.9z" />
            </svg>
          </a>
        </div>
      </div>
    </main>
  );
}