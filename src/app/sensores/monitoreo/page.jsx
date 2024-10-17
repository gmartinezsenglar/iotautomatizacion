// pages/index.js
import SensorTable from "@/components/SensorTable";
import { getSession } from "@/actions";
import { redirect } from "next/navigation";

export default async function Monitoreo() {
  const session = await getSession();

  if (!session.isLoggedIn) {
    redirect("/login");
  }

  if (!session) {
    return <div>Cargando...</div>;
  }

export default function monitoreo() {
  return (
    <div>
      <SensorTable />
    </div>
  );
}
