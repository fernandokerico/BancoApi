const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');

class Usuario extends Model {
  static associate(models) {
    this.hasMany(models.Conta, {
      foreignKey: 'usuarioCpf',
      as: 'contas',
    });
  }
}

Usuario.init({
  cpf: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false,
    unique: true,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
}, {
  sequelize,
  modelName: 'Usuario',
  tableName: 'Usuarios',
  timestamps: true,
});

module.exports = Usuario;
