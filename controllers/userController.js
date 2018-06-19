const connection = require('../db/config');
const userModel = require('../models/user');

const userController = {};

userController.shwoUsers = (req, res) => {
    connection.query(userModel.getUsers(), (err, rows, fields) => {
        if (err) throw err;
        res.send(rows);
    });
};

module.exports = userController;