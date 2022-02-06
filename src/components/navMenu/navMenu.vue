<template>
  <div>
    <div style="min-height: inherit">
      <el-container style="min-height: inherit">
        <side-bar style="min-height: 100%"></side-bar>
        <el-container>
          <el-row style="width: 100%">
            <el-menu
              style="border-right: solid 1px #2c3e50"
              default-active="/"
              class="el-menu-demo"
              mode="horizontal"
              :router="true"
            >
              <el-menu-item @click="collapsed" id="step1">
                <el-button
                  style="padding: 7px 7px"
                  size="mini"
                  type="primary"
                  v-if="isCollapse"
                >
                  <i
                    style="color: white; margin: 0"
                    class="el-icon-s-unfold"
                  ></i>
                </el-button>

                <el-button
                  style="padding: 7px 7px"
                  size="mini"
                  type="primary"
                  v-if="!isCollapse"
                >
                  <i style="color: white; margin: 0" class="el-icon-s-fold"></i>
                </el-button>
              </el-menu-item>
              <el-menu-item @click="showLoginForm" style="float: right"
                >Войти</el-menu-item
              >
            </el-menu>
            <slot></slot>
            <div
              class="footer"
              style="
                text-align: center;
                position: absolute;
                bottom: 0;
                width: 100%;
                padding-bottom: 5px;
                color: #808080;
              "
            >
              <p style="text-align: center">&#169; 2022<br /></p>
            </div>
          </el-row>
        </el-container>
      </el-container>
    </div>
  </div>
</template>

<script>
import SideBar from "@/components/sideBar/sideBar";
import { mapGetters } from "vuex";
export default {
  name: "navMenu",
  components: { SideBar },

  computed: {
    ...mapGetters({
      isCollapse: "GETSIDEBARSTATUS",
    }),
  },

  methods: {
    collapsed() {
      this.$store.commit("setCollapse");
    },

    showLoginForm() {
      this.$store.dispatch("setShowModal", {
        title: "Вход",
        modalType: "showLoginModal",
        width: "35%",
      });
    },
  },
};
</script>

<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 330px;
  min-height: 400px;
}

.el-menu-item is-active {
  color: #ffd53e;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
