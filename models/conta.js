import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database.js';

class Conta extends Model {
  static associate(models) {
    Conta.belongsTo(models.Usuario, {
      foreignKey: 'usuarioCpf',
      as: 'usuario',
    });

    Conta.belongsTo(models.Instituicao, {
      foreignKey: 'instituicaoId',
      as: 'instituicao',
    });

    Conta.hasMany(models.Transacao, {
      foreignKey: 'contaId',
      as: 'transacoes',
    });
  }
}

Conta.init({
  saldo: {
    type: DataTypes.FLOAT,
    defaultValue: 0,
  },
  usuarioCpf: {
    type: DataTypes.STRING,
    references: {
      model: 'Usuarios',
      key: 'cpf',
    },
  },
  instituicaoId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Instituicoes',
      key: 'id',
    },
  },
}, {
  sequelize,
  modelName: 'Conta',
});

export default Conta;
