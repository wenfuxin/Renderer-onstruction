const path = require("path");
const fs = require("fs");
let deleteFilePath = path.resolve(__dirname, "../lib/code")
// 删除文件
function deleteFile(path) {
  let files = [];
  if (fs.existsSync(path)) {
    files = fs.readdirSync(path);
    files.forEach((file, index) => {
      let curPath = path + "/" + file;
      if (fs.statSync(curPath).isDirectory()) {
        deleteFile(curPath);
      } else {
        fs.unlinkSync(curPath);
      }
    });
    fs.rmdirSync(path);
  }
}
deleteFile(deleteFilePath)