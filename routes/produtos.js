const express = require('express');
const router = express.Router();
const client = require('../db');


router.get('/', async (req, res) => {

    try {
        let consultaProd = await client.query('SELECT * FROM produto')

        if (consultaProd.rows.length > 0) {
            res.status(200).json(consultaProd.rows);
        } else {
            res.status(404).json({ message: 'sem produtos' });
        }
    } catch (error) {
        res.status(500).json({ message: 'erro ao consultar produtos' });
    }

})

router.post('/cadastro', async (req, res) => {
    let { descricao, codbarras, quantidade, preco, observacao, fornecedor, usuario_id } = req.body;
    let consultaProd = await client.query('select * from produto where descricao = $1 and usuario_id = $2', [descricao, usuario_id]);


    if (consultaProd.length > 0) {
        res.status(500).json({ message: 'descricao ja cadastrada' });
    } else {

        try {
            client.query('INSERT INTO produto (descricao, codbarras, quantidade, preco, observacao, FORNECEDOR_ID, USUARIO_ID) VALUES($1, $2, $3, $4, $5, $6, $7)',
                [descricao, codbarras, quantidade, preco, observacao, fornecedor, usuario_id])
            res.status(200).json({ message: 'produto cadastrado com sucesso.' })
        } catch (error) {
            console.log('não foi possível cadastrar o produto');

        }


    }

});




module.exports = router;