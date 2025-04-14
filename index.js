const express = require('express');

const server = express();

server.get('/curso', (req, res) => {
    console.log('Acessou a rota!');
})

server.listen(3000);