var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get(`/idComponente/:id_maquina/:nome_componente`, function (req, res) {
    medidaController.buscarIdComponente(req, res);
});

router.get(`/ultimas/:id_componente`, function (req, res) {
    medidaController.buscarUltimasMedidas(req, res);
});

router.get(`/listaDisco/:id_empresa/:id_maquina`, function (req, res) {
    medidaController.buscarListaDisco(req, res);
});

router.get("/tempo-real/:id_empresa", function (req, res) {
    medidaController.buscarMedidasEmTempoReal(req, res);
})

module.exports = router;