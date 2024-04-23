const path = require("path");
const fs = require("fs");

// 获取oldFile文件夹，newFile的绝对路径
let OriginFilePath = path.resolve(__dirname, "../project/zxvue");
let CopyFilePath = path.resolve(__dirname, "../lib/code");
const whiteList = ["node_modules", "dist", "build", "public", "lib", "logs"];
const deleteConsole = (filePath) => {
  const files = fs.readdirSync(filePath);
  files.forEach((file) => {
    const curPath = filePath + "/" + file;
    const stat = fs.statSync(curPath);
    if (stat.isDirectory()) {
      if (whiteList.indexOf(file) === -1) {
        deleteConsole(curPath);
      }
    } else {
      if (file.endsWith(".js")) {
        let content = fs.readFileSync(curPath, "utf8");
        content = content.replace(/console.log\(.+\);?/g, "");
        content = content.replace(/debugger;?/g, "");
        fs.writeFileSync(curPath, content);
      }
    }
  });
};
deleteConsole(OriginFilePath);
