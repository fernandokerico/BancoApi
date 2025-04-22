import { Transacao, Conta } from '../models/index.js';

const TransacaoController = {
    async criar(req, res) {
        try {
            const { id } = req.params;
            const { tipo, valor, contaId } = req.body;

            const conta = await Conta.findOne({ where: { id: contaId, usuarioCpf: id } });
            if (!conta) {
                return res.status(404).json({ erro: 'Conta não encontrada para este usuário' });
            }

            const transacao = await Transacao.create({ tipo, valor, contaId });
            return res.status(201).json(transacao);
        } catch (err) {
            return res.status(500).json({ erro: 'Erro ao criar transação' });
        }
    },

    async extrato(req, res) {
        try {
            const { id } = req.params;

            const contas = await Conta.findAll({
                where: { usuarioCpf: id },
                include: ['transacoes']
            });

            const transacoes = contas.flatMap(conta => 
                conta.transacoes.map(t => ({
                    id: t.id,
                    tipo: t.tipo,
                    valor: t.valor,
                    contaId: t.contaId,
                    data: t.createdAt
                }))
            );

            transacoes.sort((a, b) => new Date(b.data) - new Date(a.data));

            return res.status(200).json(transacoes);
        } catch (err) {
            return res.status(500).json({ erro: 'Erro ao buscar extrato' });
        }
    }
};

export default TransacaoController;
