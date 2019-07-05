<template>
  <div class="column" :class="[grid ? `is-${grid}` : '', size ? theSize : '']">
    <slot></slot>
  </div>
</template>

<script>
const SIZE_MAP = {
  '1/1': 'is-full',
  '1/2': 'is-half',
  '1/3': 'is-one-third',
  '1/4': 'is-one-quarter',
  '1/5': 'is-one-fifths',
  '2/3': 'is-two-thirds',
  '2/5': 'is-two-fifths',
  '3/4': 'is-three-quarters',
  '3/5': 'is-three-fifths',
  '4/5': 'is-four-fifths'
};

export default {
  name: 'vb-column',
  props: {
    grid: {
      type: Number,
      default: 0
    },
    size: {
      type: String,
      default: ''
    }
  },
  computed: {
    theSize() {
      return SIZE_MAP[this.size];
    }
  }
};
</script>
