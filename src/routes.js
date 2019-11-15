const express = require('express');
const UserController = require('./controllers/UserController');
const TaskController = require('./controllers/TaskController');
const bodyParser = require('body-parser');

var fs = require('fs');

const router = express.Router();

let urlencodedParser = bodyParser.urlencoded({
    extended: false
});

// router.get('/', (req, res) => { return res.send("Index!"); });
router.get('/', (req, res) => {
    fs.readFile(__dirname + "/views/index.html", function (err, data) {
        res.end(data);
    });
});

//Redireciona pra pagina de cadastro
router.get('/cadastrar', (req, res) => {
    fs.readFile(__dirname + "/views/cadastrar.html", function (err, data) {
        res.end(data);
    });
});
//redireciona pro painel 
router.get('/dashboard', (req, res) => {
    fs.readFile(__dirname + "/views/dashboard.html", function (err, data) {
        res.end(data);
    });
});
//redireciona para user pefil
router.get('/user', (req, res) => {
    fs.readFile(__dirname + "/views/user.html", function (err, data) {
        res.end(data);
    })
})

router.get('/list', (req, res) => {
    return res.send("List!");
});

router.get('/list/users', urlencodedParser, UserController.index); //Todos os usuarios do banco
router.get('/list/tasks', urlencodedParser, TaskController.index); //todas as tarefas do banco
router.get('/list/user_tasks', urlencodedParser, UserController.tasks); //todos os usuários e suas respectivas tarefas

router.get('/list/users/:id', urlencodedParser, UserController.search); //busca por id do usuario
router.get('/list/tasks/:id', urlencodedParser, TaskController.search); //busca por id da tarefa
router.get('/list/user_tasks/:id', urlencodedParser, UserController.userTasks); // busca usuario e suas tarefas por id do usuário 

router.post('/register/users', urlencodedParser, urlencodedParser, UserController.create);
router.post('/register/tasks', urlencodedParser, TaskController.create);

router.post('/login/users', urlencodedParser, UserController.login);

router.put('/update/users/:id', urlencodedParser, UserController.update);
router.put('/update/tasks/:id', urlencodedParser, TaskController.update);

router.delete('/delete/users/:id', urlencodedParser, UserController.destroy);
router.delete('/delete/tasks/:id', urlencodedParser, TaskController.destroy);

module.exports = router;