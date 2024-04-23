import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

// views/demo 目录下所有vue文件动态生成路由 name为vue组件的displayName
const files = require.context("../views/demo", true, /\.vue$/);
const routes_demo = [];
files.keys().forEach((key) => {
  const title = files(key).default.displayName;
  const name = files(key).default.name;
  routes_demo.push({
    path: `/${name}`,
    name,
    meta: {
      title: title,
    },
    component: files(key).default,
  });
});


 
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },

  ...routes_demo,
];

const router = new VueRouter({
  routes,
});

export default router;
