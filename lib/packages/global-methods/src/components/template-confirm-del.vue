<template>
  <!-- 自定义确认弹窗样式 -->
  <el-dialog
    :width="width"
    :title="options.title"
    :visible.sync="options.show"
    :custom-class="options.customClass || 'c-dialog-confirm'"
    v-if="isShow"
  >
    <span>{{ options.message }}</span>
    <div slot="footer" class="dialog-footer">
      <el-button @click="close"> 取消 </el-button>
      <el-button type="danger" @click="ok"> 确认删除 </el-button>
    </div>
  </el-dialog>
</template>

<script>
export default {
  data() {
    return {
      // 弹窗内容
      isShow: true,
      width: "600px",
      options: {
        title: "",
        message: "",
        data: "",
        show: false,
      },
    };
  },
  methods: {
    close() {},
    ok() {},
  },
};
</script>

<style></style>
