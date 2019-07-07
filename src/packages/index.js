import component from '../packages/component.json';
const components = {};

component.items.forEach((item) => {
  components[nx.capitalize(item)] = require(`./${item}`).default;
});

const install = function(Vue) {
  if (install.installed) return;
  Object.keys(components).forEach((key) => {
    Vue.component(components[key].name, components[key]);
  });
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  ...components
};
