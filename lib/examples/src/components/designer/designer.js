import { deepClone, generateId, overwriteObj } from "./utils/util";
import { defaultOptions } from "./template";
import { confirmDelete, notSelected, messageSuccess } from "./utils/messageBox";

export function createDesigner(vueInstance, options) {
  let defaultConfig = {
    layoutConfig: {
      name: "layout",
      type: "layout",
      description: "布局",
      backgroundColor: "#eee",
      rowHeight: 100,
      colNum: 12,
      // 水平间距
      horizontalSpacing: 24,
      // 垂直间距
      verticalSpacing: 24,
    },
    widgetList: [
      { x: 0, y: 0, w: 2, h: 2, i: "0", static: false, title: "" },
      { x: 2, y: 0, w: 2, h: 4, i: "1", static: false },
      { x: 0, y: 2, w: 1, h: 2, i: "2", static: false },
      { x: 1, y: 2, w: 1, h: 2, i: "3", static: false },
      { x: 0, y: 4, w: 2, h: 4, i: "4", static: false, moved: false },
      { x: 2, y: 4, w: 2, h: 4, i: "5", static: false, moved: false },
    ],
  };

  const { status } = options;
  return {
    vueInstance: vueInstance,

    // 组件名称
    name: "designer",
    //描述
    description: "设计器",
    // 布局配置
    layoutConfig: {},

    //选中的组件
    selectedWidget: {},
    selectedId: "",
    selectedWidgetName: "",

    //组件列表
    widgetList: [],

    //状态
    status, // 0:编辑 1:预览

    historyData: {
      index: -1, //index: 0,
      maxStep: 20,
      steps: [],
    },

    //用于兄弟组件发射事件
    emitEvent(evtName, evtData) {
      

      this.vueInstance.$emit(evtName, evtData);
    },

    //用于兄弟组件接收事件
    handleEvent(evtName, callback) {
      
      this.vueInstance.$on(evtName, (data) => callback(data));
    },


    // 加载
    load(loadJson) {
      let modifiedFlag = false;
      if (!!loadJson && !!loadJson.widgetList) {
        this.widgetList = loadJson.widgetList;
        modifiedFlag = true;
      }
      if (!!loadJson && !!loadJson.layoutConfig) {
        this.layoutConfig = loadJson.layoutConfig;
        modifiedFlag = true;
      }

      if (modifiedFlag) {
        this.emitEvent("json-imported", []); // 通知其他组件
      }

      return modifiedFlag;
    },

    // 设置json
    setJson(json) {
      let modifiedFlag = false;
      if (json) {
        if (typeof json === "string") {
          modifiedFlag = this.load(JSON.parse(json));
        } else if (json.constructor === Object) {
          modifiedFlag = this.load(json);
        }

        if (modifiedFlag) {
          //this.emitHistoryChange();
        }
      }
    },

    // 清空组建
    clearWidgets() {
      this.widgetList = [];
      this.emitEvent("widgets-cleared", []);
    },

    // 配置已保存
    jsonSaved() {
      this.emitEvent("json-saved", []);
    },

    // 获取需要保存的配置
    getSaveJson() {
      return {
        widgetList: this.widgetList,
        layoutConfig: this.layoutConfig,
      };
    },

    // 导入模板json
    importJson(json) {
      if (!json) {
        this.load(deepClone(defaultConfig));
      } else {
        this.load(json);
      }
    },

    // 数据格式化
    formatJson() {},

    // 删除某个组件
    deleteWidget(widgetId) {
      let index = this.widgetList.findIndex((item) => item.i === widgetId);
      if (index >= 0) {
        this.widgetList.splice(index, 1);
        this.emitEvent("widget-deleted", widgetId);
      }
    },
    // 添加空白组件
    addEmptyWidget() {
      // 默认放在最下
      const x = 0;
      const y = this.widgetList.reduce((prev, cur) => {
        return cur.y > prev ? cur.y : prev;
      }, 0);
      let widget = {
        x,
        y,
        w: 6,
        h: 4,
        i: generateId(),
        static: false,
        moved: false,
        type: "",
        ...options,
      };

      //widget = Object.assign({}, defaultOptions[type], widget);
      //widget.name = type + widget.i;
      this.widgetList.push(widget);
      this.emitEvent("widget-added", widget);
      return widget;
    },

    // 获取组件默认配置
    getDefaultWidgetConfig(type) {
      return defaultOptions[type];
    },

    // 获取某个组件的配置
    getWidgetConfig(widgetId) {
      let widget = this.widgetList.find((item) => item.i === widgetId);
      if (widget) {
        return widget;
      }
      return null;
    },

    // 更改某个组件的配置
    updateWidgetConfig(widget, config) {
      //let widget = this.getWidgetConfig(widgetId);
      if (widget) {
        //widget = Object.assign(widget, config);
        overwriteObj(widget, config);
        this.emitEvent("widget-updated", widget);
      }
      
      
      return widget;
    },

    // 选中某个组件
    selectWidget(widgetId) {
      const widget = this.getWidgetConfig(widgetId);
      if (widget) {
        this.selectedWidget = widget;
      }

      this.emitEvent("widget-selected", widget);
    },

    setSelected(selected) {
      if (!selected) {
        this.clearSelected();
        return;
      }

      this.selectedWidget = selected;
      if (selected.id) {
        this.selectedId = selected.id;
        this.selectedWidgetName = selected.options.name;
      }
    },

    clearSelected() {
      this.selectedId = null;
      this.selectedWidgetName = null;
      this.selectedWidget = {}; //this.selectedWidget = null
    },
    // 选中布局
    selectLayout() {
      this.selectedWidget = null;
      this.emitEvent("layout-selected", null);
    },

    // 更改设计器状态
    changeStatus(status) {
      this.status = status;
      this.emitEvent("status-changed", status);
    },

    // 刷新某个组件
    refreshWidget(widgetId, config) {
      // 1. 更新组件配置

      // 2. 更新组件数据

      // 3. 通知组件刷新
      this.emitEvent("widget-refreshed", widgetId);
    },

    // 获取按钮权限
    getButtonPermission(button, widget) {
      const status = this.status;
      let permissionMap = {};
      if (status === 0) {
        permissionMap = {
          panel_edit: true,
        };
      } else if (status === 1) {
        permissionMap = {
          panel_edit: false,
        };
      }
      return !!permissionMap[button];
    },
  };
}
