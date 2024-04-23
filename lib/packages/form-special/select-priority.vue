<template>
  <c-select
    class="c-select-priority"
    v-bind="$attrs"
    v-on="$listeners"
    placeholder="请选择优先级"
    :options="options"
    popper-class="c-select-priority__popper"
    textComponent="c-text-priority"
    customOption
  >
    <div slot="option" slot-scope="{ item }">
      <OptionPriority :item="item"></OptionPriority>
    </div>
  </c-select>
</template>
<script>
import OptionPriority from "./select-options/option-priority.vue";
import { SELECT_PRIORITY_CONFIG } from "@/utils/c-component-config";

export default {
  name: "c-select-priority",
  components: {
    OptionPriority,
  },
  data() {
    return {
      options: SELECT_PRIORITY_CONFIG.options,
    };
  },
  methods: {},
};
</script>
