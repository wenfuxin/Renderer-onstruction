<template>
  <div
    class="c-text-b"
    @mouseenter="showEditBtn = true"
    @mouseleave="showEditBtn = false"
    :class="`c-text-${operateType}`"
  >
    <div class="c-text-content" @dblclick="handleDblclick">
      <component
        :is="textMap[textType]"
        v-model="value"
      ></component>
    </div>
    <div class="c-text-btn" v-if="showEditBtn && operateType !== 'text'">
      <span @click.stop="$emit('edit')">修改</span>
    </div>
  </div>
</template>

<script>
import dayjs from "dayjs";

// text组件映射
const textMap = {
  INPUT: "c-text-input", // string
  SELECT: "c-text-select", // string
  SELECT_MULTIPLE: "c-text-select-multiple", // array
  DATE: "c-text-date-picker", // date
  DATE_TIME: "c-text-date-time-picker", // date
  TIME: "c-text-time-picker", // date
  TEXTAREA: "c-text-textarea", // string
  INPUT_NUMBER: "c-text-number", // number
  INPUT_TEXTAREA: "c-text-input-textarea", // string
  LINK: "c-text-link", // string
};

export default {
  name: "c-text",
  components: {
  },
  data() {
    return {
      //是否显示编辑按钮
      showEditBtn: false,
      textMap,
    };
  },
  props: {
    value: {
      type: [String, Number, Date, Array],
      default: "",
    },
    operateType: {
      type: String,
      default: "input", // input, text ,edit
    },
    textType: {
      type: String,
      default: "text", // INPUT SELECT SELECT_MULTIPLE
    },
    optionsValue: {
      type: Array,
      default: () => [],
    },
    valueType: {
      type: String,
      default: "text", // text, number, date
    },
    dateFormat: {
      type: String,
      default: "YYYY-MM-DD",
    },
  },
  computed: {
    // show Value
    showValue() {
      // 空
      if (
        this.value === null ||
        this.value === undefined ||
        this.value === "" ||
        (this.value instanceof Array && this.value.length === 0)
      ) {
        return "无";
      }
      if (this.optionsValue.length > 0) {
        const item = this.optionsValue.find(
          (item) => item.value === this.value
        );
        return item ? item.label : this.value;
      }

      if (this.valueType === "date" && this.dateFormat) {
        return dayjs(this.value).format(this.dateFormat);
      }

      // value 是数组
      if (this.value instanceof Array) {
        return this.value.join(",");
      }

      return this.value;
    },
  },
  methods: {
    //双击编辑
    handleDblclick() {
      if (this.operateType === "edit") {
        this.$emit("edit");
      }
    },
    asdasa() {
      console.log(this.value);
    },
  },
};
</script>

<style lang="scss">
.c-text-b {
  width: 100%;
  display: flex;
  align-items: center;
  pre {
    margin: 0;
  }

  &-btn {
    margin-left: 20px;
    font-size: 12px;
    cursor: pointer;
    color: #409eff;
    font-weight: 600;
    width: 40px;
    background-color: #409eff;
  }
  &-content {
    font-size: 14px;
    width: calc(100% - 60px);
    //background-color: #ccc;
    // 超出隐藏
    // overflow: hidden;
    // text-overflow: ellipsis;
    // white-space: nowrap;
    // min-width: 80px;
    &:hover {
      //cursor: pointer;
      // 下划线
      // text-decoration: underline;
    }
  }
}
.c-text-edit {
  padding: 0px 12px;
  //height: 40px;
  line-height: 20px;
  font-style: 13px;

  &:hover {
    border-radius: 4px;
    //background-color: #f5f7fa;
  }
}
.c-text-text {
  padding: 0px 2px;
  //height: 40px;
  line-height: 20px;
}
</style>
