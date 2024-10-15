"use server";

import { sessionOptions} from "@/lib";
import { getIronSession } from "iron-session";
import { NextResponse } from 'next/server';

export async function middleware(request) {
  try {
    const session = await getIronSession(request.cookies, sessionOptions);

    if (!session || !session.isLoggedIn || session.rol !== "admin") {
      return NextResponse.redirect(new URL("/", request.url));
    }
  } catch (error) {
    console.error("No se pudo obtener la sesion:", error);
    return NextResponse.redirect(new URL("/", request.url)); 
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/admin/:path*',
}
