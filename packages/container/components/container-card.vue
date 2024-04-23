<template>
  <div :class="prefixClass('container-card')">
    <div
      v-if="$slots.header"
      :class="prefixClass('container-card__header')"
      ref="header"
    >
      <slot name="header" />
    </div>
    <div :class="prefixClass('container-card__body')" ref="body">
      <div :class="prefixClass('container-card__body-card')">
        <slot />
      </div>
    </div>
    <div
      v-if="$slots.footer"
      :class="prefixClass('container-card__footer')"
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
  name: "d2-container-card",
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
