const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');

class Conta extends Model {
  static associate(models) {
    this.belongsTo(models.Usuario, {
      foreignKey: 'usuarioCpf',
      as: 'usuario',
    });

    this.belongsTo(models.Instituicao, {
      foreignKey: 'instituicaoId',
      as: 'instituicao',
    });

    this.hasMany(models.Transacao, {
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
    allowNull: false,
  },
  instituicaoId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'Conta',
  tableName: 'Contas',
  timestamps: true,
});

module.exports = Conta;
