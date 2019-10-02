<template>
  <table
    class="table"
    :class="[
      {
        'is-bordered': bordered,
        'is-striped': striped,
        'is-narrow': narrow,
        'is-hoverable': hoverable,
        'is-fullwidth': fullwidth
      }
    ]"
  >
    <slot></slot>
  </table>
</template>

<script>
export default {
  name: 'vb-table',
  props: {
    bordered: Boolean,
    striped: Boolean,
    narrow: Boolean,
    hoverable: Boolean,
    fullwidth: Boolean
  }
};
</script>
