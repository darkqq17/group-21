/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  const DepartmentRules = sequelize.define('department_rules', {
    rule_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    department_fk: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: {
          tableName: 'department_info',
        },
        key: 'department_id'
      }
    },
    rule_type: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    rule_content: {
      type: DataTypes.JSON,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'department_rules'
  });

  return DepartmentRules;
};
