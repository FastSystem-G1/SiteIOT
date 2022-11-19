var express = require("express");
var router = express.Router();

var maquinaController = require("../controllers/maquinaController");

router.get(`/listarMaquinas/:id_empresa`, function (req, res) {
    maquinaController.listarMaquina(req, res);
});

router.get(`/pegarMaquinasCPUExtremo/:nome_componente`, function (req, res) {
    maquinaController.pegarMaquinasCPUExtremo(req, res);
});

module.exports = router;