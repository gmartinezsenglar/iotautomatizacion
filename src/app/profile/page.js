import { getSession } from "@/actions";
import AdminSection from "@/components/AdminSection";
import Sidebar from "@/components/Sidebar";
import UserSection from "@/components/UserSection";
import { redirect } from "next/navigation";

export default async function Profile() {
  const session = await getSession();

  if (!session.isLoggedIn) {
    redirect("/login");
  }

  if (!session) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="flex flex-col lg:flex-row justify-center items-start lg:space-x-6 p-6">
      <div className="lg:w-64 w-full max-w-xs mb-6 lg:mb-0">
        <Sidebar />
      </div>
      <div className="flex-1 bg-gray-50 rounded-lg shadow-md p-6">
        {session.rol === "admin" ? <AdminSection /> : <UserSection />}
      </div>
    </div>
  );
}
