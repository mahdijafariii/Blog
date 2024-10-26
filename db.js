const mysql = require("mysql2/promise");
const configs = require("../Blog/configs");

// CreatePool

const connection = mysql.createPool({
    uri: configs.db.uri,
    connectionLimit: configs.db.poolSize,
    waitForConnections: true,
});

module.exports = connection;
