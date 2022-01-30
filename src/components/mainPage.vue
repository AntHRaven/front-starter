<template>
  <div>
    <custom-table
      :data="data"
      :columns="columns"
      @sizeChange="sizeChange"
      @currentChange="currentChange"
    ></custom-table>
  </div>
</template>

<script>
import CustomTable from "@/components/general/customTable";
export default {
  name: "mainPage",
  components: { CustomTable },
  data() {
    return {
      data: {
        tableData: [
          {
            test: "test",
          },
        ],
        size: 20,
        number: 0,
        totalElements: 100,
      },
      columns: [
        {
          prop: "test",
          label: "test",
        },
      ],
    };
  },

  methods: {
    sizeChange(val) {
      console.log(val);
    },

    currentChange(val) {
      console.log(val);
    },
  },
};
</script>

<style scoped></style>
