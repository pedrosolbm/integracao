const Sequelize = require('sequelize');
const db = require('./database');

const Task = db.define('task', {
    tarefa: {
        type: Sequelize.STRING
    },
    data: {
        type: Sequelize.DATEONLY,
    },
    hora: {
        type: Sequelize.TIME,
    },
    status: {
        type: Sequelize.BOOLEAN,
    },
    userId:{
        type: Sequelize.INTEGER
    }
}, {
    freezeTableName: true,
});

module.exports = Task;