var express = require("express");
var router = express.Router();

var maquinaController = require("../controllers/maquinaController");

router.get(`/listarMaquinas/:id_empresa`, function (req, res) {
    maquinaController.listarMaquina(req, res);
});

router.get(`/pegarMaquinas/:nome_componente/:medida`, function (req, res) {
    maquinaController.pegarMaquinas(req, res);
});

router.get(`/filtrarMaquinas/:nome_componente/:medida`, function (req, res) {
    maquinaController.filtrarMaquinas(req, res);
});

router.get(`/verificarProcessos/:id_empresa`, function (req, res) {
    maquinaController.verificarProcessos(req, res);
});

module.exports = router;