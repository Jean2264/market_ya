const seccionService = require("../services/seccion.service");

async function obtenerSeccionesHome(req, res) {
  try {
    const secciones = await seccionService.obtenerSeccionesHome();

    res.json(secciones);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      mensaje: "Error al conseguir secciones",
    });
  }
}

module.exports = {
  obtenerSeccionesHome,
};
