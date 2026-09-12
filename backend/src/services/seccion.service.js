const seccionRepository = require("../repositories/seccion.repository");

async function obtenerSeccionesHome() {
  const secciones = await seccionRepository.obtenerSeccionesHome();

  return secciones;
}

module.exports = {
  obtenerSeccionesHome,
};
