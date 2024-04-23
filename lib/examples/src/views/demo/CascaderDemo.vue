<template>
  <div class="components-demo">
    <el-button @click="handleClick">点击</el-button>
    <el-button @click="handleClick2">点击2</el-button>

    <!-- 级联选择器 -->
    <div class="block">
      <span class="demonstration">
        级联选择器 <span class="value">{{ ccc }}</span></span
      >
      <c-cascader
        v-model="ccc"
        :operateType="operateType"
        placeholder="请选择vvvv"
        :options="options22"
        :defaultProps="{
          label: 'bbb',
          value: 'aaa',
        }"
      ></c-cascader>
      <c-text-cascader :options="options" v-model="ccc" />
    </div>

    <div class="block">
      <span class="demonstration">
        级联选择器request方式 <span class="value">{{ ddd }}</span></span
      >
      <c-cascader
        v-model="ddd"
        :operateType="operateType"
        placeholder="请选择vvv阿达v"
        :request="mockGetOrgTree"
        :defaultProps="{
          label: 'name',
          value: 'id',
          children: 'children_element',
        }"
        :defaultParams="{ type }"
        @changed="handleChanged"
        block
      ></c-cascader>
      <c-text-cascader
        :request="mockGetOrgTree"
        :defaultProps="{
          label: 'name',
          value: 'id',
          children: 'children_element',
        }"
        :defaultParams="{ type }"
        v-model="ddd"
      />
    </div>

    <!-- 级联选择器多选 -->
    <div class="block">
      <span class="demonstration">
        级联选择器多选 <span class="value">{{ sss }}</span></span
      >
      <c-cascader-multiple
        v-model="sss"
        :operateType="operateType"
        placeholder="级联选择器多选"
        :options="options"
        @changed="handleChanged"
        block
      ></c-cascader-multiple>
      <c-text-cascader-multiple :options="options" v-model="sss" />
    </div>

    <div class="block">
      <span class="demonstration">
        级联选择器多选request方式 <span class="value">{{ ggg }}</span></span
      >
      <c-cascader-multiple
        v-model="ggg"
        :operateType="operateType"
        placeholder="请选择vvv阿达v"
        :request="mockGetOrgTree"
        :defaultProps="{
          label: 'name',
          value: 'id',
          children: 'children_element',
        }"
        :defaultParams="{ type }"
        @changed="handleChanged"
        block
      ></c-cascader-multiple>
      <c-text-cascader-multiple
        :request="mockGetOrgTree"
        :defaultProps="{
          label: 'name',
          value: 'id',
          children: 'children_element',
        }"
        :defaultParams="{ type }"
        v-model="ggg"
      />
    </div>
  </div>
</template>

<script>
import { mockGetOrgTree } from "@/utils/i";

export default {
  name: "CascaderDemo",
  displayName: "级联选择器",
  data() {
    return {
      ccc: "",
      ddd: "",
      sss: "",
      ggg: "",
      operateType: "input",
      options22: [
        {
          aaa: "zhinan",
          bbb: "指南",
         },
      ],
      options: [
        {
          value: "zhinan",
          label: "指南",
          disabled: true,
          children: [
            {
              value: "shejiyuanze",
              label: "设计原则",
              children: [
                {
                  value: "yizhi",
                  label: "一致",
                },
                {
                  value: "fankui",
                  label: "反馈",
                },
                {
                  value: "xiaolv",
                  label: "效率",
                },
                {
                  value: "kekong",
                  label: "可控",
                },
              ],
            },
            {
              value: "daohang",
              label: "导航",
              children: [
                {
                  value: "cexiangdaohang",
                  label: "侧向导航",
                },
                {
                  value: "dingbudaohang",
                  label: "顶部导航",
                },
              ],
            },
          ],
        },
        {
          value: "zujian",
          label: "组件",
          children: [
            {
              value: "basic",
              label: "Basic",
              children: [
                {
                  value: "layout",
                  label: "Layout 布局",
                },
                {
                  value: "color",
                  label: "Color 色彩",
                },
                {
                  value: "typography",
                  label: "Typography 字体",
                },
                {
                  value: "icon",
                  label: "Icon 图标",
                },
                {
                  value: "button",
                  label: "Button 按钮",
                },
              ],
            },
            {
              value: "form",
              label: "Form",
              children: [
                {
                  value: "radio",
                  label: "Radio 单选框",
                },
                {
                  value: "checkbox",
                  label: "Checkbox 多选框",
                },
                {
                  value: "input",
                  label: "Input 输入框",
                },
                {
                  value: "input-number",
                  label: "InputNumber 计数器",
                },
                {
                  value: "select",
                  label: "Select 选择器",
                },
                {
                  value: "cascader",
                  label: "Cascader 级联选择器",
                },
                {
                  value: "switch",
                  label: "Switch 开关",
                },
                {
                  value: "slider",
                  label: "Slider 滑块",
                },
                {
                  value: "time-picker",
                  label: "TimePicker 时间选择器",
                },
                {
                  value: "date-picker",
                  label: "DatePicker 日期选择器",
                },
                {
                  value: "datetime-picker",
                  label: "DateTimePicker 日期时间选择器",
                },
                {
                  value: "upload",
                  label: "Upload 上传",
                },
                {
                  value: "rate",
                  label: "Rate 评分",
                },
                {
                  value: "form",
                  label: "Form 表单",
                },
              ],
            },
            {
              value: "data",
              label: "Data",
              children: [
                {
                  value: "table",
                  label: "Table 表格",
                },
                {
                  value: "tag",
                  label: "Tag 标签",
                },
                {
                  value: "progress",
                  label: "Progress 进度条",
                },
                {
                  value: "tree",
                  label: "Tree 树形控件",
                },
                {
                  value: "pagination",
                  label: "Pagination 分页",
                },
                {
                  value: "badge",
                  label: "Badge 标记",
                },
              ],
            },
            {
              value: "notice",
              label: "Notice",
              children: [
                {
                  value: "alert",
                  label: "Alert 警告",
                },
                {
                  value: "loading",
                  label: "Loading 加载",
                },
                {
                  value: "message",
                  label: "Message 消息提示",
                },
                {
                  value: "message-box",
                  label: "MessageBox 弹框",
                },
                {
                  value: "notification",
                  label: "Notification 通知",
                },
              ],
            },
            {
              value: "navigation",
              label: "Navigation",
              children: [
                {
                  value: "menu",
                  label: "NavMenu 导航菜单",
                },
                {
                  value: "tabs",
                  label: "Tabs 标签页",
                },
                {
                  value: "breadcrumb",
                  label: "Breadcrumb 面包屑",
                },
                {
                  value: "dropdown",
                  label: "Dropdown 下拉菜单",
                },
                {
                  value: "steps",
                  label: "Steps 步骤条",
                },
              ],
            },
            {
              value: "others",
              label: "Others",
              children: [
                {
                  value: "dialog",
                  label: "Dialog 对话框",
                },
                {
                  value: "tooltip",
                  label: "Tooltip 文字提示",
                },
                {
                  value: "popover",
                  label: "Popover 弹出框",
                },
                {
                  value: "card",
                  label: "Card 卡片",
                },
                {
                  value: "carousel",
                  label: "Carousel 走马灯",
                },
                {
                  value: "collapse",
                  label: "Collapse 折叠面板",
                },
              ],
            },
          ],
        },
        {
          value: "ziyuan",
          label: "资源",
          children: [
            {
              value: "axure",
              label: "Axure Components",
            },
            {
              value: "sketch",
              label: "Sketch Templates",
            },
            {
              value: "jiaohu",
              label: "组件交互文档",
            },
          ],
        },
      ],
      type: "org",
    };
  },
  watch: {},
  created() {},
  methods: {
    mockGetOrgTree,
    handleClick() {
      if (this.operateType === "input") {
        this.operateType = "text";
        return;
      }
      this.operateType = "input";
    },
    handleClick2() {
      this.type = "user";
    },
    handleChanged(val) {
      console.log("handleChanged");
      console.log(val);
    },
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
</style>
