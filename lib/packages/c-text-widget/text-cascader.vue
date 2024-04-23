<template>
  <div class="c-text c-text-cascader">{{ text }}</div>
</template>

<script>
import { cascaderDefault, isEmptyValue } from "./utils/common_methods";
import { CHOICE_TEXT } from "../mixins/text-widget/choice";

export default {
  name: "c-text-cascader",
  components: {},
  mixins: [CHOICE_TEXT],
  data() {
    return {
      multi: false,
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
      console.log("selectedOption", selectedOption);

      if (isEmptyValue(selectedOption)) {
        return cascaderDefault(this.value);
      }
      const text = selectedOption.map((item) => item[this.defaultProps.label]);
      return text.join(" / ");
    },
  },
};
</script>

<style lang="scss">
.c-text-cascader {

}
</style>
