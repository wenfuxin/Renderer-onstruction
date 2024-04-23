// 工作项任务配置
import { mockGetWorkItemList, mockGetUserList } from "@/utils/i";
export const SELECT_TASK_CONFIG = {
  request: mockGetWorkItemList,
  handleResult: (res) => res,
  defaultParams: {},
  defaultProps: { label: "taskName", value: "id" },
};

// 优先级配置
export const SELECT_PRIORITY_CONFIG = {
  options: [
    {
      label: "高",
      value: 2,
      color: "#F2392E",
      icon: "priority",
    },
    {
      label: "中",
      value: 1,
      color: "#FF9900",
      icon: "priority",
    },
    {
      label: "低",
      value: 0,
      color: "#52C41A",
      icon: "priority",
    },
  ],
};

// 用户配置
export const SELECT_USER_CONFIG = {
  request: mockGetUserList,
  handleResult: (res) => res,
  defaultParams: {},
  defaultProps: { label: "name", value: "id" },
};

// icon类型配置 svg font-class
export const SELECT_ICON_CONFIG = {
  TASK_ICON: "font-class",
};
