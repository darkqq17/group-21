const User = require("./common");


async function readAllUser(ctx) {
    const allUser = await User.findAll();
    ctx.body = allUser ? {
        status: "success",
        data: allUser
    } : {
        status: "failed",
        data: null
    }
   // ctx.redirect('/view/index.html');
}

module.exports = {
    readAllUser
}