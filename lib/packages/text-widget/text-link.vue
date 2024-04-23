<template>
  <div class="c-text c-text-link">
    <el-link v-bind="$attrs" v-on="$listeners">
      <slot name="prefix" />
      {{ text }}
      <slot name="suffix" />
    </el-link>
  </div>
</template>

<script>
import { inputDefault } from "./utils/common_methods";

export default {
  name: "c-text-link",
  components: {},
  data() {
    return {};
  },
  props: {
    value: {
      type: [String, Number],
      default: "",
    },
  },
  watch: {},
  created() {},
  methods: {},
  computed: {
    // 显示文本
    text() {
      return inputDefault(this.value);
    },
  },
};
</script>

<style lang="scss" scoped></style>
