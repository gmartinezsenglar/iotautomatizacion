export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Automatización de Sistemas. Todos
          los derechos reservados.
        </p>
        <div className="links">
          <a href="#" className="header-link">
            Términos y Condiciones
          </a>
          <a href="#" className="header-link">
            Política de Privacidad
          </a>
          <a href="#" className="header-link">
            Contacto
          </a>
        </div>
      </div>
    </footer>
  );
}
