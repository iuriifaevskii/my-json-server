const postModel = {};

postModel.getPosts = () => {
    return 'SELECT * FROM posts;';
};

postModel.addPost = ({title, body, userId}) => {
    var sql = "INSERT INTO posts (title, body, userId) VALUES ?";
    var values = [
        [title, body, userId]
    ];
    
    return {sql, values}
};

module.exports = postModel;