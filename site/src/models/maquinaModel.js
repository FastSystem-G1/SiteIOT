var database = require("../database/config");

function listarMaquina(empresa) {
    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = ``;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `
            SELECT * FROM Maquina
            INNER JOIN Empresa ON Empresa.id_empresa = Maquina.fk_empresa
            WHERE id_empresa = ${empresa};
        `;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL1: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function pegarMaquinas(componente, medida) {
    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = ``;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `
        select id_componente from Maquina
        inner join Componente on Maquina.id_maquina = Componente.fk_maquina
        inner join Registro on Componente.id_componente = Registro.fk_componente
        where nome_componente LIKE '${componente}%' and medida > ${medida} group by fk_componente;
        `;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL1: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function pegarMaquinas2(componente, medida) {
    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = ``;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `
        select id_componente from Maquina
        inner join Componente on Maquina.id_maquina = Componente.fk_maquina
        inner join Registro on Componente.id_componente = Registro.fk_componente
        where nome_componente LIKE '${componente}%' and medida > ${medida} group by fk_componente;
        `;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL1: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    listarMaquina,
    pegarMaquinas,
    pegarMaquinas2,
}
