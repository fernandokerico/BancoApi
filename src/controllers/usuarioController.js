import { Usuario } from '../models/index.js';
import { cpf as cpfValidator } from 'cpf-cnpj-validator';

const UsuarioController = {
    async criar(req, res) {
        try {
            const { cpf, nome, email } = req.body;

            if (!cpfValidator.isValid(cpf)) {
                return res.status(400).json({ erro: 'CPF inválido' });
            }

            const cpfLimpo = cpf.replace(/\D/g, '');
            const existe = await Usuario.findByPk(cpfLimpo);

            if (existe) {
                return res.status(409).json({ erro: 'Usuário já cadastrado' });
            }

            const usuario = await Usuario.create({ cpf: cpfLimpo, nome, email });
            return res.status(201).json(usuario);

        } catch (err) {
            return res.status(500).json({ erro: 'Erro interno ao criar usuário' });
        }
    },

    async listar(req, res) {
        try {
            const usuarios = await Usuario.findAll();
            return res.status(200).json(usuarios);
        } catch (err) {
            return res.status(500).json({ erro: 'Erro ao buscar usuários' });
        }
    }
};

export default UsuarioController;
