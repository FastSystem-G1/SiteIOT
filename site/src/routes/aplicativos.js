var express = require("express");
var router = express.Router();

var aplicativoController = require("../controllers/aplicativoController");

router.get("/", function (req, res) {
    aplicativoController.testar(req, res);
});

router.get("/listar", function (req, res) {
    aplicativoController.listar(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    aplicativoController.cadastrar(req, res);
})

module.exports = router;