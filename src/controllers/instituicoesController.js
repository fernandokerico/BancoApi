const { Instituicao } = require('../../models');

module.exports = {
    async cadastrar(req, res) {
    try {
        const { nome } = req.body;

        if (!nome) {
            return res.status(400).json({ erro: 'Nome é obrigatório.' });
        }

        const instituicaoExiste = await Instituicao.findOne({ where: { nome } });

        if (instituicaoExiste) {
            return res.status(409).json({ erro: 'Instituição com esse nome já existe.' });
        }

        const novaInstituicao = await Instituicao.create({ nome });

        return res.status(201).json(novaInstituicao);

    } catch (error) {
        return res.status(500).json({ erro: 'Erro ao cadastrar instituição', detalhe: error.message });
    }
},

    async listarTodas(req, res) {
        try {
            const lista = await Instituicao.findAll({
                order: [['nome', 'ASC']]
            });

            return res.status(200).json(lista);
        } catch (error) {
            return res.status(500).json({ erro: 'Erro ao listar instituições', detalhe: error.message });
        }
    },

    async buscarPorId(req, res) {
        try {
            const { id } = req.params;

            const instituicao = await Instituicao.findByPk(id);

            if (!instituicao) {
                return res.status(404).json({ erro: 'Instituição não encontrada' });
            }

            return res.status(200).json(instituicao);
        } catch (error) {
            return res.status(500).json({ erro: 'Erro ao buscar instituição' });
        }
    },

    async atualizar(req, res) {
        try {
            const { id } = req.params;
            const { nome, cnpj } = req.body;

            const instituicao = await Instituicao.findByPk(id);

            if (!instituicao) {
                return res.status(404).json({ erro: 'Instituição não encontrada' });
            }

            await instituicao.update({ nome, cnpj });

            return res.status(200).json(instituicao);
        } catch (error) {
            return res.status(500).json({ erro: 'Erro ao atualizar instituição' });
        }
    },

    async remover(req, res) {
        try {
            const { id } = req.params;

            const instituicao = await Instituicao.findByPk(id);

            if (!instituicao) {
                return res.status(404).json({ erro: 'Instituição não encontrada' });
            }

            await instituicao.destroy();

            return res.status(204).send();
        } catch (error) {
            return res.status(500).json({ erro: 'Erro ao deletar instituição' });
        }
    }
};
