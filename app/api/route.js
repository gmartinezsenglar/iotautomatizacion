import { cookies } from 'next/headers';

export async function POST() {
  try {
    const cookie = cookies();
    cookie.delete(process.env.NOMBRE_DE_COOKIE);

    return new Response(null, {
      status: 302,
      headers: {
        Location: '/login',
      },
    });
  } catch (error) {
    console.error('Error durante el cierre de sesión:', error);

    return new Response(
      JSON.stringify({ error: 'No se pudo cerrar sesión' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}
