"use server";

import { sessionOptions } from "@/lib";
import { getIronSession } from "iron-session";
import { NextResponse } from 'next/server';

export async function middleware(request) {
  try {
    const session = await getIronSession(request.cookies, sessionOptions);
    
    if (!session || !session.isLoggedIn) {
      return NextResponse.redirect(new URL("/login", request.url));
    }

    if (session.rol === "admin") {
      return NextResponse.next(); 
    }


    if (request.nextUrl.pathname.startsWith('/admin')) {
      return NextResponse.redirect(new URL("/", request.url));
    }

  } catch (error) {
    console.error("No se pudo obtener la sesión:", error);
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*', '/sensores/:path*', '/monitoreo/:path*', '/dia_datos/:path*', '/invernaderos/:path*'],
};


