CREATE DATABASE SIGESC;
USE SIGESC;

CREATE TABLE combatente (

id_combatente INT PRIMARY KEY AUTO_INCREMENT NOT NULL,

nome_combatente VARCHAR (255) NOT NULL,

cpf_combatente VARCHAR (11) NOT NULL UNIQUE,

data_nascimento_combatente DATE NOT NULL,

telefone_combatente VARCHAR (11),

email_combatente VARCHAR (255),

matricula_combatente VARCHAR (9) NOT NULL UNIQUE,

ultimo_turno_trabalhado DATETIME

);