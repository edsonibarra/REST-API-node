const express = require("express");

const router = express.Router();

const {
    agregarCliente,
    agregarClienteClase,
    obtenerCliente,
    obtenerClientePorId} = require("../controllers/cliente");


//Agregar cliente
router.post("/agregarcliente",agregarCliente); 

//Obtener clientes
router.get("/clientes",obtenerCliente);

//Agregar clientes con clase
router.post("/relacionclienteclase",agregarClienteClase);

//Obtener cliente por id
router.get("/cliente/:id",obtenerClientePorId);

module.exports = router;