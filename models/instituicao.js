import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database.js';

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

export default Instituicao;
