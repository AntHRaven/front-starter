<template>
  <div>
    <autogenerate-form
      @saveForm="saveForm"
      :filtered-fields="fields"
    ></autogenerate-form>
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
import AutogenerateForm from "@/components/general/autogenerateForm";
export default {
  name: "mainPage",
  components: { AutogenerateForm, CustomTable },
  data() {
    return {
      fields: [
        {
          label: "TEST",
          name: "test",
          placeholder: "testPl",
          type: "TEXT",
        },
      ],
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
    saveForm(form) {
      console.log(form);
    },

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
