const connection = require('./config');
const Promise = require("bluebird");

const createUsersTable = `CREATE TABLE users (
    id int NOT NULL AUTO_INCREMENT, 
    name varchar(255), 
    username varchar(255),
    email varchar(255), 
    website varchar(255), 
    company varchar(255), 
    PRIMARY KEY (id)
);`;

const createPostsTable = `CREATE TABLE posts (
    id int NOT NULL AUTO_INCREMENT,
    title varchar(255),
    body varchar(255),
    userId int,
    PRIMARY KEY (id),
    FOREIGN KEY (userId) REFERENCES users(id)
);`;

const createCommentsTable = `CREATE TABLE comments (
    id int NOT NULL AUTO_INCREMENT,
    name varchar(255),
    email varchar(255),
    body varchar(255),
    postId int,
    PRIMARY KEY (id),
    FOREIGN KEY (postId) REFERENCES posts(id)
);`;

const queryArray = [
    createUsersTable,
    createPostsTable,
    createCommentsTable
];

Promise.each(queryArray, (itemQuery) => {
    return createTable(itemQuery);
})
.then(() => console.log('All tables were created!'));

function createTable(itemQuery) {
    return new Promise((resolve, reject) => {
        connection.query(itemQuery, (err, rows, fields) => {
            if (err) throw err;
        });
        resolve('ok');
    });
}
