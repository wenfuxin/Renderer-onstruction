<template>
  <c-select
    class="c-select-user"
    v-bind="$attrs"
    v-on="$listeners"
    placeholder="请选择"
    :request="computedRequest"
    :handleResult="computedHandleResult"
    :defaultParams="computedDefaultParams"
    :defaultProps="computedDefaultProps"
    popper-class="c-select-task__popper"
    textComponent="c-text-user"
    customOption
  >
    <div slot="option" slot-scope="{ item }">
      <OptionUser :item="item"></OptionUser>
    </div>
    <span slot="prefix" slot-scope="{ selectedOption }" v-if="!$attrs.multiple">
      <PrefixUser :value="selectedOption" />
    </span>
  </c-select>
</template>
<script>
import OptionUser from "./select-options/option-user.vue";
import PrefixUser from "./select-prefix/prefix-user.vue";
import { SELECT_USER_CONFIG } from "@/utils/c-component-config";
export default {
  name: "c-select-user",
  components: {
    OptionUser,
    PrefixUser,
  },
  data() {
    return {
      config: SELECT_USER_CONFIG,
    };
  },
  computed: {
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
  methods: {},
};
</script>
