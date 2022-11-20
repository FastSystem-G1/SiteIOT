var maquinaModel = require("../models/maquinaModel");

function listarMaquina(req, res) {
    console.log(`Recuperando Máquinas.`);
    var empresa = req.params.id_empresa;
    maquinaModel.listarMaquina(empresa).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function pegarMaquinas(req, res) {
    console.log(`Recuperando Máquinas.`);
    var componente = req.params.nome_componente;
    var medida = req.params.medida;
    maquinaModel.pegarMaquinas(componente, medida).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function pegarMaquinas2(req, res) {
    console.log(`Recuperando Máquinas.`);
    var componente = req.params.nome_componente;
    var medida = req.params.medida;
    maquinaModel.pegarMaquinas2(componente, medida).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    listarMaquina,
    pegarMaquinas,
    pegarMaquinas2,
}