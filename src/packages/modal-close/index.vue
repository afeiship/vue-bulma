<template>
  <button
    class="modal-close"
    :class="[size ? 'is-' + size : '']"
    aria-label="close"
    @click="click"
  />
</template>

<script>
export default {
  name: 'vb-modal-close',
  props: {
    size: String
  },
  methods: {
    click(inEvent) {
      this.$emit('click', inEvent);
    }
  }
};
</script>
