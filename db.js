const { Client } = require('pg');

const client = new Client({
    connectionString: 'postgres://dvlltsqb:iKN2hc_4yylXZwVHMoAAS9eN7BBshIrf@silly.db.elephantsql.com/dvlltsqb',
    ssl: true
});

client.connect();

client.query(`

        CREATE TABLE IF NOT EXISTS usuario(
            id SERIAL PRIMARY KEY ,
            NOME VARCHAR NOT NULL,
            EMAIL VARCHAR NOT NULL,
            SENHA VARCHAR NOT NULL
        );
        
        CREATE TABLE IF NOT EXISTS fornecedor (
            id serial PRIMARY KEY,
            descricao VARCHAR(60) NOT NULL,
            nomeFantasia VARCHAR(60),
            cnpj VARCHAR(11) not null,
            CEP varchar not null,
            endereco varchar,
            telefone varchar(14)
        );
        CREATE TABLE IF NOT EXISTS produto (
            id serial PRIMARY KEY,
            descricao varchar(60) not null,
            codbarras VARCHAR(13),
            quantidade INTEGER not null ,
            PRECO NUMERIC (7,2) not null,
            OBSERVACAO VARCHAR,
            FORNECEDOR_ID INTEGER REFERENCES FORNECEDOR(id) NOT NULL,
            USUARIO_ID INTEGER REFERENCES usuario(id) NOT NULL

        );

        `, (err) => {
    if (err) {
        console.log('Erro ao criar tabelas:', err);
    } else {
        console.log('tabelas criadas com sucesso');
    }
});


module.exports = client;