//Importando as paradas
const bodyParser = require('body-parser');
const express = require('express');
const path = require('path')
//Rotas
const routes = require('./src/routes');

//Arquivo do banco
const db = require ('./src/models/database');

//Iniciando o App
const app = express();
app.use(express.static(path.join(__dirname, '/src/views/web')));
app.use(express.json());
app.use(routes);

//Body Parser
app.use(bodyParser.urlencoded({ extended: false }));

//Teste conexão
db.authenticate({force:true})
    .then(() => { console.log("Conectado ao banco...");})
    .catch(err => { console.log('Erro: ', err) });

// Porta do app
const PORT = process.env.PORT || 3001;

app.listen(PORT, console.log(`Servidor rodando na porta ${PORT}...`));