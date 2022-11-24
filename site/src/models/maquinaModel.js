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
            SELECT DISTINCT(COUNT(medida)), fk_maquina FROM Registro
            INNER JOIN Componente ON Componente.id_componente = Registro.fk_componente
            WHERE nome_componente LIKE '${componente}%' AND 
            data_hora BETWEEN (SELECT SEC_TO_TIME(TIME_TO_SEC(CURRENT_TIMESTAMP()) - 300)) AND CURRENT_TIMESTAMP() 
            AND medida > ${medida}
            GROUP BY fk_componente;
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
}
