const Department = require("./common");

async function updateDepartment(ctx) {
        Department.update({
            department_id: ctx.request.body.department_id,
            department_name: ctx.request.body.department_name,
            department_semester: ctx.request.body.department_semester,
        }, {
            where: {
                department_id: ctx.request.body.departmentid,
            }
        })

        ctx.body = updateDepartment ? {
            status: "success",
            data: updateDepartment
        } : {
                status: "fail",
                data: null
            }
}

module.exports = {
    updateDepartment
}