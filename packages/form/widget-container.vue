<template>
  <div class="c-form-widget-container">
    <div v-if="status === 0" v-click-outside="handleBlur">
      <slot name="widget"></slot>
    </div>
    <slot name="text" v-if="status === 1"></slot>
  </div>
</template>
<script>
import clickOutside from "../directives/click-outside";
export default {
  name: "c-widget-container",
  data() {
    return {};
  },
  directives: {
    "click-outside": clickOutside,
  },
  props: {
    status: {
      type: Number,
      default: 0,
    },
    fieldName: {
      type: String,
      default: "",
    },
  },
  watch: {},
  created() {},
  computed: {},
  methods: {
    handleBlur() {
      this.$emit("blur");
     },
  },
};
</script>

<style>
.c-form-widget-container {
  position: relative;
  display: inline-block;
  width: 100%;
 }
</style>
