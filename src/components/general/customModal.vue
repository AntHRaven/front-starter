<template>
  <div>
    <el-dialog
      :before-close="handleClose"
      @close="closeModal"
      destroy-on-close
      :title="title"
      :visible.sync="visible"
      :width="width"
    >
      <slot></slot>
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    visible: Boolean,
    width: {
      type: String,
      default: "55%",
    },
  },
  name: "customModal",

  methods: {
    handleClose(done) {
      this.$confirm("Вы уверены что хотите закрыть окно?")
        .then(() => {
          done();
        })
        .catch(() => {});
    },

    closeModal() {
      this.$store.dispatch("setShowModal", {
        title: null,
        modalType: null,
        width: "55%",
      });
    },
  },
};
</script>

<style scoped></style>
