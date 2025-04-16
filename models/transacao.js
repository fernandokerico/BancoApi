import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database.js';
import Conta from './conta.js';

class Transacao extends Model {
  static associate(models) {
    Transacao.belongsTo(models.Conta, {
      foreignKey: 'contaId',
      as: 'conta',
    });
  }
}

Transacao.init({
  tipo: {
    type: DataTypes.ENUM('credito', 'debito'),
    allowNull: false
  },
  valor: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  descricao: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  contaId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Contas',
      key: 'id'
    }
  }
}, {
  sequelize,
  modelName: 'Transacao',
});

Conta.hasMany(Transacao, { foreignKey: 'contaId', as: 'transacoes' });
Transacao.belongsTo(Conta, { foreignKey: 'contaId', as: 'conta' });

export default Transacao;
