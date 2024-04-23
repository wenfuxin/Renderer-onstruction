<template>
  <c-text-select
    class="c-text-task"
    v-bind="$attrs"
    v-on="$listeners"
    :request="config.request"
    :handleResult="config.handleResult"
    :defaultParams="{ ...config.defaultParams, ...$attrs.defaultParams }"
    :defaultProps="config.defaultProps"
  >
    <span slot="options" slot-scope="{ item }">
      <TextOptionTask v-if="item" :item="item"></TextOptionTask>
    </span>
  </c-text-select>
</template>

<script>
import { SELECT_TASK_CONFIG } from "@/utils/c-component-config";
import TextOptionTask from "./text-option/text-option-task.vue";

export default {
  name: "c-text-task",
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
  },
};
</script>

<style lang="scss" scoped></style>
