import express from 'express';
import usuarioRoutes from './usuarioRoutes.js';
import contaRoutes from './contaRoutes.js';
import transacaoRoutes from './transacaoRoutes.js';
import instituicaoRoutes from './instituicaoRoutes.js';

const router = express.Router();

router.use('/usuarios', usuarioRoutes);
router.use('/contas', contaRoutes);
router.use('/transacoes', transacaoRoutes);
router.use('/instituicoes', instituicaoRoutes);

export default router;
