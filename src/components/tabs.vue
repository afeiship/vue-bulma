<template>
  <section class="page-box">
    <vb-tabs :items="itemsWithIcon" :activeIndex.sync="activeIndex" />
    <vb-tabs :items="items" :activeIndex.sync="activeIndex" />
    <vb-tabs :items="items" styled="boxed" :activeIndex.sync="activeIndex" />
    <vb-tabs
      :items="items"
      styled="toggle"
      fullwidth
      :activeIndex.sync="activeIndex"
    />
    <vb-tabs
      :items="items"
      styled="toggle-rounded"
      fullwidth
      :activeIndex.sync="activeIndex"
    />
  </section>
</template>

<script>
export default {
  name: 'page-tabs',
  data() {
    return {
      activeIndex: 0,
      items: ['Music', 'Video', 'News'],
      itemsWithIcon: [
        {
          text: 'Music',
          icon: 'ion ion-ios-alert'
        },
        {
          text: 'Video',
          icon: 'ion ion-ios-clock'
        }
      ]
    };
  }
};
</script>
