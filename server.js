const express = require("express");
require("dotenv").config();
const morgan = require("morgan");
const PORT = process.env.PORT;
const {membresia,cliente,clase, clienteclase} = require("./models");
const clienteRouter = require("./routes/cliente");
const membresiaRouter = require("./routes/membresia");
const pagoRouter = require("./routes/pago");
const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req,res) => {
    res.send("<h1>Server Working in PORT 8000</h1>");
});
app.use(clienteRouter);
app.use(membresiaRouter);
app.use(pagoRouter);

app.listen(PORT, () => {
    console.log("server working in PORT ",PORT);
});