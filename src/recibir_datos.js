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

export async function obtenerDatosSimulados() {
  const generarValorAleatorio = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

  const datosSimulados = [
    { tipo: 'temperatura', valor: generarValorAleatorio(18, 30), hora: '08:00' },
    { tipo: 'temperatura', valor: generarValorAleatorio(18, 30), hora: '09:00' },
    { tipo: 'luminosidad', valor: generarValorAleatorio(100, 500), hora: '10:00' },
    { tipo: 'luminosidad', valor: generarValorAleatorio(100, 500), hora: '11:00' },
    { tipo: 'temperatura', valor: generarValorAleatorio(18, 30), hora: '12:00' },
    { tipo: 'humedad', valor: generarValorAleatorio(30, 60), hora: '08:00' },
    { tipo: 'humedad', valor: generarValorAleatorio(30, 60), hora: '09:00' },
    { tipo: 'luminosidad', valor: generarValorAleatorio(100, 500), hora: '12:00' },
    { tipo: 'tierra', valor: generarValorAleatorio(20, 60), hora: '08:00' }, 
    { tipo: 'tierra', valor: generarValorAleatorio(20, 60), hora: '09:00' }, 
    { tipo: 'eco2', valor: generarValorAleatorio(400, 600), hora: '10:00' }, 
    { tipo: 'eco2', valor: generarValorAleatorio(400, 600), hora: '11:00' },  
    { tipo: 'eco2', valor: generarValorAleatorio(400, 600), hora: '12:00' },
  ];

  return datosSimulados;
}



export const calcular_estadisticas = (datos) => {
const estadisticas = {};

for (let i = 0; i < datos.length; i++) {
  const { tipo, valor } = datos[i];
  if (!estadisticas[tipo]) {
    estadisticas[tipo] = { total: 0, maximo: valor, minimo: valor, count: 0 };
  }
  estadisticas[tipo].total += valor;
  estadisticas[tipo].count++;
  if (valor > estadisticas[tipo].maximo) estadisticas[tipo].maximo = valor;
  if (valor < estadisticas[tipo].minimo) estadisticas[tipo].minimo = valor;
  }

for (const tipo in estadisticas) {
  estadisticas[tipo].promedio = estadisticas[tipo].total / estadisticas[tipo].count;
}

return estadisticas;
};

