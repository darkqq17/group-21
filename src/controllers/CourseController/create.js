const Course = require("./common");

async function createCourse(ctx) {
    const { coursename, courseinformation, coursecredit, courseinstructor, coursesemester, coursetime,
        courseclassroom, courselimit, coursekey } = ctx.request.body;
    if(coursename && courseinformation && coursecredit && courseinstructor && coursesemester && coursetime && courseclassroom
        && courselimit && coursekey) {
        const createdDepartment = await Course.create({
            course_id: coursename,
            course_information: courseinformation,
            course_credit: coursecredit,
            course_instructor: courseinstructor,
            course_semester: coursesemester,
            course_time: coursetime,
            course_classroom: courseclassroom,
            course_limit: courselimit,
            course_key: coursekey
        });
    
        ctx.body = createCourse ? {
            status: "success",
            data: createCourse
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
    createCourse
}