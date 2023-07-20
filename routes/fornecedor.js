const express = require('express');
const router = express.Router();
const client = require('../db');



router.post('/cadastro', async (req, res) => {
    let { descricao, nomeFantasia, cnpj, CEP, endereco, telefone } = req.body

    const resultadoConsulta = await client.query('select cnpj from fornecedor where cnpj =$1', [cnpj])
    const user = resultadoConsulta.rows[0];

    if (!user || user.cnpj !== cnpj) {
        try {

            await client.query('INSERT INTO fornecedor (descricao, nomeFantasia, cnpj,  CEP, endereco, telefone) VALUES($1, $2, $3, $4, $5, $6)',
                [descricao, nomeFantasia, cnpj, CEP, endereco, telefone]);
            res.status(200).json({ message: 'Fornecedor cadastrado com sucesso!' });

        } catch (error) {
            console.log('não foi possível cadastrar fornecedor');
            res.status(500).json({ message: 'não foi possível cadastrar fornecedor' });

        }
    } else {
        console.log('Fornecedor ja cadastrado');
        res.status(500).json({ message: 'Fornecedor ja cadastrado' });
    }


});

module.exports = router;