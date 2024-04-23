<template>
  <el-form-item
    class="c-form-item"
    v-bind="$attrs"
    v-on="$listeners"
    :label="label"
  >
    <template v-for="(_, name) in $slots" :slot="name">
      <slot :name="name"></slot>
    </template>
  </el-form-item>
</template>

<script>
export default {
  name: "c-form-item",
  components: {},
  data() {
    return {};
  },
  props: {},
  watch: {},
  created() {},
  methods: {},
  computed: {
    label() {
      return this.$attrs.label + "：";
    },
  },
};
</script>
<style lang="scss">
.c-form-item {
  .el-form-item__label {
    padding: 0px;
  }
}
</style>
