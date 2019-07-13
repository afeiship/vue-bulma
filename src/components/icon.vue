<template>
  <section class="page-box">
    <vb-box>
      <vb-icon v-for="item in icons" :key="item">
        <i class="ion" :class="[`ion-ios-${item}`]" />
      </vb-icon>
    </vb-box>
  </section>
</template>

<script>
export default {
  name: 'page-box',
  data() {
    return {
      icons: [
        'alarm',
        'aperture',
        'archive',
        'appstore',
        'planet',
        'play',
        'pint',
        'pricetags'
      ]
    };
  }
};
</script>
