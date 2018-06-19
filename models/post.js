const postModel = {};

postModel.getPosts = () => {
    return 'SELECT * FROM posts;';
};

postModel.addPost = ({title, body, userId}) => {
    var sql = "INSERT INTO posts SET ?";
    var values = {title, body, userId};

    return {sql, values}
};

postModel.editPost = ({title, body, userId}, id) => {
    var sql = "UPDATE posts SET title = ?, body = ?, userId = ? WHERE id = ?";
    var values = [
        title, body, userId, id
    ];
    
    return {sql, values}
};

module.exports = postModel;