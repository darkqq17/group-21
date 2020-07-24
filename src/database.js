const { Sequelize } = require('sequelize');

module.exports = new Sequelize({
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
