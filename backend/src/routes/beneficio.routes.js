const express = require("express");

const beneficioController = require("../controllers/beneficio.controller");

const router = express.Router();

router.get("/home", beneficioController.obtenerBeneficiosHome);

module.exports = router;
