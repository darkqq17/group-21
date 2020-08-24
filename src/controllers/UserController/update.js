const User = require("./common");

async function updateUser(ctx) {
    User.update({
        user_id: ctx.request.body.user_id,
        user_realname: ctx.request.body.user_realname,
        user_credential: ctx.request.body.user_credential,
        user_department: ctx.request.body.user_department,
        user_salt: ctx.request.body.user_salt,
        createdAt: ctx.request.body.createdAt,
        isDeleted: ctx.request.body.isDeleted,
        isAdmin: ctx.request.body.isAdmin,
        user_password: ctx.request.body.user_password
    }, {
        where: {
            user_id: ctx.request.body.user_id
        }
    })

    ctx.body = updateUser ? {
        status: "success",
        data: updateUser
    } : {
            status: "fail",
            data: null
        }
}

module.exports = {
    updateUser
}