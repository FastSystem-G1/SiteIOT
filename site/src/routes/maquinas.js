var express = require("express");
var router = express.Router();

var maquinaController = require("../controllers/maquinaController");

router.get(`/listarMaquinas/:id_empresa`, function (req, res) {
    maquinaController.listarMaquina(req, res);
});

router.get(`/pegarMaquinas/:nome_componente/:medida`, function (req, res) {
    maquinaController.pegarMaquinas(req, res);
});

router.get(`/pegarMaquinas2/:nome_componente/:medida`, function (req, res) {
    maquinaController.pegarMaquinas2(req, res);
});

module.exports = router;