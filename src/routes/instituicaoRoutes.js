import express from 'express';
import InstituicoesController from '../controllers/instituicoesController.js';

const router = express.Router();

router.post('/', InstituicoesController.cadastrar);
router.get('/', InstituicoesController.listarTodas);
router.get('/:id', InstituicoesController.buscarPorId);
router.put('/:id', InstituicoesController.atualizar);
router.delete('/:id', InstituicoesController.remover);

export default router;
