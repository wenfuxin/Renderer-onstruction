<template>
  <c-text-select
    class="c-text-user"
    v-bind="$attrs"
    v-on="$listeners"
    :request="config.request"
    :handleResult="config.handleResult"
    :defaultParams="{...config.defaultParams, ...$attrs.defaultParams}"
    :defaultProps="config.defaultProps"
  >
   <span slot="options" slot-scope="{ item }">
      <TextOptionUser :item="item"></TextOptionUser>
    </span>
  </c-text-select>
</template>

<script>
import { SELECT_USER_CONFIG } from "@/utils/c-component-config";
import TextOptionUser from "./text-option/text-option-user.vue";

export default {
  name: "c-text-user",
  components: {
    TextOptionUser,
  },
  props: {
    multiple: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      config: SELECT_USER_CONFIG,
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
