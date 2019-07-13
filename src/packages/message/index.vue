<template>
  <article
    class="message"
    :class="[color ? 'is-' + color : '', size ? 'is-' + size : '']"
  >
    <slot></slot>
  </article>
</template>

<script>
export default {
  name: 'vb-message',
  props: {
    color: String,
    size: String
  }
};
</script>
