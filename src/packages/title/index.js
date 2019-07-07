import Vue from 'vue';

export default Vue.component('vb-title', {
  render: function(createElement) {
    return createElement(
      'h' + this.level,
      {
        class: ['title', 'is-' + this.level]
      },
      this.$slots.default
    );
  },
  props: {
    level: {
      type: Number,
      required: true
    }
  }
});
