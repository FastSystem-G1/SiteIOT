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
        if (componente == "Processador") {
            instrucaoSql = `
                SELECT DISTINCT(COUNT(medida)), fk_maquina FROM Registro
                INNER JOIN Componente ON Componente.id_componente = Registro.fk_componente
                WHERE nome_componente LIKE '${componente}%' AND 
                data_hora BETWEEN (SELECT SEC_TO_TIME(TIME_TO_SEC(CURRENT_TIMESTAMP()) - 30)) AND CURRENT_TIMESTAMP() 
                AND medida > ${medida}
                GROUP BY fk_componente;
            `;
        } else {
            instrucaoSql = `
                SELECT DISTINCT(COUNT(medida)), fk_maquina FROM Registro
                INNER JOIN Componente ON Componente.id_componente = Registro.fk_componente
                WHERE nome_componente LIKE '${componente}%' AND 
                data_hora BETWEEN (SELECT SEC_TO_TIME(TIME_TO_SEC(CURRENT_TIMESTAMP()) - 30)) AND CURRENT_TIMESTAMP() 
                AND ((medida * 100) / capacidade_componente) > ${medida}
                GROUP BY fk_componente;
            `;
        }
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL1: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function filtrarMaquinas(componente, medida) {
    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = ``;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        if (componente == "Processador") {
            instrucaoSql = `
            SELECT id_maquina, nome_maquina, sistema_operacional_maquina, tipo_maquina FROM Maquina
            INNER JOIN Componente ON id_maquina = fk_maquina
            INNER JOIN Registro ON id_componente = fk_componente
            WHERE nome_componente LIKE '${componente}%' AND 
            data_hora BETWEEN (SELECT SEC_TO_TIME(TIME_TO_SEC(CURRENT_TIMESTAMP()) - 30)) AND CURRENT_TIMESTAMP() 
            AND medida > ${medida}
            GROUP BY fk_componente;
            `;
        } else {
            instrucaoSql = `
            SELECT id_maquina, nome_maquina, sistema_operacional_maquina, tipo_maquina FROM Maquina
            INNER JOIN Componente ON id_maquina = fk_maquina
            INNER JOIN Registro ON id_componente = fk_componente
            WHERE nome_componente LIKE '${componente}%' AND 
            data_hora BETWEEN (SELECT SEC_TO_TIME(TIME_TO_SEC(CURRENT_TIMESTAMP()) - 30)) AND CURRENT_TIMESTAMP() 
            AND ((medida * 100) / capacidade_componente) > ${medida}
            GROUP BY fk_componente;
            `;
        }
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL1: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function verificarProcessos(empresa) {
    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = ``;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `
            SELECT nome_processo, is_autorizado, nome_maquina, data_hora FROM Registro_Processo 
            JOIN Maquina ON id_maquina = fk_maquina 
            WHERE is_autorizado = 0 AND fk_empresa = ${empresa} AND 
            DATE_FORMAT (data_hora,'%d/%m/%Y') = DATE_FORMAT (NOW(), '%d/%m/%Y') 
            GROUP BY fk_maquina;
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
    filtrarMaquinas,
    verificarProcessos
}
