// import Vue from 'vue'
// import RenSvgIcon from '@/components/icon-svg' // svg组件

// // register globally
// Vue.component('icon-svg', RenSvgIcon)

const requireAll = (requireContext) =>
  requireContext.keys().map(requireContext);
const req = require.context("./icons", false, /\.svg$/);

requireAll(req);
