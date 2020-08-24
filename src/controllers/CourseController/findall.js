const Course = require("./common");

async function findallCourse(ctx) {
    const findallCourse=await Course.findAll({ where: { course_limit:ctx.request.body.course_limit } });
    
    ctx.body = findallCourse ? {
        status: "success",
        data: findallCourse
    } : {
        status: "failed",
        data: null
    }
   // ctx.redirect('/view/index.html');
}

module.exports = {
    findallCourse
}