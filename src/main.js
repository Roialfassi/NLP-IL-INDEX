import Vue from "vue";
import App from "./app.vue";
import router from "./router";
import "./bootstrap";
import JsonViewer from "vue-json-viewer";
import VueJsonPretty from 'vue-json-pretty';
import 'vue-json-pretty/lib/styles.css';

Vue.config.productionTip = false;
Vue.use(JsonViewer);
Vue.use(VueJsonPretty);
Vue.component('VueJsonPretty', VueJsonPretty);
new Vue({
  router,
  render: function(h) {
    return h(App);
  }
}).$mount("#app");

