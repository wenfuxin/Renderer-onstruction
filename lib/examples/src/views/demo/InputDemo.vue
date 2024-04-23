<template>
  <div class="components-demo">
    <el-button @click="handleClick">点击</el-button>

    <div class="block">
      <span class="demonstration"
        >默认输入框<span class="value">{{ input1 }}</span></span
      >
      <c-input
        v-model="input1"
        placeholder="请输入内容"
        :operateType="operateType"
      ></c-input>
      <c-text-input v-model="input1"></c-text-input>
    </div>
    <div class="block">
      <span class="demonstration"
        >默认文本输入域<span class="value">{{ input2 }}</span></span
      >
      <c-input-textarea
        type="textarea"
        :rows="2"
        placeholder="请输入内容"
        v-model="input2"
        :operateType="operateType"
      ></c-input-textarea>
      <c-text-textarea v-model="input2"></c-text-textarea>
    </div>

    <!-- 计数器 -->
    <div class="block">
      <span class="demonstration"
        >计数器<span class="value">{{ number }}</span></span
      >
      <c-input-number
        v-model="number"
        :min="1"
        :max="10"
        :step="1"
        placeholder="请输入内容"
        :operateType="operateType"
      ></c-input-number>
      <c-text-number v-model="number"></c-text-number>
    </div>
  </div>
</template>

<script>
export default {
  name: "InputDemo",
  displayName: "输入框",
  data() {
    return {
      input1: "",
      input2: "",
      number: 1,
      operateType: "input",
    };
  },
  watch: {},
  created() {},
  methods: {
    handleClick() {
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
