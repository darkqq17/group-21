const DepartmentRule = require("./common");

async function readAllRule(ctx) {
  const allRule = await DepartmentRule.findAll();
  ctx.body = allRule
    ? {
        status: "success",
        data: allRule,
      }
    : {
        status: "failed",
        data: null,
      };
  // ctx.redirect('/view/index.html');
}

module.exports = {
  readAllRule,
};
