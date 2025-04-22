import express from 'express';
import TransacaoController from '../controllers/transacaoController.js';

const router = express.Router();

router.post('/usuarios/:id', TransacaoController.criar);
router.get('/usuarios/:id/extrato', TransacaoController.extrato);

export default router;
