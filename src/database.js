const { Sequelize } = require('sequelize');
/*const sequelize = require('../../Downloads/group-21-git-checkout 2/src/database');*/
const sequelize = new Sequelize({
    host: '140.115.87.119',
    port: 3306,
    database: 'course_system',
    username: 'zian',
    password: '123456',
    dialect: 'mysql',
    define: {
        timestamps: false
    }
});

module.exports = sequelize;