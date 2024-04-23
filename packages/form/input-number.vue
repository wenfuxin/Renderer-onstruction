<template>
  <WidgetContainer @blur="handleBlur" :status="status">
    <template slot="widget">
      <el-input-number
        v-bind="$attrs"
        v-on="evet"
        :controls-position="controlsPosition"
        :min="min"
      >
        <template v-for="(_, name) in $slots" :slot="name">
          <slot :name="name"></slot>
        </template>
      </el-input-number>
    </template>
    <template slot="text">
      <c-text-number v-bind="$attrs" v-on="evet">
        <template v-for="(_, name) in $slots" :slot="name">
          <slot :name="name"></slot>
        </template>
      </c-text-number>
    </template>
  </WidgetContainer>
</template>
<script>
import WidgetContainer from "./widget-container";
import { COMMON } from "../mixins/form/props";
import { cloneDeep } from "lodash";

export default {
  name: "c-input-number",
  components: {
    WidgetContainer,
  },
  mixins: [cloneDeep(COMMON)],
  data() {
    return {};
  },
  props: {
    controlsPosition: {
      type: String,
      default: "right",
    },
    min: {
      type: Number,
      default: 0,
    },
  },
  watch: {},
  created() {},
  computed: {},
  methods: {},
};
</script>
