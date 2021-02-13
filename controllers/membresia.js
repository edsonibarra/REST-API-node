const {membresia} = require("../models");

//FUNCION PARA AGREGAR MEMBRESIA.
const agregarMembresia = async(req,res)=>{
    const datos = req.body;
    try {
        await membresia.create(datos)
        res.json("membresia agregada");
    } catch (error) {
        console.log(error);
    };
};
//FUNCION PARA OBTENER MEMBRESIAS.
const obtenerMembresias = async(req,res) => {
    try {
        const results = await membresia.findAll();
        res.json(results);
    } catch (error) {
        console.log(error);
    };
};
//FUNCION PARA OBTENER MEMBRESIA POR ID.
const obtenerMembresiaPorId = async(req,res) => {
    try {
        const results = await membresia.findOne({
            where:{
                id: req.params.id
            }
        });
        res.json(results);
    } catch (error) {
        console.log(error);
    };
}
module.exports = {
    agregarMembresia,
    obtenerMembresiaPorId,
    obtenerMembresias
};