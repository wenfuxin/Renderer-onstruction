import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "normalize.css/normalize.css"; // A modern alternative to CSS resets
// import element-ui
import ElementUI from "element-ui";
// import "@/assets/style/theme/index.css";
import BeautifulUI from "../../packages/index.js";

import VXETable from "vxe-table";
import "vxe-table/lib/style.css";
import "./assets/css/global.scss";
Vue.config.productionTip = false;
// use element-ui
Vue.use(ElementUI, { zIndex: 3000 });
Vue.use(BeautifulUI);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
