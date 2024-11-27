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
    <div className="flex flex-col lg:flex-row min-h-screen p-4">
      {/* Sidebar */}
      <div className="lg:w-64 lg:mr-4 mb-4 lg:mb-0">
        <Sidebar />
      </div>

      {/* User Info Box */}
      <div className="flex flex-col flex-grow justify-center items-center">
        <div className="w-full max-w-lg">
          {session.rol === "admin" ? <AdminSection /> : <UserSection />}
        </div>
      </div>
    </div>
  );
}
