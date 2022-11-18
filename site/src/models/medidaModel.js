var database = require("../database/config");

function buscarIdComponente(maquina, componente) {
    instrucaoSql = ''
    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = ``;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `
            SELECT id_componente FROM Componente
            JOIN Maquina ON Maquina.id_maquina = Componente.fk_maquina
            WHERE id_maquina = ${maquina} AND nome_componente = '${componente}';
        `;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }
    console.log("Executando a instrução SQL1: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarUltimasMedidas (componente) {
    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = ``;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `
        SELECT 
        data_hora, 
        medida, 
        capacidade_componente, 
        fabricante_componente, 
        nome_componente, 
        modelo_componente, 
        (capacidade_componente - medida) AS livre
        FROM Registro
        JOIN Componente ON Componente.id_Componente = Registro.fk_componente
        WHERE id_componente = ${componente}
        ORDER BY data_hora ASC LIMIT 1;
        `;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL1: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarListaDisco (empresa, maquina) {
    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = ``;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `SELECT id_componente, nome_componente, modelo_componente, capacidade_componente FROM Empresa
        INNER JOIN Maquina ON Empresa.id_empresa = Maquina.fk_empresa
        INNER JOIN Componente ON Maquina.id_maquina = Componente.fk_maquina
        WHERE id_empresa = ${empresa} AND nome_componente LIKE 'Disco%' AND id_maquina = ${maquina};`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL1: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarIdComponente,
    buscarUltimasMedidas,
    buscarListaDisco
    //buscarMedidasEmTempoReal
}
