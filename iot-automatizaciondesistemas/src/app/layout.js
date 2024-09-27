//import Navbar from './components/navbar'
import './styles/globals.css'
import Footer from "../components/Footer";
import Header from "../components/Header";
import Head from './head';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head />
        <body>
          <div className="layout-container">
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        </body>
    </html>
  )
}