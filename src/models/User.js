const Sequelize = require('sequelize');
const db = require('./database');
const bcrypt = require('bcryptjs');

const User = db.define('user', {
    name: {
        type: Sequelize.STRING,
        required: true,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        required: true,
        allowNull: false
    },
    tel: {
        type: Sequelize.INTEGER,
        required: false,
    },
    senha: {
        type: Sequelize.STRING,
        required: true,
        allowNull: false
    },
    status: {
        type: Sequelize.BOOLEAN,
        required: true,
        allowNull: false,
    },

}, {
    freezeTableName: true,
});

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
    /*  user_id:{
         type: Sequelize.INTEGER,
         allowNull: false,
         references:{
             model: require("./User"),
             key: "id"
         }
     } */

}, {
    freezeTableName: true,
});

User.hasMany(Task);
Task.belongsTo(User);
/* Forçar o user primeiro, depois comentar e forçar o task */
// User.sync({ force: true });
// Task.sync({ force: true });

module.exports = {User,Task};