const mysql = require('mysql');
const connection = mysql.createConnection({
    host:'localhost',
    port:3306,
    user: 'root',
    database:'integracao',
    password:'mysql'
});


connection.connect(function (err) {
    if (err) return console.log(err);
    console.log('conectou');
    createTable(connection);
});