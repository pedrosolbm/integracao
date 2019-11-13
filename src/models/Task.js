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
// User.hasMany(Task);
// Task.sync({ force: true });

/* Task.create({
    tarefa: "Lavar o cachorro",
    data: "2021-10-10",
    hora: "19:30",
    status:false,
    userID:1
}); */
module.exports = Task;