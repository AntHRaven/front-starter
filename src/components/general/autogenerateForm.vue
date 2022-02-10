<template>
  <div>
    <el-form
      ref="form"
      size="mini"
      :model="searchForm"
      label-suffix=":"
      label-position="top"
      label-width="50%"
    >
      <el-row>
        <div v-for="(field, index) in filteredFields" :key="index">
          <el-form-item :key="index" :label="field.label" :prop="field.name">
            <el-input
              v-if="field.type === 'TEXT'"
              v-model="searchForm[field.name]"
              clearable
              :placeholder="field.placeholder"
            />
            <el-select
              v-if="field.type === 'SELECT'"
              v-model="searchForm[field.name]"
              :placeholder="field.placeholder"
              clearable
              filterable
              multiple
              :multiple-limit="1"
              style="width: 100%"
            >
              <el-option
                v-for="item in field.items"
                :key="item.uid"
                :label="`${item.name}`"
                :value="item.uid"
              />
            </el-select>
            <el-date-picker
              v-if="field.type === 'DATE'"
              v-model="searchForm[field.name]"
              type="date"
              :placeholder="field.placeholder"
              :format="dateFormat"
              :value-format="dateFormat"
              style="width: 100%"
            />
          </el-form-item>
        </div>
      </el-row>
      <el-row>
        <el-button @click="save">Сохранить</el-button>
      </el-row>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "autogenerateForm",
  props: {
    filteredFields: {
      type: Array,
    },
    dateFormat: {
      type: String,
      default: "yyyy-MM-dd",
    },
  },

  data() {
    return {
      searchForm: {},
    };
  },

  methods: {
    save() {
      this.$emit("saveForm", this.searchForm);
    },
  },
};
</script>

<style scoped></style>
