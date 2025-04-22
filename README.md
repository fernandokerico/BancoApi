# Banco API

API simples desenvolvida com **Node.js**, **Express** e **Sequelize**, conectada a um banco de dados **PostgreSQL**.

##  Pré-requisitos

Antes de rodar o projeto, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/)
- [Yarn](https://classic.yarnpkg.com/lang/en/)
- [PostgreSQL](https://www.postgresql.org/)

##  Rodando o Projeto

### 1. Clone o repositório

```bash
git clone https://github.com/fernandokerico/BancoApi.git
cd BancoApi
```

### 2. Instale as dependências

```bash
yarn install
```

### 3. Configure o banco de dados

O projeto usa Sequelize com PostgreSQL. No ambiente de desenvolvimento, os dados de conexão estão definidos em:

```js
// config/config.js

username: 'postgres',
password: 'root',
database: 'api_banco',
host: '127.0.0.1',
dialect: 'postgres'
```

Crie o banco no PostgreSQL com:

```sql
CREATE DATABASE api_banco;
```

### 4. Rode as migrações (se necessário)

```bash
yarn sequelize db:migrate
```

### 5. Inicie o servidor

```bash
yarn dev
```

A aplicação deve rodar em:

```
http://localhost:3000
```

---

##  Observação

O projeto está com um probleminha que ainda não consegui solucionar.
Caso enfrente problemas com o Yarn, tente executar os mesmos comandos utilizando npm.
