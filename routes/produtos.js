const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'get da rota produtos '
    })
});

router.get('/:id', (req, res, next) => {
    const id = req.params.id;
    res.status(200).send({
        mensagem: 'get da rota produtos passando o id',

    })

})

router.post('/cadastro', (req, res) => {
    let {descricao, codbarras,quantidade,preco, observacao,fornecedor, usuario_id} = req.body;
            let consultaProd = cliente.query('select * from produto where descricao = $1',[descricao]);
            let prod = consultaProd.row[0];
        if(!prod || prod.descricao == descricao){
                res.status(400).json({message: 'descricao invalida'});
        }else{
            try{
                client.query ('INSERT INTO produto (descricao, codbarras, quantidade, preco, observacao, fornecedor, usuario_id) VALUES($1, $2, $3, $4, $5)',
            [descricao], [codbarras, quantidade, preco,observacao, fornecedor,usuario_id])
            }catch(error){
                console.log('não foi possível cadastrar o produto');
                res.status(500).json({ message: 'não foi possível cadastrar o produto' });
            }
        }
    const produto = {
        descricao: req.body.descricao,
        preco: req.body.preco
    };
    res.status(201).send({
        mensagem: 'rota post de produtos',
        produtoCadastrado: produto

    })




});


router.patch('/', (req, res, next) => {

    res.status(200).send({ mensagem: 'rota para atualizar produtos' })

})
router.delete('/:id', (req, res, next) => {
    const id = req.params.id;
    res.status(201).send({
        mensagem: 'rota para deletar produto',
        id: id
    })

})

module.exports = router;