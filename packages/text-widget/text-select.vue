<template>
  <div class="c-text c-text-select">
    <slot name="options" :item="selectedOption" />
    <template v-if="!$scopedSlots.options || isEmptyValue(selectedOption)">{{ text }}</template>
  </div>
</template>

<script>
import { CHOICE_TEXT } from "../mixins/text-widget/choice";
import { selectDefault ,isEmptyValue } from "./utils/common_methods";

export default {
  name: "c-text-select",
  mixins: [CHOICE_TEXT],

  data() {
    return {};
  },

  computed: {
    text() {
      
      if (isEmptyValue(this.selectedOption)) {
        return selectDefault(this.$attrs.value);
      }

      const labelKey = this.defaultProps.label;
      const selectedOption = this.selectedOption;
      return selectedOption ? selectedOption[labelKey] : this.$attrs.value;
    },
  },
  methods: {
    isEmptyValue,
  },
};
</script>

<style lang="scss" scoped></style>
