// src/app.js
const express = require('express');
const routes = require('./routes');

const app = express();

app.use(express.json()); // permite ler JSON no body
app.use(routes); // importa as rotas

module.exports = app;