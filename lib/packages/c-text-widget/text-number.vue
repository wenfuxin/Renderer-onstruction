<template>
  <div class="c-text c-text-number">{{ text }}</div>
</template>

<script>
import { inputDefault } from './utils/common_methods'
export default {
  name: "c-text-number",
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
      return inputDefault(this.value)
    },
  },
};
</script>

<style lang="scss">
.c-text-number {
}
</style>
