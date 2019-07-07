<template>
  <section class="page-breadcrumb">
    <h1>breadcrumb</h1>
    <vb-breadcrumb :items="items" />
    <h1>breadcrumb - centered</h1>
    <vb-breadcrumb :items="items" centered />
    <h1>breadcrumb - right</h1>
    <vb-breadcrumb :items="items" right />
  </section>
</template>

<script>
export default {
  name: 'page-box',
  data() {
    return {
      items: [
        {
          label: 'Nav1'
        },
        {
          label: 'Nav2'
        },
        {
          active: true,
          label: 'Nav3'
        }
      ]
    };
  }
};
</script>
