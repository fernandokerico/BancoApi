// src/controllers/contaController.js
const db = require('../data/database');

module.exports = {
  async criar(req, res) {
    const { instituicao_id, saldo } = req.body;
    const { id: usuario_id } = req.params;

    try {
      const result = await db.query(
        'INSERT INTO contas (usuario_id, instituicao_id, saldo) VALUES ($1, $2, $3) RETURNING *',
        [usuario_id, instituicao_id, saldo]
      );
      return res.status(201).json(result.rows[0]);
    } catch (error) {
      return res.status(500).json({ erro: 'Erro ao criar conta' });
    }
  },

  async saldo(req, res) {
    const { id: usuario_id } = req.params;
    const { instituicao } = req.query;

    try {
      let query = `
        SELECT SUM(saldo) AS saldo_total
        FROM contas c
        JOIN instituicoes i ON c.instituicao_id = i.id
        WHERE c.usuario_id = $1
      `;
      const params = [usuario_id];

      if (instituicao) {
        query += ' AND i.nome = $2';
        params.push(instituicao);
      }

      const result = await db.query(query, params);
      return res.json(result.rows[0]);
    } catch (error) {
      return res.status(500).json({ erro: 'Erro ao obter saldo' });
    }
  }
};