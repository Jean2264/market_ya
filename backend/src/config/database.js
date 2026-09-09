//importo lo necesario para acceder a la db y las variables de entorno
const { Pool } = require("pg");
require("dotenv").config();

//creo el pool de conexiones

const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
});

//exportamos el pool
module.exports = pool;
