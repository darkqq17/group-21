/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user_info', {
    user_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_realname: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    user_credential: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    user_department: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: {
          tableName: 'department_info',
        },
        key: 'department_id'
      }
    },
    user_pwd: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    user_salt: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: true
    },
    isDeleted: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    isAdmin: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'user_info'
  });
};
