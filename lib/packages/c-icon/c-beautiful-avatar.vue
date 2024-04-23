<template>
  <div class="c-beautiful-avatar">
    <!-- value为空时插槽内容 -->
    <slot name="empty" v-if="!value"></slot>
    <template v-else>
      <span
        v-if="fill"
        class="c-beautiful-avata--fill"
        :style="avatarStyleFill"
        :class="`c-avatar--fill--${shape}`"
      >
        <span>{{ text }}</span>
      </span>
      <span v-else :style="avatarStyle">{{ text }}</span>
    </template>
  </div>
</template>

<script>
export default {
  name: "c-beautiful-avatar",
  props: {
    value: {
      type: String,
      default: "",
    },
    color: {
      type: String,
      default: "#409eff",
    },
    size: {
      type: String,
      default: "12px",
    },
    shape: {
      type: String,
      default: "circle", // circle square
    },
    fill: {
      type: Boolean,
      default: true,
    },
    fillTextColor: {
      type: String,
      default: "#ffffff",
    },

    textPosition: {
      type: [String, Number],
      default: "last", // first, last 1,2,3
    },
  },
  computed: {
    avatarStyle() {
      const size = Number(this.size.replace("px", ""));

      return {
        color: this.color,
        fontSize: this.size,
        width: size + size * 0.75 + "px",
        height: size + size * 0.75 + "px",
      };
    },
    avatarStyleFill() {
      const size = Number(this.size.replace("px", ""));
      return {
        backgroundColor: this.color,
        fontSize: this.size,
        color: this.fillTextColor,
        borderRadius: this.shape === "circle" ? "50%" : "2px",
        width: size + size * 0.75 + "px",
        height: size + size * 0.75 + "px",
      };
    },
    text() {
      if (!this.value) return "~";

      const textPosition = this.textPosition;
      if (textPosition === "first") {
        return this.value.charAt(0).toUpperCase();
      } else if (textPosition === "last") {
        return this.value.charAt(this.value.length - 1).toUpperCase();
      } else {
        return this.value.charAt(textPosition - 1).toUpperCase();
      }
    },
  },
  data() {
    return {};
  },
  watch: {},
};
</script>

<style lang="scss">
.c-beautiful-avatar {
  display: inline-block;
  font-weight: bold;
  .c-avatar--fill {
    color: #fff;
  }
  .c-avatar--fill--circle {
    border-radius: 50%; // set border-radius to 50% to make it a circle
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .c-avatar--fill--square {
    border-radius: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
