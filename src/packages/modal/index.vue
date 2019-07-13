<template>
  <div class="modal" :class="[{ 'is-active': visible }]">
    <vb-modal-background />
    <vb-modal-close v-if="closeable" @click="close" />
    <vb-modal-content>
      <slot></slot>
    </vb-modal-content>
  </div>
</template>

<script>
export default {
  name: 'vb-modal',
  props: {
    visible: {
      type: Boolean,
      default: false,
      required: true
    },
    closeable: Boolean
  },
  methods: {
    close() {
      this.$emit('update:visible', false);
    }
  }
};
</script>
