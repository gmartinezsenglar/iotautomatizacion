"use client"; 

import Formulary from '../components/Formulary.js'; 

const formData = [
  { name: 'name', label: 'Nombre', type: 'text', placeholder: 'Ingresa tu nombre', required: true },
  { name: 'email', label: 'Correo Electrónico', type: 'email', placeholder: 'Ingresa tu correo', required: true },
  { name: 'message', label: 'Mensaje', type: 'textarea', placeholder: 'Ingresa tu mensaje', required: true },
];

export default function Home() {
  const handleSubmit = (values) => {
    console.log('Valores enviados:', values);
  };

  return (
    <main className="container mx-auto mt-8 px-4">
      <div className="bg-gradient-to-r from-blue-400 to-indigo-500 text-white p-8 rounded-lg shadow-lg mb-12">
        <h1 className="text-center text-5xl font-bold mb-4">
          Formulario de Contacto
        </h1>
        <p className="text-center text-lg mb-4">
          Envíanos un correo con la información que deseas saber, tu inquietud o problemas que tengas.
        </p>
        <div className="text-center">
          <p>Temuco, Chile (CL)</p>
          <p><a href="mailto:iot@gmail.com" className="underline">iot@gmail.com</a></p>
          <p><a href="tel:+56958769432" className="underline">+569-58769432</a></p>
        </div>
      </div>

      <div className="max-w-lg mx-auto">
        <Formulary formData={formData} onSubmit={handleSubmit} />
      </div>
    </main>
  );
}
