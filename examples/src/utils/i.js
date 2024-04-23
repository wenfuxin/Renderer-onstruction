import Mock from "mockjs";
import { sortArrayByKey } from "./c-core.js";
// 判断对象是否为空 没有key
export function isEmptyObject(obj) {
  return Object.keys(obj).length === 0;
}

// 时间轴相邻的时间如果相同合并
export function mergeTimeLine(list) {
  let newList = [];
  list.forEach((item, index) => {
    if (index === 0) {
      newList.push(item);
    } else {
      let lastItem = newList[newList.length - 1];
      if (lastItem.time === item.time) {
        lastItem.children.push(item);
      } else {
        newList.push(item);
      }
    }
  });
  return newList;
}

// mock数据查询用户列表,筛选条件username 延迟1s
export function mockGetUserList({ sex, username }) {
  console.log("傻逼");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // 从localstorage中获取用户列表
      let users = [];
      if (localStorage.getItem("users")) {
        users = JSON.parse(localStorage.getItem("users"));
      } else {
        for (let i = 0; i < 10; i++) {
          users.push(
            Mock.mock({
              id: "@guid",
              // 排序编号
              sort: i,
              //username: "@cname",
              "age|18-60": 1,
              address: "@county(true)",
              date: "@date",
              sex: "@pick(['男', '女'])",
              createAt: "@datetime",
              updateAt: "@datetime",
              nickName: "@last",
              email: "@EMAIL",
              empAccount: "@string(upper, 5)", // 员工账号
              empld: "@string(upper, 5)",
              enabled: "@boolean",
              name: "@cname", // 姓名
              directory: "@string(upper, 5)",
            })
          );
        }
        localStorage.setItem("users", JSON.stringify(users));
      }

      if (username) {
        users = users.filter((item) => item.username.indexOf(username) > -1);
      }
      if (sex) {
        users = users.filter((item) => item.sex.indexOf(sex) > -1);
      }

      const sortUsers = sortArrayByKey(users, "sort", "asc");

      resolve(sortUsers);
    }, 1000);
  });
}

//mock 拖拽保存用户
export function mockDropSaveUserList(ids) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let users = [];
      if (localStorage.getItem("users")) {
        users = JSON.parse(localStorage.getItem("users"));
      }

      // 重新排序
      let newUsers = [];
      ids.forEach((id) => {
        let user = users.find((item) => item.id === id);
        newUsers.push(user);
      });

      localStorage.setItem("users", JSON.stringify(newUsers));
      resolve(users);
    }, 1000);
  });
}

// 保存用户信息
export function mockSaveUser(user) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let users = [];
      if (localStorage.getItem("users")) {
        users = JSON.parse(localStorage.getItem("users"));
      }
      if (user.id) {
        users = users.map((item) => {
          if (item.id === user.id) {
            return user;
          }
          return item;
        });
      } else {
        users.push(user);
      }
      localStorage.setItem("users", JSON.stringify(users));
      resolve(users);
    }, 1000);
  });
}

// mock数据查询工作项列表,筛选条件工作项名称 编码
// taskName priority taskStatusName taskTypeName taskTypeIcon
export function mockGetWorkItemList({ name, code }) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // 从localstorage中获取
      let workItems = [];
      if (localStorage.getItem("workItems")) {
        workItems = JSON.parse(localStorage.getItem("workItems"));
      } else {
        for (let i = 0; i < 10; i++) {
          workItems.push(
            Mock.mock({
              id: "@increment",
              taskName: "@ctitle(5, 20)",
              taskCode: "@string(upper, 5)",
              "priority|1-3": 1,
              "taskStatusName|1": ["待处理", "处理中", "已完成"],
              "taskTypeName|1": ["任务", "缺陷", "需求"],
              "taskTypeIcon|1": [
                "Requirement|#56C22C",
                "Story|#F56C6C",
                "anquanzhongxin|#409EFF",
              ],
            })
          );
        }
        localStorage.setItem("workItems", JSON.stringify(workItems));
      }
      if (name) {
        workItems = workItems.filter((item) => item.name.indexOf(name) > -1);
      }
      if (code) {
        workItems = workItems.filter((item) => item.code.indexOf(code) > -1);
      }
      resolve(workItems);
    }, 1000);
  });
}
//  查询树形结构-组织机构
export function mockGetOrgTree({ type }) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let orgTree = [];

      // mock数据
      orgTree = [
        {
          pid: 0,
          id: 1,
          name: "组织机构" + type,
          children_element: [
            {
              pid: 1,
              id: 2,
              name: "研发部",
              children_element: [
                {
                  pid: 2,
                  id: 3,
                  name: "前端组",
                },
                {
                  pid: 2,
                  id: 4,
                  name: "后端组",
                },
              ],
            },
            {
              pid: 1,
              id: 5,
              name: "财务部",
              children_element: [
                {
                  pid: 5,
                  id: 6,
                  name: "财务组",
                },
              ],
            },
          ],
        },
      ];

      resolve(orgTree);
    }, 1000);
  });
}
