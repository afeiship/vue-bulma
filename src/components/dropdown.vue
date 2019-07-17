<template>
  <section class="page-box">
    <vb-dropdown :active.sync="menuActive">
      <vb-button slot="trigger" color="primary" @click="_menuClick"
        >ShowDropdown</vb-button
      >
      <template slot="menu">
        <vb-dropdown-item>menu1</vb-dropdown-item>
        <vb-dropdown-item>menu2</vb-dropdown-item>
        <vb-dropdown-divider />
        <vb-dropdown-item>OtherMeue</vb-dropdown-item>
      </template>
    </vb-dropdown>
  </section>
</template>

<script>
export default {
  name: 'page-box',
  data() {
    return {
      menuActive: false
    };
  },
  methods: {
    _menuClick() {
      this.menuActive = true;
    }
  }
};
</script>
