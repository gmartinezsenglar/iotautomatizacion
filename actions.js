"use server";

import { sessionOptions, defaultSession } from "@/lib";
import { getIronSession } from "iron-session";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import connection from "/lib/db";
import bcrypt from 'bcrypt';

let isPro = true;
let isBlocked = true;

export const getSession = async () => {
  const session = await getIronSession(cookies(), sessionOptions);

  if (!session.isLoggedIn) {
    session.isLoggedIn = defaultSession.isLoggedIn;
  }
  session.isBlocked = isBlocked;
  session.isPro = isPro;

  return session;
};

export const login = async (prevState, formData) => {
  const session = await getSession();

  const formUsername = formData.get("email");
  const formPassword = formData.get("password");

  

  const [rows] = await connection.execute('SELECT * FROM usuarios WHERE Usuario = ?', [formUsername]);
  console.log('Usuarios', rows);

  if (rows.length === 0) {
    return { error: "Este Usuario No Existe" };
  }

  const user = rows[0];

  const isPasswordCorrect = await bcrypt.compare(formPassword, user.Password);
  
  if (!isPasswordCorrect) {
    return { error: "Credenciales incorrectas" };
  }


  session.username = user.Usuario;
  session.rol = user.rol;
  session.isPro =   isPro; 
  session.isLoggedIn = true;

  await session.save();
  redirect("/");
};

export const logout = async () => {
  const session = await getSession();
  session.destroy();
  redirect("/login");
};

export const changePremium = async () => {
  const session = await getSession();

  isPro = !session.isPro;
  session.isPro = isPro;
  await session.save();
  revalidatePath("/profile");
};










