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

router.post('/', (req, res, next) => {
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