-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/* para workbench - local - desenvolvimento */

/* CREATE DATABASE FastSystem;
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

SELECT * FROM App; */



/* para sql server - remoto - produção 
CREATE TABLE Empresa(
    id_empresa INT PRIMARY KEY IDENTITY(1,1),
    nome_empresa VARCHAR(100),
    cnpj_empresa VARCHAR (14),
    cep_empresa VARCHAR(8),
    numero_empresa INT,
    telefone_empresa VARCHAR(13),
    nome_representante VARCHAR(100),
    email_empresa VARCHAR(50),
    senha_empresa VARCHAR(25)
);



INSERT INTO Empresa VALUES
('FastSystem', 123456789, 02535412, 1522, 11942563656, 'Endryl', 'endryl@gmail.com', 12345678),
('McDonalds', 987654321, 32654845, 365, 11953145796, 'Donald McDonalds', 'dodo@gmail.com', 12345678);



CREATE TABLE Funcionario(
    id_funcionario INT PRIMARY KEY IDENTITY(1,1),
    fk_empresa INT,
    nome_funcionario VARCHAR(100),
    is_admin BIT,
    cpf_funcionario VARCHAR(11),
    email_funcionario VARCHAR(50),
    senha_funcionario VARCHAR(25),
    telefone_funcionario VARCHAR(13),
    FOREIGN KEY(fk_empresa) REFERENCES Empresa(id_empresa)
);

INSERT INTO Funcionario VALUES
(1, 'Gerson Fernanda', 1, '12345678912', 'gerson@gmail.com', '12345678', '11912341234');



CREATE TABLE Maquina(
id_maquina INT PRIMARY KEY NOT NULL IDENTITY(1,1),
fk_empresa INT,
tipo_maquina VARCHAR(7),
CHECK (tipo_maquina = 'DESKTOP' or tipo_maquina = 'TOTEM'),
nome_maquina VARCHAR(15),
sistema_operacional_maquina varchar(45),
tempo_atividade_maquina FLOAT,
FOREIGN KEY(fk_empresa) REFERENCES Empresa(id_empresa)
);



INSERT INTO Maquina VALUES
( 1, 'DESKTOP', 'Desktop 1', '', 1234564 ),  
( 2, 'TOTEM', 'Totem 1', '', 0 ),
( 2, 'DESKTOP', 'Desktop 1', '', 0 );



CREATE TABLE Componente(
id_componente INT PRIMARY KEY NOT NULL IDENTITY(1,1),
nome_componente VARCHAR(45),
is_ativo BIT,
fabricante_componente VARCHAR(45),
modelo_componente VARCHAR(100),
capacidade_componente INT
);



CREATE TABLE Componente_Maquina(
fk_componente INT,
fk_maquina INT,
FOREIGN KEY(fk_componente) REFERENCES Componente(id_componente),
FOREIGN KEY(fk_maquina) REFERENCES Maquina(id_maquina)
);



CREATE TABLE Tipo_Registro(
id_tipo_registro INT PRIMARY KEY NOT NULL IDENTITY(1,1),
descricao_tipo VARCHAR(20)
);



INSERT INTO Tipo_Registro VALUES
( 'GB' ),
( '%' );



CREATE TABLE Registro(
fk_componente INT,
fk_maquina INT,
data_hora DATETIME2,
medida FLOAT,
fk_tipo_registro INT,
FOREIGN KEY(fk_componente) REFERENCES Componente(id_componente),
FOREIGN KEY(fk_maquina) REFERENCES Maquina(id_maquina),
FOREIGN KEY(fk_tipo_registro) REFERENCES Tipo_Registro(id_tipo_registro)
);

-- SELECTS:
SELECT * FROM Maquina;

SELECT nome_empresa, nome_maquina, nome_componente FROM Empresa
	INNER JOIN Maquina ON Empresa.id_empresa = maquina.fk_empresa
	INNER JOIN Componente_Maquina ON Maquina.id_maquina = Componente_Maquina.fk_maquina
    INNER JOIN Componente ON Componente.id_componente = Componente_Maquina.fk_componente;
    
SELECT nome_empresa, nome_maquina, nome_componente FROM Empresa
	INNER JOIN Maquina ON Empresa.id_empresa = maquina.fk_empresa
	INNER JOIN Componente_Maquina ON Maquina.id_maquina = Componente_Maquina.fk_maquina
    INNER JOIN Componente ON Componente.id_componente = Componente_Maquina.fk_componente
		WHERE id_empresa = 2 and id_maquina = 2;
        
SELECT * FROM Registro;
        
SELECT nome_empresa, id_maquina FROM Empresa
	INNER JOIN Maquina ON Empresa.id_empresa = maquina.fk_empresa;
*/
