const Department = require("./common");

async function createDepartment(ctx) {
    Department.create({
        department_id: ctx.request.body.department_id,
        department_semester: ctx.request.body.department_semester,
    })

    ctx.body = createDepartment ? {
        status: "success",
        data: createDepartment
    } : {
            status: "fail",
            data: null
        }
}

/*async function createDepartment(ctx) {
    const { departmentName, departmentSemester } = ctx.request.body;
    if(departmentName && departmentSemester) {
        const createdDepartment = await Department.create({
            department_id: departmentName,
            department_semester: departmentSemester
        });
    
        ctx.body = createDepartment ? {
            status: "success",
            data: createDepartment
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
    
}*/

module.exports = {
    createDepartment
}