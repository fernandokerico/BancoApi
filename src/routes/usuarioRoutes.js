import express from 'express';
import UsuarioController from '../controllers/usuarioController.js';

const router = express.Router();

router.post('/', UsuarioController.criar);
router.get('/', UsuarioController.listar);

export default router;
