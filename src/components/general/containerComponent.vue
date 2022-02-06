<template>
  <div
    style="
      margin: 20px 20px 100px 20px;
      padding: 30px;
      background-color: #fff;
      border-radius: 4px;
      box-shadow: rgb(200 200 200 / 50%) 0 0 10px;
      min-height: 500px;
      border: solid 1px #e6e6e6;
    "
  >
    <el-button
      @click="routeBack"
      type="success"
      style="display: inline-block; float: right"
      >Назад</el-button
    >
    <h3 style="margin-top: 5px">{{ $route.meta.title }}</h3>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "containerComponent",
  methods: {
    routeBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped></style>
