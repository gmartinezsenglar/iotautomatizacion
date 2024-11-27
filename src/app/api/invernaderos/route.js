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
    return new Response("Error al obtener los invernaderos", { status: 500 });
  }
}

export async function POST(request) {
  try {
    const { nombre, Usuario } = await request.json();
    const [result] = await connection.execute(
      `
        INSERT INTO invernaderos (nombre, Usuario)
        VALUES (?, ?)
      `,
      [nombre, Usuario]
    );

    return new Response(
      JSON.stringify({ id_invernadero: result.insertId, nombre, Usuario }),
      {
        status: 201,
      }
    );
  } catch (error) {
    console.error(error);
    return new Response("Error al añadir el invernadero", { status: 500 });
  }
}

export async function DELETE(request) {
  try {
    const { id } = await request.json();
    await connection.execute(
      `
        DELETE FROM invernaderos WHERE id_invernadero = ?
      `,
      [id]
    );

    return new Response("Invernadero eliminado con éxito", { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response("Error al eliminar el invernadero", { status: 500 });
  }
}
