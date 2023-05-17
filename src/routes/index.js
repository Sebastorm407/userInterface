const express = require("express");
const router = express.Router();

//Antes de exportarlos, se va a definir una ruta inical, mostrar un hello world
router.get('/', (req, res) => {
    res.send('Hello World');
})

module.exports = router;