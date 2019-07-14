<template>
  <section class="page-box">
    <vb-tabs :items="items" :activeIndex.sync="activeIndex" />
  </section>
</template>

<script>
export default {
  name: 'page-tabs',
  data() {
    return {
      activeIndex: 0,
      items: ['Music', 'Video', 'News']
    };
  }
};
</script>
