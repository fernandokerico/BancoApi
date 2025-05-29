const { Conta, Usuario, Instituicao } = require('../../models');

const ContaController = {
    async criar(req, res) {
        try {
            const { id } = req.params;
            const { saldo, instituicaoId } = req.body;

            const usuario = await Usuario.findByPk(id);
            if (!usuario) {
                return res.status(404).json({ erro: 'Usuário não encontrado' });
            }

            const instituicao = await Instituicao.findByPk(instituicaoId);
            if (!instituicao) {
                return res.status(404).json({ erro: 'Instituição não encontrada' });
            }

            const conta = await Conta.create({
                saldo,
                usuarioId: id,
                instituicaoId
            });

            return res.status(201).json(conta);
        } catch (error) {
            return res.status(500).json({ erro: 'Erro ao criar conta', detalhe: error.message });
        }
    },

    async saldo(req, res) {
        try {
            const { id } = req.params;
            const contas = await Conta.findAll({ where: { usuarioId: id } });

            if (!contas.length) {
                return res.status(404).json({ erro: 'Nenhuma conta encontrada para este usuário' });
            }

            const saldoTotal = contas.reduce((total, conta) => total + parseFloat(conta.saldo), 0);

            return res.status(200).json({ saldoTotal });
        } catch (error) {
            return res.status(500).json({ erro: 'Erro ao consultar saldo', detalhe: error.message });
        }
    }
};

module.exports = ContaController;
