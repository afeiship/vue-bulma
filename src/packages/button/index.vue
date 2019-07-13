<template>
  <button
    @click="_click"
    class="button"
    :disabled="disabled"
    :class="[
      color ? 'is-' + color : '',
      size ? 'is-' + size : '',
      {
        'is-loading': loading
      }
    ]"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'vb-button',
  props: {
    color: String,
    size: String,
    disabled: Boolean,
    loading: Boolean
  },
  methods: {
    _click(inEvent) {
      this.$emit('click', inEvent);
    }
  }
};
</script>
