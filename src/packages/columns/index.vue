<template>
  <div
    class="columns"
    :class="[
      gap ? `is-variable is-${gap}` : '',
      {
        'is-gapless': gapless,
        'is-desktop': desktop,
        'is-mobile': mobile
      }
    ]"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'vb-columns',
  props: {
    gap: Number,
    gapless: Boolean,
    desktop: Boolean,
    mobile: Boolean
  }
};
</script>
