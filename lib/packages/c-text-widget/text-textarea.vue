<template>
  <div class="c-text c-text-textarea">{{ text }}</div>
</template>

<script>
import { inputDefault } from './utils/common_methods'
export default {
  name: "c-text-textarea",
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
.c-text-textarea {
    white-space: pre-wrap;
    word-wrap: break-word;
    word-break: break-all;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
   // -webkit-line-clamp: 3;
    line-height: 1.5;
    //max-height: 4.5em;
    margin: 0px;
    padding: 0px;
    font-size: 14px;
    color: #606266;
    font-weight: 400;
    font-variant: tabular-nums;
    box-sizing: border-box;
    list-style: none;
    font-feature-settings: "tnum";
 }
</style>
