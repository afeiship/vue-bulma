<template>
  <section class="page-card">
    <h1>Card</h1>
    <div class="cont">
      <vb-card>
        <vb-card-header>
          <vb-card-header-title>This is card title</vb-card-header-title>
        </vb-card-header>
        <vb-card-image>
          <vb-image
            ratio="4:3"
            src="https://bulma.io/images/placeholders/1280x960.png"
          ></vb-image>
        </vb-card-image>
        <vb-card-content>
          <div class="media">
            <div class="media-left">
              <figure class="image is-48x48">
                <img
                  src="https://bulma.io/images/placeholders/96x96.png"
                  alt="Placeholder image"
                />
              </figure>
            </div>
            <div class="media-content">
              <p class="title is-4">John Smith</p>
              <p class="subtitle is-6">@johnsmith</p>
            </div>
          </div>

          <p>
            清晨醒来，打开窗帘，一抹慵懒的阳光照进来，暖暖的，柔柔的，时光瞬间变得温婉静美，打开音乐，
            沏一杯花茶，躺在床上，暖阳淼淼，茶香淡淡，音乐袅袅，闭上眼睛，嘴角轻轻上扬，算是对着光阴的镜子，和自己撒个娇。
          </p>
          <p>
            时钟滴答滴答，一秒一秒的走着，毫无表情，不缓不急，过去了就是过去了，或许，有很多事情，
            我们会缅怀，会留恋，会铭刻，会珍藏，但那还是属于过去，还是被盖上了刻有&ldquo;曾经&rdquo;两字的印章，来不及细思量，来不及描绘，来不及逗留，转瞬即逝，洒下一地落英碎碎念，留下一串心语声声慢。生命只是时间中的一个停顿，一切的意义都只在它发生的那一时刻，如果可以，不要等！
          </p>
          <p>
            人生没有预定的轨迹，一切都在不确定中前行，你根本就无法预知明天会是什么样，好想把日子过成诗，爱为主题，幸福为背景，思考为主线，微笑为韵脚，日月星辰，花草树木，雨霜雪露为载体，经历和感受为表达方式，想象和幻想为延伸，时光温婉，岁月静好，让生活充满美妙旋律
            。至于生活中出现的一切不爽就让沉默来掩埋，让雨雪去消融，不论怎样，都不能让灵魂发出惨淡苍白的声音，哪怕是孤独轻影茕茕孑立
            ，也要播一曲梵音，在柔和典雅，清澈湛寂，明净清幽的音乐中，把寂寥坐穿，把浑浊驱散，在心间开出一朵莲。
          </p>
        </vb-card-content>
        <vb-card-footer>
          <vb-card-footer-item>Save</vb-card-footer-item>
          <vb-card-footer-item>Edit</vb-card-footer-item>
          <vb-card-footer-item>Delete</vb-card-footer-item>
        </vb-card-footer>
      </vb-card>
    </div>
  </section>
</template>

<script>
export default {
  name: 'page-card'
};
</script>

<style lang="scss">
.cont {
  width: 500px;
  margin: 0 auto;
}
</style>
