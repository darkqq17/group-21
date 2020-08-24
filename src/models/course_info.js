/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  const CourseInfo = sequelize.define('course_info', {
    course_id: {
      type: DataTypes.STRING(45),
      allowNull: false,
      primaryKey: true
    },
    course_name: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    course_information: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    course_credit: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    course_instructor: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    course_semester: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    course_year:{
      type: DataTypes.STRING(45),
      allowNull: true
    },
    course_time: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    course_classroom: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    course_limit: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    course_key: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'course_info'
  });

  return CourseInfo;
};
