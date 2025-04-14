// src/routes/index.js
const express = require('express');
const router = express.Router();

const UsuarioController = require('../controllers/usuarioController');
const InstituicaoController = require('../controllers/instituicaoController');
const ContaController = require('../controllers/contaController');
const TransacaoController = require('../controllers/transacaoController');

// Rotas de instituição
router.post('/instituicoes', InstituicaoController.criar);

// Rotas de usuário
router.post('/usuarios', UsuarioController.criar);

// Rotas de conta
router.post('/usuarios/:id/contas', ContaController.criar);

// Rotas de transação
router.post('/usuarios/:id/transacoes', TransacaoController.criar);

// Rotas de saldo e extrato
router.get('/usuarios/:id/saldo', ContaController.saldo);
router.get('/usuarios/:id/extrato', TransacaoController.extrato);

module.exports = router;