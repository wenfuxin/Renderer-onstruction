<template>
  <c-container>
    <DemoArticle />
  </c-container>
</template>

<script>
import DemoArticle from "../../components/components-demo/demo-article.vue";
export default {
  name: "ContainerFull",
  displayName: "容器组件示例(填充型)",
  components: {
    DemoArticle,
  },
};
</script>
