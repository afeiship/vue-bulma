<template>
  <a
    :href="href"
    class="dropdown-item"
    :class="[{ 'is-active': active }]"
    @click="click"
  >
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: 'vb-dropdown-item',
  props: {
    href: String,
    active: Boolean
  },
  methods: {
    click(inEvent) {
      this.$emit('click', inEvent);
    }
  }
};
</script>
