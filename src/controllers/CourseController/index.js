const { createCourse } = require("./create");
const { readAllCourse } = require("./read");
const { updateCourse } = require("./update");
const { deleteCourse } = require("./delete");
const { findallCourse } = require("./findall");

module.exports = {
    createCourse,
    readAllCourse,
    updateCourse,
    deleteCourse,
    findallCourse
}