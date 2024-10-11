// src/app/api/users/route.js
import { NextResponse } from 'next/server';
import { getUsers } from '@/actions';

export async function GET() {
  try {
    const users = await getUsers();
    return NextResponse.json(users);
  } catch (error) {
    return NextResponse.json({ error: 'Error al obtener los usuarios' }, { status: 500 });
  }
}
