<template>
  <section class="page-breadcrumb">
    <vb-breadcrumb :items="items" />
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
