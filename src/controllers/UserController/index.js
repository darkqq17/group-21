const { createUser } = require("./create");
const { readAllUser } = require("./read");
const { getUserNumByName } = require("./create")

module.exports = {
    createUser,
    readAllUser,
    getUserNumByName
}