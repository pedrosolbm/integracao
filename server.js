//Importando as paradas
const bodyParser = require('body-parser');
const express = require('express');

//Rotas
const routes = require('./src/routes');

//Arquivo do banco
const db = require ('./src/models/database');

//Teste de conexão


//Iniciando o App
const app = express();

app.use(express.json());
app.use(routes);

//Body Parser
app.use(bodyParser.urlencoded({ extended: false }));

// Porta do app
const PORT = process.env.PORT || 3001;

app.listen(PORT, console.log(`Servidor rodando na porta ${PORT}...`));