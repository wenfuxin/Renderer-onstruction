<template>
  <div>
    <rowDrop></rowDrop>
    <gridTable></gridTable>
  </div>
</template>

<script>
import rowDrop from "./rowDrop.vue";
import gridTable from "./gridTable.vue";
export default {
  name: "rowDropDemo",
  components: {
    rowDrop,
    gridTable,
  },
  data() {
    return {};
  },
  methods: {
     // 合并对象数组中的date相同的元素
    mergeArray(arr) {
      const res = [];
      const obj = {};
      for (let i = 0; i < arr.length; i++) {
        if (!obj[arr[i].date]) {
          res.push(arr[i]);
          obj[arr[i].date] = true;
        } else {
          for (let j = 0; j < res.length; j++) {
            if (res[j].date === arr[i].date) {
              res[j].asfa = res[j].asfa.concat(arr[i].asfa);
              break;
            }
          }
        }
      }
      return res;
    },
  },
  computed: {},
  created() {
    const e = this.mergeArray([
      { date: "gdggdfd", asfa: [333, 2000, 4343] },
      { date: "gggg", asfa: ['fdgd','fgfd'],d:'5345' },
      { date: "gggg", asfa: [827] },
      { date: "花粉管花粉管", asfa: [68] },
    ]);
    console.log(e);
  },
  mounted() {},
  watch: {},
};
</script>

<style lang="scss" scoped></style>
