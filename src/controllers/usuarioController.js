import Usuario from '../models/usuario.js';

export default {
  async criar(req, res) {
    const { nome, email, cpf } = req.body;

    try {
      const novoUsuario = await Usuario.create({ nome, email, cpf });
      return res.status(201).json(novoUsuario);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ erro: 'Erro ao criar usuário' });
    }
  },

  async listar(req, res) {
    try {
      const usuarios = await Usuario.findAll();
      return res.json(usuarios);
    } catch (error) {
      return res.status(500).json({ erro: 'Erro ao buscar usuários' });
    }
  }
};
