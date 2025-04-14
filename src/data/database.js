// src/data/database.js
const { Pool } = require('pg');

const db = new Pool({
  user: 'seu_usuario',
  host: 'localhost',
  database: 'nome_do_banco',
  password: 'sua_senha',
  port: 5432,
});

module.exports = db;