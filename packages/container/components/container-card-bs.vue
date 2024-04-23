<template>
  <div :class="prefixClass('container-card-bs')">
    <div
      v-if="$slots.header"
      ref="header"
      :class="prefixClass('container-card-bs__header')"
    >
      <slot name="header" />
    </div>
    <div ref="wrapper" :class="prefixClass('container-card-bs__body')">
      <div class="d2-container-card-bs__body-wrapper-inner">
        <div class="d2-container-card-bs__body-card">
          <slot />
        </div>
      </div>
    </div>
    <div v-if="$slots.footer" class="d2-container-card-bs__footer" ref="footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<script>
import bs from "./mixins/bs";
import { prefixClass } from "../../utils/core.js";
export default {
  mixins: [bs],
  data() {
    return {
      prefixClass,
    };
  },
};
</script>
