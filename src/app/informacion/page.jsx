import { changePremium, changeUsername, getSession } from "@/actions";
import { redirect } from "next/navigation";

export default async function Informacion() {
    const session = await getSession();

    if (!session.isLoggedIn) {
        redirect("/login");
      }
    
    return (
      <div className='container mx-auto p-4'>
          {/* Page Content */}
          <h1>
              Información - \app\informacion\page.jsx 
          </h1>
      </div>
  );
}