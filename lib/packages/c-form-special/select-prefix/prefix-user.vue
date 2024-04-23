<template>
  <div class="prefix-icon-fill">
    <c-beautiful-avatar :value="value.name" color="#0065ff">
      <c-beautiful-icon
        slot="empty"
        color="rgb(192,196,204)"
        fill
        iconName="yonghu1"
      ></c-beautiful-icon>
    </c-beautiful-avatar>
  </div>
</template>

<script>
export default {
  name: "prefix-user",
  props: {
    value: {
      type: Object,
      default: () => ({}),
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
