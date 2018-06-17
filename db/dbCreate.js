const connection = require('./config');

const createTablesQuery = `CREATE TABLE users (
    id int NOT NULL AUTO_INCREMENT,
    name varchar(255),
    username varchar(255),
    email varchar(255),
    website varchar(255),
    company varchar(255),
    PRIMARY KEY (id)
);

CREATE TABLE posts (
    id int NOT NULL AUTO_INCREMENT,
    title varchar(255),
    body varchar(255),
    userId int,
    PRIMARY KEY (id),
    FOREIGN KEY (userId) REFERENCES users(id)
);

CREATE TABLE comments (
    id int NOT NULL AUTO_INCREMENT,
    name varchar(255),
    email varchar(255),
    body varchar(255),
    postId int,
    PRIMARY KEY (id),
    FOREIGN KEY (postId) REFERENCES articles(id)
);`;

connection.connect();

connection.query(createTablesQuery, (err, rows, fields) => {
    if (err) throw err;
    console.log('created! success!');
    res.send(rows);
});

connection.end();
