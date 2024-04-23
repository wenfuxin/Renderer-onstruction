<template>
  <div class="components-demo">
    <el-button @click="handleClick">点击</el-button>
    <el-button @click="handleClick2">点击2</el-button>

    <div class="block">
      <span class="demonstration">
        默认下拉框 options方式 <span class="value">{{ select1 }}</span></span
      >
      <c-select
        v-model="select1"
        placeholder="请选择活动区域"
        :options="options"
        :operateType="operateType"
        @changed="handleChanged"
        @optionsChanged="handleOptionsChanged"
        :default-props="{desc:'desc11'}"
        style="width: 230px;"
        block
      ></c-select>
      <c-text-select v-model="select1" :options="options"></c-text-select>
    </div>
    <div class="block">
      <span class="demonstration">
        request方式 <span class="value">{{ select2 }}</span></span
      >
      <c-select
        v-model="select2"
        placeholder="请选择人员"
        :request="mockGetUserList"
        :handleResult="handleResult"
        :defaultParams="{ sex: '男' }"
        :operateType="operateType"
        :defaultProps="{ label: 'name', value: 'id' }"
        @changed="handleChanged"
      ></c-select>
      <c-text-select
        v-model="select2"
        :request="mockGetUserList"
        :handleResult="handleResult"
        :defaultParams="{ sex: '男' }"
        :defaultProps="{ label: 'name', value: 'id' }"
      ></c-text-select>
    </div>
    <!-- 下拉多选 -->
    <div class="block">
      <span class="demonstration">
        下拉多选options方式 <span class="value">{{ multiple1 }}</span></span
      >
      <c-select-multiple
        v-model="multiple1"
        placeholder="请选择活动区域"
        :options="options"
        :operateType="operateType"
        @changed="handleChanged"
      ></c-select-multiple>
      <c-text-select-multiple
        v-model="multiple1"
        :options="options"
      ></c-text-select-multiple>
    </div>
    <div class="block">
      <span class="demonstration">
        下拉多选request方式 <span class="value">{{ multiple2 }}</span></span
      >
      <c-select-multiple
        v-model="multiple2"
        :request="mockGetUserList"
        :handleResult="handleResult"
        :defaultParams="{ sex: '男' }"
        :defaultProps="{ label: 'name', value: 'id' }"
        :operateType="operateType"
        @changed="handleChanged"
      ></c-select-multiple>
      <c-text-select-multiple
        v-model="multiple2"
        :request="mockGetUserList"
        :handleResult="handleResult"
        :defaultParams="{ sex: '男' }"
        :defaultProps="{ label: 'name', value: 'id' }"
      ></c-text-select-multiple>
    </div>

    <div class="block">
      <span class="demonstration">
        选择工作项 <span class="value">{{ select_task }}</span></span
      >
      <c-select-task
        v-model="select_task"
        :operateType="operateType"
        @changed="handleChanged"
        block
      ></c-select-task>
      <c-text-task v-model="select_task"></c-text-task>
    </div>
    <div class="block">
      <span class="demonstration">
        选择工作项多选 <span class="value">{{ select_task2 }}</span></span
      >
      <c-select-task
        v-model="select_task2"
        :operateType="operateType"
        @changed="handleChanged"
        @optionsChanged="handleOptionsChanged"
        multiple
        block
      ></c-select-task>
      <c-text-multiple-task v-model="select_task2"></c-text-multiple-task>
    </div>
    <div class="block">
      <span class="demonstration">
        选择优先级 <span class="value">{{ select_priority }}</span></span
      >
      <c-select-priority
        v-model="select_priority"
        :operateType="operateType"
        block
      ></c-select-priority>
      <c-text-priority
        v-model="select_priority"
        :options="options"
      ></c-text-priority>
    </div>
    <div class="block">
      <span class="demonstration">
        选择用户 <span class="value">{{ select_user }}</span></span
      >
      <c-select-user
        v-model="select_user"
        :operateType="operateType"
        block
      ></c-select-user>
      <c-text-user v-model="select_user" block></c-text-user>
    </div>
  </div>
</template>

<script>
import { mockGetUserList } from "@/utils/i";

export default {
  name: "SelectDemo",
  displayName: "下拉框",
  data() {
    return {
      select1: "",
      select2: "",
      multiple1: "",
      multiple2: ["6DcaAc6a-Feff-CeFF-f38b-FD611F97CBCC"],
      select_task: "",
      select_task2: [5, 4],
      select_priority: "",
      select_user: "",
      operateType: "input",
      options: [
        {
          label: "区域一",
          value: "shanghai",
          desc11 : "区域一描述"
        },
        {
          label: "区域二",
          value: "beijing",
        },
      ],
    };
  },
  watch: {},
  created() {},
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
    // 改变options
    handleClick2() {
      this.options = [
        {
          label: "区域一",
          value: "shanghai",
        },
        {
          label: "区域二",
          value: "beijing",
        },
        {
          label: "区域三",
          value: "shenzhen",
        },
      ];
    },
    handleChanged(val) {
      console.log(val);
    },
    handleOptionsChanged(val) {
      console.log(val);
    },
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
</style>
