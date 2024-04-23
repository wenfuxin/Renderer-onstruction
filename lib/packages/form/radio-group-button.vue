<template>
  <div class="radio-group-button">
    <el-radio-group v-model="radio">
      <el-radio-button label="">全部</el-radio-button>
      <el-radio-button
        v-for="item in options"
        :key="item.name"
        :label="item.value"
        >{{ item.name }}</el-radio-button
      >
    </el-radio-group>
  </div>
</template>

<script>
export default {
  name: "RadioGroupButton",
  props: {
    value: {
      type: String,
      default: "",
    },
    options: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      radio: "",
    };
  },
  created() {
    this.radio = this.value;
  },
  watch: {
    radio(val) {
      this.$emit("input", val);
    },
  },
};
</script>

<style lang="scss">
.radio-group-button {
  .el-radio-button {
    border-radius: 32px;
     margin: 0 10px;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.1);
    .el-radio-button__inner {
      height: 30px;
      line-height: 30px;
      padding: 0 15px;
      border: none;
      background-color: transparent;
      box-shadow: none;
      color: var(--text-4, #4e5969);
      font-size: 14px;
      font-weight: 400;
    }
    &:first-child {
      margin-left: 0;
    }
    &:last-child {
      margin-right: 0;
    }

    &.is-active {
      background-color: #0065ff;
      border: none;
      .el-radio-button__inner {
        color: #fff;
        font-weight: 600;
      }
    }
  }
}
</style>
