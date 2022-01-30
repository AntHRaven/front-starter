import Vue from "vue";
import Vuex from "vuex";
import modal from "@/store/modules/modal";
import sideBar from "@/store/modules/sideBar";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  getters: {},
  modules: {
    modal,
    sideBar,
  },
});
