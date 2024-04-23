<template>
  <div class="business-option--priority">
    <div class="priority__header">
      <span class="priority__icon" v-if="item.icon">
        <c-beautiful-icon
          :iconName="item.icon"
          :color="item.color"
          :fill="false"
          shape="square"
          size="10px"
        ></c-beautiful-icon>
      </span>
      <span class="priority__code">{{ item.label }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "option-priority",
  data() {
    return {
    };
  },
  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>

<style lang="scss">
.business-option--priority {
  display: flex;
  flex-direction: column;
  line-height: auto;
  // padding: 4px 0;
  .priority__header {
    .priority__icon {
      margin-right: 4px;
    }
    .priority__code {
      color: #001c3d;
      font-size: 14px;
    }
    // margin-bottom: 4px;
  }
}
</style>
