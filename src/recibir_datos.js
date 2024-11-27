import { generarDatosDiarios } from "./generarDatos";

export async function obtenerDatosSensores() {
  try {
    const response = await fetch('URL de API', { 
      method: 'GET', 
      headers: {
        'Content-Type': 'application/json', 
      },
    });

    if (!response.ok) {
      throw new Error('Error al obtener los datos de los sensores');
    }

    const datos = await response.json(); 
    console.log('Datos del sensor:', datos);
    return datos;

  } catch (error) {
    console.error('Error:', error);
  }
}

export async function obtenerDatosSimulados(sensor, anho , mes) {
  return generarDatosDiarios(sensor , anho , mes)
}

// export const calcular_estadisticas = (datos) => {
// const estadisticas = {};

// for (let i = 0; i < datos.length; i++) {
//   const { tipo, valor } = datos[i];
//   if (!estadisticas[tipo]) {
//     estadisticas[tipo] = { total: 0, maximo: valor, minimo: valor, count: 0 };
//   }
//   estadisticas[tipo].total += valor;
//   estadisticas[tipo].count++;
//   if (valor > estadisticas[tipo].maximo) estadisticas[tipo].maximo = valor;
//   if (valor < estadisticas[tipo].minimo) estadisticas[tipo].minimo = valor;
//   }

// for (const tipo in estadisticas) {
//   estadisticas[tipo].promedio = estadisticas[tipo].total / estadisticas[tipo].count;
// }

// return estadisticas;
// };

export const calcular_estadisticas = (datos) => {
  if (!datos || datos.length === 0) {
    return { promedio: "N/A", maximo: "N/A", minimo: "N/A" };
  }

  const valores = datos.map((d) => d.valor);
  const promedio = valores.reduce((acc, val) => acc + val, 0) / valores.length;
  const maximo = Math.max(...valores);
  const minimo = Math.min(...valores);

  return {
    promedio,
    maximo,
    minimo,
  };
};
