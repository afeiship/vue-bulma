import Button from './button';
import Columns from './columns';
import Column from './column';
import Box from './box';
import Content from './content';
import Delete from './delete';
import Notification from './notification';
import Progress from './progress';
import Table from './table';
import Tag from './tag';
import Tags from './tags';
import Title from './title';
import Subtitle from './subtitle';

const components = {
  Button,
  Columns,
  Column,
  Box,
  Content,
  Delete,
  Notification,
  Progress,
  Table,
  Tag,
  Tags,
  Title,
  Subtitle
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
