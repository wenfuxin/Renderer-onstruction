<template>
  <WidgetContainer @blur="handleBlur" :status="status">
    <template slot="widget">
      <el-input
        v-bind="$attrs"
        v-on="evet"
        type="textarea"
        :autosize="autosize"
      >
        <template v-for="(_, name) in $slots" :slot="name">
          <slot :name="name"></slot>
        </template>
      </el-input>
    </template>
    <template slot="text">
      <c-text-textarea v-bind="$attrs" v-on="evet">
        <template v-for="(_, name) in $slots" :slot="name">
          <slot :name="name"></slot>
        </template>
      </c-text-textarea>
    </template>
  </WidgetContainer>
</template>
<script>
import WidgetContainer from "./widget-container";
import { COMMON } from "../mixins/form/props";
export default {
  name: "c-input-textarea",
  components: {
    WidgetContainer,
  },
  mixins: [COMMON],
  data() {
    return {};
  },
  props: {
    autosize: {
      type: Object,
      default: () => {
        return {
          minRows: 3,
          maxRows: 10,
        };
      },
    },
  },
  watch: {},
  created() {},
  computed: {},
  methods: {},
};
</script>
