const express = require("express");
const seccionController = require("../controllers/seccion.controller");

const router = express.Router();

router.get("/home", seccionController.obtenerSeccionesHome);

module.exports = router;
