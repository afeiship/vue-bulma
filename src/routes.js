import component from '../packages/component.json';
export default component.navs.map((item) => {
  return {
    path: `/${item}`,
    component: require(`./components/${item}`).default
  };
});
