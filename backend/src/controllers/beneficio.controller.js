const beneficioService = require("../services/beneficio.service");

async function obtenerBeneficiosHome(req, res) {
  const beneficios = await beneficioService.obtenerBeneficiosHome();

  res.json(beneficios);
}

module.exports = {
  obtenerBeneficiosHome,
};
