import Progress from './index.vue';
Progress.install = function(Vue) {
  Vue.component(Progress.name, Progress);
};
export default Progress;
