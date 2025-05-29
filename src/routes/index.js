const express = require('express');
const usuarioRoutes = require('./usuarioRoutes');
const contaRoutes = require('./contaRoutes');
const transacaoRoutes = require('./transacaoRoutes');
const instituicaoRoutes = require('./instituicaoRoutes');

const router = express.Router();

router.use('/usuarios', usuarioRoutes);
router.use('/contas', contaRoutes);
router.use('/transacoes', transacaoRoutes);
router.use('/instituicoes', instituicaoRoutes);

module.exports = router;
