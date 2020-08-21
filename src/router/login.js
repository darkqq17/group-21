const router = require('koa-router'),
    User = require('../models/user_info.js'),
    crypto = require('crypto'),
    title = '登入';


router.post('/', function(req, res) {
    const userName = req.body['txtUserName'],
          userPwd = req.body['txtUserPwd'],
          md5 = crypto.createHash('md5');
      
    User.getUserByUserName(userName, function (err, results) {                           
        if(results == '') {
            res.locals.error = '使用者不存在';
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