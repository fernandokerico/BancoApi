import express from 'express';
import UsuarioController from '../controllers/usuarioController.js';
import InstituicaoController from '../controllers/instituicaoController.js';
import ContaController from '../controllers/contaController.js';
import TransacaoController from '../controllers/transacaoController.js';

const router = express.Router();

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

export default router;
