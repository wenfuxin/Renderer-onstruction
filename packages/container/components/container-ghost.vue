<template>
  <div :class="prefixClass('container-ghost')">
    <div
      v-if="$slots.header"
      :class="prefixClass('container-ghost__header')"
      ref="header"
    >
      <slot name="header" />
    </div>
    <div :class="prefixClass('container-ghost__body')" ref="body">
      <slot />
    </div>
    <div
      v-if="$slots.footer"
      :class="prefixClass('container-ghost__footer')"
      ref="footer"
    >
      <slot name="footer" />
    </div>
  </div>
</template>

<script>
import scroll from "./mixins/normal";
import { prefixClass } from "../../utils/core.js";

export default {
  name: "d2-container-ghost",
  mixins: [scroll],
  mounted() {
    // 增加滚动事件监听
    this.addScrollListener();
  },
  beforeDestroy() {
    // 移除滚动事件监听
    this.removeScrollListener();
  },
  data() {
    return {
      prefixClass,
    };
  },
};
</script>
