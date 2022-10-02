-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!
/* para workbench - local - desenvolvimento */

CREATE DATABASE FastSystem;
USE FastSystem;

CREATE TABLE Empresa(
id_empresa INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
nome_empresa VARCHAR(100),
cnpj_empresa VARCHAR (14),
cep_empresa VARCHAR(8),
numero_empresa INT,
telefone_empresa VARCHAR(13),
nome_representante VARCHAR(100),
email_empresa VARCHAR(50),
senha_empresa VARCHAR(25)
)AUTO_INCREMENT = 0;

CREATE TABLE Funcionario(
id_funcionario INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
fk_empresa INT,
nome_funcionario VARCHAR(100),
is_admin BOOLEAN,
cpf_funcionario VARCHAR(11),
email_funcionario VARCHAR(50),
senha_funcionario VARCHAR(25),
telefone_funcionario VARCHAR(13),
FOREIGN KEY(fk_empresa) REFERENCES Empresa(id_empresa)
)AUTO_INCREMENT = 100;

CREATE TABLE Maquina(
id_maquina INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
fk_empresa INT,
tipo_maquina VARCHAR(7),
CHECK (tipo_maquina = 'DESKTOP' or 'TOTEM'),
nome_maquina VARCHAR(15),
FOREIGN KEY(fk_empresa) REFERENCES Empresa(id_empresa)
)AUTO_INCREMENT = 0;

CREATE TABLE App(
id_app INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
nome_app VARCHAR(60),
funcao VARCHAR(45),
prioridade INT
)AUTO_INCREMENT = 1000;

CREATE TABLE App_Maquina(
fk_maquina INT,
fk_app INT,
FOREIGN KEY(fk_maquina) REFERENCES Maquina(id_maquina),
FOREIGN KEY(fk_app) REFERENCES App(id_app)
);

CREATE TABLE Componente(
id_componente INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
nome_comopoente VARCHAR(45),
is_ativo BOOLEAN,
fabricante_componente VARCHAR(45),
modelo_componente VARCHAR(45),
capacidade_componente INT
)AUTO_INCREMENT = 2000;

CREATE TABLE Componente_Maquina(
fk_componente INT,
fk_maquina INT,
FOREIGN KEY(fk_componente) REFERENCES Componente(id_componente),
FOREIGN KEY(fk_maquina) REFERENCES Maquina(id_maquina)
);

CREATE TABLE Tipo_Registro(
id_tipo_registro INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
descricao_tipo VARCHAR(20)
);

CREATE TABLE Registro(
fk_componente INT,
fk_maquina INT,
data_hora DATETIME,
medida FLOAT,
fk_tipo_registro INT,
FOREIGN KEY(fk_componente) REFERENCES Componente(id_componente),
FOREIGN KEY(fk_maquina) REFERENCES Maquina(id_maquina),
FOREIGN KEY(fk_tipo_registro) REFERENCES Tipo_Registro(id_tipo_registro)
);

INSERT INTO Empresa (nome_empresa, cnpj_empresa, cep_empresa, numero_empresa, telefone_empresa, nome_representante, email_empresa, senha_empresa)
 VALUES ('McDonalds Augusta', '44729194000136', '03273430', 188, '(11)8486-5515', 'Paulo Muzy', 'mcdonalds188@gmail.com', '12345678'),
		('Popeyes Av.Paulista', '76444561000141', '08474233', 8115, '(11)0568-8515', 'Jorge de Sá', 'popeyes8115@gmail.com', '12345678'),
        ('McDonalds Av.Paulista', '65708879000176', '04894465', 355, '(11)8941-8115', 'Renato Russo', 'mcdonalds355@gmail.com', '12345678'),
		('KFC Av.Paulista', '57992929000161', '04913140', 885, '(11)8485-6547', 'Ivete Sangalo', 'kfc885@gmail.com', '12345678');

SELECT * FROM Empresa;

INSERT INTO Funcionario(fk_empresa, nome_funcionario, is_admin, cpf_funcionario, email_funcionario, senha_funcionario, telefone_funcionario)
	 VALUES (2, 'Cleber', true, '55500088833', 'felipe@gmail.com', '12345678', 11984564858);
     
SELECT * FROM Funcionario;

SELECT * FROM App;



/* para sql server - remoto - produção 
CREATE TABLE usuario (
	id INT PRIMARY KEY IDENTITY(1,1),
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50),
);

CREATE TABLE aviso (
	id INT PRIMARY KEY IDENTITY(1,1),
	titulo VARCHAR(100),
	descricao VARCHAR(150),
	fk_usuario INT FOREIGN KEY REFERENCES usuario(id)
);

create table aquario (
-- em nossa regra de negócio, um aquario tem apenas um sensor
	id INT PRIMARY KEY IDENTITY(1,1),
	descricao VARCHAR(300)
);

-- altere esta tabela de acordo com o que está em INSERT de sua API do arduino

CREATE TABLE medida (
	id INT PRIMARY KEY IDENTITY(1,1),
	dht11_umidade DECIMAL,
	dht11_temperatura DECIMAL,
	luminosidade DECIMAL,
	lm35_temperatura DECIMAL,
	chave TINYINT,
	momento DATETIME,
	fk_aquario INT FOREIGN KEY REFERENCES aquario(id)
);
*/
