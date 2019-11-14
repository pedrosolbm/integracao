const express = require('express');
const UserController = require('./controllers/UserController');
const TaskController = require('./controllers/TaskController');
const bodyParser = require('body-parser');

var fs = require('fs');

const router = express.Router();

let jsonParser= bodyParser.json();
let urlencodedParser = bodyParser.urlencoded({ extended: false });

// router.get('/', (req, res) => { return res.send("Index!"); });
router.get('/', (req, res) => {
    fs.readFile(__dirname + "/views/login.html", function (err, data) {
        res.end(data);
    });
});
//Redireciona pra pagina de cadastro
router.get('/cadastrar',(req, res) => {
    fs.readFile(__dirname + "/views/cadastrar.html", function (err, data) {
        res.end(data);
    });
});

router.get('/dashboard',(req, res) => {
    fs.readFile(__dirname + "/views/dashboard.html", function (err, data) {
        res.end(data);
    });
});

router.get('/list', (req, res) => { return res.send("List!"); });

router.get('/list/users', UserController.index);
router.get('/list/tasks', TaskController.index);
router.get('/list/user_tasks', UserController.tasks);

router.get('/list/users/:id', UserController.search);
router.get('/list/tasks/:id', TaskController.search);

router.post('/register/users', urlencodedParser, UserController.create);
router.post('/register/tasks', UserController.create);


router.put('/update/users/:id', UserController.update);
router.put('/update/tasks/:id', TaskController.update);

router.delete('/delete/users/:id', UserController.destroy);
router.delete('/delete/tasks/:id', TaskController.destroy);

module.exports = router;