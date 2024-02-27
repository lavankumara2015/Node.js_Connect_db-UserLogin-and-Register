

const sql = require("mysql2");



const connection = sql.createConnection({

    host:"localhost",
    user:"root",
    password:"Lavan@2015",
    database:"testing"
})

connection.connect((err) => {
    if (err) {
      console.error('Error connecting to MySQL:', err.message);
      return;
    }
    console.log("Connected to MySQL");
  });
  

module.exports= connection;

