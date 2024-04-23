<template>
  <div class="card-select-widget">
    {{ data }}
    <div class="widget-card" v-for="item in options" :key="item.type">
      <div class="widget-card-header">
        <div class="widget-card-header-icon">
          <i class="iconfont icon-moban"></i>
        </div>
        <div class="widget-card-header-title">{{ item.name }}</div>
      </div>
      <div class="widget-card-body">
        {{ item.description }}
      </div>
      <div class="widget-card-footer">
        <el-button type="primary" size="small" @click="addWidget(item)"
          >添加</el-button
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardSelectWidget",
  props: {
    options: {
      type: Array,
      default: () => [],
    },
    value: {
      type: String,
      default: "",
    },
  },
  created() {
    this.data = this.value;
  },
  data() {
    return {
      data:''
    };
  },
  methods: {
    addWidget(item) {
      this.data = item.type;
      this.$emit("input", this.data);
      this.$emit("addWidget", item.type);
    
    },
  },
};
</script>

<style lang="scss">
.card-select-widget {
  .widget-card {
    width: 100%;
    border-radius: 4px;
    background-color: #fff;
    margin-bottom: 10px;

    border: 1px solid var(--e-5-e-6-eb, #e5e6eb);
    &:hover {
      border: 1px solid #0065ff;

      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    }

    .widget-card-header {
      display: flex;
      align-items: center;
      padding: 10px 16px;
      .widget-card-header-icon {
        font-size: 20px;
        color: #fff;
        margin-right: 8px;
        display: flex;
        width: 26px;
        height: 26px;
        justify-content: center;
        align-items: center;
        background-color: #626aea;
        display: flex;
        justify-content: center;
        align-items: center;

        border-radius: 50%;

        .iconfont {
          font-size: 14px;
        }
      }

      .widget-card-header-title {
        color: #1d2129;
        font-size: 14px;
        font-style: normal;
        font-weight: 600;
      }
    }
    .widget-card-body {
      padding: 0px 48px;
      color: #86909c;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px; /* 166.667% */
    }
    .widget-card-footer {
      padding: 10px 16px;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      .el-button {
        padding: 0 12px;
        height: 24px;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px;
        border-radius: 2px;
      }
    }

    &:nth-child(2n) {
      .widget-card-header-icon {
        background-color: #f90 !important;
      }
    }
  }
}
</style>
