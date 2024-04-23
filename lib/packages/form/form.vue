<template>
  <el-form
    class="c-form"
    ref="form"
    :class="`c-form-${rowSpace}`"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <template v-for="(_, name) in $slots" :slot="name">
      <slot :name="name"></slot>
    </template>
  </el-form>
</template>
<script>
export default {
  name: "c-form",
  components: {},
  data() {
    return {};
  },
  props: {
    // 行间间隔
    rowSpace: {
      type: String, // 无 中 小
      default: "small", // none small medium
    },
  },
  watch: {},
  created() {},
  methods: {
    // 校验表单
    validate() {
      return new Promise((resolve, reject) => {
        this.$refs.form.validate((valid) => {
          if (valid) {
            resolve(valid);
          } else {
            reject();
          }
        });
      });
    },
    validateField(prop) {
      return new Promise((resolve, reject) => {
        this.$refs.form.validateField(prop, (valid) => {
          if (valid) {
            resolve(valid);
          } else {
            reject();
          }
        });
      });
    },
    resetFields() {
      this.$refs.form.resetFields();
    },
    clearValidate() {
      this.$refs.form.clearValidate();
    },
  },
};
</script>
<style lang="scss">
.c-form-none {
  .el-form-item {
    margin-bottom: 0px;
  }
}
.c-form-small {
  .el-form-item {
    margin-bottom: 10px;
  }
}
.c-form-medium {
  .el-form-item {
    margin-bottom: 20px;
  }
}
</style>
