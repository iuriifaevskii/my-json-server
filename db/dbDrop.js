const connection = require('./config');
const Promise = require("bluebird");

const tables = ['comments', 'posts', 'users'];

Promise.each(tables, (tableName) => {
    return dropTable(tableName);
})
.then(() => console.log('All data were droped!'));

function dropTable(tableName) {
    return new Promise((resolve, reject) => {
        connection.query(`DROP TABLE ${tableName}`, (err, rows, fields) => {
            if (err) throw err;
        });
        resolve('drop:', tableName);
    });
}
