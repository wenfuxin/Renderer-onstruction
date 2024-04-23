<template>
  <div class="block" style="padding: 50px">
    <vxe-table
      border
      row-key
      ref="xTable"
      class="sortable-row-demo"
      :data="tableData"
    >
      <vxe-table-column width="60">
        <template v-slot>
          <span class="drag-btn">
            <i class="vxe-icon--menu"></i>
          </span>
        </template>
        <template v-slot:header>
          <vxe-tooltip
            v-model="showHelpTip1"
            content="按住后可以上下拖动排序！"
            enterable
          >
            <i
              class="vxe-icon--question"
              @click="showHelpTip1 = !showHelpTip1"
            ></i>
          </vxe-tooltip>
        </template>
      </vxe-table-column>
      <vxe-table-column field="name" title="Name"></vxe-table-column>
      <vxe-table-column field="sex" title="Sex"></vxe-table-column>
      <vxe-table-column field="age" title="Age"></vxe-table-column>
      <vxe-table-column
        field="address"
        title="Address"
        show-overflow
      ></vxe-table-column>
    </vxe-table>
  </div>
</template>

<script>
import Sortable from "sortablejs";
import { mockGetUserList, mockDropSaveUserList, mockSaveUser } from "@/utils/i";
import { cloneDeep } from "lodash";
export default {
  data() {
    return {
      showHelpTip1: false,
      tableData: [],
    };
  },
  created() {
    mockGetUserList({}).then((res) => {
      console.log(res);
      this.tableData = res;
    });
    this.rowDrop();
  },
  beforeDestroy() {
    if (this.sortable) {
      this.sortable.destroy();
    }
  },
  methods: {
    rowDrop() {
      this.$nextTick(() => {
        console.log(this.$refs.xTable);
        let xTable = this.$refs.xTable;
        this.sortable = Sortable.create(
          xTable.$el.querySelector(".body--wrapper>.vxe-table--body tbody"),
          {
            handle: ".drag-btn",
            onEnd: ({ newIndex, oldIndex }) => {
              //
            },
          }
        );
      });
    },

    updateData2(oldIndex, newIndex) {
      // 把元素按照下标插入到新的位置

      this.tableData.splice(newIndex, 0, this.tableData.splice(oldIndex, 1)[0]);
      let loadingInstance = this.$loading({
        lock: true,
        text: "正在更新数据...",
        spinner: "el-icon-loading",
        background: "rgba(255, 255, 255, 0.7)",
      });

      this.tableData.forEach((item, index) => {
        item.sort = index;
        mockSaveUser(item).then((res) => {
          if (index === this.tableData.length - 1) {
            this.$message({
              message: "更新成功",
              type: "success",
            });
            loadingInstance.close();
          }
          // console.log(res);
        });
      });

      console.log(this.tableData);
    },

    updateData(oldId, currId) {
      // const newIds = this.tableData.map((item) => {
      //   if (item.id === oldId) {
      //     return currId;
      //   }
      //   if (item.id === currId) {
      //     return oldId;
      //   }
      //   return item.id;
      // });
      // console.log(newIds);
      // mockDropSaveUserList(newIds).then((res) => {
      //    this.tableData = res;
      //   this.$message({
      //     message: "更新成功",
      //     type: "success",
      //   });
      // });
    },
  },
};
</script>

<style lang="scss">
.sortable-row-demo .drag-btn {
  cursor: move;
  font-size: 12px;
}
.sortable-row-demo .vxe-body--row.sortable-ghost,
.sortable-row-demo .vxe-body--row.sortable-chosen {
  background-color: #dfecfb;
}
</style>
