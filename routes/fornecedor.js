const express = require('express');
const router = express.Router();
const client = require('../db');



router.post('/cadastro', async (req, res) => {
    let { descricao, nomeFantasia, cnpj, cep, endereco, telefone } = req.body
    
        try {
            await client.query('INSERT INTO fornecedor (descricao, nomeFantasia, cnpj,  cep, endereco, telefone) VALUES($1, $2, $3, $4, $5, $6)',
            [descricao], [nomeFantasia,cnpj, cep, endereco, telefone]);
            res.status(200).json({ message: 'Fornecedor cadastrado com sucesso!' });
        
        } catch (error) {
            console.log('não foi possível cadastrar fornecedor');
            res.status(500).json({ message: 'não foi possível cadastrar fornecedor' });
        }
    

});

module.exports = router;