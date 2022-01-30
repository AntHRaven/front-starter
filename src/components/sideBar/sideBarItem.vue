<template>
  <div>
    <div v-if="item.children !== undefined">
      <el-submenu
        :index="index.toLocaleString()"
        v-if="item.hidden === undefined || item.hidden === false"
      >
        <template slot="title">
          <i :class="item.meta.icon"></i>
          <span slot="title" v-if="!isCollapse">{{ item.meta.title }}</span>
        </template>

        <template v-for="(menuItem, id) in item.children">
          <el-menu-item
            v-if="menuItem.hidden === undefined || menuItem.hidden === false"
            :key="id"
            :index="item.path + '/' + menuItem.path"
            >{{ menuItem.meta.title }}</el-menu-item
          >
        </template>
      </el-submenu>
    </div>
    <div v-else>
      <el-menu-item :index="item.path" @click="login">
        <i :class="item.meta.icon"></i>
        <span slot="title">{{ item.meta.title }}</span>
      </el-menu-item>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "sideBarItem",
  props: ["item", "index", "icon"],
  data() {
    return {};
  },
  methods: {
    login() {
      this.$emit("login");
    },
  },
  computed: {
    ...mapGetters({
      isCollapse: "GETSIDEBARSTATUS",
    }),
  },
  mounted() {},
};
</script>

<style>
.el-tooltip__popper,
.is-dark {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
.el-menu-item {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
.el-submenu__title .el-icon-arrow-right:before {
  content: "" !important;
}
</style>
