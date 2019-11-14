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
    res.render('./views/index.ejs');
});


// Redireciona pra pagina de cadastro
router.get('/cadastrar', (req, res) => {
    fs.readFile(__dirname + "/views/web/cadastrar.html", function (err, data) {
        res.end(data);
    });
});


//redireciona pro painel 
router.get('/dashboard', (req, res) => {
    fs.readFile(__dirname + "/views/dashboard.html", function (err, data) {
        res.end(data);
    });
});

router.get('/list', (req, res) => {
    return res.send("List!");
});

router.get('/list/users', urlencodedParser, UserController.index);
router.get('/list/tasks', urlencodedParser, TaskController.index);
router.get('/list/user_tasks', urlencodedParser, UserController.tasks);

router.get('/list/users/:id', urlencodedParser, UserController.search);
router.get('/list/tasks/:id', urlencodedParser, TaskController.search);

router.post('/register/users', urlencodedParser, UserController.create);
router.post('/register/tasks', urlencodedParser, UserController.create);

router.get('/login/users', urlencodedParser, UserController.login);

router.put('/update/users/:id', urlencodedParser, UserController.update);
router.put('/update/tasks/:id', urlencodedParser, TaskController.update);

router.delete('/delete/users/:id', urlencodedParser, UserController.destroy);
router.delete('/delete/tasks/:id', urlencodedParser, TaskController.destroy);

module.exports = router;