const mysql = require("mysql2");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Aarti_@28", // <-- Apna MySQL password likho
    database: "university_db"
});

db.connect((err) => {
    if (err) {
        console.log("Database Connection Failed!");
        console.log(err);
    } else {
        console.log("Database Connected Successfully");
    }
});

module.exports = db;