<template>
  <div class="components-demo">
    <!-- 链接 -->
    <el-button @click="handleClick">点击</el-button>

    <div class="block">
      <span class="demonstration">
        链接 <span class="value">{{ link }}</span></span
      >
      <c-link
        v-model="link"
        placeholder="请输入链接"
        :operateType="operateType"
      ></c-link>
      <c-text-link
        v-model="link"
        :href="link"
        target="_blank"
        placeholder="请输入链接"
      >
        <c-beautiful-icon iconName="xiayi" />
      </c-text-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "LinkDemo",
  displayName: "链接",
  data() {
    return {
      link: "",
      operateType: "",
    };
  },
  watch: {},
  created() {},
  methods: {
    handleClick() {
      if (this.operateType === "input") {
        this.operateType = "text";
        return;
      }
      this.operateType = "input";
      this.link = "https://www.baidu.com";
    },
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
</style>
