// koa-router
const Router = require('koa-router');
// Our Controllers
const DepartmentController = require('../controllers/DepartmentController');
const UserController = require('../controllers/UserController');
const CourseController = require('../controllers/CourseController');

const crypto = require('crypto');
const User = require('../models/user_info.js');
const title = '登入';

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
    .put('/user', UserController.getUserNumByName)

// CourseInfo
router
    .get('/course/all', CourseController.readAllCourse)
    .put('/course', CourseController.createCourse)

    router.get('/user/login', function(req, res) {
        res.render('login', {title:title});
    });
    
    
    router.post('/user/login', function(req, res) {
        const userName = req.body['txtUserName'],
              userPwd = req.body['txtUserPwd'],
              md5 = crypto.createHash('md5');
          
        User.getUserByUserName(userName, function (err, results) {                           
            if(results == '') {
                res.locals.error = '使用者不存在';
                res.render('login',{title:title});
                return;
            }
    
    
            userPwd = md5.update(userPwd).digest('hex');
            if(results[0].UserName != userName || results[0].UserPass != userPwd) {
                res.locals.error = '使用者帳號或密碼錯誤';
                res.render('login',{title:title});
                return;
            } else {
                res.locals.username = userName;
                //設定session
                req.session.username = res.locals.username; 
                console.log(req.session.username);                       
                res.redirect('/');
                return;
            }    
        });             
    });

module.exports = router;