// 递归获取packages目录下所有目录的vue文件和路径生成json文件
//
const fs = require("fs");
const path = require("path");
const resolve = (dir) => path.join(__dirname, dir);
const packages = resolve("../packages");
const json = {};
const components = [];
const files = fs.readdirSync(packages);
files.forEach((item) => {
  const stat = fs.lstatSync(path.join(packages, item));
  if (stat.isDirectory() === true) {
    components.push(item);
  }
});
components.forEach((item) => {
  const files = fs.readdirSync(path.join(packages, item));
  files.forEach((file) => {
    if (file === "index.js") {
      const patha = `packages/${item}/${file}`;
      json[item] = patha;

      console.log(`跳过${item}的index.js文件`);

      return;
    }
    const stat = fs.lstatSync(path.join(packages, item, file));
    if (stat.isDirectory() === true) {
      return;
    }
    const name = file.replace(/\.vue$/, "");

    // 文件为vue文件
    if (file.indexOf(".vue") !== -1) {
      const patha = `packages/${item}/${file}`;
      json[name] = patha;
      return;
    }
  });
});
console.log(json);

const jsonPath = path.resolve(__dirname, "../components.json");
// json写入文件
fs.writeFileSync(jsonPath, JSON.stringify(json, null, 2));

console.log("组件列表生成成功");
