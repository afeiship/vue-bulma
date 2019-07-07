import component from './packages/component.json';
export default component.items.map((item) => {
  return {
    path: `/${item}`,
    component: require(`./components/${item}`).default
  };
});
