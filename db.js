const mysql = require('mysql2');
const config = require('/configs')
const connection = mysql.createConnection({
    host: config.db.host,
    user: config.db.user,
    port: config.db.port,
    database: config.db.db_name,
    password: config.db.password
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