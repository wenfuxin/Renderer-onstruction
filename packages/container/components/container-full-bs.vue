<template>
  <div :class="prefixClass('container-full-bs')">
    <div
      v-if="$slots.header"
      :class="prefixClass('container-full-bs__header')"
      ref="header"
    >
      <slot name="header" />
    </div>
    <div :class="prefixClass('container-full-bs__body')" ref="wrapper">
      <div :class="prefixClass('container-full-bs__body-wrapper-inner')">
        <slot />
      </div>
    </div>
    <div
      v-if="$slots.footer"
      :class="prefixClass('container-full-bs__footer')"
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
  methods: {
    prefixClass,
  },
};
</script>
