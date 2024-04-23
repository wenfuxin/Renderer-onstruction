import { PREFIX } from "./constant";
// 判断值是否为空
export const isEmptyValue = (value) => {
  if (value === null || value === undefined || value === "") {
    return true;
  }
  // 空数组
  if (Array.isArray(value) && value.length === 0) {
    return true;
  }
  //空对象
  if (
    Object.prototype.toString.call(value) === "[object Object]" &&
    Object.keys(value).length === 0
  ) {
    return true;
  }
  return false;
};
// 判断两个数组中的元素是否相等，不考虑顺序 arr1=[{a:1},{b:2}] arr2=[{b:2},{a:1}]
export const isEqualArray = (arr1, arr2, keys) => {
  // arr1 arr2 为数组
  if (Array.isArray(arr1) && Array.isArray(arr2)) {
    // keys为比较的键值 key默认为arr1和arr2的每一项
    if (!keys) {
      keys = Object.keys(arr1[0]);
    }

    if (arr1.length !== arr2.length) {
      return false;
    }
    const arr1Copy = [...arr1];
    const arr2Copy = [...arr2];
    if (keys) {
      arr1Copy.sort((a, b) => {
        return a[keys] - b[keys];
      });
      arr2Copy.sort((a, b) => {
        return a[keys] - b[keys];
      });
    }
    return arr1Copy.every((item, index) => {
      return JSON.stringify(item) === JSON.stringify(arr2Copy[index]);
    });
  }

  // arr1 arr2 仅有一个为数组且另一个不为数组
  if (
    (Array.isArray(arr1) && !Array.isArray(arr2)) ||
    (!Array.isArray(arr1) && Array.isArray(arr2))
  ) {
    return false;
  }

  return false;
};

export const sortArrayByKey = (arr, key, order) => {
  if (order === "asc") {
    return arr.sort((a, b) => {
      return a[key] - b[key];
    });
  } else {
    return arr.sort((a, b) => {
      return b[key] - a[key];
    });
  }
};

// 遍历树 并且改变属性key
export const traverseTree = (tree, prop = {}) => {
  const children = prop.children || "children";
  if (Array.isArray(tree)) {
    tree.forEach((item) => {
      Object.keys(prop).forEach((key) => {
        item[key] = item[prop[key]];
      });
      if (item[children] && Array.isArray(item[children])) {
        traverseTree(item[children], prop);
      }
    });
  }
  return tree;
};

// 判断是否是tree结构(有children), 如果空返回flase
export const isTree = (tree, prop = {}) => {
  const children = prop.children || "children";

  if (isEmptyValue(tree)) {
    return false;
  }
  if (!Array.isArray(tree)) {
    return false;
  }

  if (Object.prototype.toString.call(tree) === "[object Array]") {
    tree = tree[0];
    if (tree[children] && Array.isArray(tree[children])) {
      return true;
    }
  }
  return false;
};

export const getTreeNodeByValue = (value, tree, prop = {}) => {
  const valueKey = prop.value || "value";
  const children = prop.children || "children";
  // 找出tree中value为value的节点
  const node = tree.find((item) => {
    return item[valueKey] === value;
  });
  if (node) {
    return node;
  }
  // 遍历tree的children
  for (let i = 0; i < tree.length; i++) {
    const item = tree[i];
    if (item[children] && Array.isArray(item[children])) {
      const node = getTreeNodeByValue(value, item[children], prop);
      if (node) {
        return node;
      }
    }
  }
  return null;
};

export const findItemFromComplexList = (
  value,
  optionsValue,
  multiple,
  defaultProps = {}
) => {
  // optionsValue is Tree and value is Array and multiple
  if (isTree(optionsValue) && Array.isArray(value) && multiple) {
    let res = [];
    value.forEach((item) => {
      let resItem = [];
      item.forEach((value) => {
        const node = getTreeNodeByValue(value, optionsValue, {
          children: defaultProps.children,
          value: defaultProps.value,
        });
        resItem.push(node);
      });
      res.push(resItem);
    });
    return res;
  }

  // optionsValue is Tree and value is Array and not multiple
  if (isTree(optionsValue) && Array.isArray(value) && !multiple) {
    let res = [];
    value.forEach((item) => {
      const node = getTreeNodeByValue(item, optionsValue, {
        children: defaultProps.children,
        value: defaultProps.value,
      });

      res.push(node);
    });
    return res;
  }

  // optionsValue is Array and value is Array
  if (
    Array.isArray(optionsValue) &&
    optionsValue.length > 0 &&
    Array.isArray(value)
  ) {
    return optionsValue.filter((item) => value.includes(item.value));
  }
  // optionsValue is Array and value is String
  return optionsValue.find((item) => item.value === value);
};
// 判断对象是否相等
export const isEqualObject = (obj1, obj2) => {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }
  return Object.keys(obj1).every((key) => {
    return obj1[key] === obj2[key];
  });
};

export const prefixClass = (name) => {
  return `${PREFIX}-${name}`;
};
