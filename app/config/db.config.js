const mysql = require('mysql');

const connection = mysql.createConnection({
    socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock", // Only in MAMP
    host: "127.0.0.1:8889", // AWS, AZURE
    database: "express_api",
    user: "root",
    password: "root", // In case of XAMPP, the default password is blank
});

connection.connect(error => {
    if(error) {
        console.log("Cannot connect to database. ");
        throw error;
    }
    console.log("Connected successfully");
})

module.exports = connection;