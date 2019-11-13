const Sequelize = require('sequelize')

const db = new Sequelize('dt', 'root', 'mysql', {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql'
});

module.exports = db;
/* const db = new Sequelize('dt', 'postgres', 'postgres', {
    host: 'localhost',
    port: 5432,
    dialect: 'postgres'
});
*/

