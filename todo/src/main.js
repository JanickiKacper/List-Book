import Vue from "vue";
import Vuex from "vuex";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;
new Vue({
  axios,
  Vuex,
  router,
  vuetify,
  store,
  render: (h) => h(App),
}).$mount("#app");
