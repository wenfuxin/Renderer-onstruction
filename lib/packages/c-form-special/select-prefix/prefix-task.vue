<template>
  <div class="prefix-icon-fill">
    <c-beautiful-icon
      v-if="value"
      :iconName="icon"
      :color="color"
      :fill="true"
      shape="square"
      :renderMethod="renderMethod"
    ></c-beautiful-icon>
  </div>
</template>

<script>
import { SELECT_ICON_CONFIG } from "@/utils/c-component-config";

export default {
  name: "prefix-task",
  props: {
    value: {
      // type: Object,
    },
  },
  data() {
    return {
      renderMethod : SELECT_ICON_CONFIG.TASK_ICON,
    }
  },
  computed: {
    icon() {
      // icon-renwu|#56C22C
      try {
        const taskTypeIcon = this.value.taskTypeIcon;
        return taskTypeIcon.split("|")[0];
      } catch (error) {
        return "";
      }
    },
    color() {
      try {
        const taskTypeIcon = this.value.taskTypeIcon;
        return taskTypeIcon.split("|")[1];
      } catch (error) {
        return "";
      }
    },
  },
};
</script>

<style lang="scss">
.prefix-icon-fill {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
