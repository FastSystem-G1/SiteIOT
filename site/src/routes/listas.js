var express = require("express");
var router = express.Router();

var listasController = require("../controllers/listasController");

router.get("/", function (req, res) {
    listasController.testar(req, res);
});


// router.get("/listarPosts/:idUsuario", function (req, res) {
//     listasController.listarUsuario(req, res);
// });
// router.post("/publicar/:idUsuario", function (req, res) {
//     listasController.publicar(req, res);
// });
router.put("/editar/:id_funcionario", function (req, res) {
    listasController.editar(req, res);
});

router.delete("/deletar/:id_funcionario", function (req, res) {
    listasController.deletar(req, res);
});


router.get("/exibirFuncionarios/:id_empresa", function (req, res) {
    listasController.listarFuncionariosEmpresa(req, res);
});
module.exports = router;

