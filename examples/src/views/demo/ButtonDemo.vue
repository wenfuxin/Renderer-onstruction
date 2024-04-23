<template>
  <div class="components-demo">
    <div class="block">
      <c-button>默认大小</c-button>
      <c-button type="primary">默认大小</c-button>
      <c-button type="success">默认大小</c-button>
      <c-button type="warning">默认大小</c-button>
      <c-button type="danger">默认大小</c-button>
      <c-button type="text">默认大小</c-button>
    </div>
    <div class="block">
      <c-button size="small">small大小</c-button>
      <c-button size="small" type="primary">small大小</c-button>
      <c-button size="small" type="success">small大小</c-button>
      <c-button size="small" type="warning">small大小</c-button>
      <c-button size="small" type="danger">small大小</c-button>
      <c-button size="small" type="text">small大小</c-button>
    </div>
    <div class="block">
      <c-button disabled>禁用状态</c-button>
      <c-button type="primary" disabled>禁用状态</c-button>
      <c-button type="success" disabled>禁用状态</c-button>
      <c-button type="warning" disabled>禁用状态</c-button>
      <c-button type="danger" disabled>禁用状态</c-button>
      <c-button type="text" disabled>禁用状态</c-button>
    </div>
    <div class="block">
      <c-button type="primary" iconName="baocun"> 搜索</c-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ButtonDemo",
  displayName: "按钮",
  methods: {
    handleClick() {
      console.log("323232");
    },
  },
};
</script>

<style lang="scss" scoped></style>
