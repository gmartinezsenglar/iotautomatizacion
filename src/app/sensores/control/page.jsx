import ControlTable from "@/components/ControlTable";
import { getSession } from "@/actions";
import { redirect } from "next/navigation";

export default async function Control() {
  const session = await getSession();

  if (!session.isLoggedIn) {
    redirect("/login");
  }

  if (!session) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <ControlTable/>
    </div>
  );
}