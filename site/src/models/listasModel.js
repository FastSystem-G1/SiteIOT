var database = require("../database/config");


function listarFuncionariosEmpresa(idEmpresa) {
    console.log("ACESSEI O listarUsuario MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listarPorUsuario()");
    var instrucao = `
    select id_funcionario,id_empresa, fk_empresa, nome_funcionario, email_funcionario,
    CONVERT(is_admin USING utf8) as isAdmin ,cpf_funcionario,telefone_funcionario from Funcionario
    inner join empresa on id_empresa = fk_empresa
    where id_empresa = ${idEmpresa};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function editar(novoNome,novoCargo,novoCpf, novoEmail,novoTelefone, idFunc) {
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
    delete from Funcionario where id_funcionario ='${idFuncionario}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarEdicao(idFuncionario) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function deletar():", idFuncionario);
    var instrucao = `
    select id_funcionario,id_empresa, fk_empresa, nome_funcionario, email_funcionario,
    CONVERT(is_admin USING utf8) as isAdmin ,cpf_funcionario,telefone_funcionario from Funcionario
    inner join empresa on id_empresa = fk_empresa
    where id_funcionario = ${idFuncionario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    listarFuncionariosEmpresa,
    editar,
    listarEdicao,
    deletar

}