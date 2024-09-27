"use server";

import { sessionOptions, defaultSession } from "@/lib";
import { getIronSession } from "iron-session";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

let username = "admin@admin.com";

export const getSession = async () => {
  const session = await getIronSession(cookies(), sessionOptions);

  if (!session.isLoggedIn) {
    session.isLoggedIn = defaultSession.isLoggedIn;
  }

  return session;
};

export const login = async (prevState, formData) => {
  const session = await getSession();

  const formUsername = formData.get("email");
  const formPassword = formData.get("password");

  if (formUsername !== username) {
    return { error: "Wrong Credentials!" };
  }

  session.userId = "1";
  session.username = formUsername;
  // session.isPro = isPro;
  session.isLoggedIn = true;

  await session.save();
  redirect("/");
};

export const logout = async () => {
  const session = await getSession();
  session.destroy();
  redirect("/login");
};

export const changeUsername = async (formData) => {
  const session = await getSession();

  const newUsername = formData.get("username");

  username = newUsername;

  session.username = username;
  await session.save();
  revalidatePath("/profile");
};
