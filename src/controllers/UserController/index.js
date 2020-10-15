const { createUser } = require("./create");
const { readAllUser } = require("./read");
const { updateUser } = require('./update');
const { deleteUser } = require('./delete');
const { findallUser } = require('./findAll');

module.exports = {
    createUser,
    readAllUser,
    updateUser,
    deleteUser,
    findallUser
}