<template>
  <button
    @click="_click"
    class="button vb-button"
    :disabled="disabled"
    :class="[
      color ? 'is-' + color : '',
      {
        'is-loading': loading
      }
    ]"
  >
    <slot></slot>
  </button>
</template>

<script>
// @thanks to: https://github.com/ElemeFE/element/blob/dev/packages/button/src/button.vue
export default {
  name: 'vb-button',
  props: {
    color: {
      type: String,
      default: ''
    },
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
