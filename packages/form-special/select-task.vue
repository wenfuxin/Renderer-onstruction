<template>
  <c-select
    class="c-select-task"
    v-bind="$attrs"
    v-on="$listeners"
    placeholder="请选择工作项"
   :request="computedRequest"
    :handleResult="computedHandleResult"
    :defaultParams="computedDefaultParams"
    :defaultProps="computedDefaultProps"
    popper-class="c-select-task__popper"
    :textComponent="textComponent"
    customOption
  >
    <div slot="option" slot-scope="{ item }">
      <OptionTask :item="item"></OptionTask>
    </div>
    <span
      slot="prefix"
      slot-scope="{ selectedOption }"
      v-if="!$attrs.multiple && selectedOption"
    >
      <PrefixTask :value="selectedOption" />
    </span>
  </c-select>
</template>
<script>
import OptionTask from "./select-options/option-task.vue";
import PrefixTask from "./select-prefix/prefix-task.vue";
import { SELECT_TASK_CONFIG } from "@/utils/c-component-config";
export default {
  name: "c-select-task",
  components: {
    OptionTask,
    PrefixTask,
  },
  data() {
    return {
      config: SELECT_TASK_CONFIG,
    };
  },
  methods: {},
  computed: {
    textComponent() {
      const multiple = this.$attrs.multiple;
      // return this.$attrs.multiple ? "c-text-multiple-task" : "c-text-task";
      return multiple === true || multiple === "" // 为什么要加上multiple === ""? 你猜
        ? "c-text-multiple-task"
        : "c-text-task";
    },

    computedRequest() {
      return this.$attrs.request || this.config.request;
    },
    computedHandleResult() {
      return this.$attrs.handleResult || this.config.handleResult;
    },
    computedDefaultParams() {
      return {
        ...this.config.defaultParams,
        ...this.$attrs.defaultParams,
      };
    },
    computedDefaultProps() {
      return {
        ...this.config.defaultProps,
        ...this.$attrs.defaultProps,
      };
    },
  },
};
</script>
