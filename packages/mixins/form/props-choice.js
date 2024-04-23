import { cloneDeep } from "lodash";
import { isEmptyValue, isEqualArray, isEqualObject } from "@/utils/c-core.js";
import {
  traverseTree,
  isTree,
  getTreeNodeByValue,
  findItemFromComplexList,
} from "@/utils/c-core.js";
export const choiceProps = {
  options: {
    type: Array,
    default: () => [],
  },
  request: {
    type: Function,
    default: null,
  },
  // 结果处理 Function
  handleResult: {
    type: Function,
    default: (res) => res,
  },
  defaultParams: {
    type: Object,
    default: () => ({}),
  },
  // 字段映射默认label value
  defaultProps: {
    type: Object,
    default: () => ({
      label: "label",
      value: "value",
      desc : "desc",
    }),
  },
};
export const choiceData = {
  asyncData: [],
};
export const choiceMethods = {
  // 请求模式
  requestValue() {
    if (this.requestMode) {
      this.request(this.defaultParams).then((res) => {
        this.asyncData = this.handleRequestResult(res);
      });
    }
  },

  // 请求返回结果处理函数
  handleRequestResult(res) {
    if (this.handleResult) {
      return this.handleResult(res);
    }
    return res;
  },
};

export const choiceComputed = {
  // options模式
  optionsMode() {
    return this.options.length > 0;
  },
  // 请求模式
  requestMode() {
    return this.request !== null && typeof this.request === "function";
  },

  optionsValue() {
    if (this.optionsMode) {
      return traverseTree(this.options, this.defaultProps);
    }
    if (this.requestMode) {
      return traverseTree(this.asyncData, this.defaultProps);
    }
    return [];
  },
  optionsValueText() {
    const slot = this.$slots.default;
    if (slot && slot.length > 0) {
      const optionsValue = this.optionsValue;
      const optionsValueText = [];
      slot.forEach((item) => {
        if (!item.componentOptions) {
          return;
        }
        const value = item.componentOptions.propsData.value;
        const label = item.componentOptions.propsData.label;
        optionsValueText.push({
          label,
          value,
        });
      });
      return optionsValueText;
    }

    return this.optionsValue;
  },
  // 选中的option
  selectedOption() {
    const value = this.$attrs.value;
    const optionsValue = this.optionsValue;
    const multiple = this.multiple;
    const defaultProps = this.defaultProps;
    return findItemFromComplexList(value, optionsValue, multiple, defaultProps);
  },
};

export const choiceWatch = {
  "$attrs.value": {
    handler: function (newVal, oldVal) {
      const selectedOptionValue = this.selectedOption;
      // newVal oldVal 值都为空
      if (this.isEmptyValue(newVal) && this.isEmptyValue(oldVal)) {
        return;
      }
      if (
        newVal !== oldVal &&
        this.optionsValue.length !== 0 &&
        this.$listeners.changed
      ) {
        this.$emit("changed", {
          value: newVal,
          oldValue: oldVal,
          selectedOptionValue,
        });
      }
    },
    immediate: true,
  },
  optionsValue: {
    handler: function (newVal, oldVal) {
      if (!this.$listeners.optionsChanged) {
        return;
      }
      if (isEmptyValue(newVal) && isEmptyValue(oldVal)) {
        return;
      }

      const flag = isEqualArray(newVal, oldVal);

      if (!flag) {
        this.$emit("optionsChanged", {
          value: newVal,
          oldValue: oldVal,
        });
      }
    },
    immediate: true,
  },
  defaultParams: {
    handler: function (newVal, oldVal) {
      // 重新获取数据
      if (this.requestMode && !isEqualObject(newVal, oldVal)) {
        console.log("defaultParams", newVal, oldVal);
        this.requestValue();
      }
    },
  },
};
export const CHOICE = {
  data() {
    return {
      ...choiceData,
    };
  },
  props: {
    ...choiceProps,
  },
  created() {
    if (this.requestMode) {
      this.requestValue();
    }
  },
  computed: {
    ...choiceComputed,
  },
  methods: {
    ...choiceMethods,
  },
  watch: {
    ...choiceWatch,
  },
};

export const CHOICE_TREE = {
  data() {
    return {
      ...choiceData,
    };
  },
  props: {
    ...choiceProps,
  },
  created() {
    if (this.requestMode) {
      this.requestValue();
    }
  },
  computed: {
    ...choiceComputed,
  },
  methods: {
    ...choiceMethods,
  },
  watch: {
    ...choiceWatch,
  },
};
