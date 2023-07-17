const express = require('express');
const app = express();
const client = require('./db');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const rotaProdutos = require('./routes/produtos');
const rotaUsuario = require('./routes/usuario');
const rotaFornecedor = require('./routes/fornecedor');


app.use(express.json())
app.use(bodyParser.json())
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/produtos', rotaProdutos);
app.use('/usuario', rotaUsuario);
app.use('/fornecedor', rotaFornecedor);




module.exports = app;
