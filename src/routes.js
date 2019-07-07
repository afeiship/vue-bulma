const components = [
  'button',
  'columns',
  'box',
  'content',
  'delete',
  'notification',
  'progress',
  'table',
  'tag',
  'title',
  'subtitle',
  'breadcrumb',
  'image',
  'card'
];

export default components.map((item) => {
  return {
    path: `/${item}`,
    component: require(`./components/${item}`).default
  };
});
