<template>
  <div class="c-text c-text-input">{{ text }}</div>
</template>

<script>
import { inputDefault } from './utils/common_methods'
export default {
  name: "c-text-input",
  components: {},
  data() {
    return {};
  },
  props: {
    value: {
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
      return inputDefault(this.value)
    },
  },
};
</script>

<style lang="scss">
.c-text-input {
 }
</style>
