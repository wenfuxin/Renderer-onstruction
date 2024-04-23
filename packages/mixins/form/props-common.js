import { cloneDeep } from "lodash";
import { isEmptyValue, isEqualArray } from "@/utils/c-core.js";
 export const commonProps = {
  //默认状态
  defaultStatus: {
    type: Number,
    default: 0,
  },
  // 类型
  operateType: {
    type: String,
    default: "input", // input, text ,edit
  },
  // 字段名称
  fieldName: {
    type: String,
    default: "",
  },
};

export const commonData = {
  // 状态
  status: 0,
  valueHistory: [],
};
export const commonMethods = {
  isEmptyValue,

  // 状态切换
  changeStatus() {
    this.status = this.status === 0 ? 1 : 0;
  },
  // 初始化status
  initStatus() {
    this.status = this.defaultStatus;
    this.valueHistory = [this.$attrs.value];
    if ("edit" === this.operateType) {
      this.status = 1;
    }
    if ("text" === this.operateType) {
      this.status = 1;
    }
    if ("input" === this.operateType) {
      this.status = 0;
    }
  },

  handleBlur() {
    if ("edit" === this.operateType) {
      this.status = 1;
      this.outputHistory();
    }
  },
  // 判断值是否为空
  // 输出操作历史
  outputHistory() {
    
    
    // 第一位，最后一位
    const first = this.valueHistory[0];
    const last = this.valueHistory[this.valueHistory.length - 1];
    let operateType = "";

    // 创建
    if (this.isEmptyValue(first) && !this.isEmptyValue(last)) {
      
      operateType = "create";
    }
    // 修改
    if (!this.isEmptyValue(first) && !this.isEmptyValue(last)) {
      
      operateType = "update";
    }
    // 删除
    if (!this.isEmptyValue(first) && this.isEmptyValue(last)) {
      
      operateType = "delete";
    }

    // 发射操作
    this.$emit("operate", {
      fieldName: this.fieldName,
      operateType,
      value: last,
    });

    // 重置
    this.valueHistory = [this.$attrs.value];
  },
};

export const commonComputed = {
  evet() {
    return this.$listeners;
  },
};

export const commonWatch = {
  status: {
    handler: function (newVal, oldVal) {
      if (newVal !== oldVal) {
        this.$emit("changeStatus", newVal);
      }
    },
    immediate: true,
  },
  operateType(newValue, oldValue) {
    this.initStatus();
  },
  // 值改变
  // "$attrs.value": {
  //   handler: function (newVal, oldVal) {
  //     if (newVal !== oldVal) {
  //       this.valueHistory.push(cloneDeep(newVal));
  //     }
  //   },
  //   // immediate: true,
  // },
};

export const COMMON = {
  props: {
    ...commonProps,
  },
  data() {
    return {
      ...commonData,
    };
  },
  methods: {
    ...commonMethods,
  },
  computed: {
    ...commonComputed,
  },
  watch: {
    ...commonWatch,
  },
  created() {
    this.initStatus();
  },
};
