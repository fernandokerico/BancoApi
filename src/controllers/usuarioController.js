// src/controllers/usuarioController.js
const db = require('../data/database');

module.exports = {
  async criar(req, res) {
    const { nome } = req.body;

    try {
      const result = await db.query(
        'INSERT INTO usuarios (nome) VALUES ($1) RETURNING *',
        [nome]
      );
      return res.status(201).json(result.rows[0]);
    } catch (error) {
      return res.status(500).json({ erro: 'Erro ao criar usuário' });
    }
  }
};