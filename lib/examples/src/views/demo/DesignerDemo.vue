<template>
  <div class="sprint-container">
    <Designer />
  </div>
</template>

<script>
import Designer from "@/components/designer";
export default {
  name: "DesignerDemo",
  displayName: "设计器",
  components: {
    Designer,
  },
  props: {
    expand: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      collapse: false,
    };
  },
  methods: {
    handleCommand(command) {
      console.log(command);
      this.$emit("command", command);
    },

    collapseCard() {
      this.collapse = !this.collapse;
    },
  },
  mounted() {},
};
</script>

<style lang="scss">
 
.sprint-container {
  height: 100vh;
  width: 100vw;
   border: 1px solid #ccc;
 }
</style>
