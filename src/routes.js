const express = require('express');
const UserController = require('./controllers/UserController');
const TaskController = require('./controllers/TaskController');

const router = express.Router();


router.get('/', (req, res) => { return res.send("Index!"); });
router.get('/list', (req, res) => { return res.send("List!"); });

router.get('/list/users', UserController.index); 
router.get('/list/tasks', TaskController.index);
router.get('/list/user_tasks', UserController.tasks);

router.get('/list/users/:id', UserController.search);
router.get('/list/tasks/:id', TaskController.search);

router.post('/register/users', UserController.create);
router.post('/register/tasks', UserController.create);


router.put('/update/users/:id', UserController.update);
router.put('/update/tasks/:id', TaskController.update);

router.delete('/delete/users/:id', UserController.destroy);
router.delete('/delete/tasks/:id', TaskController.destroy);
 
module.exports = router;