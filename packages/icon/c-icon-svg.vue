<template>
  <div class="c-icon-svg">
    <span
      v-if="fill"
      class="c-icon--fill"
      :style="iconStyleFill"
      :class="`c-icon--fill--${shape}`"
    >
      <svg class="svgreset"><use :xlink:href="iconClass"></use></svg>
    </span>
    <span v-else :style="iconStyle">
      <svg class="svgreset" aria-hidden="true">
        <use :xlink:href="iconClass"></use>
      </svg>
    </span>
  </div>
</template>

<script>
const requireAll = (requireContext) =>
  requireContext.keys().map(requireContext);
const req = require.context("@/assets/svg-icons/icons", false, /\.svg$/);
console.log("req", req);
requireAll(req);
export default {
  name: "c-icon-svg",
  props: {
    color: {
      type: String,
      default: "#409eff",
    },
    size: {
      type: String,
      default: "16px",
    },
    shape: {
      type: String,
      default: "circle",
    },
    fill: {
      type: Boolean,
      default: false,
    },
    fillTextColor: {
      type: String,
      default: "#ffffff",
    },
    renderMethod: {
      type: String,
      default: "svg",
    },
    multiColor: {
      type: Boolean,
      default: false,
    },

    iconName: {
      type: String,
      required: true,
    },
  },
  computed: {
    iconClass() {
      return "#" + this.iconName;
    },
    iconStyle() {
      return {
        color: this.color,
        fontSize: this.size,
      };
    },
    iconStyleFill() {
      return {
        backgroundColor: this.color,
        fontSize: this.size,
        color: this.fillTextColor,
        borderRadius: this.shape === "circle" ? "50%" : "2px",
      };
    },
  },
  data() {
    return {};
  },
  watch: {},
};
</script>

<style lang="scss">
.c-icon-svg {
  display: inline-block;
  .c-icon--fill {
    color: #fff;
  }
  .c-icon--fill--circle {
    border-radius: 50%;
    padding: 0.2em;
  }
  .c-icon--fill--square {
    border-radius: 2px;
    padding: 0.1em;
  }
  .svgreset {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
}
</style>
