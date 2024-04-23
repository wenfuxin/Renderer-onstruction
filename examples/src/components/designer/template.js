// widget基础配置
const widgetdefaultConfig = {
  name: "",
  description: "",
  permission: ["delete", "edit", "copy", "move", "export", "import"],
};

const widgetGrouptOptions = [
  { name: "空间", value: "space" },
  { name: "文档管理", value: "document" },
  { name: "仪表盘", value: "dashboard" },
];

let defaultOptions = {
  // 我负责的工作项
  "my-workitem": {
    name: "我负责的工作项",
    type: "my-workitem",
    component: "my-workitem",
    description:
      "显示我负责的工作项的状态、数量，可选择显示方式，如柱状图、饼图、表格",
    group: "space",
  },
  // 我的面板组件
  "my-panel": {
    name: "我的面板组件",
    type: "my-panel",
    component: "my-panel",
    group: "space",
    description: "我创建的面板，按所属空间显示",
  },
  // 我参与的冲刺
  "my-sprint": {
    name: "我参与的冲刺",
    type: "my-sprint",
    component: "my-sprint",
    group: "space",
    description: "我参与的、活动中的冲刺，显示冲刺的起止时间、完成时间、燃尽图",
  },
  // 我关注的空间
  "my-follow-space": {
    name: "我关注的空间",
    type: "my-follow-space",
    component: "my-follow-space",
    group: "space",
    description: "我关注的空间列表",
  },
  // 我关注的工作项
  "my-follow-workitem": {
    name: "我关注的工作项",
    type: "my-follow-workitem",
    component: "my-follow-workitem",
    group: "space",
    description:
      "我专注的工作项列表，按优先级、更新时间降序排列，以及工作项的最新动态",
  },
};
let widgetOptions = [];
// 组件与组件类型映射

let widgetTypeMap = {};
for (let key in defaultOptions) {
  defaultOptions[key] = Object.assign(
    {},
    widgetdefaultConfig,
    defaultOptions[key]
  );
  widgetOptions.push(defaultOptions[key]);
  widgetTypeMap[defaultOptions[key].type] = defaultOptions[key].component;
}
 

export { defaultOptions, widgetOptions, widgetGrouptOptions,widgetTypeMap };
