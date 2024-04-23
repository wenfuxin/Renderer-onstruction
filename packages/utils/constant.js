import { mockGetWorkItemList, mockGetUserList } from "./api-mock";

export const FORM_GRID_COMPONENT_MAP = {
  input: "c-input",
  select: "c-select",
  "input-number": "c-input-number",
  "input-textarea": "c-input-textarea",
  link: "c-link",
  "select-multiple": "c-select-multiple",
  "time-picker": "c-time-picker",
  "date-picker": "c-date-picker",
  "date-time-picker": "c-date-time-picker",
  "select-task": "c-select-task",
  "select-user": "c-select-user",
  "select-priority": "c-select-priority",
  "cascader-multiple": "c-cascader-multiple",
  cascader: "c-cascader",
};

export const DEFAULT_GRIDFORM_CONFIG = {
  rowSpace: "small", // none small medium
  span: 24,
  gutter: 20,
  labelWidth: "140px",
  block: false,
};

export const SELECT_TASK_CONFIG = {
  request: mockGetWorkItemList,
  handleResult: (res) => res,
  defaultParams: {},
  defaultProps: { label: "taskName", value: "id" },
};

// 优先级配置
export const SELECT_PRIORITY_CONFIG = {
  options: [
    { label: "高", value: 2, color: "#F2392E", icon: "priority" },
    { label: "中", value: 1, color: "#FF9900", icon: "priority" },
    { label: "低", value: 0, color: "#52C41A", icon: "priority" },
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

// prefix
export const PREFIX = "c";
