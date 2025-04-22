import express from 'express';
import ContaController from '../controllers/contaController.js';

const router = express.Router();

router.post('/usuarios/:id', ContaController.criar);
router.get('/usuarios/:id/saldo', ContaController.saldo);

export default router;
