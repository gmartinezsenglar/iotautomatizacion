import React from "react";

const Informacion = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="grid grid-cols-4 grid-rows-5 gap-4">
        <div className="col-span-4 row-span-2 bg-blue-500 text-white text-center flex items-center justify-center text-2xl font-bold">
          Sobre Nosotros
        </div>
        <div className="row-span-3 row-start-3 bg-white shadow-md rounded-lg flex flex-col items-center justify-center p-4">
          <img
            src="/images/usuario.png"
            alt="Encargado 1"
            className="w-24 h-24 rounded-full mb-4"
          />
          <h3 className="text-lg font-semibold">Gustavo Martinez</h3>
          <p className="text-gray-500">Desarrollador Web</p>
        </div>

        <div className="row-span-3 row-start-3 bg-white shadow-md rounded-lg flex flex-col items-center justify-center p-4">
          <img
            src="/images/usuario.png"
            alt="Encargado 2"
            className="w-24 h-24 rounded-full mb-4"
          />
          <h3 className="text-lg font-semibold">Nicolas Arriagada</h3>
          <p className="text-gray-500">Desarrollador Web</p>
        </div>

        <div className="row-span-3 row-start-3 bg-white shadow-md rounded-lg flex flex-col items-center justify-center p-4">
          <img
            src="/images/usuario.png"
            alt="Encargado 3"
            className="w-24 h-24 rounded-full mb-4"
          />
          <h3 className="text-lg font-semibold">Matias Araya</h3>
          <p className="text-gray-500">Desarrollador Web</p>
        </div>

        <div className="row-span-3 row-start-3 bg-white shadow-md rounded-lg flex flex-col items-center justify-center p-4">
          <img
            src = "/images/usuario.png"
            alt="Encargado 4"
            className="w-24 h-24 rounded-full mb-4"
          />
          <h3 className="text-lg font-semibold">Abdiel Molina</h3>
          <p className="text-gray-500">Desarrollador Web</p>
        </div>
      </div>
      <div className="bg-white mt-8 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-4">Nuestra Historia</h2>
        <p className="text-gray-700 text-justify">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget malesuada elit. Praesent luctus dapibus elit sit amet facilisis. Quisque ut arcu vel odio auctor rutrum. Nam ultricies massa hendrerit massa venenatis, eleifend molestie nulla imperdiet. Nam maximus augue eget magna faucibus, fringilla eleifend mauris ornare. Aenean fringilla lacus sem, eget sodales nibh ullamcorper ac. Donec quam risus, placerat nec laoreet id, feugiat sed ipsum. Cras non mi eu turpis lobortis malesuada sit amet sed magna. Vivamus quis dui felis. Pellentesque leo sem, aliquet vel turpis id, fermentum tempus nibh. Aliquam neque ante, pulvinar eu libero non, eleifend tincidunt ligula. Nullam ut pharetra risus. In hac habitasse platea dictumst.
Proin viverra nisl vel tortor vestibulum, ac porttitor leo lobortis. Cras sit amet venenatis magna, eget facilisis sapien. Fusce porttitor accumsan ante, ultricies commodo eros vestibulum ut. Aliquam blandit justo nec euismod interdum. Nunc ornare elementum justo eu accumsan. Maecenas varius nibh augue, quis tempus dui consequat vel. Nam ut dui in diam laoreet efficitur a a metus. Donec efficitur mollis erat. Nullam non semper elit. Integer non massa tempor tortor malesuada aliquet eu ut enim.
        </p>
      </div>
    </div>
  );
};

export default Informacion;
