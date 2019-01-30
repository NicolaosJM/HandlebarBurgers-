var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "burgers_db"
});

connection.connect(function (error) {
    if (error) {
        console.log("error connecting: " + error.stack);
        return;
    }
    console.log("connection as id " + connection.threadId);
});

module.exports = connection;