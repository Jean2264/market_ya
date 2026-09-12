//importo express
const express = require("express");
const pool = require("./config/database");

const path = require("path");

const cors = require("cors");

//importp las rutas
const categoriaRoutes = require("./routes/categoria.routes");
const beneficioRoutes = require("./routes/beneficio.routes");

//creo la aplicacion express
const app = express();

app.use(cors());

//configuro Express para poder recibir informacion
//en formato JSON en las peticiones  HTTP
app.use(express.json());

//con esto le estoy diciendo a express que cualquiea pueda acceder a todo el contenido de uploads/ mediante Url
app.use("/uploads", express.static(path.join(__dirname, "../uploads")));

//declaro las rutas
app.use("/api/categorias", categoriaRoutes);
app.use("/api/beneficios", beneficioRoutes);

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
