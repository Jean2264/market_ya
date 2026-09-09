const categoriaService = require("../services/categoria.service");

async function obtenerCategoriasHome(req, res) {
  try {
    const categorias = await categoriaService.obtenerCategoriasHome();

    res.json(categorias);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      mensaje: "Error al obtener las categorias",
    });
  }
}

module.exports = {
  obtenerCategoriasHome,
};
