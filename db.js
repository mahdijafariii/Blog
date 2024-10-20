const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    port: '3306',
    database: 'blog',
    password: ''
});

connection.connect(err => {
    if(err){
        throw err;
    }
    else {
        console.log('Database connected successfully')
    }
})


module.exports = connection;