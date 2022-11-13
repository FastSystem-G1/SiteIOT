var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get(`/ultimas/:id_empresa`, function (req, res) {
    medidaController.buscarUltimasMedidas(req, res);
});

router.get(`/ultimasMemoria/:id_empresa`, function (req, res) {
    medidaController.buscarUltimasMedidasMemoria(req, res);
});

router.get(`/ultimasDisco/:id_empresa/:id_disco`, function (req, res) {
    medidaController.buscarUltimasMedidasDisco(req, res);
});

router.get(`/listaDisco/:id_empresa`, function (req, res) {
    medidaController.buscarListaDisco(req, res);
});

router.get("/tempo-real/:id_empresa", function (req, res) {
    medidaController.buscarMedidasEmTempoReal(req, res);
})

module.exports = router;