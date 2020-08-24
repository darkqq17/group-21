const Models = require('.');

module.exports = function (sequelize, Sequelize) {
  const UserInfo = sequelize.define(
    "user_info",
    {
      user_id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      user_realname: {
        type: Sequelize.STRING(45),
        allowNull: true,
      },
      user_credential: {
        type: Sequelize.STRING(45),
        allowNull: true,
      },
      user_department: {
        type: Sequelize.INTEGER(11),
        allowNull: true,
        references: {
          model: {
            tableName: "department_info",
          },
          key: "department_id",
        },
      },
      user_salt: {
        type: Sequelize.STRING(45),
        allowNull: true,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      isDeleted: {
        type: Sequelize.INTEGER(4),
        allowNull: true,
      },
      isAdmin: {
        type: Sequelize.INTEGER(4),
        allowNull: true,
      },
      user_password: {
        type: Sequelize.STRING(45),
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: "user_info",
    }
  );
  
  return UserInfo;
};
