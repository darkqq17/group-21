const User = require("./common");

async function deleteUser(ctx) {
    await User.destroy({
        where: {
            user_id: ctx.request.body.user_id,
            user_password: ctx.request.body.user_password
        }
    })

    ctx.body = deleteUser ? {
        status: "success",
        data: deleteUser
    } : {
            status: "fail",
            data: null
        }

}

module.exports = {
    deleteUser
}