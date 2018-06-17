const express = require('express');
const mysql = require('mysql');
const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'password',
    database : 'dbblog'
});

const app = express()
const port = process.env.PORT || 3000;

app.get('/posts', (req, res) => {
    connection.connect();
    connection.query('SELECT * FROM articles;', (err, rows, fields) => {
        if (err) throw err
        console.log('The articles: ', rows)
        res.send(rows)
    })
    connection.end();
});

app.listen(port, () => {
    console.log(`Started on port ${port}`);
});
