const Course = require("./common");

async function updateCourse(ctx) {
    Course.update({
        course_id: ctx.request.body.course_id,
        course_name: ctx.request.body.course_name,
        course_information: ctx.request.body.course_information,
        course_credit: ctx.request.body.course_credit,
        course_instructor: ctx.request.body.course_instructor,
        course_semester: ctx.request.body.course_semester,
        course_time: ctx.request.body.course_time,
        course_classroom: ctx.request.body.course_classroom,
        course_limit: ctx.request.body.course_limit,
        course_key: ctx.request.body.course_key
    }, {
        where: {
            course_id: ctx.request.body.course_id
        }
    })

    ctx.body = updateCourse ? {
        status: "success",
        data: updateCourse
    } : {
            status: "fail",
            data: null
        }
}

module.exports = {
    updateCourse
}