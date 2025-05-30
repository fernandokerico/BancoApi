const express = require('express');
const UsuarioController = require('../controllers/usuarioController');

const router = express.Router();

router.post('/', UsuarioController.criar);
router.get('/', UsuarioController.listar);
router.get('/:cpf', UsuarioController.buscarPorCpf); // 👈 Nova rota
router.delete('/:cpf', UsuarioController.deletar);   // 👈 Nova rota

module.exports = router;
