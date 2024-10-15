async function obtenerDatosSensores() {
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
  