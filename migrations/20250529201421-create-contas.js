'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Contas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      saldo: {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: 0.0
      },
      usuarioCpf: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: 'Usuarios',
          key: 'cpf'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      instituicaoId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'Instituicoes',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Contas');
  }
};
