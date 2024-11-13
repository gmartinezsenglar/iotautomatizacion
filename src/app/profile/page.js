import { getSession } from "@/actions";
import { redirect } from "next/navigation";
import AdminSection from "@/components/AdminSection";
import UserSection from "@/components/UserSection";

export default async function Profile() {
  const session = await getSession();

  if (!session.isLoggedIn) {
    redirect("/login");
  }

  if (!session) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
        {session.rol === 'admin' ? <AdminSection /> : <UserSection />}
    </div>
  );
}