var database = require("../database/config");

function buscarUltimasMedidas(empresa) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = ``;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select id_empresa, data_hora, medida, capacidade_componente, 
        fabricante_componente, nome_componente, modelo_componente, 
        nome_maquina, sistema_operacional_maquina, tipo_maquina, 
        nome_empresa, (capacidade_componente - medida) as livre
        from Empresa
        INNER JOIN Maquina ON Empresa.id_empresa = Maquina.fk_empresa
        INNER JOIN Componente ON Maquina.id_maquina = Componente.fk_maquina
        INNER JOIN Registro ON Componente.id_componente = Registro.fk_componente
        WHERE nome_componente = 'Processador' AND id_empresa = ${empresa}
        ORDER BY data_hora ASC LIMIT 1`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL1: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarUltimasMedidasMemoria(empresa) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = ``;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select id_empresa, data_hora, medida, capacidade_componente, 
        fabricante_componente, nome_componente, modelo_componente, 
        nome_maquina, sistema_operacional_maquina, tipo_maquina, 
        nome_empresa, (capacidade_componente - medida) as livre
        from Empresa
        INNER JOIN Maquina ON Empresa.id_empresa = Maquina.fk_empresa
        INNER JOIN Componente ON Maquina.id_maquina = Componente.fk_maquina
        INNER JOIN Registro ON Componente.id_componente = Registro.fk_componente
        WHERE nome_componente = 'Memória' AND id_empresa = ${empresa}
        ORDER BY data_hora ASC LIMIT 1`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL1: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarUltimasMedidasDisco (empresa) {
    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = ``;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select id_empresa, data_hora, medida, capacidade_componente, 
        fabricante_componente, nome_componente, modelo_componente, 
        nome_maquina, sistema_operacional_maquina, tipo_maquina, 
        nome_empresa, (capacidade_componente - medida) as livre
        from Empresa
        INNER JOIN Maquina ON Empresa.id_empresa = Maquina.fk_empresa
        INNER JOIN Componente ON Maquina.id_maquina = Componente.fk_maquina
        INNER JOIN Registro ON Componente.id_componente = Registro.fk_componente
        WHERE nome_componente = 'disco 1' AND id_empresa = ${empresa}
        ORDER BY data_hora ASC LIMIT 1`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL1: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarListaDisco () {
    
}

module.exports = {
    buscarUltimasMedidas,
    buscarUltimasMedidasMemoria,
    buscarUltimasMedidasDisco
    //buscarMedidasEmTempoReal
}
