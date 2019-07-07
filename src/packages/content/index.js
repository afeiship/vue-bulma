import Content from './index.vue';
Content.install = function(Vue) {
  Vue.component(Content.name, Content);
};
export default Content;
