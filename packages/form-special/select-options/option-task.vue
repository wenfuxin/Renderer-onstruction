<template>
  <div class="business-option--task">
    <div class="task__header">
      <span class="task__icon">
        <c-beautiful-icon
          :iconName="icon"
          :color="color"
          :fill="true"
          shape="square"
          :renderMethod="renderMethod"
          size="13px"
        ></c-beautiful-icon>
      </span>
      <span class="task__code">{{ item.taskCode }}</span>
    </div>
    <div class="task__body">
      <div class="task__name">{{ item.taskName }}</div>
    </div>
  </div>
</template>

<script>
import { SELECT_ICON_CONFIG } from "@/utils/c-component-config";
export default {
  name: "option-task",
  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      renderMethod: SELECT_ICON_CONFIG.TASK_ICON,
    };
  },
  computed: {
    icon() {
      // icon-renwu|#56C22C
      try {
        const taskTypeIcon = this.item.taskTypeIcon;
        return taskTypeIcon.split("|")[0];
      } catch (error) {
        return "";
      }
    },
    color() {
      try {
        const taskTypeIcon = this.item.taskTypeIcon;
        return taskTypeIcon.split("|")[1];
      } catch (error) {
        return "";
      }
    },
  },
};
</script>

<style lang="scss">
.business-option--task {
  display: flex;
  flex-direction: column;
  line-height: auto;
  padding: 4px 0;
  border-bottom: 1px solid #ebeef5;

  .task__header {
    .task__icon {
      margin-right: 8px;
    }
    .task__code {
      color: #001c3d;
      font-size: 14px;
    }
    margin-bottom: 4px;
  }
  .task__body {
    .task__name {
      color: #999999;
      font-size: 14px;
      text-indent: 28px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      min-width: 80px;
    }
  }
}
</style>
