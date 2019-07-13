const fs = require('fs');
const globby = require('globby');

// next packages:
require('next-without');

const dirs = globby.sync(['./src/packages/*/index.js']);
const manifest = {
  components: [],
  navs: []
};
const ignores = [
  'tags',
  'column',
  'card-content',
  'card-footer',
  'card-image',
  'card-footer-item',
  'card-header',
  'card-header-title',
  'menu-label',
  'menu-list',
];
dirs.forEach((item) => {
  const _item = item.slice(15, -9);
  if (!ignores.includes(_item)) {
    manifest.navs.push(_item);
  }
  manifest.components.push(_item);
});

// create new compoentn.json
fs.writeFileSync(
  './src/packages/component.json',
  JSON.stringify(manifest, null, 2)
);
