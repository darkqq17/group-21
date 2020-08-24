/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  const SelectedCourse = sequelize.define('selected_course', {
    selection_id: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    selection_state: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    course_fk: {
      type: DataTypes.STRING(45),
      allowNull: true,
      references: {
        model: {
          tableName: 'course_info',
        },
        key: 'course_id'
      }
    },
    course_score: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    selected_user: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: {
          tableName: 'user_info',
        },
        key: 'user_id'
      }
    }
  }, {
    sequelize,
    tableName: 'selected_course'
  });

  return SelectedCourse;
};