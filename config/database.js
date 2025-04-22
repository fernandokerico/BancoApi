const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('api_banco', 'postgres', 'root', {
  host: '127.0.0.1',
  dialect: 'postgres',
});

module.exports = sequelize;
