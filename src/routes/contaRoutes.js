const express = require('express');
const ContaController = require('../controllers/contaController');

const router = express.Router();

router.post('/usuarios/:id', ContaController.criar);
router.get('/usuarios/:id/saldo', ContaController.saldo);


module.exports = router;
