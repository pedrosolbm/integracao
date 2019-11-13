const Sequelize = require('sequelize')

const db = new Sequelize('dt', 'root', 'mysql', {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql'
});
// db.sync({force:true});
db.authenticate({force:true})
    .then(() => { console.log("Conectado ao banco...") })
    .catch(err => { console.log('Erro: ', err) });

module.exports = db;
/* const db = new Sequelize('dt', 'postgres', 'postgres', {
    host: 'localhost',
    port: 5432,
    dialect: 'postgres'
});
*/

