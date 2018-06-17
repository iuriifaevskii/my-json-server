const connection = require('../db/config');
const postModel = require('../models/post');

const postController = {};

postController.showPosts = (req, res) => {
    connection.connect();

    connection.query(postModel.getPosts(), (err, rows, fields) => {
        if (err) throw err
        console.log('The articles: ', rows);
        res.send(rows)
    });

    connection.end();
};

module.exports = postController;
