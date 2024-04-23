<template>
  <span class="panel-button-group">
    <el-button
      class="btn"
      v-for="item in opt.options_1"
      :key="item.key"
      type="text"
      @click="handleCommand(item.key)"
      :alt="item.label"
      :disabled="item.disabled"
      ><i :class="item.icon"></i
    ></el-button>
    <el-dropdown @command="handleCommand" v-if="opt.options_2.length > 0">
      <i class="el-icon-more btn-more"> </i>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item
          v-for="item in opt.options_2"
          :key="item.key"
          :command="item.key"
          :icon="item.icon"
          :disabled="item.disabled"
          :divided="item.divided"
          >{{ item.label }}</el-dropdown-item
        >
      </el-dropdown-menu>
    </el-dropdown>
  </span>
</template>

<script>
export default {
  name: "DropdownButtonGroup",
  props: {
    options: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {};
  },
  computed: {
    opt() {
      // type 1: 按钮 2:下拉菜单
      let options_1 = [];
      let options_2 = [];
      let options_other = [];
      this.options.forEach((item) => {
        if (!item.hidden) {
          if (item.type === 1) {
            options_1.push(item);
          } else if (item.type === 2) {
            options_2.push(item);
          } else {
            options_2.push(item);
          }
        }
      });

      return {
        options_1,
        options_2,
      };
    },
  },
  methods: {
    handleCommand(command) {
      const menu = this.options.find((item) => item.key === command);
      this.$emit("command", menu);
      this.$emit("change", command);
    },
  },
  mounted() {},
};
</script>

<style lang="scss">
.panel-button-group {
  .btn-more {
    display: flex;

    cursor: pointer;
  }
  .el-dropdown {
    margin-left: 6px;
  }
  .btn {
    margin-right: 4px;
    &:last-child {
      //  margin-right: 10px;
    }
  }
}
</style>
