//import express para poder usar sus propiedades
const express = require("express");
const categoriaController = require("../controllers/categoria.controller");

//creo el router
const router = express.Router();

router.get("/home", categoriaController.obtenerCategoriasHome);

module.exports = router;
