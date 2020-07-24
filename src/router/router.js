// koa-router
const Router = require('koa-router');
// Our Controllers
const DepartmentController = require('../controllers/DepartmentController');
const UserController = require('../controllers/UserController');
const CourseController = require('../controllers/CourseController');

// const { a, b, c } = require() => a b c
// const f = require() => f.a f.b f.c

// http header contains '/api'
const router = new Router({
    prefix: '/api'
});

// DepartmentInfo
router
    .get('/department/all', DepartmentController.readAllDepartment)
    .put('/department', DepartmentController.createDepartment)

// UserInfo
router
    .get('/user/all', UserController.readAllUser)
    .put('/user', UserController.createUser)

// CourseInfo
router
    .get('/course/all', CourseController.readAllCourse)
    .put('/course', CourseController.createCourse)



module.exports = router;