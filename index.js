import express from 'express';
import sequelize from './config/database.js';
import rotas from './src/routes/index.js';


const server = express();
server.use(express.json());

server.use('/', rotas);

server.listen(3000, async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log('Servidor rodando e conectado ao banco na porta 3000!');
  } catch (error) {
    console.error('Erro ao conectar no banco:', error);
  }
});
