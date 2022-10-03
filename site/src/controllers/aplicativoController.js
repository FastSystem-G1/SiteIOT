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

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nome = req.body.nomeServer; 
    var funcao = req.body.funcaoServer;
    var prioridade = req.body.prioridadeServer;
    

    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("O nome do aplicativo está undefined!");
    } else if (funcao == undefined) {
        res.status(400).send("A função do aplicativo está undefined!");
    } else if (prioridade == undefined) {
        res.status(400).send("A prioridade do aplicativo está undefined!");
    } else {
        
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        aplicativoModel.cadastrar(nome, funcao, prioridade)
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

module.exports = {
    testar,
    cadastrar,
    listar
}
