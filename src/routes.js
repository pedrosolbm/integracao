const express = require('express');
const UserController = require('./controllers/UserController');
// const TaskController = require('./controllers/TaskController');

const router = express.Router();

router.get('/list', () => { return resizeBy.send("LISTAS"); });

router.get('/list/users', UserController.index);