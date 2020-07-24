const User = require("./common");

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

module.exports = {
    createUser
}