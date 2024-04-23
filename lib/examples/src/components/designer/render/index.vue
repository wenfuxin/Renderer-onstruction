<template>
  <div class="render1" :style="renderStyle" @click="selectlLyout">
    <grid-layout
      :layout.sync="layouts"
      :col-num="layoutConfig.colNum || 12"
      :row-height="layoutConfig.rowHeight || 100"
      :margin="margin"
      :is-draggable="draggable"
      :is-resizable="resizable"
      :responsive="responsive"
      :cols="{ lg: 12, md: 12, sm: 12, xs: 3, xxs: 3 }"
      :vertical-compact="true"
      :use-css-transforms="true"
    >
      <grid-item
        v-for="item in layouts"
        :key="item.i"
        :static="item.static"
        :x="item.x"
        :y="item.y"
        :w="item.w"
        :h="item.h"
        :i="item.i"
        drag-allow-from=".vue-draggable-handle"
        drag-ignore-from=".no-drag"
      >
        <div class="grid-item" @click.stop="setSelected(item)">
          <CardDefault
            :ref="`widget-${item.i}`"
            :preview="preview"
            :designer="designer"
            :active="selectedWidgetId === item.i"
            :item="item"
            @command="command"
          ></CardDefault>
        </div>
      </grid-item>
    </grid-layout>
  </div>
</template>

<script>
import { GridLayout, GridItem } from "vue-grid-layout";
import CardDefault from "../widget/container-widget/card-default.vue";
import { confirmDelete } from "../utils/messageBox";

export default {
  components: {
    GridLayout,
    GridItem,
    CardDefault,
  },
  props: ["designer", "widgetList", "layoutConfig", "responsive"],
  data() {
    return {
      layout: [
        { x: 0, y: 0, w: 2, h: 2, i: "0", static: false, moved: false },
        { x: 2, y: 0, w: 2, h: 4, i: "1", static: false, moved: false },
        { x: 0, y: 2, w: 1, h: 2, i: "2", static: false, moved: false },
        { x: 1, y: 2, w: 1, h: 2, i: "3", static: false, moved: false },
        { x: 0, y: 4, w: 2, h: 4, i: "4", static: false, moved: false },
        { x: 2, y: 4, w: 2, h: 4, i: "5", static: false, moved: false },
      ],
      layouts: [],

      index: 0,
      // 接口返回数据
      data: {},
    };
  },
  computed: {
    draggable() {
      return !this.preview;
    },
    resizable() {
      return !this.preview;
    },
    preview() {
      return this.designer.status === 1;
    },
    selectedWidgetId() {
      try {
        return this.designer.selectedWidget.i;
      } catch (error) {
        return "";
      }
    },

    renderStyle() {
      return {
        // 背景色
        backgroundColor: this.layoutConfig.backgroundColor,
      };
    },
    margin() {
      return [
        this.layoutConfig.horizontalSpacing || 24,
        this.layoutConfig.verticalSpacing || 24,
      ];
    },
  },

  created() {
    this.init();
    this.designer.handleEvent("widget-refreshed", (widgetId) => {
      this.$refs[`widget-${widgetId}`][0].refreshData();
    });
  },
  methods: {
    selectlLyout() {
      this.designer.selectLayout();
      console.log("selectlLyout");
    },
    init() {
      this.layouts = this.widgetList;
    },
    command({ type, widget }) {
      if (type === "delete") {
        confirmDelete().then(() => {
          this.designer.deleteWidget(widget.i);
        });
      }
      if (type === "edit") {
        this.designer.setSelected(widget);
      }
      if (type === "refresh") {
        this.designer.refreshWidget(widget.i);
      }
    },
    setSelected(widget) {
      this.designer.setSelected(widget);
    },
  },
};
</script>

<style scoped>
.render1 {
  height: 100%;
  overflow: auto;
}
.grid-item {
  height: 100%;
}
</style>
