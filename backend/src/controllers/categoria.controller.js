const categoriaService = require("../services/categoria.service");

async function obtenerCategoriasHome(req, res) {
  const categorias = await categoriaService.obtenerCategoriasHome();

  res.json(categorias);
}

module.exports = {
  obtenerCategoriasHome,
};
