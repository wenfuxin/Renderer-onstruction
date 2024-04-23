<template>
  <div class="config-layout-panel">
    <div class="header-body">
      <div class="title">布局设置</div>
    </div>
   
    <div class="basic-body">
      <el-form label-width="80px" size="mini" label-position="right">
        <el-form-item label="标题">
          <el-input v-model="layoutConfig.name"></el-input>
        </el-form-item>
        <el-form-item label="描述">
          <el-input v-model="layoutConfig.description"></el-input>
        </el-form-item>
        <el-form-item label="背景色">
          <el-color-picker
            v-model="layoutConfig.backgroundColor"
          ></el-color-picker>
        </el-form-item>
        <el-form-item label="栅格列数">
          <el-input-number
            v-model="layoutConfig.colNum"
            :min="1"
            :max="24"
          ></el-input-number>
        </el-form-item>
        <el-form-item label="水平间距">
          <el-input-number
            v-model="layoutConfig.horizontalSpacing"
            :min="0"
          ></el-input-number>
        </el-form-item>
        <el-form-item label="垂直间距">
          <el-input-number
            v-model="layoutConfig.verticalSpacing"
            :min="0"
          ></el-input-number>
        </el-form-item>
        <el-form-item label="每行高度">
          <el-input-number
            v-model="layoutConfig.rowHeight"
            :min="50"
          ></el-input-number>
        </el-form-item>
      </el-form>
    </div>
    {{ layoutConfig }}
  </div>
</template>

<script>
export default {
  name: "ConfigLayoutPanel",
  props: {
    designer: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {};
  },
  computed: {
    layoutConfig() {
      return this.designer.layoutConfig;
    },
  },
  methods: {},
};
</script>

<style lang="scss">
.config-layout-panel {
  .header-body {
    color: rgba(0, 0, 0, 0.85);
    font-size: 14px;
    font-weight: 600;
    padding-top: 15px;
    margin-bottom: 10px;
    .title {
      font-size: 14px;
      font-weight: 600;
    }
  }
}
</style>
