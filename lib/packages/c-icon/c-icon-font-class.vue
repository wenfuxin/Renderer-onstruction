<template>
  <div class="c-icon-font-class">
    <span
      v-if="fill"
      class="iconfont c-icon--fill"
      :style="iconStyleFill"
      :class="`c-icon--fill--${shape}`"
    >
      <span :class="iconClass"></span
    ></span>
    <span v-else class="iconfont" :class="iconClass" :style="iconStyle"></span>
  </div>
</template>

<script>
export default {
  name: "c-icon-font-class",
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
      default: "font-class",
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
      return "icon-" + this.iconName;
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
.c-icon-font-class {
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
    padding: 0.2em;
  }
}
</style>
