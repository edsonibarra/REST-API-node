const {cliente,clienteclase,clase,membresia} = require("../models")

//FUNCION PARA AGREGAR CLIENTE
const agregarCliente = async(req,res) => {
    const datos = req.body;
    try {
        await cliente.create(datos);
        res.json("cliente agregado");
    } catch (error) {
        console.log(error);
    };
};

//FUNCION PARA OBTENER CLIENTES
const obtenerCliente = async(req,res) => {
    try {
        const results = await cliente.findAll({
            include:{
                model: membresia
            }
        });
        const results_with_classes = await cliente.findAll({
            include:{
                model:clase
            }
        });
        res.json({"resultado_1":results,
                "resultado_2":results_with_classes});
    } catch (error) {
        console.log(error);
    };
};
//OBTENER CLIENTE POR ID
const obtenerClientePorId = async(req,res) => {
    try {
        const results = await cliente.findOne({
            where:{
                id:req.params.id
            }
        });
        res.json(results);
    } catch (error) {
        console.log(error);
    };
};

//FUNCION PARA AGREGAR DATOS A LA RELACION CLIENTE-CLASE
const agregarClienteClase = async(req,res)=>{
    const datos = req.body;
    try {
        await clienteclase.create(datos);
        res.json("relacion agregada");
    } catch (error) {
        console.log(error);
    };
};

module.exports = {
    agregarCliente,
    obtenerCliente,
    agregarClienteClase,
    obtenerClientePorId
};