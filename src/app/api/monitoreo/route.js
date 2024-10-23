let data = {
  luz: 50,
  fan1: 50,
  fan2: 50,
};

export async function GET(request) {
  const totalFans = data.fan1 + data.fan2;
  const fanAverage = totalFans / 2;
  const maxTemperature = 55;
  const minTemperature = 20;
  let temperaturaBase = maxTemperature - Math.floor((maxTemperature - minTemperature) * (fanAverage / 100));
  const sensorData = {
    temperatura: temperaturaBase,
    eco2: Math.floor(Math.random() * 800) + 400, // 400 - 1200 PPM
    humedadAire: Math.floor(Math.random() * 40) + 20, // 20% - 60%
    humedadTierra: Math.floor(Math.random() * 60) + 20, // 20% - 80%
    luz: data.luz, 
  };

  return new Response(JSON.stringify(sensorData), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

export async function POST(request) {
  const { device, value } = await request.json();

  // Actualizar el valor correspondiente en los datos
  if (data.hasOwnProperty(device)) {
    data[device] = value;
  }

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
