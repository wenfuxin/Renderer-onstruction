<template>
  <c-text-select-multiple
    class="c-text-multiple-task"
    v-bind="$attrs"
    v-on="$listeners"
    :request="config.request"
    :handleResult="config.handleResult"
    :defaultParams="{...config.defaultParams, ...$attrs.defaultParams}"
    :defaultProps="config.defaultProps"
  >
    <span slot="options" slot-scope="{ item }">
      <TextOptionTask :item="item"></TextOptionTask>
    </span>
  </c-text-select-multiple>
</template>

<script>
import { SELECT_TASK_CONFIG } from "@/utils/c-component-config";
import TextOptionTask from "./text-option/text-option-task.vue";
export default { 
  name: "c-text-multiple-task",
  components: {
    TextOptionTask,
  },
  props: {
    multiple: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      config: SELECT_TASK_CONFIG,
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
