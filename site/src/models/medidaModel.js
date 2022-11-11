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
        where id_empresa = ${empresa} and re.fk_componente = 1 order by data_hora asc limit 1;`;
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
        where id_empresa = ${empresa} and re.fk_componente = 2 order by data_hora asc limit 1;`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL1: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}



module.exports = {
    buscarUltimasMedidas,
    buscarUltimasMedidasMemoria
    //buscarMedidasEmTempoReal
}
