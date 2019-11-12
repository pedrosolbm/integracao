const Sequelize = require('sequelize');
const db = require('./database');

const Task = db.define('tasks', {
    title: {
        type: Sequelize.STRING
    },
    content: {
        type: Sequelize.TEXT
    }
});

/* Post.create({
    title: "nodeJS",
    content: "Teste criação do node"
});
 */
module.exports = Post;