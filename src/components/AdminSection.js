import { getSession } from "@/actions";

const AdminSection = async () => {
  const session = await getSession();

  if (!session.isLoggedIn) {
    redirect("/login");
  }

  if (!session) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="bg-white shadow rounded-lg border w-full max-w-lg p-6">
      <div className="mb-6">
        <h3 className="text-lg font-medium text-gray-900">{session.name}</h3>
        <p className="mt-1 text-sm text-gray-500">Rol del usuario: {session.rol}</p>
      </div>
      <div className="border-t border-gray-200">
        <dl className="divide-y divide-gray-200">
          <div className="py-4 grid grid-cols-3 gap-4">
            <dt className="text-sm font-medium text-gray-500">Nombre completo</dt>
            <dd className="col-span-2 text-sm text-gray-900">{session.name}</dd>
          </div>
          <div className="py-4 grid grid-cols-3 gap-4">
            <dt className="text-sm font-medium text-gray-500">Correo</dt>
            <dd className="col-span-2 text-sm text-gray-900">{session.useremail}</dd>
          </div>
          <div className="py-4 grid grid-cols-3 gap-4">
            <dt className="text-sm font-medium text-gray-500">Teléfono</dt>
            <dd className="col-span-2 text-sm text-gray-900">(+56 9) 42523452</dd>
          </div>
          <div className="py-4 grid grid-cols-3 gap-4">
            <dt className="text-sm font-medium text-gray-500">Dirección</dt>
            <dd className="col-span-2 text-sm text-gray-900">
              Fake Street 4565<br />Labranza, CHILE
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default AdminSection;
