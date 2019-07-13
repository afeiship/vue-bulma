<template>
  <div class="modal-card">
    <header class="modal-card-head">
      <header class="modal-card-head">
        <p class="modal-card-title">{{ title }}</p>
        <button class="delete" aria-label="close" @click="onClose"></button>
      </header>
    </header>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'vb-modal-card',
  props: {
    active: Boolean,
    title: String
  },
  methods: {
    onClose() {
      this.active = false;
    }
  }
};
</script>
