//Importando as paradas
const express = require('express');
const bodyParser = require('body-parser');
const mySql = require('mysql');

//Rotas
const routes = require('./src/routes');

//Arquivo do banco
const db = require ('./src/models/database');

//Iniciando o App
const app = express();

app.use(express.json());
app.use(routes);

//Body Parser
app.use(bodyParser.urlencoded({ extended: false }));


//Teste de Conexao
// db.authenticate()
    // .then(() => console.log("Conectado ao banco..."))
    // .catch(err => console.log("Error: ", err));

// Porta do app
const PORT = process.env.PORT || 3001;

app.listen(PORT, console.log(`Servidor rodando na porta ${PORT}...`));