<template>
  <section class="page-box">
    <vb-panel>
      <vb-panel-heading>repositories</vb-panel-heading>
      <vb-panel-tabs
        :items="items"
        :activeIndex.sync="activeIndex"
      ></vb-panel-tabs>
      <vb-panel-block>
        <vb-panel-icon iconClass="ion ion-ios-alert" />
        清晨醒来，打开窗帘，一抹慵懒的阳光照进来，暖暖的，柔柔的，时光瞬间变得温婉静美，打开音乐，
        沏一杯花茶，躺在床上，暖阳淼淼，茶香淡淡，音乐袅袅，闭上眼睛，嘴角轻轻上扬，算是对着光阴的镜子，和自己撒个娇。
      </vb-panel-block>
    </vb-panel>
  </section>
</template>

<script>
export default {
  name: 'page-box',
  data() {
    return {
      activeIndex: 0,
      items: ['all', 'public', 'private']
    };
  }
};
</script>
