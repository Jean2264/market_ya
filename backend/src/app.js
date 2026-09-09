//importo express
const express = require("express");
const pool = require("./config/database");

//creo la aplicacion express
const app = express();

//configuro Express para poder recibir informacion
//en formato JSON en las peticiones  HTTP
app.use(express.json());

//agregamos temporalmente una prueba para saber si nos podemos conectar a postgreSQL

app.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");

    res.json({
      mensaje: "API MARKET Ya funcionando",
      baseDeDatos: "Conectada",
      fecha: result.rows[0].now,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      mensaje: "Error al conectar con la base de datos",
    });
  }
});

//exporto la app para que server pueda utilizarlo
module.exports = app;
