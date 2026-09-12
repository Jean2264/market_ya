const pool = require("../config/database");

async function obtenerSeccionesHome() {
  const result = await pool.query(`
            
        SELECT IdSeccion,
    Titulo,
    Tipo,
    OrdenHome,
    MostrarEnHome,
    Estado
FROM SeccionHome
WHERE MostrarEnHome = TRUE
  AND Estado = TRUE
ORDER BY OrdenHome ASC;
        `);

  return result.rows;
}

module.exports = {
  obtenerSeccionesHome,
};
