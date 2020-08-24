const { createUser } = require("./create");
const { readAllUser } = require("./read");
const { loginUser } = require("./create");
const { loginpageUser } = require('./create');
const { signupUser } = require('./create');
const { signuppageUser } = require('./create');
const { updateUser } = require('./update');
const { deleteUser } = require('./delete');

module.exports = {
    createUser,
    readAllUser,
    loginUser,
    loginpageUser,
    signupUser,
    signuppageUser,
    updateUser,
    deleteUser
}