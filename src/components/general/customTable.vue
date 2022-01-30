<template>
  <div>
    <el-table stripe border :data="data.tableData" style="width: 100%">
      <el-table-column
        :key="key"
        v-for="(column, key) in columns"
        :prop="column.prop"
        :label="column.label"
        sortable
      >
      </el-table-column>
    </el-table>
    <el-pagination
      style="text-align: center; margin-top: 10px"
      layout="total, sizes, prev, pager, next"
      background
      :page-sizes="[20, 40, 60, 80, 100]"
      :page-size="data.size"
      :current-page.sync="data.number + 1"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :total="data.totalElements"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  props: {
    data: Object,
    columns: Array,
  },
  name: "customTable",

  methods: {
    handleSizeChange(val) {
      this.$emit("sizeChange", val);
    },

    handleCurrentChange(val) {
      this.$emit("currentChange", val);
    },
  },
};
</script>

<style scoped></style>
