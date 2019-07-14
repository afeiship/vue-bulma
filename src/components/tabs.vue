<template>
  <section class="page-box">
    <vb-tabs :items="items" />
  </section>
</template>

<script>
export default {
  name: 'page-tabs',
  data() {
    return {
      items: ['Music', 'Video', 'News']
    };
  }
};
</script>
