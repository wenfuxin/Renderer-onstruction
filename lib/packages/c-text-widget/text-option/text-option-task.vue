<template>
  <div class="text-option--task">
    <span>
      <c-beautiful-icon
        :iconName="icon"
        :color="color"
        :fill="true"
        shape="square"
        :renderMethod="renderMethod"
        size="13px"
      ></c-beautiful-icon>
      <span>
        {{ item.taskName }}
      </span>
    </span>
  </div>
</template>

<script>
import { SELECT_ICON_CONFIG } from "@/utils/c-component-config";
export default {
  name: "text-option-task",
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
.text-option--task {
  display: inline-block;
  margin-right: 8px;
}
</style>
