<template>
  <span class="c-beautiful-icon">
    <CIconSvg
      v-if="renderMethod === 'svg'"
      :iconName="iconName"
      :color="color"
      :size="size"
      :shape="shape"
      :fill="fill"
      :multiColor="multiColor"
    ></CIconSvg>
    <CIconFontClass
      v-else-if="renderMethod === 'font-class'"
      :iconName="iconName"
      :color="color"
      :size="size"
      :shape="shape"
      :fill="fill"
      :multiColor="multiColor"
    ></CIconFontClass>
  </span>
</template>

<script>
// This component represents a beautiful icon with customizable properties such as color, size, shape, fill, rendering method, and whether it is multi-colored or single-colored.
// Props:
// - color: The color of the icon.
// - size: The size of the icon. Can be 16px, 24px, or 32px.
// - shape: The shape of the icon. Can be circular or square.
// - fill: Whether the icon should be filled or not.
// - renderMethod: The method used to render the icon. Can be SVG or font-class.
// - multiColor: Whether the icon should be multi-colored or single-colored.
import CIconSvg from "./c-icon-svg.vue";
import CIconFontClass from "./c-icon-font-class.vue";
export default {
  name: "c-beautiful-icon",
  components: {
    CIconSvg,
    CIconFontClass,
  },
  props: {
    type: {
      type: String,
      default: "",
    },
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
      return this.type;
    },
  },
};
</script>

<style lang="scss">
.c-beautiful-icon {
  font-size: 16px;
  color: #409eff;
  cursor: pointer;
}
</style>
