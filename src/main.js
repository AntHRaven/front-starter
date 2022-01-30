import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import localeUI from "element-ui/lib/locale";
import defaultLang from "element-ui/lib/locale/lang/ru-RU";
import "element-ui/lib/theme-chalk/index.css";

Vue.use(ElementUI);
localeUI.use(defaultLang);
Vue.config.productionTip = false;
document.title = "Путевые листы";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
