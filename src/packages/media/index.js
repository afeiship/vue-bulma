import Media from './index.vue';
Media.install = function(Vue) {
  Vue.component(Media.name, Media);
};
export default Media;
