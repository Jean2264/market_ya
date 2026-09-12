const beneficioService = require("../services/beneficio.service");

async function obtenerBeneficiosHome(req, res) {
  try {
    const beneficios = await beneficioService.obtenerBeneficiosHome();

    res.json(beneficios);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      mensaje: "Error al obtener beneficios",
    });
  }
}

module.exports = {
  obtenerBeneficiosHome,
};
