const pool = require("../config/database");

async function obtenerBeneficiosHome() {
  const result = await pool.query(
    `
        SELECT *
        FROM Beneficio
        WHERE  Estado= TRUE
        ORDER BY OrdenHome ASC
        `,
  );

  return result.rows;
}

module.exports = {
  obtenerBeneficiosHome,
};
