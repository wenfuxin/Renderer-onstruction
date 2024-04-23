<template>
  <c-text-select
    class="c-text-priority"
    v-bind="$attrs"
    v-on="$listeners"
    :options="options"
  >
    <span slot="options" slot-scope="{ item }">
      <OptionPriority :item="item"></OptionPriority>
    </span>
  </c-text-select>
</template>

<script>
import { SELECT_PRIORITY_CONFIG } from "@/utils/c-component-config";
import OptionPriority from "../form-special/select-options/option-priority.vue";

export default {
  name: "c-text-priority",
  components: {
    OptionPriority,
  },
  props: {
    multiple: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      options: SELECT_PRIORITY_CONFIG.options,
    };
  },

  computed: {
    multi() {
      return this.multiple;
    },
    text() {
      const labelKey = this.defaultProps.label;
      const selectedOption = this.selectedOption;
      return selectedOption ? selectedOption[labelKey] : this.$attrs.value;
    },
  },
};
</script>

<style lang="scss" scoped></style>
