// src/app/api/users/[usuario]/route.js
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import connection from "@/lib/db";

export async function GET(req, { params }) {
  const { usuario } = params;

  try {
    const [rows] = await connection.execute(
      "SELECT Usuario FROM usuarios WHERE Usuario = ?",
      [usuario]
    );

    if (rows.length === 0) {
      return NextResponse.json(
        { error: "Usuario no encontrado" },
        { status: 404 }
      );
    }

    return NextResponse.json({ message: "Usuario encontrado" });
  } catch (error) {
    console.error("Error al verificar el usuario:", error);
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}

export async function PUT(req, { params }) {
  const { usuario } = params;

  try {
    const { name, usuario: newUsuario, rol, newPassword } = await req.json();

    // Validar campos obligatorios
    if (!name || !newUsuario || !rol) {
      return NextResponse.json(
        { error: "Todos los campos son obligatorios." },
        { status: 400 }
      );
    }

    // Corregir la validación del rol (permitiendo lowercase y uppercase)
    const validRoles = {
      Administrador: "admin",
      Usuario: "usuario",
      admin: "admin",
      usuario: "usuario",
    };
    const assignedRole = validRoles[rol];

    if (!assignedRole) {
      return NextResponse.json({ error: "Rol inválido." }, { status: 400 });
    }

    // Construir consulta
    let query = "UPDATE usuarios SET name = ?, Usuario = ?, rol = ? ";
    const values = [name, newUsuario, assignedRole];

    if (newPassword) {
      const hashedPassword = await bcrypt.hash(newPassword, 12);
      query += ", Password = ? ";
      values.push(hashedPassword);
    }

    query += "WHERE Usuario = ?";
    values.push(usuario);

    await connection.execute(query, values);

    return NextResponse.json({ message: "Usuario actualizado correctamente." });
  } catch (error) {
    console.error("Error al actualizar usuario:", error);
    return NextResponse.json(
      { error: "Error interno del servidor." },
      { status: 500 }
    );
  }
}
