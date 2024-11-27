
import { getSession } from "@/actions";
import { redirect } from "next/navigation";
import Card from "@/components/Card";

export default async function HomePage() {
  const session = await getSession();

  if (!session.isLoggedIn) {
    redirect("/login");
  }

  return (
    <main className="container mx-auto mt-8">
      <h1 className="text-center text-4xl font-bold mb-12 text-blue-950">
        SISTEMAS REGISTRADOS
      </h1>
      <div className="grid grid-cols-2 gap-8">
        <Card href="/invernaderos" title="INVERNADERO" image="/images/greenhouse.png" />
        <Card title="INCUBADORA" image="/images/incubator.png" />
        <Card title="HOGAR" image="/images/house.png" />
        <Card title="CÁMARAS DE SEGURIDAD" image="/images/camera.png" />
      </div>
    </main>
  );
}
