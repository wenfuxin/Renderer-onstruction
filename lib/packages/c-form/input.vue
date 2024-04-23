<template>
  <WidgetContainer @blur="handleBlur" :status="status" :fieldName="fieldName">
    <template slot="widget">
      <el-input v-bind="$attrs" v-on="evet">
        <template v-for="(_, name) in $slots" :slot="name">
          <slot :name="name"></slot>
        </template>
      </el-input>
    </template>
    <template slot="text">
      <c-text-input
        v-bind="$attrs"
        v-on="evet"
      >
        <template v-for="(_, name) in $slots" :slot="name">
          <slot :name="name"></slot>
        </template>
      </c-text-input>
    </template>
  </WidgetContainer>
</template>
<script>
import WidgetContainer from "./widget-container";
import { COMMON } from "../mixins/form/props";
import { cloneDeep } from "lodash";

export default {
  name: "c-input",
  components: {
    WidgetContainer,
  },
  mixins: [cloneDeep(COMMON)],
  data() {
    return {};
  },
  props: {},
  watch: {},
  created() {},
  computed: {},
  methods: {},
};
</script>
