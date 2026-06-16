const express = require('express');
const app = express();

/**
 * Middleware para poder leer JSON en requests
 */
app.use(express.json());

/**
 * =========================
 * RUTAS GET (pruebas básicas)
 * =========================
 */

app.get('/', (req, res) => {
  res.send('Servidor activo - Daner');
});

app.get('/registro', (req, res) => {
  res.send('Ruta de registro activa (usar POST)');
});

/**
 * =========================
 * POST /registro
 * =========================
 * Recibe datos de un usuario
 */

app.post('/registro', (req, res) => {

  const nombre = req.body.nombre;
  const mensaje = req.body.mensaje;

  res.json({
    estado: "Datos recibidos correctamente",
    usuario: "daner",
    nombre: nombre,
    mensaje: mensaje
  });

});

/**
 * =========================
 * POST /incidencia
 * =========================
 * Registro de incidencias comunitarias
 */

app.post('/incidencia', (req, res) => {

  const tipo = req.body.tipo;
  const descripcion = req.body.descripcion;

  res.json({
    estado: "Incidencia registrada correctamente",
    reportado_por: "daner",
    tipo: tipo,
    descripcion: descripcion
  });

});

/**
 * =========================
 * INICIAR SERVIDOR
 * =========================
 */

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en puerto ${PORT} - usuario: daner`);
});