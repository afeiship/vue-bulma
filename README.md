# vue-bulma
> Bulma for vue.

## develop
- http://localhost:8080/
- https://afeiship.github.io/vue-bulma/

## resources
- https://juejin.im/post/5afcd516f265da0b9e65414b
- https://github.com/chenz24/vue-blu
- https://github.com/vue-bulma/vue-bulma
- https://codepen.io/tatimblin/pen/oWKdjR
- https://github.com/spatie/vue-tabs-component

## one-of for vue
```js
props: {
  position: {
    type: String,
    validator (val) {
      return ['top', 'right', 'bottom', 'left'].includes(val)
    }
  }
}

// short of:
const oneOf = (values) => (str) => values.indexOf(str) !== -1;

props: {
  position: {
    type: String,
    validator: oneOf(['top', 'right', 'bottom', 'left'])
  }
}
```
