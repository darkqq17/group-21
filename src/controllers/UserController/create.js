const User = require("./common");
const UserInfo = require("./common");

async function createUser(ctx) {
        await User.create({
            user_id: ctx.request.body.user_id,
            user_realname: ctx.request.body.user_realname,
            user_credential: ctx.request.body.user_credential,
            user_department: ctx.request.body.user_department,
            user_salt: ctx.request.body.user_salt,
            createdAt: ctx.request.body.createdAt,
            isDeleted: ctx.request.body.isDeleted,
            isAdmin: ctx.request.body.isAdmin,
            user_password: ctx.request.body.user_password
        });
    
        ctx.body = createUser ? {
            status: "success",
            data: createUser
        } : {
            status: "fail",
            data: null
        }
}

/*async function loginUser(inputid,ctx){
   
    const oneuser= await User.findOne({
        where: { user_id: inputid }
    })

    ctx.body = oneuser ? {
        status: "success",
        data: oneuser
    } : {
        status: "failed",
        data: null
    }
}*/

async function loginpageUser(ctx) {
    await ctx.render("login", { user_info: {} });
}

async function loginUser(ctx){
    await User.findOne({
       where:{ user_id:ctx.params.user_id,
       user_password:ctx.params.user_password }
    }).then(task=>{
       ctx.render("index", { user_info: {} });
    }).catch(err=>{ctx.body='error:'+err})}

async function signuppageUser(ctx) {
    await ctx.render("form", { user_info: {} });
}

async function signupUser(ctx) {
   if(!ctx.request.body.user_id){
       ctx.body={ error:bad };
    }
   else{
   await User.create(ctx.request.body)
   .then(task=>{
       ctx.body=task;
   })
   .catch(err=>{
       ctx.body='error:'+err
   })
}}

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
    loginUser,
    loginpageUser,
    signuppageUser,
    signupUser
}