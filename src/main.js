import Vue from 'vue';
import bootstrap from 'bootstrap';
import { bootstrapVue, IconsPlugins } from 'bootstrap-vue';
import './scss/main.scss';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

const EventBus = new Vue();
export default EventBus;

Vue.component(bootstrap);
Vue.component(bootstrapVue);
Vue.component(IconsPlugins);
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
