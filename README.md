# vue-bulma
> Bulma for vue.

## develop
- http://localhost:8080/

## resources
- https://juejin.im/post/5afcd516f265da0b9e65414b

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
