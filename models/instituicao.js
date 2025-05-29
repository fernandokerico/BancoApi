const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');

class Instituicao extends Model {
  static associate(models) {
    Instituicao.hasMany(models.Conta, {
      foreignKey: 'instituicaoId',
      as: 'contas',
    });
  }
}

Instituicao.init({
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  }
}, {
  sequelize,
  modelName: 'Instituicao',
});

module.exports =  Instituicao;
