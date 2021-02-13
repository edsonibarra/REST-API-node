const express = require("express");
const router = express.Router();

const {agregarMembresia,obtenerMembresiaPorId,obtenerMembresias} = require("../controllers/membresia");

//Agregar membresia
router.post("/agregarmembresia",agregarMembresia);
//OBTENER MEMBRESIAS.
router.get("/membresias",obtenerMembresias);
//OBTENER MEMBRESIA POR ID.
router.get("/membresia/:id",obtenerMembresiaPorId);

module.exports=router;