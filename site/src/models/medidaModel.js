var database = require("../database/config");

function buscarUltimasMedidas(empresa) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select id_empresa, re.data_hora, re.medida,c.capacidade_componente,
        c.fabricante_componente,c.nome_componente,c.modelo_componente,
        m.nome_maquina, m.sistema_operacional_maquina,m.tipo_maquina,
        nome_empresa, c.capacidade_componente - re.medida as livre
        from Registro as re
        inner join componente_maquina as cm on cm.fk_maquina = re.fk_maquina
        inner join componente as c on c.id_componente = cm.fk_componente
        inner join maquina as m on m.id_maquina = cm.fk_maquina
        inner join empresa on empresa.id_empresa = fk_empresa
        inner join funcionario as f on f.fk_empresa = empresa.id_empresa
        where id_empresa = 1 limit 1;`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select id_empresa, re.data_hora, re.medida,c.capacidade_componente,
        c.fabricante_componente,c.nome_componente,c.modelo_componente,
        m.nome_maquina, m.sistema_operacional_maquina,m.tipo_maquina,
        nome_empresa, c.capacidade_componente - re.medida as livre
        from Registro as re
        inner join componente_maquina as cm on cm.fk_maquina = re.fk_maquina
        inner join componente as c on c.id_componente = cm.fk_componente
        inner join maquina as m on m.id_maquina = cm.fk_maquina
        inner join empresa on empresa.id_empresa = fk_empresa
        inner join funcionario as f on f.fk_empresa = empresa.id_empresa
        where id_empresa = ${empresa} limit 1;`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL1: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(idAquario) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top 1
        dht11_temperatura as temperatura, 
        dht11_umidade as umidade,  
                        CONVERT(varchar, momento, 108) as momento_grafico, 
                        fk_aquario 
                        from medida where fk_aquario = ${idAquario} 
                    order by id desc`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select 
        dht11_temperatura as temperatura, 
        dht11_umidade as umidade,
                        DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico, 
                        fk_aquario 
                        from medida where fk_aquario = ${idAquario} 
                    order by id desc limit 1`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal
}
