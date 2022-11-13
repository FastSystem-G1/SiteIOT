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
    /* var nome = req.body.nomeServer; 
    var funcao = req.body.funcaoServer;
    var prioridade = req.body.prioridadeServer; */
    var id_empresa = req.body.empresaServer;
    var id_app = re.body.aplicativoServer;
    

    // Faça as validações dos valores
    if (id_empresa == undefined) {
        res.status(400).send("A Empresa está undefined!");
    }else if (id_app == undefined) {
        res.status(400).send("O aplicativo está undefined!");
    } else {
        
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
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

module.exports = {
    testar,
    cadastrar,
    listar
}
