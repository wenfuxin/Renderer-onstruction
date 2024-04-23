// 基于localstorage本地存区对象

const setLocalStroge = (key, value) => {
  // 保存value及其类型到localstorage
  const type = typeof value;
  const data = {
    value,
    type,
  };
  localStorage.setItem(key, JSON.stringify(data));
};

const getLocalStroge = (key) => {
  const data = localStorage.getItem(key);
  if (!data) {
    return null;
  }
  try {
    const { value } = JSON.parse(data);
    return value;
  } catch (e) {
    return null;
  }
};
// 获取localstorage中数据类型
const getLocalStrogeType = (key) => {
  const data = localStorage.getItem(key);
  if (!data) {
    return null;
  }
  try {
    const { type } = JSON.parse(data);
    return type;
  } catch (e) {
    return null;
  }
};

export { setLocalStroge, getLocalStroge, getLocalStrogeType };
