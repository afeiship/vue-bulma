const fs = require('fs');
const globby = require('globby');

// next packages:
require('next-without');

const dirs = globby.sync(['./src/packages/*/index.js']);
const components = [];
const ignores = ['tags', 'column'];
dirs.forEach((item) => {
  const _item = item.slice(15, -9);
  if (!ignores.includes(_item)) {
    components.push(_item);
  }
});

// create new compoentn.json
fs.writeFileSync(
  './src/packages/component.json',
  JSON.stringify(
    {
      items: components
    },
    null,
    2
  )
);
