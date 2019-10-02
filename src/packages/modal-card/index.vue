<template>
  <vb-modal :visible.sync="visible">
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">{{ title }}</p>
        <button class="delete" aria-label="close" @click="close"></button>
      </header>
      <section class="modal-card-body">
        <slot></slot>
      </section>
      <footer class="modal-card-foot">
        <button class="button is-success">Save changes</button>
        <button class="button">Cancel</button>
      </footer>
    </div>
  </vb-modal>
</template>

<script>
export default {
  name: 'vb-modal-card',
  props: {
    visible: {
      type: Boolean,
      default: false,
      required: true
    },
    title: String
  },
  methods: {
    close() {
      this.$emit('update:visible', false);
    }
  }
};
</script>
