<template>
  <div class="c-text c-text-select-multiple">
    <template v-for="item in selectedOption">
      <slot name="options" :item="item" />
    </template>
    <template v-if="!$scopedSlots.options || isEmptyValue(selectedOption)">{{
      text
    }}</template>
  </div>
</template>

<script>
import { CHOICE_TEXT } from "../mixins/text-widget/choice";
import { selectDefault, isEmptyValue } from "./utils/common_methods";

export default {
  name: "c-text-select-multiple",
  mixins: [CHOICE_TEXT],

  data() {
    return {
      multi: true,
    };
  },

  computed: {
    text() {
      try {
        const labelKey = this.defaultProps.label;
        const selectedOption = this.selectedOption;
        if (isEmptyValue(selectedOption)) {
          return selectDefault(this.$attrs.value);
        }
        return selectedOption.map((item) => item[labelKey]).join(",");
      } catch (e) {
        console.log(e);
        return e;
      }
    },
  },

  methods: {
    isEmptyValue,
  },
};
</script>

<style lang="scss" scoped></style>
