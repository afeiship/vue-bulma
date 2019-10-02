<template>
  <div
    class="dropdown"
    :class="[
      {
        'is-active': active,
        'is-right': aligned,
        'is-up': dropup
      }
    ]"
  >
    <div class="dropdown-trigger">
      <slot name="trigger"></slot>
    </div>
    <div class="dropdown-menu" role="menu">
      <div class="dropdown-content">
        <slot name="menu"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vb-dropdown',
  props: {
    active: Boolean,
    aligned: Boolean,
    dropup: Boolean
  },
  mounted() {
    document.addEventListener('click', this.blankClick);
  },
  destroyed() {
    document.removeEventListener('click', this.blankClick);
  },
  methods: {
    blankClick(inEvent) {
      const el = this.$el;
      if (!el.contains(inEvent.target)) {
        this.$emit('update:active', false);
      }
    }
  }
};
</script>
