<template>
  <div style="min-height: inherit">
    <el-menu
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      :router="useRouter"
      active-text-color="#FFD53E"
      style="
        min-height: 100vh;
        text-align: left;
        box-shadow: rgba(200, 200, 200, 0.5) 0px 0px 10px;
      "
    >
      <side-bar-item
        @login="login"
        v-for="(route, index) in routes"
        :key="index"
        :item="route"
        :index="index"
      ></side-bar-item>
    </el-menu>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import SideBarItem from "@/components/sideBar/sideBarItem";

export default {
  name: "sideBar",
  components: { SideBarItem },
  data() {
    return {
      useRouter: true,
    };
  },

  computed: {
    ...mapGetters({
      routes: "GETROUTES",
      isCollapse: "GETSIDEBARSTATUS",
    }),
  },

  methods: {
    login() {
      this.$emit("login");
    },
  },
};
</script>

<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 330px;
}
</style>
