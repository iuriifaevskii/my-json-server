const postModel = {};

postModel.getPosts = () => {
    return 'SELECT * FROM posts;';
};

module.exports = postModel;