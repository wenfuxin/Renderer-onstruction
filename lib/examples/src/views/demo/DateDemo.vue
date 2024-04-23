<template>
  <div class="components-demo">
    <el-button @click="handleClick">点击</el-button>

    <!-- 日期选择器 -->
    <div class="block">
      <span class="demonstration">
        日期选择器 <span class="value">{{ date }}</span></span
      >
      <c-date-picker
        v-model="date"
        :operateType="operateType"
        placeholder="请选择日期"
      ></c-date-picker>
      <c-text-date v-model="date" />
    </div>
    <!-- 日期时间选择器 -->
    <div class="block">
      <span class="demonstration">
        日期时间选择器 <span class="value">{{ datetime }}</span></span
      >
      <c-date-time-picker
        v-model="datetime"
        placeholder="请选择日期"
        :operateType="operateType"
      ></c-date-time-picker>
      <c-text-date-time v-model="datetime" />
    </div>
    <!-- 时间选择器 -->
    <div class="block">
      <span class="demonstration">
        时间选择器 <span class="value">{{ time }}</span></span
      >
      <c-time-picker
        v-model="time"
        :operateType="operateType"
        placeholder="请选择时间"
      ></c-time-picker>
      <c-text-time v-model="time" />
    </div>
  </div>
</template>

<script>
export default {
  name: "DateDemo",
  displayName: "日期选择器",
  data() {
    return {
      date: "",
      datetime: "",
      time: "",
      operateType: "input",
    };
  },
  watch: {},
  created() {},
  methods: {
    handleClick() {
      this.date = "2020-12-12";
      this.datetime = "2020-12-12 12:12:12";
      this.time = "12:12:12";

      if (this.operateType === "input") {
        this.operateType = "text";
        return;
      }
      this.operateType = "input";
    },
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
</style>
