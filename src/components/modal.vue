<template>
  <section class="page-modal">
    <vb-button color="success" @click="click1">ShowModal</vb-button>
    <vb-button color="primary" @click="click2">ShowCardModal</vb-button>
    <vb-modal :visible.sync="visible" closeable>
      <div style="padding:50px; background:#fff;">Modal Content!!!</div>
    </vb-modal>

    <vb-modal-card title="title" :visible.sync="cardVisible">
      <p>
        清晨醒来，打开窗帘，一抹慵懒的阳光照进来，暖暖的，柔柔的，时光瞬间变得温婉静美，打开音乐，
        沏一杯花茶，躺在床上，暖阳淼淼，茶香淡淡，音乐袅袅，闭上眼睛，嘴角轻轻上扬，算是对着光阴的镜子，和自己撒个娇。
      </p>
      <p>
        时钟滴答滴答，一秒一秒的走着，毫无表情，不缓不急，过去了就是过去了，或许，有很多事情，
        我们会缅怀，会留恋，会铭刻，会珍藏，但那还是属于过去，还是被盖上了刻有&ldquo;曾经&rdquo;两字的印章，来不及细思量，来不及描绘，来不及逗留，转瞬即逝，洒下一地落英碎碎念，留下一串心语声声慢。生命只是时间中的一个停顿，一切的意义都只在它发生的那一时刻，如果可以，不要等！
      </p>
    </vb-modal-card>
  </section>
</template>

<script>
export default {
  name: 'page-modal',
  data() {
    return {
      visible: false,
      cardVisible: false
    };
  },
  methods: {
    click1() {
      this.visible = true;
    },
    click2() {
      this.cardVisible = true;
    }
  }
};
</script>
