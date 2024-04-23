<template>
  <div :class="prefixClass('container-ghost-bs')">
    <div
      v-if="$slots.header"
      :class="prefixClass('container-ghost-bs__header')"
      ref="header"
    >
      <slot name="header" />
    </div>
    <div :class="prefixClass('container-ghost-bs__body')" ref="wrapper">
      <!-- https://github.com/d2-projects/d2-admin/issues/181 -->
      <div>
        <slot />
      </div>
    </div>
    <div
      v-if="$slots.footer"
      :class="prefixClass('container-ghost-bs__footer')"
      ref="footer"
    >
      <slot name="footer" />
    </div>
  </div>
</template>

<script>
import bs from "./mixins/bs";
import { prefixClass } from "../../utils/core.js";

export default {
  name: "d2-container-card-bs",
  mixins: [bs],
  data() {
    return {
      prefixClass,
    };
  },
};
</script>
