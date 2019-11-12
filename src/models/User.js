const Sequelize = require('sequelize');
const db = require('./database');
const Task = require('./Task');

const User = db.define('users', {
    firstName: {
        type: Sequelize.STRING,
        required: true,
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING,
        required: true,
    },
    age: {
        type: Sequelize.INTEGER,
        required: true,
    },
    email: {
        type: Sequelize.STRING,
        required: true,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        required: true,
        allowNull: false
    }
});

/* User.create({
    firstName: "José",
    lastName: "Silva",
    age: '18',
    email: 'ze@meuemail.com'
}); */
User.hasMany(Task);
Task.belongsTo(User);

module.exports = User;