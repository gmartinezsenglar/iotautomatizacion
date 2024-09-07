//import Navbar from './components/navbar'
import './styles/globals.css'
import Header from "./components/Header";
import Head from './head';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head />
        <body classname = "mx-12 lg:mx-24">
          <Header />
          {children}
        </body>
    </html>
  );
}
