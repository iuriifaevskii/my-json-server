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
    const {sql, values} = postModel.addPost(req.body);
    connection.query(sql, values, (err, results, fields) => {
        if (err) throw err;
        res.send({insertedId: results.insertId});
    });
};

postController.changePost = (req, res) => {
    const {sql, values} = postModel.editPost(req.body, req.params.id);
    connection.query(sql, values, (err, results, fields) => {
        if (err) throw err;
        res.send(Object.assign({id: req.params.id}, req.body));
    });
};

module.exports = postController;
