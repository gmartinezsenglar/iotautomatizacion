import Card from "../components/card";

export default function Home() {
  return (
    <main className="container mx-auto mt-8">
      <h1 className="text-center text-4xl font-bold mb-12">
        SISTEMAS REGISTRADOS
      </h1>
      <div className="grid grid-cols-2 gap-8">
        <Card title="INVERNADERO" image="/images/greenhouse.png" />
        <Card title="INCUBADORA" image="/images/incubator.png" />
        <Card title="HOGAR" image="/images/house.png" />
        <Card title="CÁMARAS DE SEGURIDAD" image="/images/camera.png" />
      </div>
    </main>
  );
}
