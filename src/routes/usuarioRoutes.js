import express from 'express';
import usuarioController from '../controllers/usuarioController.js';

const router = express.Router();

router.get('/', usuarioController.listar);
router.post('/', usuarioController.criar);

export default router;
