import connection from "/lib/db";

export async function GET() {
  try {
    const [rows] = await connection.execute(`
        SELECT id_invernadero, nombre, Usuario
        FROM invernaderos;
      `);
    return new Response(JSON.stringify(rows), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response('Error al obtener los invernaderos', { status: 500 });
  }
}
