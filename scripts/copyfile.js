const path = require("path");
const fs = require("fs");

// 获取oldFile文件夹，newFile的绝对路径
let OriginFilePath = path.resolve(__dirname, "../examples");
 
let CopyFilePath = path.resolve(__dirname, "../lib/examples");

 
let OriginExamplesFilePath = path.resolve(__dirname, "../packages");

let CopyExamplesFilePath = path.resolve(__dirname, "../lib/packages");

//判断要创建的文件夹（newFile）是否存在，不存在就创建一个
if (!fs.existsSync(CopyFilePath)) {
  fs.mkdir(CopyFilePath, (err) => {
    // console.log(err)
  });
}
//传入路径
getFiles(OriginFilePath, CopyFilePath);
getFiles(OriginExamplesFilePath, CopyExamplesFilePath);
function getFiles(OriginFilePath, CopyFilePath) {
  //读取newFile文件夹下的文件
  fs.readdir(OriginFilePath, { withFileTypes: true }, (err, files) => {
    for (let file of files) {
      //判断是否是文件夹，不是则直接复制文件到newFile中
      if ("node_modules" === file.name) continue;
      if (!file.isDirectory()) {
        //获取旧文件夹中要复制的文件
        const OriginFile = path.resolve(OriginFilePath, file.name);
        //获取新文件夹中复制的地方
        const CopyFile = path.resolve(CopyFilePath, file.name);
        //将文件从旧文件夹复制到新文件夹中
        fs.copyFileSync(OriginFile, CopyFile);
      } else {
        //如果是文件夹就递归变量把最新的文件夹路径传过去
        const CopyDirPath = path.resolve(CopyFilePath, file.name);
        const OriginDirPath = path.resolve(OriginFilePath, file.name);
        fs.mkdir(CopyDirPath, (err) => {});
        // OriginFilePath = OriginPath
        // CopyFilePath = DirPath
        getFiles(OriginDirPath, CopyDirPath);
      }
    }
  });
}

// package.json 版本号自动更新

const packageJson = require("../package.json");
const version = packageJson.version;
const versionArr = version.split(".");
versionArr[2] = Number(versionArr[2]) + 1;
const newVersion = versionArr.join(".");
packageJson.version = newVersion;
fs.writeFileSync(
  path.resolve(__dirname, "../package.json"),
  JSON.stringify(packageJson, null, 2)
);
console.log("版本号更新成功" + newVersion);

//更新记录写入文件README.md
const log = `## v${newVersion} (${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()})`;
const logPath = path.resolve(__dirname, "../README.md");
const logStr = fs.readFileSync(logPath, "utf8");
const newLog = log + "\n" + logStr;
fs.writeFileSync(logPath, newLog);
console.log("更新记录写入成功");
