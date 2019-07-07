<template>
  <nav
    class="breadcrumb"
    aria-label="breadcrumbs"
    v-if="items.length"
    :class="[
      size ? `is-${size}` : '',
      separator ? `has-${separator}separator` : '',
      {
        'is-centered': centered,
        'is-right': right
      }
    ]"
  >
    <ul>
      <li
        v-for="item in items"
        :key="item.href"
        :class="[{ 'is-acitve': item.active }]"
      >
        <a :href="item.href || 'javascript:;'">{{ item.label }}</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'vb-breadcrumb',
  props: {
    items: {
      type: Array,
      required: true
    },
    size: String,
    separator: String,
    centered: Boolean,
    right: Boolean
  }
};
</script>
