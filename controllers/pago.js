//TRAER EL MODELO PAGO
const {pago}=require("../models");

//CREAR FUNCION PARA AGREGAR PAGOS
const agregarPago = async(req,res) =>{ 
    const datos = req.body;
    try {
        await pago.create(datos);
        res.json("pago agregado");
    } catch (error) {
        console.log(error);
    };
};

module.exports = {
    agregarPago
};
