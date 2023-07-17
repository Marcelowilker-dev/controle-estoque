const express = require('express');
const router = express.Router();
const client = require('../db');

router.post('/cadastro', async (req, res) => {
    let { nome, email, senha } = req.body;

    const resultadoConsulta = await client.query('select email from usuario where email =$1', [email])
    const user = resultadoConsulta.rows[0];

    if (!user || user.email !== email) {
        try {
            await client.query(' INSERT INTO usuario (nome, email, senha) values( $1, $2, $3)', [nome, email, senha]);
            res.json({ message: 'Usuário registrado com sucesso' });
        } catch (error) {
            console.log('erro ao registrar usuario');
            res.status(500).json({ message: 'erro ao registrar usuario' });
        }
    } else {
        console.log('email já utilizado');
        res.status(500).json({ message: 'email ja utilizado' });
    }

})

router.post('/login', async (req, res) => {
    let { email, senha } = req.body;
    let consultaEmail = await client.query('SELECT email, senha FROM usuario where email = $1', [email]);
    let user = consultaEmail.rows[0];
    if (!user || user.email !== email) {
        console.log('email inexistente');
        res.status(500).json({ message: 'email inexistente' });
    } else if (user.senha !== senha) {
        console.log('senha incorreta');
        res.status(500).json({ message: 'senha incorreta' });
    } else {
        try {
            console.log("login realizado")
            res.status(200).json({ message: 'login realizado' });
        } catch (error) {
            console.log('erro ao efetuar login');
            res.status(500).json({ message: 'erro ao efetuar login' });
        }
    }


});
module.exports = router;