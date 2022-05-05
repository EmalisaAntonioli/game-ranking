// https://dev.to/saulojoab/how-to-get-data-from-an-mysql-database-in-react-native-53a4

const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const connection = mysql.createPool({
  host     : 'localhost',
  user     : 'root',
  password : '1234',
  database : 'ranking'
});

// Starting our app.
const app = express();

// Creating a GET route that returns data from the 'person' table.
app.get('/person', function (req, res) {
    // Connecting to the database.
    connection.getConnection(function (err, connection) {
        if (error) throw error;

        // Executing the MySQL query (select all data from the 'person' table).
        connection.query('SELECT * FROM person', function (error, results, fields) {
        // If some error occurs, we throw an error.
        if (error) throw error;

        // Getting the 'response' from the database and sending it to our route. This is were the data is.
        res.send(JSON.stringify(results))
        console.log(results)
    });
  });
});

// Starting our server.
app.listen(3000, () => {
 console.log('Go to http://localhost:3000/person so you can see the data.');
});