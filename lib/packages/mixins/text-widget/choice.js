import { isEmptyValue, isEqualArray } from "@/utils/c-core.js";
import {
  traverseTree,
  isTree,
  findItemFromComplexList,
} from "@/utils/c-core.js";
export const CHOICE_TEXT = {
  data() {
    return {
      asyncData: [],
    };
  },
  props: {
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
      }),
    },
  },

  created() {
    if (this.requestMode) {
      this.requestValue();
    }
  },
  computed: {
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

    // 选中的option
    selectedOption() {
      const value = this.$attrs.value;
      const multiple = this.multi;
      const optionsValue = this.optionsValue;
      const defaultProps = this.defaultProps;

      return findItemFromComplexList(
        value,
        optionsValue,
        multiple,
        defaultProps
      );
    },
  },
  methods: {
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
  },
};
