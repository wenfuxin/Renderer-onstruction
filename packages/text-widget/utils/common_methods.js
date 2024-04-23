import { isEmptyValue } from "../../utils/core.js";

// 输入类型组件为空时的默认值
export const inputDefault = (value) => {
  if (isEmptyValue(value)) {
    return "未填写";
  }
  return value;
};

// 时间类型组件为空时的默认值
export const dateDefault = (value) => {
  if (isEmptyValue(value)) {
    return "未选择";
  }

  return value;
};
// 下拉类型组件为空时的默认值
export const selectDefault = (value) => {
  if (isEmptyValue(value)) {
    return "未选择";
  }
  return value;
};

// 级联类型组件为空时的默认值
export const cascaderDefault = (value) => {
  if (isEmptyValue(value)) {
    return "未选择";
  }
  return value;
};

export { isEmptyValue };
