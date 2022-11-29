var aplicativoModel = require("../models/aplicativoModel");

var sessoes = [];

function testar(req, res) {
    console.log("ENTRAMOS NA aplicativoController");
    res.json("ESTAMOS FUNCIONANDO!");
}

function listar(req, res) {
    aplicativoModel.listar()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function listarCadastrados(req, res) {
    var id_empresa = req.params.empresa;
    aplicativoModel.listarCadastrados(id_empresa)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function cadastrar(req, res) {
    var id_empresa = req.body.empresaServer;
    var id_app = req.body.aplicativoServer;

    if (id_empresa == undefined) {
        res.status(400).send("A Empresa está undefined!");
    }else if (id_app == undefined) {
        res.status(400).send("O aplicativo está undefined!");
    } else {
        aplicativoModel.cadastrar(id_empresa, id_app)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function deletar(req, res) {
    var idEmpresa = req.params.id_empresa;
    var idApp = req.params.id_app;

    aplicativoModel.deletar(idEmpresa, idApp)
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

module.exports = {
    testar,
    cadastrar,
    listar,
    listarCadastrados,
    deletar
}
