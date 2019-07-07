import Button from './button';
import Columns from './columns';
import Column from './column';
import Box from './box';

const components = {
  Button,
  Columns,
  Column,
  Box
};

const install = function(Vue) {
  if (install.installed) return;
  // components.map(component => Vue.component(component.name, component))
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
