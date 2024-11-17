export function generarDatosDiarios(sensor, year, month) {
  const diasEnMes = new Date(year, month + 1, 0).getDate(); // Obtener días del mes
  const datos = [];

  for (let dia = 1; dia <= diasEnMes; dia++) {
    const randomValue = generarValorRandom(sensor);
    datos.push({
      fecha: `${year}-${month + 1}-${dia.toString().padStart(2, "0")}`,
      valor: randomValue,
      tipo: sensor,
    });
  }

  return datos;
}

function generarValorRandom(sensor) {
  const ranges = {
    temperatura: [20, 35],
    eco2: [400, 1200],
    humedad: [20, 60],
    tierra: [20, 80],
    luminosidad: [100, 1000],
  };
  const [min, max] = ranges[sensor];
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
