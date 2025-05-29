const express = require('express');
const TransacaoController = require('../controllers/transacaoController');

const router = express.Router();

router.post('/usuarios/:id', TransacaoController.criar);
router.get('/usuarios/:id/extrato', TransacaoController.extrato);


module.exports = router;
