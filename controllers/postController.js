const connection = require('../db/config');
const postModel = require('../models/post');

const postController = {};

postController.showPosts = (req, res) => {
    connection.query(postModel.getPosts(), (err, rows, fields) => {
        if (err) throw err;
        res.send(rows);
    });
};

postController.showSinglePosts = (req, res) => {
    const {sql, values} = postModel.getSinglePost(req.params.id);
    connection.query(sql, values, (err, rows, fields) => {
        if (err) throw err;
        res.send(rows[0] || []);
    });
};

postController.showCommentsByPost = (req, res) => {
    const {sql, values} = postModel.getCommentsByPost(req.params.id);
    connection.query(sql, values, (err, rows, fields) => {
        if (err) throw err
        res.send(rows);
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

postController.deletePost = (req, res) => {
    const {id} = req.params;
    const {sql, values} = postModel.removePost(id);console.log(sql)
    connection.query(sql, values, (err, results, fields) => {
        if (err) throw err;
        res.send({removedPostId: id});
    });
};

module.exports = postController;
