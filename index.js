const express = require('express');
const sequelize = require('./config/database');
const routes = require('./src/routes');

const app = express();
app.use(express.json());
app.use('/', routes);

const PORT = 3000;

(async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();

    app.listen(PORT, () => {
      console.log(`Servidor rodando e conectado ao banco na porta ${PORT}`);
    });
  } catch (error) {
    console.error('Erro ao conectar no banco:', error);
  }
})();
