const categoriaRepository = require("../repositories/categoria.repository");

async function obtenerCategoriasHome() {
  const categorias = await categoriaRepository.obtenerCategoriasHome();

  return categorias;
}

module.exports = {
  obtenerCategoriasHome,
};
