const { createDepartment } = require("./create");
const { readAllDepartment } = require("./read");
const { deleteDepartment } = require("./delete");
const { updateDepartment } = require("./update");

module.exports = {
    createDepartment,
    readAllDepartment,
    deleteDepartment,
    updateDepartment
}