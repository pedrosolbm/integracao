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

// router.get('/', (req, res) => {
//     fs.readFile(__dirname + "/views/login.html", function (err, data) {
//         res.render(data);
//     });
// });
router.get('/', (req, res) => {
    res.render('./views/index.html');
});

// Redireciona pra pagina de cadastro
router.get('/cadastrar', (req, res) => {
    fs.readFile(__dirname + "/views/web/cadastrar.html", function (err, data) {
        res.end(data);
    });
});

//redireciona pro painel do usuario
router.get('/dashboard', (req, res) => {
    fs.readFile(__dirname + "/views/dashboard.html", function (err, data) {
        res.end(data);
    });
});

//Teste /list
router.get('/list', (req, res) => {
    return res.send("List!");
});

router.get('/list/users', urlencodedParser, UserController.index); //lista todos os usuarios
router.get('/list/tasks', urlencodedParser, TaskController.index); // ista todas as tarefas
router.get('/list/user_tasks', urlencodedParser, UserController.tasks); //lista os usuarios junto com as tarefas


router.get('/list/users/:id', urlencodedParser, UserController.search); //busca usuario por id
router.get('/list/tasks/:id', urlencodedParser, TaskController.search);//busca task por id
router.get('/list/user_tasks/:id', urlencodedParser, UserController.userTasks); //busca usuario por id

router.post('/register/users', urlencodedParser, UserController.create);
router.post('/register/tasks', urlencodedParser, TaskController.create);

router.post('/login/users', urlencodedParser, UserController.login);//autentica o formulario de login

router.put('/update/users/:id', urlencodedParser, UserController.update);
router.put('/update/tasks/:id', urlencodedParser, TaskController.update);

router.delete('/delete/users/:id', urlencodedParser, UserController.destroy);
router.delete('/delete/tasks/:id', urlencodedParser, TaskController.destroy);

module.exports = router;