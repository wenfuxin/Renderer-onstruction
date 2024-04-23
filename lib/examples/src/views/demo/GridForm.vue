<template>
  <div class="components-demo">
    <!-- 高级表单 -->
    <el-button @click="handleClick">点击</el-button>
    <el-button @click="handleValidate">校验</el-button>
    <el-button @click="handleValidateField">校验2</el-button>
    <el-button @click="handleClearValidate">clearValidate</el-button>
    <el-button @click="handleHidden">hidden</el-button>

    <div class="block">
      <span class="demonstration">
        高级表单 <span class="value">{{ form }}</span></span
      >
      <c-form-grid
        ref="grid"
        :formConfig="formConfig"
        :formItems="formItems"
        v-model="form"
        :widgetMap="widgetMap"
      >
      </c-form-grid>
    </div>
  </div>
</template>

<script>
import { mockGetUserList, mockGetOrgTree } from "@/utils/i";
const optionsTree = [
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
];
export default {
  components: {},
  name: "GridForm",
  displayName: "高级表单",
  data() {
    return {
      form: {},
      formConfig: {
        labelWidth: "140px",
        span: 12,
        block: true,
        gutter: 70,
        rowSpace: "small",
      },
      operateType: "input",
      widgetMap: {
        // input:'c-input-textarea'
      },
      hidden: false,
    };
  },

  computed: {
    formItems() {
      return [
        {
          label: "默认输入框",
          prop: "input1",
          type: "input",
          // 控件参数
          widgetProps: {
            clearable: false,
            placeholder: "请输入xxx",
            operateType: this.operateType,
          },
          rules: [
            { required: true, message: "请输入活动名称", trigger: "blur" },
            {
              min: 3,
              max: 5,
              message: "长度在 3 到 5 个字符",
              trigger: "blur",
            },
          ],
        },
        {
          label: "默认文本输入域",
          prop: "input2",
          type: "input-textarea",
          widgetProps: {
            
            rows: 2,
            placeholder: "请输入文本输入域",
            operateType: this.operateType,
          },
          rules: [
            { required: true, message: "请输入活动名称", trigger: "blur" },
            {
              min: 3,
              max: 5,
              message: "长度在 3 到 5 个字符",
              trigger: "blur",
            },
          ],
        },
        {
          label: "计数器",
          prop: "number",
          type: "input",
          widgetProps: {
            type: "number",
            min: 1,
            max: 10,
            step: 1,
            placeholder: "请输入计数器",
            operateType: this.operateType,
          },
          // 描述
          desc: "自动监听父元素的变化去重新计算表格（对于父元素可能存在动态变化、显示隐藏的容器中、列宽异常等场景中的可能会用到）",
        },
        {
          label: "链接",
          prop: "link",
          type: "link",
          widgetProps: {
            type: "link",
            placeholder: "请输入链接",
            operateType: this.operateType,
          },
        },
        {
          label: "默认下拉框",
          prop: "select",
          type: "select",
          hidden: this.hidden,
          widgetProps: {
            placeholder: "请选择",
            options: [
              {
                label: "选项1",
                value: "1",
              },
              {
                label: "选项2",
                value: "2",
              },
            ],
            operateType: this.operateType,
          },
        },
        {
          label: "request下拉框",
          prop: "select2",
          type: "select",
          widgetProps: {
            placeholder: "请选择",
            request: this.mockGetUserList,
            handleResult: this.handleResult,
            defaultProps: { label: "name", value: "id" },
            operateType: this.operateType,
          },
        },
        {
          label: "默认下拉多选",
          prop: "selectMultiple",
          type: "select-multiple",
          widgetProps: {
            placeholder: "请选择",
            options: [
              {
                label: "选项1",
                value: "1",
              },
              {
                label: "选项2",
                value: "2",
              },
            ],
            operateType: this.operateType,
          },
        },
        {
          label: "request下拉多选",
          prop: "selectMultiple2",
          type: "select-multiple",
          widgetProps: {
            placeholder: "请选择",
            request: this.mockGetUserList,
            handleResult: this.handleResult,
            defaultProps: { label: "name", value: "id" },
            operateType: this.operateType,
          },
        },
        {
          label: "选择工作项",
          prop: "selectWorkItem",
          type: "select-task",
          widgetProps: {
            operateType: this.operateType,

            block: true,
          },
        },
        {
          label: "选择工作项多选",
          prop: "select_task2",
          type: "select-task",
          widgetProps: {
            operateType: this.operateType,
            block: true,
            multiple: true,
          },
        },
        {
          label: "选择优先级",
          prop: "select_priority1",
          type: "select-priority",
          widgetProps: {
            operateType: this.operateType,
            block: true,
          },
        },
        {
          label: "选择用户",
          prop: "select_user",
          type: "select-user",
          widgetProps: {
            operateType: this.operateType,
            block: true,
          },
        },
        {
          label: "选择日期",
          prop: "date_picker",
          type: "date-picker",
          widgetProps: {
            operateType: this.operateType,
          },
        },
        {
          label: "选择日期时间",
          prop: "date_time_picker",
          type: "date-time-picker",
          widgetProps: {
            operateType: this.operateType,
          },
        },
        {
          label: "选择时间",
          prop: "time_picker",
          type: "time-picker",
          widgetProps: {
            operateType: this.operateType,
          },
        },
        {
          label: "级联选择",
          prop: "cascader",
          type: "cascader",
          widgetProps: {
            operateType: this.operateType,
            options: optionsTree,
          },
        },
        {
          label: "级联选择",
          prop: "cascader_multiple",
          type: "cascader-multiple",

          widgetProps: {
            operateType: this.operateType,
            request: mockGetOrgTree,
            defaultParams: { type: "参数" },
            defaultProps: {
              label: "name",
              value: "id",
              children: "children_element",
            },
          },
        },
      ];
    },
  },

  methods: {
    mockGetUserList,
    handleResult(res) {
      return res;
    },
    handleClick() {
      if (this.operateType === "input") {
        this.operateType = "text";
        return;
      }
      this.operateType = "input";
    },
    handleValidate() {
      this.$refs.grid
        .validate()
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    handleValidateField() {
      this.$refs.grid
        .validateField("input1")
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    handleClearValidate() {
      this.$refs.grid.clearValidate();
    },
    handleHidden() {
      this.hidden = !this.hidden;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
