const http = require('http');
app = require('./app');

const port = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(port);
console.log('api rodando')