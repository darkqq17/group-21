const Department = require("./common");

async function findallDepartmemt(ctx) {
    const findallDepartmemt = await Department.findAll({
        where: {
            course_limit: ctx.request.body.course_limit
        }
    });

    ctx.body = findallDepartmemt ? {
        status: "success",
        data: findallDepartmemt
    } : {
            status: "failed",
            data: null
        }
    // ctx.redirect('/view/index.html');
}

module.exports = {
    findallDepartmemt
}