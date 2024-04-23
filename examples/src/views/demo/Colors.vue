<template>
  <div class="components-demo">
    <div class="colors">
      <div
        class="color"
        v-for="color in colors"
        :style="{ background: color.Hex }"
        :key="color.Name"
      >
        <div>$_{{ color.Name }}</div>
        <div>
          {{ color.Hex }}
        </div>
        <div>
          {{ color.Description }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 引入json
import colors from "../../../../packages/theme/_colors.json";
export default {
  name: "Colors",
  displayName: "颜色",
  data() {
    return {
      colors: colors.colorList,
    };
  },
};
</script>

<style lang="scss" scoped>
.colors {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  .color {
    width: 150px;
    height: 150px;
    margin: 10px;
    border-radius: 4px;
    border: 1px solid #eee;
    transition: all 0.3s;
    &:hover {
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
    //居中
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    div {
      margin-bottom: 5px;
    }
    color: #fff;
    // 文字阴影
    text-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
    font-size: 12px;
    font-weight: bold;
  }
}
</style>
