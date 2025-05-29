const express = require('express');
const UsuarioController = require('../controllers/usuarioController');

const router = express.Router();

router.post('/', UsuarioController.criar);
router.get('/', UsuarioController.listar);


module.exports = router;