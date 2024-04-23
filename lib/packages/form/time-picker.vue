<template>
  <WidgetContainer @blur="handleBlur" :status="status">
    <template slot="widget">
      <el-time-picker
        :class="{ block }"
        v-bind="$attrs"
        v-on="evet"
        :placeholder="placeholder"
        :value-format="valueFormat"
        :picker-options="{
          format: format,
        }"
      >
        <template v-for="(_, name) in $slots" :slot="name">
          <slot :name="name"></slot>
        </template>
      </el-time-picker>
    </template>
    <template slot="text">
      <c-text-time v-bind="$attrs" v-on="evet" />
    </template>
  </WidgetContainer>
</template>
<script>
import WidgetContainer from "./widget-container";
import { COMMON } from "../mixins/form/props";
import { cloneDeep } from "lodash";

export default {
  name: "c-time-picker",
  components: {
    WidgetContainer,
  },
  mixins: [cloneDeep(COMMON)],
  data() {
    return {
      value: "",
    };
  },
  props: {
    placeholder: {
      type: String,
      default: "选择时间",
    },
    format: {
      type: String,
      default: "HH:mm:ss",
    },
    valueFormat: {
      type: String,
      default: "HH:mm:ss",
    },
    // 是否独占一行
    block: {
      type: Boolean,
      default: false,
    },
  },

  watch: {},
  created() {},
  computed: {},
  methods: {},
};
</script>
