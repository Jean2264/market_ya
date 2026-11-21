const seccionService = require("../services/seccion.service");

async function obtenerSeccionesHome(req, res) {
  const secciones = await seccionService.obtenerSeccionesHome();

  res.json(secciones);
}

module.exports = {
  obtenerSeccionesHome,
};
