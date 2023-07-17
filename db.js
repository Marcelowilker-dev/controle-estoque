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
            CEP integer not null,
            endereco varchar,
            telefone varchar(11)
        );
        CREATE TABLE IF NOT EXISTS produto (
            id serial PRIMARY KEY,
            descricao varchar(60) not null,
            codbarras VARCHAR(13),
            quantidade INTEGER not null ,
            PRECO FLOAT not null,
            OBSERVACAO INTEGER,
            FORNECEDOR_ID INTEGER REFERENCES FORNECEDOR(id) NOT NULL,
            USUARIO_ID INTEGER REFERENCES FORNECEDOR(id) NOT NULL

        );

        `, (err) => {
    if (err) {
        console.log('Erro ao criar tabelas:', err);
    } else {
        console.log('tabelas criadas com sucesso');
    }
});


module.exports = client;