const Course = require("./common");

async function deleteCourse(ctx) {
    //if (course_id && course_name) {
    await Course.destroy({
        where: {
            course_id: ctx.request.body.course_id,
            course_name: ctx.request.body.course_name
        }
    })

    ctx.body = deleteCourse ? {
        status: "success",
        data: deleteCourse
    } : {
            status: "fail",
            data: null
        }

}

module.exports = {
    deleteCourse
}