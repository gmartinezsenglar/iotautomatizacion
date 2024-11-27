import { NextResponse } from "next/server";
import { getUsers } from "@/actions";
import bcrypt from "bcrypt";
import connection from "@/lib/db"; // Importa la conexión a la base de datos

export async function GET() {
  try {
    const [users] = await connection.execute(
      "SELECT Usuario, name, rol FROM usuarios"
    );
    return NextResponse.json(users);
  } catch (error) {
    console.error("Error al obtener los usuarios:", error);
    return NextResponse.json(
      { error: "Error al obtener los usuarios" },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    const { name, usuario, rol } = await req.json();

    if (!name || !usuario || !rol) {
      return NextResponse.json(
        { error: "Todos los campos son obligatorios." },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash("xd", 12); // Encriptar contraseña por defecto

    const validRoles = { admin: "admin", usuario: "usuario" };
    const assignedRole = validRoles[rol.toLowerCase()] || "usuario";

    await connection.execute(
      "INSERT INTO usuarios (Usuario, Password, name, rol) VALUES (?, ?, ?, ?)",
      [usuario, hashedPassword, name, assignedRole]
    );

    return NextResponse.json({ message: "Usuario agregado exitosamente." });
  } catch (error) {
    console.error("Error al agregar usuario:", error);
    return NextResponse.json(
      { error: "Error interno del servidor." },
      { status: 500 }
    );
  }
}
