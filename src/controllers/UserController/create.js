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




module.exports = {
    createUser
}