<template>
  <figure
    class="image"
    :class="[
      dimension ? `is-${dimension}x${dimension}` : '',
      ratio ? `is-${theRatio}` : ''
    ]"
  >
    <img :src="src" :class="[{ 'is-rounded': rounded }]" />
  </figure>
</template>

<script>
const RATIO_MAP = {
  '1:1': '1by1',
  '5:4': '5by4',
  '4:3': '4by3',
  '3:2': '3by2',
  '5:3': '5by3',
  '16:9': '16by9',
  '2:1': '2by1',
  '3:1': '3by1',
  '4:5': '4by5',
  '3:4': '3by4',
  '2:3': '2by3',
  '3:5': '3by5',
  '9:16': '9by16',
  '1:2': '1by2',
  '1:3': '1by3'
};
export default {
  name: 'vb-image',
  props: {
    src: String,
    dimension: String,
    ratio: String,
    rounded: Boolean
  },
  computed: {
    theRatio() {
      return RATIO_MAP[this.ratio];
    }
  }
};
</script>
