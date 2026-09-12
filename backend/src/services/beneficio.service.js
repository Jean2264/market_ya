const beneficioRepository = require("../repositories/beneficio.repository");

async function obtenerBeneficiosHome() {
  const beneficios = await beneficioRepository.obtenerBeneficiosHome();

  return beneficios;
}

module.exports = {
  obtenerBeneficiosHome,
};
