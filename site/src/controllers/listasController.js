var listasModel = require("../models/listasModel");

function testar(req, res) {
    console.log("ENTRAMOS NO postController");
    res.send("ENTRAMOS NO POST CONTROLLER");
}

/*-----------------------------CRUD FUNCIONÁRIOS-------------------------------------*/

function editar(req, res) {
    var novoNome = req.body.nomeServer;
    var novoCargo = req.body.cargoServer;
    var novoCpf = req.body.cpfServer;
    var novoEmail = req.body.emailServer;
    var novoTelefone = req.body.telefoneServer;
    var idFunc = req.params.id_funcionario;

    listasModel.editar(novoNome, novoCargo, novoCpf, novoEmail, novoTelefone, idFunc)
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

function listarEdicao(req, res) {
    var idFuncionario = req.params.id_funcionario;
    listasModel.listarEdicao(idFuncionario).then(function (resultado) {
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


/*---------------------------------CRUD MÁQUINAS-------------------------------------------*/

function testar(req, res) {
    console.log("ENTRAMOS NO postController");
    res.send("ENTRAMOS NO POST CONTROLLER");
}

function editarMaquina(req, res) {
    var tipoMaquina = req.body.hardwareServer;
    var novoNomeMaquina = req.body.nomeServer;
    var novoEmailMaquina = req.body.emailServer;
    var novaSenhaMaquina = req.body.senhaServer;
    var idFuncMaquina = req.params.id_maquina;

    listasModel.editarMaquina(tipoMaquina, novoNomeMaquina, novoEmailMaquina, novaSenhaMaquina, idFuncMaquina)
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

function deletarMaquina(req, res) {
    var idMaquina = req.params.id_maquina;

    listasModel.deletarMaquina(idMaquina)
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
function listarMaquinaEmpresa(req, res) {
    var idEmpresa = req.params.id_empresa;
    listasModel.listarMaquinaEmpresa(idEmpresa).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
            console.log('Entrei no controller, deu certo');
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function listarEdicaoMaquina(req, res) {
    var idMaquina = req.params.id_maquina;
    listasModel.listarEdicaoMaquina(idMaquina).then(function (resultado) {
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
    listarMaquinaEmpresa,
    editarMaquina,
    listarEdicaoMaquina,
    deletarMaquina,
    listarFuncionariosEmpresa,
    editar,
    listarEdicao,
    deletar
}
