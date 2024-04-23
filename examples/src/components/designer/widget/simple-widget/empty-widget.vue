<template>
  <div class="empty-widget-container">
    <template v-if="!item.type">
      <img src="../../assets/images/empty.png" />
      <el-button v-if="status === 0" type="text" @click="add"
        >添加组件</el-button
      >
    </template>
    <template v-else>
      <img src="../../assets/images/image9.png" />
      <el-link type="info">暂未开发</el-link>
    </template>
  </div>
</template>

<script>
export default {
  name: "EmptyWidget",
  props: {
    designer: {
      type: Object,
      default: () => {},
    },
    item: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    status() {
      return this.designer.status;
    },
  },
  methods: {
    add() {
      this.designer.setSelected(this.item);
    },
  },
};
</script>

<style lang="scss">
.empty-widget-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
