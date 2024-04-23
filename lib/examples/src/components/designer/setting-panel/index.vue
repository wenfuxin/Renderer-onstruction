<template>
  <div class="setting-panel">
    <!-- 布局设置 -->
    <template v-if="!widget">
      <config-layout-panel :designer="designer"></config-layout-panel>
    </template>
    <!-- 面板设置 -->
    <template v-else>
      <template v-if="widget">
        <!-- 添加组件 -->
        <div v-if="!widget.type">
          <add-widget-panel :designer="designer"></add-widget-panel>
        </div>

        <!-- 编辑组件 -->
        <div v-else>
          <config-widget-panel :designer="designer"></config-widget-panel>
        </div>
      </template>
    </template>
  </div>
</template>

<script>
import { widgetOptions } from "../template";
import AddWidgetPanel from "./add-widget-panel.vue";
import ConfigWidgetPanel from "./config-widget-panel.vue";
import ConfigLayoutPanel from "./config-layout-panel.vue";

export default {
  name: "SettingPanel",
  components: {
    AddWidgetPanel,
    ConfigWidgetPanel,
    ConfigLayoutPanel,
  },
  props: {
    designer: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      // widget: null,
      widgetOptions,
    };
  },
  computed: {
    widget() {
      return this.designer.selectedWidget;
    },
  },
  created() {
    console.log("setting-panel created");
  },
};
</script>

<style lang="scss">
@import "../assets/styles/css/setting-panel.scss";
.setting-panel {
  width: 100%;
  height: 100%;
  background-color: #f7f8fa;
  border-left: 1px solid #ccc;
  padding: 0 20px;
}
</style>
