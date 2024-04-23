<template>
  <div class="add-widget-panel">
    <div class="header-body">
      <div class="title">添加组件</div>
    </div>
    <div class="search-body">
      <el-input
        placeholder="请输入组件名称"
        v-model="searchValue"
        clearable
        @clear="searchValue = ''"
      ></el-input>
    </div>
    <div class="radio-body">
      <CRadioGroupButton
        :options="widgetGrouptOptions"
        v-model="widgetGroup"
      ></CRadioGroupButton>
    </div>
    <div class="widget-card-body">
      <CardSelectWidget
        v-model="widgetType"
        :options="selectWidgetOptions"
        @addWidget="addWidget"
      ></CardSelectWidget>
    </div>
  </div>
</template>

<script>
import CardSelectWidget from "../components/card-select-widget.vue";
import { widgetOptions, widgetGrouptOptions } from "../template";
export default {
  name: "AddWidgetPanel",
  props: {
    designer: {
      type: Object,
      default: () => {},
    },
  },
  components: {
    CardSelectWidget,
  },
  data() {
    return {
      widgetGrouptOptions,
      widgetType: "",
      widgetGroup: "",
      searchValue: "",
    };
  },
  computed: {
    selectWidgetOptions() {
      const filteredWidgets = widgetOptions
        .filter((item) => item.name.includes(this.searchValue))
        .filter((item) => !this.widgetGroup || item.group === this.widgetGroup);
      return filteredWidgets;
    },
    widget() {
      return this.designer.selectedWidget;
    },
  },

  created() {},
  methods: {
    addWidget() {
      //this.designer.addWidget(this.widgetType);
      const config = this.designer.getDefaultWidgetConfig(this.widgetType);
      this.designer.updateWidgetConfig(this.widget, config);
    },
  },
};
</script>

<style lang="scss">
.add-widget-panel {
  .header-body {
    color: rgba(0, 0, 0, 0.85);
    font-size: 14px;
    font-weight: 600;
    padding-top: 15px;
    margin-bottom: 10px;
  }
  .search-body {
    margin-bottom: 12px;
  }
  .radio-body {
    margin-bottom: 12px;
  }
}
</style>
