var database = require("../database/config")

function listar() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT id_app, nome_app FROM App;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarCadastrados(empresa) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT nome_app, fk_empresa, fk_app FROM App_Empresa
        JOIN App ON App.id_app = App_empresa.fk_app
        WHERE fk_empresa = ${empresa};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

// Cadastrar APPs não permitidos
function cadastrar(id_empresa, id_app) {
    console.log("ACESSEI O APLICATIVO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", id_empresa, id_app);

    var instrucao = `
        INSERT INTO App_Empresa (fk_empresa, fk_app) VALUES (${id_empresa}, ${id_app});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function deletar(empresa, aplicativo) {
    var instrucao = `
    DELETE FROM App_Empresa WHERE fk_empresa = ${empresa} AND fk_app = ${aplicativo};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    cadastrar,
    listar,
    listarCadastrados,
    deletar
};