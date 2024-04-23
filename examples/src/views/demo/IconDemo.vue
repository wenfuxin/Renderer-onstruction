<template>
  <div class="icon-demo">
    <div class="setting">
      <div class="row">
        <span>color:</span> <el-color-picker v-model="color"></el-color-picker>
      </div>
      <div class="row">
        <span>size:</span
        ><c-select v-model="size" :options="sizeOptions"></c-select>
      </div>

      <div class="row">
        <span>shape:</span
        ><c-select v-model="shape" :options="shapeOptions"></c-select>
      </div>
      <div class="row">
        <span>fill:</span><el-switch v-model="fill"></el-switch>
      </div>
      <div class="row">
        <span>renderMethod:</span>
        <el-radio-group v-model="renderMethod">
          <el-radio-button label="svg">svg</el-radio-button>
          <el-radio-button label="font-class">font-class</el-radio-button>
        </el-radio-group>
      </div>
      <div class="row">
        <span>multiColor:</span><el-switch v-model="multiColor"></el-switch>
      </div>
      <div class="row">
        <span>iconName:</span><el-input v-model="iconName"></el-input>
      </div>
    </div>
    <!-- <c-beautiful-icon :iconName="iconName"></c-beautiful-icon> -->
    <c-beautiful-icon
      :iconName="iconName"
      :color="color"
      :size="size"
      :shape="shape"
      :fill="fill"
      :renderMethod="renderMethod"
      :multiColor="multiColor"
    ></c-beautiful-icon>
  </div>
</template>

<script>
export default {
  name: "IconDemo",
  displayName: "图标",
  data() {
    return {
      color: "#0065FF",
      size: "24px",
      sizeOptions: [
        { label: "12px", value: "12px" },
        { label: "16px", value: "16px" },
        { label: "20px", value: "20px" },
        { label: "24px", value: "24px" },
        { label: "28px", value: "28px" },
        { label: "32px", value: "32px" },
        { label: "64px", value: "64px" },
      ],
      shape: "circle",
      shapeOptions: [
        { label: "circle", value: "circle" },
        { label: "square", value: "square" },
      ],
      fill: false,
      renderMethod: "font-class",
      multiColor: false,
      iconName: "moban",
    };
  },
};
</script>

<style lang="scss" scoped>
.icon-demo {
  background-color: #fff;
  padding: 0 60px;
  height: 100vh;
  overflow: auto;
  padding-top: 30px;
  .setting {
    .row {
      margin-bottom: 10px;
      display: flex;
      align-items: center;
      span {
        margin-right: 10px;
      }
    }
  }
}
</style>
