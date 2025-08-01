import sqlite3 from "sqlite3"
console.log("node+database connection")
const db= new sqlite3.Database("med.db",sqlite3.OPEN_READWRITE)
const createTableSql = `CREATE TABLE IF NOT EXISTS user (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    NAME TEXT NOT NULL,
    PASSWORD TEXT UNIQUE NOT NULL
);`;

const insertUserSql = `INSERT INTO user (NAME, PASSWORD) VALUES ('ADMIN', 'AD123');`;
const dispsql = `SELECT * FROM user;`;

db.exec(createTableSql, (err) => {
    if (err) {
        console.log("Table creation unsuccessfully");
        return;
    }
    console.log("Table created or already exists");

    db.exec(insertUserSql, (err) => {
        if (err) {
            console.log("Insert unsuccessfully");
            return;
        }
        if (this.changes === 0) {
            console.log("User already existed (ignored).");
        } else {
            console.log("User inserted");
        }
        
        // db.all(dispsql, (err,rows) => {
        //     if (err) {
        //         console.log("Error executing SQL");
        //         return;
        //     }
        //     console.log("SQL executed successfully");
        //     console.table(rows);
        //     db.close();
        // });
    });
});
