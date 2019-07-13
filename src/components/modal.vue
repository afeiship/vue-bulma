<template>
  <section class="page-modal">
    <vb-button @click="click1">ShowModal</vb-button>
    <vb-modal :visible.sync="visible">
      Modal Content!!!
    </vb-modal>
  </section>
</template>

<script>
export default {
  name: 'page-modal',
  data() {
    return {
      visible: false
    };
  },
  methods: {
    click1() {
      this.visible = true;
    },
    click2() {
      this.visible = false;
    }
  }
};
</script>
