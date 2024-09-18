import axios from "axios";

const getUsers = async () => {
  try {
    const url = "http://localhost:3000/api/users"; 
    const response = await axios.get(url);
    console.log(response.data); 
  } catch (error) {
    console.error(error);
    alert("Ocurrió un error: " + error.message);
  }
};


const createSensoresdata = async () => {
  try {
    const url = "http://localhost:3000/api/sensoresdata";
    const body = {
      id_sensor_data: 1,
      valor: 25.5,
      u_medida: "C",
      fecha: "2024-09-15",
      hora: "12:00:00",
      id_tipo_sensor: 1,
    };

    const response = await axios.post(url, body);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

const createActuadoresdata = async () => {
  try {
    const url = "http://localhost:3000/api/actuadoresdata";
    const body = {
      id_actuador_data: 1,
      valor: 70.0,
      u_medida: "T",
      valor_max: 100,
      valor_min: 50,
      id_tipo_actuador: 2,
    };

    const response = await axios.post(url, body);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};
