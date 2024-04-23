<template>
  <div class="c-text c-text-cascader-multiple">
    <template v-if="textIsString">{{ text }}</template>
    <template v-else>
      <el-tag v-for="(item, index) in text" :key="index">
        <span v-for="(item2, index2) in item" :key="index2">
          <span>{{ item2.label }}</span>
          <span v-if="index2 !== item.length - 1">/</span>
        </span>
      </el-tag>
    </template>
  </div>
</template>

<script>
import { cascaderDefault, isEmptyValue } from "./utils/common_methods";
import { CHOICE_TEXT } from "../mixins/text-widget/choice";

export default {
  name: "c-text-cascader-multiple",
  components: {},
  mixins: [CHOICE_TEXT],
  data() {
    return {
      multi: true,
    };
  },
  props: {
    defaultProps: {
      type: Object,
      default: () => ({
        value: "value",
        label: "label",
        children: "children",
      }),
    },
  },
  watch: {},
  created() {},
  methods: {},
  computed: {
    // 显示文本
    text() {
      const selectedOption = this.selectedOption;

      if (isEmptyValue(selectedOption)) {
        return cascaderDefault(this.value);
      }
      return selectedOption;
    },

    textIsString() {
      return typeof this.text === "string";
    },
  },
};
</script>

<style lang="scss">
.c-text-cascader-multiple {
  .el-tag {
    margin-right: 8px;
    margin-bottom: 4px;
    &:last-child {
      margin-right: 0;
    }
    span {
      &:last-child {
        margin-right: 0;
      }
    }
  }
}
</style>
