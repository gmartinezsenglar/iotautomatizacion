"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

// Definir las columnas para la tabla de usuarios
const columns = [
  { header: "", accessor: "avatar" },
  { header: "Nombre", accessor: "name" },
  { header: "Usuario", accessor: "Usuario" },
  { header: "Rol", accessor: "rol" },
  { header: "Acciones", accessor: "action" },
];

// Renderizar cada fila de la lista de usuarios
const renderRow = (user, openEditModal, openDeleteModal) => (
  <tr
    key={user.Usuario}
    className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-gray-100"
  >
    <td className="p-4">
      <div className="flex items-center justify-center">
        <Image
          src="/images/usuario.png" // Imagen predeterminada si no hay foto
          alt="User avatar"
          width={40}
          height={40}
          className="w-10 h-10 rounded-full object-cover"
        />
      </div>
    </td>
    <td className="p-4">{user.name}</td>
    <td className="p-4">{user.Usuario}</td>
    <td className="p-4">{user.rol}</td>
    <td className="p-4">
      <div className="flex items-center gap-2">
        <Link href={`/list/users/${user.id}`}>
          <button className="w-7 h-7 flex items-center justify-center rounded-full bg-blue-200">
            <Image
              src="/images/informacion.png"
              alt="View"
              width={16}
              height={16}
            />
          </button>
        </Link>
        <button
          className="w-7 h-7 flex items-center justify-center rounded-full bg-yellow-200"
          onClick={() => openEditModal(user)}
        >
          <Image src="/images/editar.png" alt="Edit" width={16} height={16} />
        </button>
        <button
          className="w-7 h-7 flex items-center justify-center rounded-full bg-red-200"
          onClick={() => openDeleteModal(user)}
        >
          <Image src="/images/basura.png" alt="Delete" width={16} height={16} />
        </button>
      </div>
    </td>
  </tr>
);

// El componente del Modal para "Editar Usuario"
const EditUserModal = ({ isOpen, onClose, user, fetchUsers }) => {
  const [name, setName] = useState(user?.name || "");
  const [usuario, setUsuario] = useState(user?.Usuario || "");
  const [rol, setRol] = useState(user?.rol || "usuario");
  const [newPassword, setNewPassword] = useState("");

  const handleUpdateUser = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`/api/users/${user.Usuario}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name.trim(), // Prevenir campos vacíos o undefined
          usuario: usuario.trim(),
          rol,
          ...(newPassword ? { newPassword } : {}), // Solo enviar si no es vacío
        }),
      });

      if (!response.ok) {
        throw new Error("Error al actualizar el usuario");
      }

      alert("Usuario actualizado correctamente");
      fetchUsers();
      onClose();
    } catch (error) {
      console.error("Error:", error);
      alert("No se pudo actualizar el usuario.");
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Fondo Oscurecido */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg relative">
          <h2 className="text-2xl font-semibold mb-4">Editar Usuario</h2>
          <form onSubmit={handleUpdateUser}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Nombre
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 p-2 border rounded-md w-full"
                placeholder="Ingresa nuevo nombre de usuario"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Usuario
              </label>
              <input
                type="text"
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
                className="mt-1 p-2 border rounded-md w-full"
                placeholder="Ingresa nuevo usuario."
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Rol
              </label>
              <select
                value={rol}
                onChange={(e) => setRol(e.target.value)}
                className="mt-1 p-2 border rounded-md w-full"
              >
                <option value="admin">Administrador</option>
                <option value="usuario">Usuario</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Nueva Contraseña
              </label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="mt-1 p-2 border rounded-md w-full"
                placeholder="Ingresa la nueva contraseña"
              />
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md mr-2"
              >
                Actualizar datos
              </button>
              <button
                type="button"
                className="bg-gray-300 hover:bg-gray-400 text-black px-4 py-2 rounded-md"
                onClick={onClose}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

// El componente del Modal para "Agregar Usuario"
const AddUserModal = ({ isOpen, onClose, fetchUsers }) => {
  const [name, setName] = useState("");
  const [usuario, setUsuario] = useState("");
  const [rol, setRol] = useState("usuario");

  // Función para manejar la creación del usuario
  const handleAddUser = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/users/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, usuario, rol }),
      });

      if (!response.ok) {
        throw new Error("Error al agregar el usuario");
      }

      alert("Usuario agregado correctamente");
      fetchUsers(); // Actualizar la lista de usuarios
      onClose();
    } catch (error) {
      console.error("Error:", error);
      alert("No se pudo agregar el usuario.");
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Fondo Oscurecido */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg relative">
          <h2 className="text-2xl font-semibold mb-4">Agregar Usuario</h2>
          <form onSubmit={handleAddUser}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Nombre
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 p-2 border rounded-md w-full"
                placeholder="Ingresa el nombre del usuario"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Usuario
              </label>
              <input
                type="text"
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
                className="mt-1 p-2 border rounded-md w-full"
                placeholder="Ingresa el usuario"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Rol
              </label>
              <select
                value={rol}
                onChange={(e) => setRol(e.target.value)}
                className="mt-1 p-2 border rounded-md w-full"
                required
              >
                <option value="Admin">Admin</option>
                <option value="User">Usuario</option>
              </select>
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md mr-2"
              >
                Agregar
              </button>
              <button
                type="button"
                className="bg-gray-300 hover:bg-gray-400 text-black px-4 py-2 rounded-md"
                onClick={onClose}
              >
                Cancelar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

const DeleteConfirmationModal = ({ isOpen, onClose, onDelete }) => {
  if (!isOpen) return null;

  const handleDelete = async () => {
    await onDelete(); // Invoca la función proporcionada
    onClose(); // Cierra el modal tras la eliminación
  };

  return (
    <>
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={onClose}
      ></div>
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm relative">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            ¿Eliminar usuario?
          </h2>
          <p className="text-gray-600 mb-6">
            Esta acción no se puede deshacer. ¿Estás seguro de que deseas
            eliminar este usuario?
          </p>
          <div className="flex justify-end">
            <button
              className="bg-gray-300 hover:bg-gray-400 text-black px-4 py-2 rounded-md mr-2"
              onClick={onClose}
            >
              Cancelar
            </button>
            <button
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
              onClick={handleDelete}
            >
              Eliminar
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

const UserListPage = () => {
  const [isAddUserModalOpen, setIsAddUserModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [usersData, setUsersData] = useState([]); // Estado para los datos de usuarios

  // Función para obtener los usuarios desde la API
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("/api/users");
        const data = await response.json();
        setUsersData(data); // Actualizamos el estado con los datos de la API
      } catch (error) {
        console.error("Error al obtener los usuarios:", error);
      }
    };

    fetchUsers(); // Llamar a la función para cargar los usuarios cuando el componente se monte
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch("/api/users");
      const data = await response.json();
      setUsersData(data);
    } catch (error) {
      console.error("Error al obtener los usuarios:", error);
    }
  };

  const handleUserAdded = () => {
    fetchUsers(); // Actualiza la lista de usuarios
  };

  const openEditModal = (user) => {
    setSelectedUser(user);
    setIsEditModalOpen(true);
  };

  const openDeleteModal = (user) => {
    setSelectedUser(user);
    setIsDeleteModalOpen(true);
  };

  const handleDeleteUser = async () => {
    try {
      const response = await fetch(`/api/users/${selectedUser.Usuario}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        // Este mensaje puede ser específico según el código de estado
        const errorData = await response.json();
        throw new Error(errorData.error || "Error al eliminar el usuario");
      }

      alert("Usuario eliminado correctamente");
      setIsDeleteModalOpen(false); // Asegúrate de cerrar el modal correctamente
      setSelectedUser(null); // Limpia el usuario seleccionado
      fetchUsers(); // Actualiza la lista
    } catch (error) {
      console.error("Error:", error);
      alert(error.message || "No se pudo eliminar el usuario.");
    }
  };

  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      {/* Sección de encabezado */}
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold pl-1">Usuarios registrados</h1>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm"
          onClick={() => setIsAddUserModalOpen(true)}
        >
          <img
            src="/images/create.png"
            alt="Agregar Usuario"
            className="w-6 h-6"
          />
        </button>
      </div>

      {/* Tabla de usuarios */}
      <div className="overflow-x-auto mt-4">
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr className="text-left text-gray-500 text-sm bg-gray-100">
              {columns.map((col) => (
                <th key={col.accessor} className="p-4">
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {usersData.map((user) =>
              renderRow(user, openEditModal, openDeleteModal)
            )}
          </tbody>
        </table>
      </div>

      <AddUserModal
        isOpen={isAddUserModalOpen}
        onClose={() => setIsAddUserModalOpen(false)}
        fetchUsers={() => {
          // Función para actualizar la lista de usuarios
          const fetchUsers = async () => {
            try {
              const response = await fetch("/api/users");
              const data = await response.json();
              setUsersData(data);
            } catch (error) {
              console.error("Error al obtener los usuarios:", error);
            }
          };
          fetchUsers();
        }}
      />
      {/* Modal para editar usuario */}
      <EditUserModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        user={selectedUser}
        fetchUsers={() => {
          // Refrescar la lista después de la edición
          const fetchUsers = async () => {
            try {
              const response = await fetch("/api/users");
              const data = await response.json();
              setUsersData(data);
            } catch (error) {
              console.error("Error al obtener los usuarios:", error);
            }
          };
          fetchUsers();
        }}
      />
      <DeleteConfirmationModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onDelete={handleDeleteUser}
      />
    </div>
  );
};

export default UserListPage;
