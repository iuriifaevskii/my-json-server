const userModel = {};

userModel.getUsers = () => {
    return "SELECT * FROM users";
};

module.exports = userModel;