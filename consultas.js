const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password', 
  database: 'iot_automatizaciondesistemas',
});


connection.connect((err) => {
  if (err) {
    console.error('Error conectando a la base de datos:', err);
    return;
  }
  console.log('Conectado a la base de datos MySQL');
});

// Endpoint para obtener todos los usuarios
app.post('/api/login', (req, res) => {
  const { Usuario, Password } = req.body;
  const query = 'SELECT * FROM usuarios WHERE Usuario = ? AND Password = ?';
  connection.query(query, [Usuario, Password], (error, results) => {
    if (error) {
      res.status(500).send(error);
    } else if (results.length > 0) {
      res.json({ message: 'Inicio de sesión exitoso', user: results[0] });
    } else {
      res.status(401).json({ message: 'Credenciales inválidas' });
    }
  });
});

// Endpoint para agregar un nuevo registro de sensor
app.post('/api/sensoresdata', (req, res) => {
  const { id_sensor_data, valor, u_medida, fecha, hora, id_tipo_sensor } = req.body;
  const query = 'INSERT INTO sensoresdata (id_sensor_data, valor, u_medida, fecha, hora, id_tipo_sensor) VALUES (?, ?, ?, ?, ?, ?)';
  connection.query(query, [id_sensor_data, valor, u_medida, fecha, hora, id_tipo_sensor], (error, results) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.json({ message: 'Datos del sensor insertados correctamente', results });
    }
  });
});

// Endpoint para agregar un nuevo registro de actuador
app.post('/api/actuadoresdata', (req, res) => {
  const { id_actuador_data, valor, u_medida, valor_max, valor_min, id_tipo_actuador } = req.body;
  const query = 'INSERT INTO actuadoresdata (id_actuador_data, valor, u_medida, valor_max, valor_min, id_tipo_actuador) VALUES (?, ?, ?, ?, ?, ?)';
  connection.query(query, [id_actuador_data, valor, u_medida, valor_max, valor_min, id_tipo_actuador], (error, results) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.json({ message: 'Datos del actuador insertados correctamente', results });
    }
  });
});


app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
