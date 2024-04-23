<template>
  <div class="c-form-grid" :class="`c-form-grid-${rowSpace}`">
    <el-form
      :model="form"
      v-bind="formConfig"
      ref="form"
      :labelWidth="labelWidth"
    >
      <el-row
        :gutter="gutter"
        v-for="(rows, key) in formItemsComputed"
        :key="key"
      >
        <!-- 动态生成表单 -->
        <el-col :span="span" v-for="(item, index) in rows" :key="index">
          <el-form-item :rules="item.rules" :prop="item.prop">
            <template slot="label">
              <span>{{ item.label }}</span>
              <el-tooltip
                v-if="item.desc"
                class="item"
                effect="dark"
                :content="item.desc"
                placement="top-start"
              >
                <i class="el-icon-info desc-icon"></i>
              </el-tooltip>
              ：
            </template>
            <!-- desc -->

            <template v-if="hasComponent(item)">
              <component
                :is="hasComponent(item)"
                v-model="form[item.prop]"
                v-bind="item.widgetProps"
                :fieldName="item.prop"
                @operate="operate"
                @changed="
                  (value) => handleChanged(item.prop, index, value, item)
                "
              >
              </component>
              <!--todo: slot传递组件待开发 -->
            </template>

            <div v-else>
              没有找到组件
              <template v-for="(_, name) in getComponentSlots(item)">
                {{ name }}
              </template>
            </div>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
import {
  FORM_GRID_COMPONENT_MAP,
  DEFAULT_GRIDFORM_CONFIG,
} from "../utils/constant";
// 默认表单配置

export default {
  name: "c-form-grid",
  components: {},
  data() {
    return {
      form: {},
    };
  },
  props: {
    value: {
      type: Object,
      default: () => {},
    },
    operateType: {
      type: String,
      default: "input", // input, text ,edit
    },
    formItems: {
      type: Array,
      default: () => [],
    },

    formConfig: {
      type: Object,
      default: () => {},
    },
    // 控件映射
    widgetMap: {
      type: Object,
      default: () => {},
    },
  },
  created() {
    this.form = this.value;
  },
  watch: {
    value: {
      handler(val) {
        this.form = val;
      },
      deep: true,
    },
  },
  computed: {
    formItemsComputed() {
      let formItems = [];
      const span = this.span;
      // 每行显示的个数
      const rowSpan = parseInt(24 / span);

      this.formItems.forEach((element) => {
        if (!element.hidden) {
          formItems.push(element);
        }
      });

      let rowFormItems = [];

      // 每rowSpan个 为一行
      formItems.forEach((item, index) => {
        if (index % rowSpan === 0) {
          rowFormItems.push([]);
        }
        rowFormItems[rowFormItems.length - 1].push(item);
      });

      return rowFormItems;
    },
    rowSpace() {
      return this.formConfig.rowSpace || DEFAULT_GRIDFORM_CONFIG.rowSpace;
    },
    gutter() {
      return this.formConfig.gutter || DEFAULT_GRIDFORM_CONFIG.gutter;
    },
    span() {
      return this.formConfig.span || DEFAULT_GRIDFORM_CONFIG.span;
    },
    labelWidth() {
      return this.formConfig.labelWidth || DEFAULT_GRIDFORM_CONFIG.labelWidth;
    },
    block() {
      return this.formConfig.block || DEFAULT_GRIDFORM_CONFIG.block;
    },
  },
  methods: {
    // 校验表单
    validate() {
      return new Promise((resolve, reject) => {
        this.$refs.form.validate((valid) => {
          if (valid) {
            resolve(valid);
          } else {
            resolve(valid);
          }
        });
      });
    },
    validateField(prop) {
      return new Promise((resolve, reject) => {
        this.$refs.form.validateField(prop, (valid) => {
          if (valid) {
            resolve(valid);
          } else {
            resolve(valid);
          }
        });
      });
    },
    resetFields() {
      this.$refs.form.resetFields();
    },
    clearValidate() {
      this.$refs.form.clearValidate();
    },

    handleChanged(prop, index, value, item) {
      // console.log(prop, index, value, item);
    },
    operate(val) {
      this.$emit("formOperate", val);
    },
    getOperateType(item) {
      if (item.operateType) {
        return item.operateType;
      }
      return this.operateType;
    },
    hasComponent(item) {
      const { type } = item;
      const widgetMap = this.widgetMap;
      const componentMap = { ...FORM_GRID_COMPONENT_MAP, ...widgetMap };
      return componentMap[type];
    },

    // 分别获取 widget-XXX-XX  的 - 后面的值
    getComponentName(name) {},

    getComponentSlots(item) {
      const $slots = this.$slots;

      // 遍历获取item.prop 等于 name 的slot
      const slots = Object.keys($slots).reduce((prev, name) => {
        if (name === "widget-" + item.prop) {
          prev[name] = $slots[name];
        }
        return prev;
      }, {});

      return slots;
    },
  },
};
</script>

<style lang="scss">
.c-form-grid {
  .desc-icon {
    margin-left: 4px;
    cursor: pointer;
  }
  .el-form-item_label{
    padding: 0px
  }
  width: 97%;
}

.c-form-grid-none {
  .el-form-item {
    margin-bottom: 0px;
  }
}
.c-form-grid-small {
  .el-form-item {
    margin-bottom: 16px;
  }
}
.c-form-grid-medium {
  .el-form-item {
    margin-bottom: 20px;
  }
}
</style>
