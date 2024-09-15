import "../styles/globals.css"

export default function Footer() {
    return (
      <footer className="footer bg-gray-800 text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Automatización de Sistemas. Todos
            los derechos reservados.
          </p>
        </div>
      </footer>
    );
  }