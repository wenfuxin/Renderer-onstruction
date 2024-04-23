<template>
  <div class="c-text c-text-time">
    <c-beautiful-icon icon-name="clock-circle" v-if="value"></c-beautiful-icon>
    <span> {{ text }}</span>
  </div>
</template>

<script>
import dayjs from "dayjs";
import { dateDefault, isEmptyValue } from "./utils/common_methods";

export default {
  name: "c-text-time",
  data() {
    return {};
  },
  props: {
    value: {
      type: String,
      default: "",
    },
    format: {
      type: String,
      default: "",
    },
  },
  watch: {},
  created() {},
  methods: {},
  computed: {
    // 显示文本
    text() {
      if (isEmptyValue(this.value)) {
        return dateDefault(this.value);
      }
      if (!this.format) {
        return this.value;
      }
      return dayjs(this.value).format(this.format);
    },
  },
};
</script>

<style lang="scss" scoped></style>
