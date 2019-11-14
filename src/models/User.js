const Sequelize = require('sequelize');
const db = require('./database');
const Task = require('./Task');

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

User.hasMany(Task);
// Task.belongsTo(User);
/* Forcar o user primeiro, depois comentar e forçar o task */
// User.sync({ force: true });
// Task.sync({ force: true });

module.exports = User;