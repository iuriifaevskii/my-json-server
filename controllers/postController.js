const connection = require('../db/config');
const postModel = require('../models/post');

const postController = {};

postController.showPosts = (req, res) => {
    connection.query(postModel.getPosts(), (err, rows, fields) => {
        if (err) throw err
        console.log('The articles: ', rows);
        res.send(rows)
    });
};

postController.createPost = (req, res) => {
    console.log(req.body)
    const {sql, values} = postModel.addPost(req.body);
    console.log('sql', sql)
    console.log('values', values)
    connection.query(sql, [values], (err, result) => {
        if (err) throw err;
        console.log("inserted: " + result);
    });
}

module.exports = postController;
