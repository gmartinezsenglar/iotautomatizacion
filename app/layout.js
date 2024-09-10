// app/layout.js
import Footer from "../app/components/footer";
import Header from "../app/components/header";
import "../app/styles/globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
