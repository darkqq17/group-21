const Sequelize = require('sequelize');
const db = require("../../database");

const DepartmentRule = require("../../models/user_info")(db, Sequelize); //////////////

module.exports = DepartmentRule;