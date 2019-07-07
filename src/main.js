// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import 'bulma';
import './bootstrap';
import App from './App';
import vueBulma from './packages/index';
import routes from './routes';
import component from './packages/component.json';
const router = new VueRouter({ routes });

Vue.use(vueBulma);
Vue.use(VueRouter);
Vue.config.productionTip = false;
Vue.mixin({
  data() {
    return {
      components: component.items
    };
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
