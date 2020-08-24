const Department = require("./common");

async function deleteDepartment(ctx) {
   await Department.create({
            department_id: ctx.request.body.department_id,
            department_semester: ctx.request.body.department_semester
        });
    
        ctx.body = deleteDepartment ? {
            status: "success",
            data: deleteDepartment
        } : {
            status: "fail",
            data: null
        }
}

module.exports = {
    deleteDepartment
}