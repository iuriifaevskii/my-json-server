const postModel = {};

postModel.getPosts = () => {
    return 'SELECT * FROM articles;';
};

module.exports = postModel;