import mysql from "mysql"

export const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"gmailpa1919word@",
    database:"blog",
})