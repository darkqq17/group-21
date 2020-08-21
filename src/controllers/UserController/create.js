const User = require("./common");
const UserInfo = require("./common");

async function createUser(ctx) {
    const { userid, username, usercredential, userdepartment, usersalt, createdat, isdeleted, isadmin } = ctx.request.body;
    if(userid && username && usercredential && userdepartment && usersalt && createdat && isdeleted && isadmin) {
        const createdUser = await User.create({
            user_id: userid,
            user_realname: username,
            user_credential: usercredential,
            user_department: userdepartment,
            user_salt: usersalt,
            createdAt: createdat,
            isDeleted: isdeleted,
            isAdmin: isadmin,
        });
    
        ctx.body = createUser ? {
            status: "success",
            data: createUser
        } : {
            status: "fail",
            data: null
        }
    } else {
        ctx.body = {
            status: "fail",
            data: null
        }
    }
    
}

async function getUserNumByName(ctx){
    const { userid, userpassword } = ctx.request.body;
    if( userpassword && userid ){
        const user = await User.login({
            user_id : userid,
            user_pwd : userpassword
        });
    }
}

/*async function getUserNumByName(userid, userpwd, callback) {
    //使用userid 來檢查是否有資料

    const cmd = UserInfo.query(cmd, [userid], [userpwd], function (err, result) {
         if (err) {
             return;
         }
         connection.release();
         //查詢結果使用 callback 呼叫，並將 err, result 參數帶入
         callback(err,result);                    
     });       
};*/

module.exports = {
    createUser,
    getUserNumByName
}