export default {
  bind(el, binding) {
    // 在元素上绑定一个点击事件监听器
    el.clickOutsideEvent = function (event) {
      // 检查点击事件是否发生在元素的内部
      if (!(el === event.target || el.contains(event.target))) {
        // 如果点击事件发生在元素的外部，则触发指令绑定的方法,将点击的event数据传过去
        binding.value(event);
      }
    };
    // 在文档上添加点击事件监听器
    document.addEventListener("click", el.clickOutsideEvent);
  },
  unbind(el) {
    // 在元素上解除点击事件监听器
    document.removeEventListener("click", el.clickOutsideEvent);
  },
} 