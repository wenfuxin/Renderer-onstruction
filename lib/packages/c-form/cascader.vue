<template>
  <WidgetContainer @blur="handleBlur" :status="status">
    <template slot="widget">
      <el-cascader
        v-bind="$attrs"
        v-on="evet"
        :class="{ block }"
        :props="props"
        :options="optionsValue"
      >
        <template v-for="(_, name) in computedSlots" :slot="name">
          <slot :name="name"> </slot>
        </template>
        <template slot="prefix">
          <slot name="prefix" :selectedOption="selectedOption"></slot>
        </template>
      </el-cascader>
    </template>
    <template slot="text">
      <component
        :is="componentName"
        v-bind="$attrs"
        v-on="evet"
        :options="optionsValue"
      ></component>
    </template>
  </WidgetContainer>
</template>
<script>
import WidgetContainer from "./widget-container";
import { COMMON, CHOICE_TREE } from "../mixins/form/props";

export default {
  name: "c-cascader",
  components: {
    WidgetContainer,
  },
  mixins: [COMMON, CHOICE_TREE],
  props: {
    multiple: {
      type: Boolean,
      default: false,
    },

    clearable: {
      type: Boolean,
      default: true,
    },

    // 是否独占一行
    block: {
      type: Boolean,
      default: false,
    },

    textComponent: {
      type: String,
      default: "c-text-cascader",
    },
  },
  computed: {
    componentName() {
      return this.textComponent;
    },
    computedSlots() {
      // 过滤掉prefix
      return Object.keys(this.$slots).filter((key) => key !== "prefix");
    },
    props() {
      const props = this.$attrs.props || {};
      const defaultProps =  this.defaultProps
      return {
        ...props,
        multiple: this.multiple,
        leaf: "leaf",
        ... defaultProps,
        value: "value",
        label: "label",
        children: "children",
      };
    },
  },
};
</script>
