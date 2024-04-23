<template>
  <div class="designer-main">
    <div class="toolbar-panel">
      <ToolbarPanel :designer="designer" />
    </div>
    <!-- <el-button type="" @click="query">查询</el-button>
    <el-button type="" @click="save">保存</el-button>
    <el-button type="" @click="reset">重置</el-button>
    <el-button type="" @click="clearWidgets">清空</el-button>
    <el-button type="" @click="importTemplate">导入模板</el-button>
    <el-button type="" @click="add">添加组件</el-button> -->

    <div class="render-container">
      <div class="layout-container">
        <Render
          :designer="designer"
          :widgetList="widgetList"
          :layoutConfig="layoutConfig"
        />
      </div>
      <div class="setting-container" v-if="status === 0">
        <SettingPanel :designer="designer" />
      </div>
    </div>
  </div>
</template>
<script>
import Render from "./render";
import { createDesigner } from "./designer";
import SettingPanel from "./setting-panel";
import ToolbarPanel from "./toolbar-panel";

export default {
  name: "designerMain",
  components: {
    Render,
    SettingPanel,
    ToolbarPanel,
  },
  data() {
    return {
      designer: {},
    };
  },
  created() {
    this.designer = createDesigner(this, { status: 1 });
    this.designer.handleEvent("json-imported", (json) => {
      console.log(json);
    });
    this.designer.handleEvent("save-global-config", (conf) => {
      console.log(conf);
    });
   

    this.query();
  },
  computed: {
    widgetList() {
      return this.designer.widgetList;
    },
    layoutConfig() {
      return this.designer.layoutConfig;
    },
    status() {
      return this.designer.status;
    },
  },
  methods: {
    // 查询
    query() {
      const json = localStorage.getItem("json");
      this.designer.setJson(json);
    },
    // 保存
    save() {
      const josn = this.designer.getSaveJson();
      localStorage.setItem("json", JSON.stringify(josn));
    },
    // 重置
    reset() {},
    // 导入模板
    importTemplate() {
      this.designer.importJson();
    },
    // 清空
    clearWidgets() {
      this.designer.clearWidgets();
    },
    // 添加组件
    add() {
      this.designer.addWidget({});
    },
  },
  mounted() {},
};
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.designer-main {
  height: 100%;
  width: 100%;
   .toolbar-panel {
    height: 50px;
   // background-color: #ccc;
  }
  .render-container {
    height: calc(100% - 50px);
    display: flex;
    .layout-container {
      flex: 1;
      height: 100%;
      // background-color: #eee;
      overflow: auto;
    }
    .setting-container {
      width: 400px;
      height: 100%;
      background-color: #ccc;
    }
  }
}
</style>
