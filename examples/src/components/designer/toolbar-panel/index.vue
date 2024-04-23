<template>
  <div class="toolbar-panel">
    <div class="title">{{ layoutConfig.name }}</div>

    <div class="btn-group">
      <el-button
        size="small"
        type="primary"
        @click="save"
        v-if="designer.status === 0"
        >保存</el-button
      >
      <el-button size="small" @click="cancel" v-if="designer.status === 0">
        取消</el-button
      >
      <el-button size="small" @click="selectLayout" v-if="designer.status === 1"
        >更改布局</el-button
      >

      <el-button type="primary" @click="add" icon="el-icon-plus" size="small"
        >添加组件</el-button
      >
    </div>

    <!-- <el-select v-model="widget" placeholder="选择组件">
      <el-option
        v-for="item in widgetOptions"
        :key="item.name"
        :label="item.name"
        :value="item.type"
      ></el-option>
    </el-select> -->
  </div>
</template>

<script>
import { widgetOptions } from "../template";
export default {
  name: "ToolbarPanel",
  props: {
    designer: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      widgetOptions: widgetOptions,
      widget: "",
    };
  },
  computed: {
    layoutConfig() {
      return this.designer.layoutConfig;
    },
  },
  methods: {
    add() {
      this.selectLayout();
      const widget = this.designer.addEmptyWidget();
      this.designer.setSelected(widget);
    },
    save() {
      const josn = this.designer.getSaveJson();
      localStorage.setItem("json", JSON.stringify(josn));
      this.designer.changeStatus(1);
    },
    selectLayout() {
      this.designer.selectLayout();
      this.designer.changeStatus(0);
    },
    cancel() {
      this.designer.changeStatus(1);
    },
  },
};
</script>

<style lang="scss">
.toolbar-panel {
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ebeef5;
   .title {
    font-size: 20px;
    font-weight: bold;
  }
  .btn-group {
    display: flex;
    align-items: center;
    .el-button {
      margin-left: 10px;
    }
  }
}
</style>
