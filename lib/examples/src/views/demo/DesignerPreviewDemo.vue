<template>
  <div class="sprint-container">
    <Preview />
  </div>
</template>

<script>
import Preview  from "@/components/designer/preview";
export default {
  name: "DesignerPreviewDemo",
  displayName: "设计器预览",
  components: {
    Preview,
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
.sprint-container{
  height: 100vh;
   
  border: 1px solid #ccc;
  overflow: auto;
 
}
 
</style>
