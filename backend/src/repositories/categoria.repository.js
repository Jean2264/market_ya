const pool = require("../config/database");

async function obtenerCategoriasHome() {
  const result = await pool.query(
    `
        SELECT *
        FROM Categoria
        WHERE MostrarEnHome = TRUE
         AND Estado= TRUE
        ORDER BY OrdenHome ASC
        `,
  );

  return result.rows;
}

module.exports = {
  obtenerCategoriasHome,
};
