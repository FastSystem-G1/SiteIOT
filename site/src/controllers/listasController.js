var listasModel = require("../models/listasModel");

function testar(req, res) {
    console.log("ENTRAMOS NO postController");
    res.send("ENTRAMOS NO POST CONTROLLER");
}

function editar(req, res) {
    var novoNome = req.body.nomeServer;
    var novoCargo = req.body.cargoServer;
    var novoCpf = req.body.cpfServer;
    var novoEmail = req.body.emailServer;
    var novoTelefone = req.body.telefoneServer;
    var idFunc = req.params.id_funcionario;

    listasModel.editar(novoNome, novoCargo,novoCpf,novoEmail, novoTelefone,idFunc)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar o post: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );

}

function deletar(req, res) {
    var idFuncinario = req.params.id_funcionario;

    listasModel.deletar(idFuncinario)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao deletar o post: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}
function listarFuncionariosEmpresa(req, res) {
    var idEmpresa = req.params.id_empresa;
    listasModel.listarFuncionariosEmpresa(idEmpresa).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}



module.exports = {
    testar,
    listarFuncionariosEmpresa,
     editar,
     deletar
}