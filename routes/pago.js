const express=require("express"); 
const router=express.Router();
const {agregarPago}=require("../controllers/pago");

router.post("/pago",agregarPago);

module.exports=router;