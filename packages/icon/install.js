// 动态引入本目录下后缀为.vue的文件
const requireComponent = require.context("./", true, /\.vue$/);
const components = requireComponent.keys().map((fileName) => {
  const componentConfig = requireComponent(fileName);
  const componentName = fileName.replace(/^\.\//, "").replace(/\.\w+$/, "");
  return {
    name: componentName,
    component: componentConfig.default || componentConfig,
  };
});

//import "./theme/index.scss";

const install = function (Vue, opts = {}) {
  if (install.installed) return;
  components.forEach((component) =>
    Vue.component(component.name, component.component)
  );

  const SHAPE = opts.shape || "default";

  Vue.prototype.$CICON = {
    SHAPE,
  };
};

/* istanbul ignore if */
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export default {
  version: "0.0.1",
  install,
  ...components,
};
