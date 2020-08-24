const DepartmentRule = require("./common");

require("../../database.js");
const fs = require("fs");
const UserInfo = require("../UserController/create");

async function check() {
  switch (rule) {
    case "All_PASS": {
      return course.filter(
        (courseID) => UserInfo.getCourseScore(courseID) < 60
      );
    }
    case "HAS_SELECTED": {
      return course.filter(
        (courseID) => UserInfo.getCourseScore(courseID) !== -1
      );
    }
  }
}

async function selectedcourseuser(ctx) {
  db.user
    .findAll({
      include: [{ model: db.selectedcourse }],
    })
    .then((user) => {
      const resObj = user.map((user) => {
        //tidy up the user data
        return Object.assign(
          {},
          {
            user_id: user.user_id,
            username: user.user_realname,
            department: user.user_department,
            selectedcourse: user.selectedcourse.map((selectedcourse) => {
              return Object.assign(
                {},
                {
                  selection_id: selectedcourse.selection_id,
                  selected_user: selectedcourse.selected_user,
                  course_fk: selectedcourse.course_fk,
                  course_score: selectedcourse.course_score,
                }
              );
            }),
          }
        );
      });
    });
  ctx.body(resObj);
}

//1 source  =>1 target        target  is the model that contains a foreign id/key).

/*const users = await DepartmentRule.findAll({ include : Course });
console.log(JSON.stringify(users, null, 2));
*/

module.exports = {
  check,
  selectedcourseuser,
};



/*const newDepartment = {
    "rule" : "required",
    "course" : ["IM1234"]
}

function writeJson(newDepartment) {
    //先將原本的 json 檔讀出來
    fs.readFile('../../userInfo.json', function (err, userInfo) {
        if (err) {
            return console.error(err);
        }
 //將二進制數據轉換為字串符
        var user = userInfo.toString();
 //將字符串轉換為 JSON 對象
        user = JSON.parse(user);
 //將傳來的資訊推送到數組對象中
        user.userInfo.push(newDepartment);
        user.total = user.userInfo.length;
        console.log(user.userInfo);

 //因為寫入文件（json）只認識字符串或二進制數，所以需要將json對象轉換成字符串
        var str = JSON.stringify(user);
 //將字串符傳入您的 json 文件中
        fs.writeFile('./userInfo.json', str, function (err) {
            if (err) {
                console.error(err);
            }
            console.log('Add new department to userInfo...')
        })
    })
}

*/