import { cloneDeep } from "lodash";
import router from "@/router";

// js获取url参数 path: /about?name=zx&age=18
export function getQuery(key, path) {
  const query = {};
  const url = path || window.location.href;
  const index = url.indexOf("?");
  if (index !== -1) {
    const str = url.substr(index + 1);
    const strs = str.split("&");
    strs.forEach((item) => {
      const temp = item.split("=");
      query[temp[0]] = temp[1];
    });
  }
  if (key) {
    return query[key];
  }
  return query;
}
export function getPath() {
  return window.location.href.split("?")[0];
}

// 获取当前路由参数
export function getRouteQuery(key) {
  const { query } = router.history.current;
  if (key) {
    return query[key];
  }
  return query;
}

// 手动改变当前路由参数
export function changeRoute(newQuery) {
  const { path } = getPath();
  const currentQuery = getRouteQuery();

  Object.keys(newQuery).forEach((key) => {
    if (!newQuery[key]) {
      delete newQuery[key];
    }
  });

  // 判断currentQuery newQuery 是否相同
  let isSame = JSON.stringify(currentQuery) === JSON.stringify(newQuery);
  if (isSame) {
    return;
  }

  // 与当前路由参数合并
  // Object.assign(newQuery, currentQuery);

  router.push({
    path,
    query: newQuery,
  });
}

// 增量更新路由参数
export function updateRoute(newQuery) {
  const currentQuery = getRouteQuery();
  changeRoute({
    ...currentQuery,
    ...newQuery,
  });
}
// 监听路由参数变化
export function watchRouteChange(to, from, next) {
  const toQuery = to.query;
  const fromQuery = from.query;
  // 变化的字段及值
  let changeQuery = {
    to: {},
    from: {},
  };
  Object.keys(toQuery).forEach((key) => {
    if (toQuery[key] !== fromQuery[key]) {
      changeQuery.to[key] = toQuery[key];
      changeQuery.from[key] = fromQuery[key];
    }
  });
  next(changeQuery);
}
// 封装路由query保持不变
export function keepRouteQuery({ path, query,...rest }) {
  const currentQuery = getRouteQuery();
  
  router.push({
    ...rest,
    path,
    query: {
      ...currentQuery,
      ...query,
    },
  });
}
