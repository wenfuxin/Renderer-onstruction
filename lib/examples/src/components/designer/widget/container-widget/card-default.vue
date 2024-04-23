<template>
  <div class="card-default" :class="{ 'card-default-active': isActive }">
    <div class="card-header-line"></div>
    <div class="card-header vue-draggable-handle">
      <div class="draggable-handle"></div>
      <div class="text">{{ item.name }}</div>
      <div class="buttons no-drag">
        <PanelButtons :options="options" @command="handleCommand" />
      </div>
    </div>
    <div class="card-content" v-loading="loading">
      <component
        v-if="item.type"
        :is="componentId"
        :item="item"
        :designer="designer"
      ></component>
      <empty-widget v-else :designer="designer" :item="item" />
    </div>
  </div>
</template>

<script>
// 模拟延时
function sleep(time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}
import PanelButtons from "../../components/panel-buttons.vue";
import MyWorkitem from "../simple-widget/my-workitem.vue";
import MyFollowSpace from "../simple-widget/my-follow-space.vue";
import MyFollowWorkitem from "../simple-widget/my-follow-workitem.vue";
import MyPanel from "../simple-widget/my-panel.vue";
import MySprint from "../simple-widget/my-sprint.vue";
import EmptyWidget from "../simple-widget/empty-widget.vue";
import { widgetTypeMap } from "../../template";
console.log("widgetTypeMap", widgetTypeMap);
export default {
  name: "CardDefault",
  components: {
    PanelButtons,
    EmptyWidget,
    MyWorkitem,
    MyFollowSpace,
    MyFollowWorkitem,
    MyPanel,
    MySprint,
  },
  props: {
    designer: {
      type: Object,
      default: () => {},
    },
    item: {
      type: Object,
      default: () => {},
    },
    preview: {
      type: Boolean,
      default: false,
    },
    active: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      loading: false,
      options: [
        // {
        //   key: "edit",
        //   label: "编辑",
        //   type: 2,
        //   hidden: !(this.designer.status !== 1),
        // },
        {
          key: "refresh",
          icon: "el-icon-refresh",
          label: "刷新",
          type: 1,
        },
        {
          key: "delete",
          label: "删除",
          type: 2,
          hidden: !(this.designer.status !== 1),
        },
      ],
    };
  },
  watch: {
    "designer.status": function (val) {
      this.options.forEach((item) => {
        if (item.key === "edit" || item.key === "delete") {
          item.hidden = !(val !== 1);
        }
      });
    },
  },
  computed: {
    componentId() {
      return widgetTypeMap[this.item.type];
    },
    isActive() {
      return this.active && this.designer.status !== 1;
    },
  },
  methods: {
    // 点击按钮
    handleCommand(option) {
      this.$emit("command", {
        type: option.key,
        widget: this.item,
      });
    },
    // 刷新数据
    refreshData() {
      console.log("刷新数据");
      this.loading = true;
      sleep(1000).then(() => {
        this.loading = false;
      });
    },
  },
  mounted() {},
};
</script>

<style lang="scss">
.card-default {
  width: 100%;
  height: 100%;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 1px 5px 0px rgba(57, 66, 60, 0.2);
  border: 2px solid transparent;
  .card-header-line {
    height: 4px;
    background-color: #0065ff;
    width: calc(100% - 20px);
    margin-left: 10px;
    border-radius: 4px;
    margin-top: -2px;
  }
  .card-header {
    color: rgba(0, 0, 0, 0.85);
    color: var(--85, rgba(0, 0, 0, 0.85));
    font-size: 16px;
    font-weight: 600;
    padding: 0px 20px 0px 10px;
    height: 30px;
    line-height: 30px;
    display: flex;
    align-items: center;
    .buttons {
      // background-color: red
    }
    .draggable-handle {
      width: 10px;
      height: 20px;
      background-color: #ccc;
      margin-right: 5px;
    }
    .text {
      flex: 1;
    }
  }
  .card-content {
    padding: 0 20px 20px 20px;
    // background-color: red;
    height: calc(100% - 30px - 4px - 60px);
    //opacity: 0.2;
  }
}
.card-default-active {
  box-shadow: 0px 1px 5px 0px rgba(57, 66, 60, 0.4);
}
</style>
