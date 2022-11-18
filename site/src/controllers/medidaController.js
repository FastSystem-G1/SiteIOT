var medidaModel = require("../models/medidaModel");

function buscarIdComponente(req, res) {
    const limite_linhas = 7;

    console.log(`Recuperando as ultimas ${limite_linhas} medidas`);
    var maquina = req.params.id_maquina;
    var componente = req.params.nome_componente;
    medidaModel.buscarIdComponente(maquina, componente).then(function (resultado) {
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

function buscarUltimasMedidas(req, res) {
    const limite_linhas = 1;

    console.log(`Recuperando as ultimas ${limite_linhas} medidas`);
    var componente = req.params.id_componente;
    medidaModel.buscarUltimasMedidas(componente).then(function (resultado) {
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

function buscarListaDisco(req, res) {
    const limite_linhas = 7;

    console.log(`Recuperando as ultimas ${limite_linhas} medidas`);
    var empresa = req.params.id_empresa;
    var maquina = req.params.id_maquina;
    medidaModel.buscarListaDisco(empresa, maquina).then(function (resultado) {
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

function buscarMedidasEmTempoReal(req, res) {
    var idAquario = req.params.idAquario;

    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarMedidasEmTempoReal().then(function (resultado) {
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
    buscarIdComponente,
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal,
    buscarListaDisco
}