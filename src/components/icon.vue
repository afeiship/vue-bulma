<template>
  <section class="page-box">
    <vb-box>
      <vb-icon color="success" size="small">
        <i class="ion ion-ios-alarm" />
      </vb-icon>

      <vb-icon color="primary" size="small">
        <i class="ion ion-ios-aperture" />
      </vb-icon>
    </vb-box>
  </section>
</template>

<script>
export default {
  name: 'page-box',
  data(){
    return {
      icons:[
        'alarm',
        'aperture',
        'archive',
        'appstore',
        'planet',
        'play',
        'pint',
        'pricetags',
      ]
    }
  }
};
</script>
