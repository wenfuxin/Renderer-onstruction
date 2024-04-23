<template>
  <div class="config-widget-panel">
    <div class="header-body">
      <div class="title">编辑组件</div>
    </div>
    <!-- 基本设置 -->
    <div class="basic-body">
      <el-form label-width="80px" size="mini" label-position="right">
        <el-form-item label="类型">
          <el-select v-model="widget.type" placeholder="选择组件">
            <el-option
              v-for="item in widgetOptions"
              :key="item.name"
              :label="item.name"
              :value="item.type"
              disabled
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="标题">
          <el-input v-model="widget.name"></el-input>
        </el-form-item>
       
      </el-form>
    </div>
  </div>
</template>

<script>
import { widgetOptions } from "../template";

export default {
  name: "ConfigWidgetPanel",
  props: {
    designer: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      widgetOptions,
    };
  },
  computed: {
    widget() {
      return this.designer.selectedWidget;
    },
  },
  methods: {},
};
</script>

<style lang="scss">
.config-widget-panel {
  .header-body {
    color: rgba(0, 0, 0, 0.85);
    font-size: 14px;
    font-weight: 600;
    padding-top: 15px;
    margin-bottom: 10px;
  }
}
</style>
