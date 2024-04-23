<template>
  <WidgetContainer @blur="handleBlur" :status="status">
    <template slot="widget">
      <el-date-picker
        :class="{ block }"
        v-bind="$attrs"
        v-on="evet"
        :placeholder="placeholder"
        :type="type"
        :format="format"
        :value-format="valueFormat"
      >
        <template v-for="(_, name) in $slots" :slot="name">
          <slot :name="name"></slot>
        </template>
      </el-date-picker>
    </template>
    <template slot="text">
      <c-text-date-time v-bind="$attrs" v-on="evet" />
    </template>
  </WidgetContainer>
</template>
<script>
import WidgetContainer from "./widget-container";
import { COMMON } from "../mixins/form/props";
import { cloneDeep } from "lodash";

export default {
  name: "c-date-time-picker",
  components: {
    WidgetContainer,
  },
  mixins: [cloneDeep(COMMON)],
  data() {
    return {};
  },
  props: {
    placeholder: {
      type: String,
      default: "选择日期时间",
    },
    type: {
      type: String,
      default: "datetime",
    },
    format: {
      type: String,
      default: "yyyy-MM-dd HH:mm:ss",
    },
    valueFormat: {
      type: String,
      default: "yyyy-MM-dd HH:mm:ss",
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
