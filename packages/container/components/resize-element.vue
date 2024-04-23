<template>
  <div ref="iframe" v-resize="resize"><slot></slot></div>
</template>
<script>
export default {
  name: "c-resize-element",
  directives: {
    resize: {
      bind(el, binding) {
        let width = "";
        let height = "";
        function isReize() {
          const style = document.defaultView.getComputedStyle(el);
          if (width !== style.width || height !== style.height) {
            binding.value(); // 关键
          }
          width = style.width;
          height = style.height;
        }
        el.__vueSetInterval__ = setInterval(isReize, 300);
      },
      unbind(el) {
        clearInterval(el.__vueSetInterval__);
      },
    },
  },
  methods: {
    resize() {
      const width = this.$refs.iframe.offsetWidth;

      const height = this.$refs.iframe.offsetHeight;
      console.log("width", width);
      this.$emit("resize", {
        width: width,
        height: height,
      });
    },
  },
};
</script>

<style></style>
