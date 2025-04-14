/ src/controllers/transacaoController.js
const db = require('../data/database');

module.exports = {
  async criar(req, res) {
    const { conta_id, tipo, valor } = req.body;

    try {
      await db.query(
        'INSERT INTO transacoes (conta_id, tipo, valor) VALUES ($1, $2, $3)',
        [conta_id, tipo, valor]
      );

      const operacao = tipo === 'credito' ? '+' : '-';
      await db.query(
        `UPDATE contas SET saldo = saldo ${operacao} $1 WHERE id = $2`,
        [valor, conta_id]
      );

      return res.status(201).json({ mensagem: 'Transação registrada' });
    } catch (error) {
      return res.status(500).json({ erro: 'Erro ao registrar transação' });
    }
  },

  async extrato(req, res) {
    const { id: usuario_id } = req.params;
    const { instituicao } = req.query;

    try {
      let query = `
        SELECT t.*
        FROM transacoes t
        JOIN contas c ON t.conta_id = c.id
        JOIN instituicoes i ON c.instituicao_id = i.id
        WHERE c.usuario_id = $1
      `;
      const params = [usuario_id];

      if (instituicao) {
        query += ' AND i.nome = $2';
        params.push(instituicao);
      }

      const result = await db.query(query, params);
      return res.json(result.rows);
    } catch (error) {
      return res.status(500).json({ erro: 'Erro ao obter extrato' });
    }
  }
};
