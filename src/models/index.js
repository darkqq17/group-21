const CourseInfo = require('./course_info');
const DepartmentInfo = require('./department_info');
const DepartmentRules = require('./department_rules');
const SelectedCourse = require('./selected_course');
const UserInfo = require('./user_info');

/*DepartmentInfo.hasMany(UserInfo,{foreignKey:'user_department', targetKey:'deparment_id', as:'User'});
DepartmentInfo.hasMany(DepartmentRules,{foreignKey:'depaetment_fk',targetKey:'deparment_id', as:'Deparmentrule'});
UserInfo.hasMany(SelectedCourse,{foreignKey:'selected_user',targetKey:'user_id', as:'course'});
CourseInfo.hasMany(SelectedCourse,{foreignKey:'course_fk',targetKey:'course_id', as:'selectedcourse'});*/

module.exports = {
    CourseInfo,
    DepartmentInfo,
    DepartmentRules,
    SelectedCourse,
    UserInfo
}