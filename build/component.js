const fs = require('fs');
const globby = require('globby');

// next packages:
require('next-without');

const dirs = globby.sync(['./src/packages/*/index.js']);
const manifest = {
  components: [],
  navs: [],
  exports: {}
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
  'message-header',
  'message-body',
  'media-left',
  'media-content',
  'modal-background',
  'modal-card',
  'modal-close',
  'modal-content',
  'panel-block',
  'panel-heading',
  'panel-tabs',
  'panel-icon',
  'tab',
];
dirs.forEach((item) => {
  const _item = item.slice(15, -9);
  if (!ignores.includes(_item)) {
    manifest.navs.push(_item);
  }
  manifest.components.push(_item);
  manifest.exports[_item] = `./packages/${_item}/index.js`;
});

// create new compoentn.json
fs.writeFileSync(
  './src/packages/component.json',
  JSON.stringify(manifest, null, 2)
);

fs.writeFileSync('./components.json', JSON.stringify(manifest.exports, null, 2));

// root components.json
