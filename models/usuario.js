import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database.js';
import Conta from './conta.js';

class Usuario extends Model {
  static associate(models) {
    Usuario.hasMany(models.Conta, {
      foreignKey: 'usuarioCpf',
      as: 'contas'
    });
  }
}

Usuario.init({
  cpf: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false,
    unique: true
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  }
}, {
  sequelize,
  modelName: 'Usuario',
  timestamps: true
});

// Associação explícita para garantir o link correto
Usuario.hasMany(Conta, {
  foreignKey: 'usuarioCpf',
  as: 'contas'
});
Conta.belongsTo(Usuario, {
  foreignKey: 'usuarioCpf',
  as: 'usuario'
});

export default Usuario;
