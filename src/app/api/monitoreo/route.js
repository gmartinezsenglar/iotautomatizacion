export async function GET(request) {

  const sensorData = {
    temperatura: Math.floor(Math.random() * 35) + 20, // 20°C - 55°C
    eco2: Math.floor(Math.random() * 800) + 400, // 400 - 1200 PPM
    humedadAire: Math.floor(Math.random() * 40) + 20, // 20% - 60%
    humedadTierra: Math.floor(Math.random() * 60) + 20, // 20% - 80%
    luminosidad: Math.floor(Math.random() * 1000), // 0 - 1000 Lux
  };

  return new Response(JSON.stringify(sensorData), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
