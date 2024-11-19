"use client";

import Link from "next/link";
import { Component } from "react";

class Footer extends Component {
  render() {
    const currentYear = new Date().getFullYear();

    return (
      <footer className="bg-blue-600 text-white shadow m-0">
        <div className="w-full p-4 md:py-8">
          <div className="flex flex-wrap items-center justify-center sm:justify-between">
            <Link
              href="/"
              className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <img src="/images/logo21.png" className="h-8" alt="Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap">
                IOT Automatizacion de Sistemas
              </span>
            </Link>
            <ul className="flex flex-wrap items-center justify-center text-center sm:justify-start sm:text-left mb-6 text-sm font-medium text-white">
              <li className="w-full md:w-auto md:me-6 mb-2 md:mb-0">
                <Link href="./contact" className="hover:underline">
                  Contacto
                </Link>
              </li>
              <li className="w-full md:w-auto md:me-6 mb-2 md:mb-0">
                <Link
                  href="../privacyPolicy/page.js"
                  className="hover:underline"
                >
                  Política de Privacidad
                </Link>
              </li>
              <li className="w-full md:w-auto">
                <Link
                  href="../app/termsConditions/page.js"
                  className="hover:underline"
                >
                  Términos y Condiciones
                </Link>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 lg:my-8" />
          <span className="block text-sm text-center text-white">
            © {currentYear}{" "}
            <Link href="/" className="hover:underline">
              IOT Sistemas Automatizados™
            </Link>
            . Todos los derechos reservados.
          </span>
        </div>
      </footer>
    );
  }
}

export default Footer;
