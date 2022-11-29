var database = require("../database/config");

/* -----------------------------------CRUD FUNCIONÁRIOS------------------------------------------------ */

function listarFuncionariosEmpresa(idEmpresa) {
    console.log("ACESSEI O listarUsuario MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listarPorUsuario()");
    var instrucao = `
        SELECT 
        id_funcionario, id_empresa, 
        fk_empresa, nome_funcionario, 
        email_funcionario, is_admin AS isAdmin, 
        cpf_funcionario, telefone_funcionario 
        FROM funcionario
        JOIN empresa ON id_empresa = fk_empresa
        WHERE id_empresa = ${idEmpresa};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function editar(novoNome, novoCargo, novoCpf, novoEmail, novoTelefone, idFunc) {
    console.log("ACESSEI O post MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function editar(): ");
    var instrucao = `
        UPDATE funcionario SET nome_funcionario = '${novoNome}', is_admin = ${novoCargo},
        cpf_funcionario = '${novoCpf}',email_funcionario ='${novoEmail}', telefone_funcionario = '${novoTelefone}'
        WHERE id_funcionario = ${idFunc};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function deletar(idFuncionario) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function deletar():", idFuncionario);
    var instrucao = `
        DELETE FROM Funcionario WHERE id_funcionario ='${idFuncionario}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarEdicao(idFuncionario) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function deletar():", idFuncionario);
    var instrucao = `
        SELECT 
        id_funcionario, id_empresa, 
        fk_empresa, nome_funcionario, 
        email_funcionario, is_admin AS isAdmin, 
        cpf_funcionario, telefone_funcionario 
        FROM Funcionario
        JOIN empresa ON id_empresa = fk_empresa
        WHERE id_funcionario = ${idFuncionario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


/* -----------------------------------CRUD MÁQUINAS------------------------------------------------ */


function listarMaquinaEmpresa(idEmpresa) {
    console.log("ACESSEI O listarUsuario MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listarPorUsuario()");
    var instrucao = `
        SELECT id_maquina, nome_maquina, tipo_maquina, sistema_operacional_maquina, email_maquina, senha_maquina FROM Empresa
        INNER JOIN maquina ON Empresa.id_empresa = maquina.fk_empresa
        WHERE fk_empresa = ${idEmpresa};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function editarMaquina(tipoMaquina, novoNomeMaquina, novoEmailMaquina, novaSenhaMaquina, idFuncMaquina) {
    var instrucao = `
        UPDATE maquina SET tipo_maquina = '${tipoMaquina}',
        nome_maquina = '${novoNomeMaquina}',
        email_maquina ='${novoEmailMaquina}', senha_maquina = '${novaSenhaMaquina}'
        WHERE id_maquina = ${idFuncMaquina};
    `
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function deletarMaquina(idMaquina) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function deletar():", idMaquina);
    var instrucao = `
        DELETE FROM maquina WHERE id_maquina = '${idMaquina}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarEdicaoMaquina(idMaquina) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function deletar():", idMaquina);
    var instrucao = `
        select id_maquina, nome_maquina, 
        email_maquina, senha_maquina
        from maquina
        inner join empresa on empresa.id_empresa = maquina.fk_empresa
        where id_maquina = ${idMaquina};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    listarMaquinaEmpresa,
    editarMaquina,
    listarEdicaoMaquina,
    deletarMaquina,
    listarFuncionariosEmpresa,
    editar,
    listarEdicao,
    deletar
}