import router from "@/router";
import Cookies from "js-cookie";

const state = {
  routes: router.options.routes,
  sideBarOpened: !+Cookies.get("sideBarStatus"),
};

const actions = {};

const mutations = {
  setCollapse: (state) => {
    if (state.sideBarOpened) {
      Cookies.set("sideBarStatus", 1, { expires: 7 });
    } else {
      Cookies.set("sideBarStatus", 0, { expires: 7 });
    }
    state.sideBarOpened = !state.sideBarOpened;
  },
};

const getters = {
  GETSIDEBARSTATUS: (state) => state.sideBarOpened,
  GETROUTES: (state) => state.routes,
};

export default {
  state,
  actions,
  mutations,
  getters,
};
