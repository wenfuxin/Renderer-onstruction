<template>
  <div class="business-text-option--user">
    <div class="business-option-user__header">
      <span class="business-option-user__header--avatar">
        <c-beautiful-avatar
          v-if="item.name"
          :value="item.name"
          color="#0065ff"
        ></c-beautiful-avatar>
      </span>
      <span>
        {{ item.name }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "option-user",
  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    icon() {
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
.business-text-option--user {
  display: flex;
  flex-direction: column;
  // padding: 4px 0;

  .business-option-user__header--display {
    .user-weight {
      font-weight: 600;
    }
  }
}
</style>
