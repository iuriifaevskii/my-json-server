const postModel = {};

postModel.getPosts = () => {
    return 'SELECT * FROM posts';
};

postModel.getSinglePost = (id) => {
    const sql = 'SELECT * FROM posts WHERE ?';
    const values = {id};

    return {sql, values};
};

postModel.getCommentsByPost = (postId) => {
    const sql = `SELECT c.name, c.email, c.body, c.postId, p.userId
        FROM comments c
        INNER JOIN posts p
        ON c.postId = p.id
        WHERE p.id = ?`;
    const values = [postId];

    return {sql, values};
};

postModel.addPost = ({title, body, userId}) => {
    const sql = "INSERT INTO posts SET ?";
    const values = {title, body, userId};

    return {sql, values};
};

postModel.editPost = ({title, body, userId}, id) => {
    const sql = "UPDATE posts SET title = ?, body = ?, userId = ? WHERE id = ?";
    const values = [title, body, userId, id];
    
    return {sql, values};
};

postModel.removePost = (id) => {
    const sql = "DELETE FROM posts WHERE ?";
    const values = {id};

    return {sql, values};
};

module.exports = postModel;