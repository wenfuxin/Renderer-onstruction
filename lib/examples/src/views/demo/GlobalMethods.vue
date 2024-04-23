<template>
  <div class="components-demo">
    <el-button @click="handleClick">点击</el-button>
    <el-button @click="handleClickDel">点击2</el-button>
  </div>
</template>

<script>
export default {
  name: "GlobalMethods",
  displayName: "全局方法",
  data() {
    return {};
  },
  watch: {},
  created() {},
  methods: {
    handleClick() {
      this.$$message({
        message: "这是一条消息提示",
        type: "success",
      });
    },
    // 测试删除确认

    handleClickDel() {
      this.$$confirmDel({
        title: "删除想法",
        message:
          "确认删除想法“MJSL-15 借助AIGC用自然语言生成dashboard”吗？请注意，该操作不可撤销。",
        show: true,
      })
        .then(() => {
          //用户点击确认后执行
          console.log("用户点击确认后执行");
        })
        .catch(() => {
          // 取消或关闭
          console.log("取消或关闭");
        });
    },
  },
  computed: {},
};
</script>

<style lang="scss" scoped></style>
