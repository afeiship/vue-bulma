<template>
  <section class="page-box">
    <vb-tabs :activeIndex.sync="activeIndex">
      <vb-tab title="tab1">Content1</vb-tab>
      <vb-tab title="tab2">Content2</vb-tab>
    </vb-tabs>
  </section>
</template>

<script>
export default {
  name: 'page-tabs',
  data() {
    return {
      activeIndex: 0
    };
  }
};
</script>
