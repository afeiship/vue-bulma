<template>
  <progress
    class="progress"
    :value="value"
    :max="max"
    :class="[color ? 'is-' + color : '', size ? 'is-' + size : '']"
  >
    {{ value }} %
  </progress>
</template>

<script>
export default {
  name: 'vb-progress',
  props: {
    color: String,
    size: String,
    value: String,
    max: String
  }
};
</script>
