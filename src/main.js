import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "./assets/tailwind.css";
import VueResource from 'vue-resource';
Vue.use(VueResource)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  VueResource,
  render: function(h) {
    return h(App);
  }
}).$mount("#app");
