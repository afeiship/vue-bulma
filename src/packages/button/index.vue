<template>
  <button
    @click="click"
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
    click(inEvent) {
      this.$emit('click', inEvent);
    }
  }
};
</script>
