const express = require('express');
const InstituicoesController = require('../controllers/instituicoesController');

const router = express.Router();

router.post('/', InstituicoesController.cadastrar);
router.get('/', InstituicoesController.listarTodas);
router.get('/:id', InstituicoesController.buscarPorId);
router.put('/:id', InstituicoesController.atualizar);
router.delete('/:id', InstituicoesController.remover);


module.exports = router;
