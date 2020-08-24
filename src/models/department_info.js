/* jshint indent: 2 */
module.exports = function(sequelize, DataTypes) {
  const DepartmentInfo = sequelize.define('department_info', {
    department_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    department_name: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    department_semester: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'department_info'
  });
  
  return DepartmentInfo;
};