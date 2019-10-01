// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import 'bulma/css/bulma.css';
import './bootstrap';
import App from './App';
import routes from './routes';
import vueBulma from '../packages/index';
import component from '../packages/component.json';
const router = new VueRouter({ routes });

Vue.use(vueBulma);
Vue.use(VueRouter);
Vue.config.productionTip = false;
Vue.mixin({
  data() {
    return {
      components: component.navs
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
