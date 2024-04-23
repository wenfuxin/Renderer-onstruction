<template>
  <div>
    <Render
      preview
      responsive
      :designer="designer"
      :widgetList="widgetList"
      :layoutConfig="layoutConfig"
    />
  </div>
</template>
<script>
import Render from "../render";
import { createDesigner } from "../designer";

export default {
  name: "previewMain",

  components: {
    Render,
  },
  data() {
    return {
      designer: {},
    };
  },
  created() {
    this.designer = createDesigner(this, { status: 1 });
    this.query();
  },
  computed: {
    widgetList() {
      return this.designer.widgetList;
    },
    layoutConfig() {
      return this.designer.layoutConfig;
    },
  },
  methods: {
    // 查询
    query() {
      const json = localStorage.getItem("json");
      this.designer.setJson(json);
    },
  },

  mounted() {},
};
</script>
